import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import portraitImg from '../assets/faheem-portrait.webp';
import { projectsData } from '../data/projectsData';
import blogsData from '../data/blogsData.json';

const GEMINI_QUICK_PROMPTS = [
    { label: "List Faheem's core design expertise", query: "List Faheem's core design expertise" },
    { label: "Compare Product Design and Development roles", query: "Compare Product Design and Development roles" },
    { label: "Explain Faheem's professional background", query: "Explain Faheem's professional background" },
];

const BASE_QUICK_PROMPTS = [
    ...GEMINI_QUICK_PROMPTS,
    { label: "Download Resume", query: "Can I download your resume?" },
    { label: "How to contact?", query: "How can I contact or hire Faheem?" },
];

const getCurrentProject = (pathname) => {
    if (!pathname || !pathname.startsWith('/project/')) return null;
    const slug = pathname.replace('/project/', '').trim();
    return projectsData.find(p => p.slug === slug || p.id === slug) || null;
};

const isThisProjectQuery = (q) => {
    const keywords = ["this project", "about this", "tell me about this", "explain this", "what is this project", "what did faheem do here", "project details", "this case study", "about the project", "what is this"];
    return keywords.some(kw => q.includes(kw));
};

const detectSingleRelatedProject = (text, activeProject = null) => {
    if (!text) return null;
    const lower = text.toLowerCase().trim();

    // Do not show cards on plain greetings or thank-you acknowledgements
    if (
        lower.startsWith("hi there!") || lower.startsWith("hi!") || 
        lower.startsWith("hello") || lower.startsWith("you're welcome") ||
        lower.startsWith("great to meet you")
    ) {
        return null;
    }

    // 1. If currently on a project page and user/answer refers to it
    if (activeProject && (
        lower.includes("this project") || 
        lower.includes(activeProject.title.toLowerCase()) ||
        lower.includes(activeProject.slug.toLowerCase())
    )) {
        return activeProject;
    }

    // 2. Specific project matching (check title, slug, keywords)
    for (const p of projectsData) {
        const titleLower = p.title.toLowerCase();
        const slugLower = p.slug.toLowerCase();
        const clientLower = (p.client || '').toLowerCase();

        if (lower.includes(titleLower) || lower.includes(slugLower)) {
            return p;
        }
        if (slugLower === "olfacta" && (lower.includes("olfacta") || lower.includes("fragrance") || lower.includes("formulation") || lower.includes("chemical") || lower.includes("lab"))) {
            return p;
        }
        if (slugLower === "octalume-dashboard" && (lower.includes("octalume") || lower.includes("iot") || lower.includes("streetlight") || lower.includes("telemetry") || lower.includes("lighting"))) {
            return p;
        }
        if (slugLower === "ufbrand-salwar" && (lower.includes("uf brand") || lower.includes("salwar") || lower.includes("ethnic") || lower.includes("fashion") || lower.includes("ecommerce") || lower.includes("e-commerce"))) {
            return p;
        }
        if (slugLower === "multi-city-travel-planner" && (lower.includes("travel") || lower.includes("itinerary") || lower.includes("multi-city"))) {
            return p;
        }
        if (slugLower === "dashboard-design" && (lower.includes("console ui") || lower.includes("cloud console"))) {
            return p;
        }
        if (slugLower === "website-revamp" && (lower.includes("pickcel") || lower.includes("digital signage") || lower.includes("revamp"))) {
            return p;
        }
        if (slugLower === "thinkstack-core" && (lower.includes("thinkstack") || lower.includes("ai platform") || lower.includes("orchestration"))) {
            return p;
        }
        if (clientLower && clientLower.length > 3 && lower.includes(clientLower)) {
            return p;
        }
    }

    // 3. If query or answer relates to projects, work, design, portfolio, roles, or hiring, show flagship project
    const workKeywords = [
        "project", "work", "portfolio", "case study", "hire", "experience", "skill", 
        "design", "figma", "code", "react", "dashboard", "product designer", "platform", "process"
    ];
    if (workKeywords.some(kw => lower.includes(kw))) {
        return activeProject || projectsData.find(p => p.slug === "olfacta") || projectsData[0];
    }

    return null;
};

const buildProjectSummary = (project) => {
    const desc = project.description || project.solution?.text || project.result || '';
    const metric = project.result ? ` Key impact: ${project.result}` : '';
    const text = `**${project.title}** (${project.year}): ${desc}${metric}`;
    return { text };
};

const buildComprehensivePortfolioPrompt = (activeProject) => {
    const projectSummaries = projectsData.map((p, idx) => {
        const parts = [];
        parts.push(`### ${idx + 1}. ${p.title} (${p.year} · ${p.type || p.category || 'Product Design'}${p.client ? ` · Client: ${p.client}` : ''})`);
        if (p.liveWebsiteLink) parts.push(`- **Live App / Demo**: ${p.liveWebsiteLink}`);
        if (p.service) parts.push(`- **Scope**: ${p.service}`);
        if (p.description) parts.push(`- **Overview**: ${p.description}`);
        if (p.challenge?.text) parts.push(`- **Challenge**: ${p.challenge.text} ${p.challenge.subtext || ''}`);
        if (p.solution?.text) parts.push(`- **Solution**: ${p.solution.text} ${p.solution.subtext || ''}`);
        if (p.result) parts.push(`- **Business Impact & Metrics**: ${p.result}`);
        if (p.caseStudy?.goals) parts.push(`- **Goals**: ${p.caseStudy.goals.join('; ')}`);
        if (p.caseStudy?.solutions) parts.push(`- **Key Modules Built**: ${p.caseStudy.solutions.map(s => s.title).join('; ')}`);
        return parts.join('\n');
    }).join('\n\n');

    const blogSummaries = (Array.isArray(blogsData) ? blogsData.slice(0, 5) : []).map((b) => {
        return `- "${b.title}" (${b.date || ''}): ${b.category || 'Design & AI'}`;
    }).join('\n');

    let prompt = `You are Faheem AI, the intelligent portfolio assistant for Seyad Mohammed Faheem.
Faheem is a Mid-Level UI/UX & Product Designer with 3+ years of experience based in India.
You speak directly as Faheem's intelligent AI representative. You know his entire portfolio, all his 13 projects, design philosophy, case study metrics, technical skills, and hiring availability in depth.

CRITICAL SCOPE & GUARDRAILS:
You MUST ONLY answer questions directly related to Seyad Mohammed Faheem, his portfolio, design projects, background, resume, skills, experience, target locations, and contact details.
Do NOT answer general knowledge questions, world facts, coding tutorials, math problems, jokes, science, politics, or unrelated topics.
If a user asks an off-topic or general question, politely decline with:
"I am specifically trained to answer questions about Faheem, his product design work, case studies, and availability. Feel free to ask about his projects, skills, resume, or how to contact him."

Key Details about Faheem:
- **Status**: Actively open to Product Designer & UI/UX Designer roles and can join immediately (0 days notice).
- **Target Roles**: Product Designer, UI/UX Designer, Senior UI/UX Designer, Design Technologist.
- **Preferred Locations**: Bangalore, Chennai, MENA (Dubai, Abu Dhabi, Saudi Arabia, Qatar) or Global Remote. Fully open to relocation.
- **Direct Contact**: Phone/WhatsApp: +91 6379439162 | Email: faheemseyadmd@gmail.com | LinkedIn: linkedin.com/in/seyad-mohammed-faheem/
- **Superpower / Unique Edge**: Bridges design vision and frontend code execution. He writes production React, modern CSS, GSAP animations, and Three.js 3D canvas, ensuring zero translation loss during developer handoff.
- **Capabilities & Stack**:
  - *Product Design*: UX Research, Information Architecture, Wireframing, Figma (Auto-Layout 5.0, Variables, Design Tokens), Interactive Prototyping, Usability Testing.
  - *Frontend & Motion*: React.js, Vanilla CSS, GSAP, Lenis Smooth Scroll, Three.js, Vite, Git.
  - *AI-Paired Workflow*: AI Agent orchestration, Figma AI plugins, modern cursor/agentic design sprints.

COMPLETE PORTFOLIO PROJECTS (ALL 13 PROJECTS DESIGNED & DEVELOPED BY FAHEEM):
${projectSummaries}

WRITINGS & NOTION INSIGHTS:
${blogSummaries || 'Articles on UI/UX AI Agent workflows and design systems'}

Instructions:
CRITICAL ANSWER LENGTH & FORMAT RULES:
1. ALWAYS give SIMPLE, SHORT, and DIRECT answers: exactly 1 to 2 concise sentences (strictly under 35 words).
2. NEVER output long paragraphs, long lists, bullet point essays, or multi-step explanations.
3. An interactive showcase card for the related project will automatically be shown directly below your message bubble in the UI, so only provide the direct answer.
4. Speak with confidence, precision, and professional clarity. Do NOT use emojis.
5. NEVER type out raw email addresses or LinkedIn URLs in plain text; say "You can contact Faheem directly using the buttons below."
6. If the user asks for a resume or CV, mention that they can download the PDF directly using the download button in the chat.`;

    if (activeProject) {
        prompt += `\n\nCURRENT PAGE CONTEXT:
The user is currently viewing the case study for "${activeProject.title}".
- Description: ${activeProject.description || ''}
- Client: ${activeProject.client || 'N/A'}
- Challenge: ${activeProject.challenge?.text || ''} ${activeProject.challenge?.subtext || ''}
- Solution: ${activeProject.solution?.text || ''} ${activeProject.solution?.subtext || ''}
- Result: ${activeProject.result || ''}
If the user asks "tell me about this project", "explain this case study", or has questions about the current page, answer in 1 to 2 punchy sentences using this project data.`;
    }

    return prompt;
};

const SYSTEM_PROMPT = buildComprehensivePortfolioPrompt(null);

const FAHEEM_KNOWLEDGE_BASE = [
    {
        keywords: ["resume", "cv", "download resume", "faheem resume", "get resume", "resume pdf"],
        response: "Here is Faheem's official Product Designer resume (PDF). You can download it directly using the button below:",
        action: {
            type: "download",
            label: "Download Resume (PDF)",
            url: "/assets/Faheem - Product Designer Resume.pdf",
            filename: "Faheem - Product Designer Resume.pdf"
        }
    },
    {
        keywords: ["hi", "hello", "hey", "hola", "sup", "greetings", "good morning", "good evening", "good afternoon"],
        response: "Hi there! I'm Faheem's AI assistant. Ask me anything about his product design work, case studies, or hiring availability."
    },
    {
        keywords: ["thanks", "thank you", "bye", "goodbye", "cool", "awesome", "great"],
        response: "You're welcome! Feel free to connect with Faheem directly using the buttons below:",
        action: {
            type: "contact_ctas",
            primary: { label: "Send Email", url: "mailto:faheemseyadmd@gmail.com" },
            secondary: { label: "LinkedIn Profile", url: "https://www.linkedin.com/in/seyad-mohammed-faheem/" }
        }
    },
    {
        keywords: ["roles", "looking for", "job", "hiring", "hire", "position", "location", "locations", "open to work", "notice period"],
        response: "Faheem is actively open to Product Designer & UI/UX Designer roles across Bangalore, Chennai, MENA, or Remote, and can join immediately."
    },
    {
        keywords: ["projects", "project", "work", "portfolio", "featured", "octalume", "uf brand", "pickcel", "thinkstack", "multi-city", "olfacta"],
        response: "Faheem has designed 13 products, leading flagship work across Olfacta ERP, OctaLume IoT, and UF Brand."
    },
    {
        keywords: ["stack", "skills", "tools", "tech", "figma", "react", "design system", "coding", "agents"],
        response: "Faheem specializes in end-to-end product design, token-based Figma systems, and frontend execution with React, CSS, and GSAP."
    },
    {
        keywords: ["contact", "email", "phone", "whatsapp", "reach", "hire", "referral", "linkedin"],
        response: "Faheem is ready to connect. You can reach out directly via email or LinkedIn using the buttons below:",
        action: {
            type: "contact_ctas",
            primary: { label: "Send Email", url: "mailto:faheemseyadmd@gmail.com" },
            secondary: { label: "LinkedIn Profile", url: "https://www.linkedin.com/in/seyad-mohammed-faheem/" }
        }
    },
    {
        keywords: ["experience", "years", "background", "who are you", "about", "professional background"],
        response: "Faheem is a Product Designer with 3+ years of experience crafting complex enterprise SaaS, scalable design systems, and web applications."
    },
    {
        keywords: ["core design expertise", "design expertise", "expertise", "core expertise"],
        response: "Faheem's core expertise spans UX research, token-based Figma design systems, and frontend execution with React and GSAP."
    },
    {
        keywords: ["compare product design and development roles", "compare product design", "product design and development"],
        response: "Product design shapes UX strategy, workflows, and visual systems in Figma, while development executes them in production code — Faheem bridges both seamlessly."
    }
];

const renderFormattedText = (text) => {
    if (!text) return null;
    const lines = text.split('\n');
    return lines.map((line, lineIdx) => {
        if (!line.trim()) return <br key={lineIdx} />;

        const regex = /\[([^\]]+)\]\(([^)]+)\)|([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})|(https?:\/\/[^\s<]+)|(\*\*?[^*]+\*\*?)/gi;
        const parts = [];
        let lastIdx = 0;
        let match;

        const linkStyle = {
            color: '#ff4d12',
            textDecoration: 'underline',
            fontWeight: '600',
            wordBreak: 'break-all'
        };

        while ((match = regex.exec(line)) !== null) {
            if (match.index > lastIdx) {
                parts.push(line.substring(lastIdx, match.index));
            }

            if (match[1] && match[2]) {
                const isInternal = match[2].startsWith('/');
                parts.push(
                    <a
                        key={match.index}
                        href={match[2]}
                        target={isInternal ? "_self" : "_blank"}
                        rel={isInternal ? "" : "noopener noreferrer"}
                        className="chat-inline-link"
                        style={linkStyle}
                    >
                        {match[1]}
                    </a>
                );
            } else if (match[3]) {
                parts.push(
                    <a
                        key={match.index}
                        href={`mailto:${match[3]}`}
                        className="chat-inline-link"
                        style={linkStyle}
                    >
                        {match[3]}
                    </a>
                );
            } else if (match[4]) {
                parts.push(
                    <a
                        key={match.index}
                        href={match[4]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="chat-inline-link"
                        style={linkStyle}
                    >
                        {match[4]}
                    </a>
                );
            } else if (match[5]) {
                const content = match[5].replace(/^\*+|\*+$/g, '');
                parts.push(<strong key={match.index}>{content}</strong>);
            }

            lastIdx = regex.lastIndex;
        }

        if (lastIdx < line.length) {
            parts.push(line.substring(lastIdx));
        }

        return <p key={lineIdx}>{parts.length > 0 ? parts : line}</p>;
    });
};

const ChatProjectCard = ({ project, onNavigate }) => {
    return (
        <div 
            className="chat-project-card"
            onClick={() => onNavigate && onNavigate(`/project/${project.slug}`)}
        >
            <div className="chat-card-media">
                <img src={project.heroImage || project.image} alt={project.title} loading="lazy" />
                <span className="chat-card-tag">{project.type || project.category || "Case Study"}</span>
            </div>
            <div className="chat-card-content">
                <div className="chat-card-header">
                    <h5 className="chat-card-title">{project.title}</h5>
                    <span className="chat-card-year">{project.year}</span>
                </div>
                <p className="chat-card-desc">{project.description}</p>
                <div className="chat-card-action">
                    <span>View Case Study</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </div>
            </div>
        </div>
    );
};

const AnimatedMessageBubble = ({ text, action, isLatestBot, scrollToBottom, activeProject, onNavigate }) => {
    const lines = text.split('\n');
    const [visibleCount, setVisibleCount] = useState(isLatestBot ? 1 : lines.length);

    useEffect(() => {
        if (!isLatestBot || visibleCount >= lines.length) return;

        const timer = setTimeout(() => {
            setVisibleCount((prev) => prev + 1);
            if (scrollToBottom) scrollToBottom();
        }, 100);

        return () => clearTimeout(timer);
    }, [visibleCount, lines.length, isLatestBot, scrollToBottom]);

    const animatedText = lines.slice(0, visibleCount).join('\n');
    const isFullyRevealed = visibleCount >= lines.length;
    const relatedProject = isFullyRevealed && action?.type !== 'download' ? detectSingleRelatedProject(text, activeProject) : null;

    useEffect(() => {
        if (isFullyRevealed && scrollToBottom) {
            const scrollTimer = setTimeout(() => {
                scrollToBottom();
            }, 60);
            return () => clearTimeout(scrollTimer);
        }
    }, [isFullyRevealed, scrollToBottom]);

    return (
        <div className="bot-message-content">
            <div className="message-bubble">
                {renderFormattedText(animatedText)}
            </div>

            {isFullyRevealed && relatedProject && (
                <div className="chat-single-card-container">
                    <ChatProjectCard project={relatedProject} onNavigate={onNavigate} />
                </div>
            )}

            {isFullyRevealed && action?.type === 'download' && (
                <a
                    href={action.url}
                    download={action.filename}
                    className="chat-download-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    <span>{action.label}</span>
                </a>
            )}

            {isFullyRevealed && action?.type === 'contact_ctas' && (
                <div className="chat-cta-row">
                    <a
                        href={action.primary.url}
                        className="chat-cta-btn primary"
                        style={{ color: '#ffffff', textDecoration: 'none' }}
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                        <span style={{ color: '#ffffff', textDecoration: 'none' }}>{action.primary.label}</span>
                    </a>
                    <a
                        href={action.secondary.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="chat-cta-btn secondary"
                        style={{ color: '#ffffff', textDecoration: 'none' }}
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                        <span style={{ color: '#ffffff', textDecoration: 'none' }}>{action.secondary.label}</span>
                    </a>
                </div>
            )}
        </div>
    );
};

const findBestAnswer = (userQuery, activeProject) => {
    const q = userQuery.toLowerCase().trim();

    // 1. Resume / CV Query
    if (q.includes("resume") || q.includes("cv") || q.includes("curriculum vitae") || q.includes("download resume")) {
        return {
            text: "Here is Faheem's official Product Designer resume (PDF). You can download it directly below:",
            action: {
                type: "download",
                label: "Download Resume (PDF)",
                url: "/assets/Faheem - Product Designer Resume.pdf",
                filename: "Faheem - Product Designer Resume.pdf"
            }
        };
    }

    // 2. Contact / Hiring / Availability / Phone / WhatsApp
    if (
        q.includes("contact") || q.includes("email") || q.includes("hire") || q.includes("reach") || 
        q.includes("phone") || q.includes("whatsapp") || q.includes("interview") || q.includes("schedule") ||
        q.includes("call") || q.includes("touch") || q.includes("message") || q.includes("get in touch")
    ) {
        return {
            text: "Faheem is actively open to Product Designer & UI/UX Designer roles and can join immediately. You can reach out directly via email or LinkedIn below:",
            action: {
                type: "contact_ctas",
                primary: { label: "Send Email", url: "mailto:faheemseyadmd@gmail.com" },
                secondary: { label: "LinkedIn Profile", url: "https://www.linkedin.com/in/seyad-mohammed-faheem/" }
            }
        };
    }

    // 3. Why Hire Faheem / Value Proposition / Strengths
    if (
        q.includes("why hire") || q.includes("why should") || q.includes("hire faheem") || 
        q.includes("stand out") || q.includes("strengths") || q.includes("strength") || 
        q.includes("value") || q.includes("best fit") || q.includes("why choose") ||
        q.includes("superpower") || q.includes("unique")
    ) {
        return {
            text: "Faheem bridges design and production code, crafting complex enterprise platforms in Figma while shipping clean React, GSAP, and design systems with measurable business impact."
        };
    }

    // 4. Design Process / Methodology / Approach
    if (
        q.includes("process") || q.includes("methodology") || q.includes("workflow") || 
        q.includes("how do you design") || q.includes("approach") || q.includes("how do you work") ||
        q.includes("design framework") || q.includes("steps")
    ) {
        return {
            text: "Faheem pairs deep user research and token-based Figma design systems with interactive prototyping and seamless frontend engineering."
        };
    }

    // 5. Coding & Frontend Abilities
    if (
        q.includes("code") || q.includes("coding") || q.includes("frontend") || q.includes("developer") || 
        q.includes("react") || q.includes("technical") || q.includes("programming") || q.includes("three.js") || 
        q.includes("gsap") || q.includes("css") || q.includes("html")
    ) {
        return {
            text: "Yes, Faheem is code-fluent in React, modern CSS, GSAP, and Three.js — in fact, this entire portfolio was designed and built by him from scratch."
        };
    }

    // 6. Tools, Design Software & Design Systems
    if (
        q.includes("tools") || q.includes("software") || q.includes("figma") || q.includes("design system") || 
        q.includes("tokens") || q.includes("stack") || q.includes("tech stack")
    ) {
        return {
            text: "Faheem's core toolkit centers on Figma (variables, tokens, auto-layout), FigJam, and Protopie, paired with React, GSAP, and AI-assisted workflows."
        };
    }

    // 7. Roles, Availability & Locations
    if (
        q.includes("role") || q.includes("roles") || q.includes("looking for") || q.includes("job") || 
        q.includes("position") || q.includes("location") || q.includes("locations") || q.includes("relocate") || 
        q.includes("relocation") || q.includes("bangalore") || q.includes("chennai") || q.includes("dubai") || 
        q.includes("mena") || q.includes("saudi") || q.includes("remote") || q.includes("when can you start") ||
        q.includes("notice period") || q.includes("availability")
    ) {
        return {
            text: "Faheem is seeking Product Designer & UI/UX Designer roles across Bangalore, Chennai, MENA, or Remote, and is available to join immediately."
        };
    }

    // 8. Experience / Background / Bio / About Faheem
    if (
        q.includes("experience") || q.includes("background") || q.includes("who is faheem") || 
        q.includes("about faheem") || q.includes("bio") || q.includes("tell me about yourself") || 
        q.includes("years of experience") || q.includes("seniority")
    ) {
        return {
            text: "Faheem has 3+ years of experience designing complex B2B enterprise software, design systems, and conversion-focused web products."
        };
    }

    // 9. Current Active Page Query or Specific Project Deep-Dive
    if (isThisProjectQuery(q)) {
        if (activeProject) {
            return buildProjectSummary(activeProject);
        } else {
            return {
                text: "Explore Faheem's featured case studies below to see his end-to-end design and engineering work."
            };
        }
    }

    // Check if query specifically mentions any project
    const specificProject = projectsData.find(p => {
        const titleLower = p.title.toLowerCase();
        const slugWords = p.slug.toLowerCase().replace(/-/g, ' ');
        const idLower = p.id ? p.id.toLowerCase() : '';
        return q.includes(titleLower) || (slugWords.length > 3 && q.includes(slugWords)) || (idLower && q.includes(idLower));
    });

    if (specificProject) {
        return buildProjectSummary(specificProject);
    }

    // 10. General Projects / Portfolio Overview
    if (
        q.includes("projects") || q.includes("project") || q.includes("portfolio") || 
        q.includes("case studies") || q.includes("case study") || q.includes("work") || q.includes("show me")
    ) {
        return {
            text: "Faheem has designed 13 products, leading flagship work across Olfacta ERP, OctaLume IoT, and UF Brand."
        };
    }

    // 11. Friendly Greetings
    if (["hi", "hello", "hey", "hola", "sup", "greetings", "good morning", "good evening", "good afternoon"].includes(q) || q === "hi" || q === "hello") {
        return {
            text: "Hi there! I'm Faheem's AI assistant. Ask me anything about his product design work, case studies, or hiring availability."
        };
    }

    for (const entry of FAHEEM_KNOWLEDGE_BASE) {
        if (entry.keywords.some((kw) => q.includes(kw))) {
            return { text: entry.response, action: entry.action };
        }
    }

    // 12. Smart Contextual Fallback
    return {
        text: "Faheem is a Product Designer with 3+ years of experience in enterprise B2B SaaS, scalable design systems, and frontend engineering.",
        action: {
            type: "contact_ctas",
            primary: { label: "Send Email", url: "mailto:faheemseyadmd@gmail.com" },
            secondary: { label: "LinkedIn Profile", url: "https://www.linkedin.com/in/seyad-mohammed-faheem/" }
        }
    };
};

const sanitizeBotText = (rawText, isContactQuery) => {
    if (!rawText) return { cleanText: rawText, hasContactMention: false };

    let text = rawText;
    let hasContactMention = isContactQuery || text.includes("faheemseyadmd@gmail.com") || text.includes("linkedin.com");

    // Replace markdown email and raw email
    text = text.replace(/\[?faheemseyadmd@gmail\.com\]?(\(mailto:faheemseyadmd@gmail\.com\))?/gi, "");
    text = text.replace(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/gi, "");

    // Replace markdown linkedin and raw linkedin
    text = text.replace(/\[?[^\]]*linkedin[^\]]*\]?\(https?:\/\/[^\s)]+\)/gi, "");
    text = text.replace(/https?:\/\/(www\.)?linkedin\.com\/in\/[^\s.)]+/gi, "");

    // Clean up trailing connect text or orphan words
    text = text.replace(/contact Faheem directly through\s*\.?/gi, "contact Faheem directly using the buttons below.");
    text = text.replace(/reach out to Faheem directly at\s*\.?/gi, "reach out to Faheem directly using the buttons below.");
    text = text.replace(/reach out directly via\s*\.?/gi, "reach out directly using the buttons below.");
    text = text.replace(/\s{2,}/g, " ").trim();

    return { cleanText: text, hasContactMention };
};

const fetchLLMResponse = async (userQuery, conversationHistory, activeProject) => {
    const geminiKey = import.meta.env.GEMINI_API_KEY || import.meta.env.VITE_GEMINI_API_KEY;
    const groqKey = import.meta.env.VITE_GROQ_API_KEY;
    const openaiKey = import.meta.env.VITE_OPENAI_API_KEY;
    const q = userQuery.toLowerCase().trim();

    const isResumeQuery = q.includes("resume") || q.includes("cv");
    const isContactQuery = q.includes("contact") || q.includes("email") || q.includes("hire") || q.includes("reach") || q.includes("linkedin") || q.includes("interview");

    const getAction = (hasContact) => {
        if (isResumeQuery) {
            return {
                type: "download",
                label: "Download Resume (PDF)",
                url: "/assets/Faheem - Product Designer Resume.pdf",
                filename: "Faheem - Product Designer Resume.pdf"
            };
        }
        if (isContactQuery || hasContact) {
            return {
                type: "contact_ctas",
                primary: { label: "Send Email", url: "mailto:faheemseyadmd@gmail.com" },
                secondary: { label: "LinkedIn Profile", url: "https://www.linkedin.com/in/seyad-mohammed-faheem/" }
            };
        }
        return null;
    };

    const dynamicSystemPrompt = buildComprehensivePortfolioPrompt(activeProject);

    // 1. Google Gemini API (gemini-3.5-flash-lite with resilient fallback)
    if (geminiKey && geminiKey.trim()) {
        try {
            const historyParts = conversationHistory
                .slice(-6)
                .filter(m => m.text && m.text.trim().length > 0)
                .map(m => ({
                    role: m.sender === 'bot' ? 'model' : 'user',
                    parts: [{ text: m.text.trim() }]
                }));

            const makeGeminiCall = async (modelName) => {
                return await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${geminiKey.trim()}`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        system_instruction: { parts: [{ text: dynamicSystemPrompt }] },
                        contents: [...historyParts, { role: "user", parts: [{ text: userQuery }] }],
                        generationConfig: { 
                            temperature: 0.5, 
                            maxOutputTokens: 500
                        }
                    })
                });
            };

            const candidateModels = [
                import.meta.env.GEMINI_MODEL || "gemini-3.5-flash-lite",
                "gemini-3.5-flash-lite",
                "gemini-3.5-flash",
                "gemini-3.8-flash",
                "gemini-2.5-flash",
                "gemini-flash-latest"
            ].filter((v, i, a) => a.indexOf(v) === i);

            let res = null;
            for (const m of candidateModels) {
                res = await makeGeminiCall(m);
                if (res.ok) break;
            }

            if (res && res.ok) {
                const data = await res.json();
                if (data.candidates?.[0]?.content?.parts?.[0]?.text) {
                    const { cleanText, hasContactMention } = sanitizeBotText(data.candidates[0].content.parts[0].text, isContactQuery);
                    return { text: cleanText, action: getAction(hasContactMention) };
                }
            } else if (res) {
                const errData = await res.json().catch(() => ({}));
                console.warn("Gemini API non-ok status:", res.status, errData);
            }
        } catch (err) {
            console.warn("Gemini API call error:", err);
        }
    }

    // 2. Groq API
    if (groqKey && groqKey.trim()) {
        try {
            const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${groqKey.trim()}`
                },
                body: JSON.stringify({
                    model: "llama-3.3-70b-versatile",
                    messages: [
                        { role: "system", content: dynamicSystemPrompt },
                        ...conversationHistory.slice(-4).map(m => ({
                            role: m.sender === "bot" ? "assistant" : "user",
                            content: m.text
                        })),
                        { role: "user", content: userQuery }
                    ],
                    temperature: 0.5,
                    max_tokens: 450
                })
            });
            const data = await res.json();
            if (data.choices?.[0]?.message?.content) {
                const { cleanText, hasContactMention } = sanitizeBotText(data.choices[0].message.content, isContactQuery);
                return {
                    text: cleanText,
                    action: getAction(hasContactMention)
                };
            }
        } catch (err) {
            console.warn("Groq API fallback:", err);
        }
    }

    // 3. OpenAI API
    if (openaiKey && openaiKey.trim()) {
        try {
            const res = await fetch("https://api.openai.com/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${openaiKey.trim()}`
                },
                body: JSON.stringify({
                    model: "gpt-4o-mini",
                    messages: [
                        { role: "system", content: dynamicSystemPrompt },
                        ...conversationHistory.slice(-4).map(m => ({
                            role: m.sender === "bot" ? "assistant" : "user",
                            content: m.text
                        })),
                        { role: "user", content: userQuery }
                    ],
                    temperature: 0.5,
                    max_tokens: 450
                })
            });
            const data = await res.json();
            if (data.choices?.[0]?.message?.content) {
                const { cleanText, hasContactMention } = sanitizeBotText(data.choices[0].message.content, isContactQuery);
                return {
                    text: cleanText,
                    action: getAction(hasContactMention)
                };
            }
        } catch (err) {
            console.warn("OpenAI API fallback:", err);
        }
    }

    // Deep Semantic Context Engine fallback
    const best = findBestAnswer(userQuery, activeProject);
    return {
        text: best.text,
        action: best.action || getAction(false)
    };
};

const ChatbotSvgIcon = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', flexShrink: 0 }}>
        <path d="M22.9101 60.9524L24.2328 40.4762L7.08995 51.9577L0 39.4709L18.4656 30.4762L0 21.4815L7.08995 8.99471L24.2328 20.4762L22.9101 0H37.1429L35.7672 20.4762L52.9101 8.99471L60 21.4815L41.5873 30.4762L60 39.4709L52.9101 51.9577L35.7672 40.4762L37.1429 60.9524H22.9101Z" fill="#FF4D12" />
    </svg>
);

const Chatbot = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const activeProject = getCurrentProject(location.pathname);

    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [showContextChip, setShowContextChip] = useState(true);
    const menuRef = useRef(null);
    const messagesEndRef = useRef(null);

    const quickPrompts = activeProject ? [
        { label: `Tell me about this project (${activeProject.title})`, query: "Tell me about this project" },
        ...GEMINI_QUICK_PROMPTS
    ] : GEMINI_QUICK_PROMPTS;

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        if (isOpen && messages.length > 0) {
            scrollToBottom();
        }
    }, [messages, isTyping, isOpen]);

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setShowMenu(false);
            }
        };
        if (showMenu) {
            document.addEventListener('mousedown', handleOutsideClick);
        }
        return () => document.removeEventListener('mousedown', handleOutsideClick);
    }, [showMenu]);

    const handleSendMessage = async (textToSend) => {
        const text = textToSend || inputValue;
        if (!text.trim()) return;

        const currentHistory = [...messages, { sender: 'user', text }];
        setMessages(currentHistory);
        setInputValue('');
        setIsTyping(true);

        const botAnswer = await fetchLLMResponse(text, messages, activeProject);
        setMessages((prev) => [...prev, { sender: 'bot', text: botAnswer.text, action: botAnswer.action }]);
        setIsTyping(false);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSendMessage();
        }
    };

    const handleResetChat = () => {
        setMessages([]);
        setShowMenu(false);
    };

    return (
        <div className="chatbot-wrapper">
            {/* Floating Chat Trigger Button */}
            {!isOpen && (
                <button
                    className="chatbot-trigger-btn"
                    onClick={() => setIsOpen(true)}
                    aria-label="Open Faheem AI Chatbot"
                >
                    <div className="trigger-avatar-wrapper">
                        <img src={portraitImg} alt="Faheem AI" className="trigger-avatar" width="36" height="36" decoding="async" />
                        <span className="online-indicator"></span>
                    </div>
                    <span className="trigger-label">Ask AI</span>
                </button>
            )}

            {/* Chatbot Window (Gemini Dark & Orange Theme) */}
            {isOpen && (
                <div className="chatbot-window gemini-theme" data-lenis-prevent onWheel={(e) => e.stopPropagation()}>
                    {/* Minimal Top Header */}
                    <div className="gemini-header">
                        <div className="gemini-header-left">
                            {/* Subtle minimal header */}
                        </div>
                        <div className="gemini-header-actions">
                            <div className="gemini-menu-wrapper" ref={menuRef}>
                                <button
                                    className="gemini-icon-btn"
                                    onClick={() => setShowMenu((prev) => !prev)}
                                    aria-label="Chat options"
                                    title="Options"
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                        <circle cx="12" cy="5" r="2" />
                                        <circle cx="12" cy="12" r="2" />
                                        <circle cx="12" cy="19" r="2" />
                                    </svg>
                                </button>
                                {showMenu && (
                                    <div className="gemini-dropdown-menu">
                                        <button onClick={handleResetChat} className="gemini-dropdown-item">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
                                                <path d="M21 3v5h-5" />
                                                <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
                                                <path d="M8 16H3v5" />
                                            </svg>
                                            <span>New conversation</span>
                                        </button>
                                        <button
                                            onClick={() => {
                                                handleSendMessage("Can I download your resume?");
                                                setShowMenu(false);
                                            }}
                                            className="gemini-dropdown-item"
                                        >
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                                <polyline points="7 10 12 15 17 10" />
                                                <line x1="12" y1="15" x2="12" y2="3" />
                                            </svg>
                                            <span>Download Resume</span>
                                        </button>
                                    </div>
                                )}
                            </div>
                            <button
                                className="gemini-icon-btn close"
                                onClick={() => setIsOpen(false)}
                                aria-label="Close Chat"
                                title="Close"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Body Area */}
                    {messages.length === 0 ? (
                        /* Initial Gemini Greeting View (exact match to screenshot) */
                        <div className="gemini-empty-state">
                            <div className="gemini-hero-center">
                                <div className="gemini-sparkle-icon">
                                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="url(#orangeSparkleGrad)" />
                                        <defs>
                                            <linearGradient id="orangeSparkleGrad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                                                <stop offset="0%" stopColor="#ffb03a" />
                                                <stop offset="45%" stopColor="#ff4d12" />
                                                <stop offset="100%" stopColor="#d32f00" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <h2 className="gemini-headline">What can I help with?</h2>
                            </div>

                            <div className="gemini-prompts-stack">
                                {quickPrompts.map((p, idx) => (
                                    <button
                                        key={idx}
                                        className="gemini-prompt-pill"
                                        onClick={() => handleSendMessage(p.query)}
                                    >
                                        {p.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ) : (
                        /* Messages Conversation Stream */
                        <div className="chatbot-body" data-lenis-prevent>
                            {messages.map((msg, i) => {
                                const hasCard = msg.sender === 'bot' && !!detectSingleRelatedProject(msg.text, activeProject);
                                return (
                                    <div key={i} className={`chat-message ${msg.sender} ${hasCard ? 'has-single-card' : ''}`}>
                                        {msg.sender === 'bot' && (
                                            <div className="gemini-bot-avatar">
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                                    <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="url(#geminiBotGrad)" />
                                                    <defs>
                                                        <linearGradient id="geminiBotGrad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                                                            <stop offset="0%" stopColor="#ff9f43" />
                                                            <stop offset="100%" stopColor="#ff4d12" />
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                            </div>
                                        )}
                                        {msg.sender === 'bot' ? (
                                            <AnimatedMessageBubble
                                                key={`${i}-${msg.text.length}`}
                                                text={msg.text}
                                                action={msg.action}
                                                isLatestBot={i === messages.length - 1}
                                                scrollToBottom={scrollToBottom}
                                                activeProject={activeProject}
                                                onNavigate={navigate}
                                            />
                                        ) : (
                                            <div className="message-bubble">
                                                {renderFormattedText(msg.text)}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}

                            {isTyping && (
                                <div className="chat-message bot typing">
                                    <div className="gemini-bot-avatar">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                            <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="#ff4d12" />
                                        </svg>
                                    </div>
                                    <div className="message-bubble typing-dots">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>
                    )}

                    {/* Floating 2-Tier Input Card (matching screenshot) */}
                    <div className="chatbot-input-card">
                        {/* Tier 1: Context Chip */}
                        {showContextChip && (
                            <div className="chatbot-context-bar">
                                <div className="context-left">
                                    <div className="context-f-badge">F</div>
                                    <span className="context-text">
                                        Sharing "{activeProject ? `${activeProject.title} | Case Study` : 'Faheem | Product Designer'}"
                                    </span>
                                </div>
                                <button
                                    className="context-close-btn"
                                    onClick={() => setShowContextChip(false)}
                                    aria-label="Dismiss context"
                                    title="Dismiss context"
                                >
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </button>
                            </div>
                        )}

                        {/* Tier 2: Input Bar */}
                        <div className="chatbot-input-row">
                            <input
                                type="text"
                                placeholder={activeProject ? `Ask about ${activeProject.title}...` : "Ask me anything about Faheem..."}
                                className="chatbot-main-input"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={handleKeyDown}
                            />

                            <button
                                className="input-send-icon-btn"
                                onClick={() => handleSendMessage()}
                                disabled={!inputValue.trim() || isTyping}
                                aria-label="Send message"
                            >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="22" y1="2" x2="11" y2="13"></line>
                                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;

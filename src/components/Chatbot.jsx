import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import portraitImg from '../assets/faheem-portrait.webp';
import { projectsData } from '../data/projectsData';

const BASE_QUICK_PROMPTS = [
    { label: "Download Resume", query: "Can I download your resume?" },
    { label: "Open to work roles?", query: "What roles are you looking for?" },
    { label: "Top projects?", query: "Tell me about your top featured projects" },
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

const detectMentionedProjects = (text, activeProject) => {
    if (!text) return [];
    const lower = text.toLowerCase();
    const matched = [];

    if (activeProject && (lower.includes("this project") || lower.includes("breakdown of") || lower.includes(activeProject.title.toLowerCase()))) {
        return [activeProject];
    }

    projectsData.forEach(p => {
        const titleLower = p.title.toLowerCase();
        const clientLower = p.client ? p.client.toLowerCase() : '';
        const slugLower = p.slug.toLowerCase();

        if (
            lower.includes(titleLower) ||
            (clientLower && lower.includes(clientLower)) ||
            lower.includes(slugLower) ||
            (slugLower === "octalume-dashboard" && lower.includes("octalume")) ||
            (slugLower === "ufbrand-salwar" && (lower.includes("uf brand") || lower.includes("ethnic"))) ||
            (slugLower === "multi-city-travel-planner" && (lower.includes("multi-city") || lower.includes("travel planner"))) ||
            (slugLower === "dashboard-design" && lower.includes("console ui")) ||
            (slugLower === "website-revamp" && lower.includes("pickcel")) ||
            (slugLower === "thinkstack-core" && lower.includes("thinkstack"))
        ) {
            if (!matched.some(m => m.slug === p.slug)) {
                matched.push(p);
            }
        }
    });

    return matched;
};

const buildProjectSummary = (project) => {
    let text = `Here is a breakdown of **${project.title}** (${project.type} · ${project.year}):\n\n`;
    
    if (project.description) {
        text += `• **Overview**: ${project.description}\n`;
    }
    if (project.client) {
        text += `• **Client / Brand**: ${project.client}\n`;
    }
    if (project.service || project.category) {
        text += `• **Scope**: ${project.service || project.category}\n`;
    }
    if (project.challenge?.text) {
        text += `• **The Challenge**: ${project.challenge.text}\n`;
    }
    if (project.solution?.text) {
        text += `• **The Solution**: ${project.solution.text}\n`;
    }
    if (project.result) {
        text += `• **Key Impact**: ${project.result}\n`;
    }

    text += `\nFeel free to ask me anything specific about Faheem's role, process, or results for this project!`;
    return { text };
};

const SYSTEM_PROMPT = `
You are Faheem AI, the intelligent portfolio assistant for Seyad Mohammed Faheem.
Faheem is a Mid-Level UI/UX & Product Designer with 3+ years of experience based in India.

CRITICAL SCOPE & GUARDRAILS:
You MUST ONLY answer questions directly related to Seyad Mohammed Faheem, his portfolio, design projects, background, resume, skills, experience, target locations, and contact details.
Do NOT answer general knowledge questions, world facts, coding tutorials, math problems, jokes, science, politics, or unrelated topics.
If a user asks an off-topic or general question, politely decline with:
"I am specifically trained to answer questions about Faheem, his product design work, case studies, and availability. Feel free to ask about his projects, skills, resume, or how to contact him."

Key Details about Faheem:
- **Status**: Actively open to Product Designer & UI/UX Designer roles and can join immediately.
- **Preferred Locations**: Bangalore, Chennai, MENA (UAE, Saudi Arabia, Qatar).
- **Direct Contact**: Phone/WhatsApp: +91 6379439162. (Email and LinkedIn will be provided via CTAs).
- **Featured Case Studies (Designed & Developed)**:
  1. OctaLume IoT Dashboard: Industrial smart streetlight telemetry & energy control platform.
  2. UF Brand E-Commerce: High-converting ethnic fashion web store.
  3. Multi-City Travel Planner: Intelligent multi-destination itinerary builder.
  4. Pickcel Website Redesign: Enterprise digital signage marketing site & cloud console UI.
  5. ThinkStack AI Platform: Enterprise AI orchestration & developer console UI.
- **Capabilities & Stack**: Product Design (UX Research, Wireframing, Figma Systems, Prototyping), Frontend (React.js, Vanilla CSS, GSAP, Lenis, Three.js), AI-Paired Workflow (Figma + AI Agents).

Instructions:
Be polite, professional, articulate, and concise. Format lists with clean Markdown bullet points. Do NOT use emojis in your responses.
NEVER type out raw email addresses or LinkedIn URLs in text. Instead, say "You can contact Faheem directly using the buttons below."
If the user says a simple greeting like "hi", "hello", or "hey", respond with: "Hi there! Great to meet you. What would you like to know about Faheem's work, experience, or availability?"
If the user asks for a resume or CV, mention that they can download the PDF directly using the download button in the chat.
`;

const FAHEEM_KNOWLEDGE_BASE = [
    {
        keywords: ["resume", "cv", "download resume", "faheem resume", "get resume", "resume pdf"],
        response: "Here is Faheem's official Product Designer resume. You can download the PDF directly using the button below:",
        action: {
            type: "download",
            label: "Download Resume (PDF)",
            url: "/assets/Faheem - Product Designer Resume.pdf",
            filename: "Faheem - Product Designer Resume.pdf"
        }
    },
    {
        keywords: ["hi", "hello", "hey", "hola", "sup", "greetings", "good morning", "good evening", "good afternoon"],
        response: "Hi there! Great to meet you. What would you like to know about Faheem's work, experience, or availability?"
    },
    {
        keywords: ["thanks", "thank you", "bye", "goodbye", "cool", "awesome", "great"],
        response: "You're very welcome! Feel free to ask if you need anything else, or reach out to Faheem directly using the buttons below:",
        action: {
            type: "contact_ctas",
            primary: { label: "Send Email", url: "mailto:faheemseyadmd@gmail.com" },
            secondary: { label: "LinkedIn Profile", url: "https://www.linkedin.com/in/seyad-mohammed-faheem/" }
        }
    },
    {
        keywords: ["roles", "looking for", "job", "hiring", "hire", "position", "location", "locations", "open to work"],
        response: "I'm actively looking for UI/UX Designer & Product Designer roles! Preferred locations include Bangalore, Chennai, and MENA (UAE, Saudi Arabia, Qatar). I bring 3+ years of experience across product design, design systems, and data-heavy dashboards."
    },
    {
        keywords: ["projects", "project", "work", "portfolio", "featured", "octalume", "uf brand", "pickcel", "thinkstack", "multi-city"],
        response: "My top featured projects (all Designed & Developed by me) include:\n\n1. **OctaLume IoT Dashboard**: Industrial smart streetlight telemetry platform.\n2. **UF Brand E-Commerce**: High-converting ethnic fashion web store.\n3. **Multi-City Travel Planner**: Intelligent multi-destination itinerary builder.\n4. **Pickcel Website Redesign**: Enterprise digital signage platform & cloud console UI.\n5. **ThinkStack AI Platform**: Enterprise AI orchestration console."
    },
    {
        keywords: ["stack", "skills", "tools", "tech", "figma", "react", "design system", "coding", "agents"],
        response: "My core capabilities include:\n\n• **Product Design**: UX Research, Wireframing, High-Fidelity UI, Interactive Prototyping, Usability Testing.\n• **Design Systems**: Token Architecture, Figma Libraries, Reusable Components.\n• **Frontend & Motion**: React.js, HTML5, Vanilla CSS, GSAP, Lenis Smooth Scroll, Three.js.\n• **Workflow**: AI-paired design & dev workflow (Figma + AI Agents)."
    },
    {
        keywords: ["contact", "email", "phone", "whatsapp", "reach", "hire", "referral", "linkedin"],
        response: "You can reach Faheem directly using the contact buttons below:\n\n• Phone / WhatsApp: +91 6379439162",
        action: {
            type: "contact_ctas",
            primary: { label: "Send Email", url: "mailto:faheemseyadmd@gmail.com" },
            secondary: { label: "LinkedIn Profile", url: "https://www.linkedin.com/in/seyad-mohammed-faheem/" }
        }
    },
    {
        keywords: ["experience", "years", "background", "who are you", "about"],
        response: "I'm Faheem, a Mid-Level UI/UX & Product Designer with 3+ years of experience crafting digital products, design systems, and web applications. I bridge design vision and code execution to build cinematic, functional user experiences."
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
        }, 130);

        return () => clearTimeout(timer);
    }, [visibleCount, lines.length, isLatestBot, scrollToBottom]);

    const animatedText = lines.slice(0, visibleCount).join('\n');
    const isFullyRevealed = visibleCount >= lines.length;
    const mentionedProjects = isFullyRevealed ? detectMentionedProjects(text, activeProject) : [];

    return (
        <div className="bot-message-content">
            <div className="message-bubble">
                {renderFormattedText(animatedText)}
            </div>

            {isFullyRevealed && mentionedProjects.length > 0 && (
                <div className="chat-project-cards-container" data-lenis-prevent>
                    {mentionedProjects.map((proj) => (
                        <ChatProjectCard key={proj.slug || proj.id} project={proj} onNavigate={onNavigate} />
                    ))}
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

    if (isThisProjectQuery(q)) {
        if (activeProject) {
            return buildProjectSummary(activeProject);
        } else {
            return {
                text: "You are currently on the main portfolio page! Navigate to any featured case study (such as OctaLume, UF Brand, Multi-City, Pickcel, or ThinkStack) and ask me about it to get a deep dive summary!"
            };
        }
    }

    if (q.includes("resume") || q.includes("cv")) {
        return {
            text: "Here is Faheem's official Product Designer resume. You can download the PDF directly using the button below:",
            action: {
                type: "download",
                label: "Download Resume (PDF)",
                url: "/assets/Faheem - Product Designer Resume.pdf",
                filename: "Faheem - Product Designer Resume.pdf"
            }
        };
    }

    if (["hi", "hello", "hey", "hola", "sup"].includes(q)) {
        return { text: "Hi there! Great to meet you. What would you like to know about Faheem's work, experience, or availability?" };
    }
    
    for (const entry of FAHEEM_KNOWLEDGE_BASE) {
        if (entry.keywords.some((kw) => q.includes(kw))) {
            return { text: entry.response, action: entry.action };
        }
    }

    return {
        text: "I am specifically trained to answer questions about Faheem, his product design work, case studies, and availability. Feel free to ask about his projects, skills, resume, or how to contact him."
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
    const groqKey = import.meta.env.VITE_GROQ_API_KEY;
    const openaiKey = import.meta.env.VITE_OPENAI_API_KEY;
    const q = userQuery.toLowerCase().trim();

    const isResumeQuery = q.includes("resume") || q.includes("cv");
    const isContactQuery = q.includes("contact") || q.includes("email") || q.includes("hire") || q.includes("reach") || q.includes("linkedin");

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

    let dynamicSystemPrompt = SYSTEM_PROMPT;
    if (activeProject) {
        dynamicSystemPrompt += `\nCURRENT PAGE CONTEXT: The user is currently viewing the case study for "${activeProject.title}".\n- Description: ${activeProject.description}\n- Challenge: ${activeProject.challenge?.text || ''}\n- Solution: ${activeProject.solution?.text || ''}\n- Result: ${activeProject.result || ''}\nIf the user asks "tell me about this project" or asks questions about the current page, answer specifically using this case study data.`;
    }

    if (groqKey) {
        try {
            const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${groqKey}`
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
                    max_tokens: 350
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
    } else if (openaiKey) {
        try {
            const res = await fetch("https://api.openai.com/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${openaiKey}`
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
                    max_tokens: 350
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

    return findBestAnswer(userQuery, activeProject);
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
    const [messages, setMessages] = useState([
        {
            sender: 'bot',
            text: "Hi there! I'm Faheem's AI Assistant. Faheem is actively open to Product Designer & UI/UX roles and can join immediately. How can I help you explore his work, experience, or availability?"
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const quickPrompts = activeProject ? [
        { label: `About this project (${activeProject.title})`, query: "Tell me about this project" },
        ...BASE_QUICK_PROMPTS
    ] : BASE_QUICK_PROMPTS;

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isTyping, isOpen]);

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
                        <img src={portraitImg} alt="Faheem AI" className="trigger-avatar" />
                        <span className="online-indicator"></span>
                    </div>
                    <span className="trigger-label">Ask AI</span>
                </button>
            )}

            {/* Chatbot Window */}
            {isOpen && (
                <div className="chatbot-window" data-lenis-prevent onWheel={(e) => e.stopPropagation()}>
                    {/* Header */}
                    <div className="chatbot-header">
                        <div className="chatbot-header-profile">
                            <div className="header-avatar-container">
                                <img src={portraitImg} alt="Faheem" className="header-avatar" />
                                <span className="header-online-dot"></span>
                            </div>
                            <div className="header-text">
                                <h4 className="header-title">Ask AI</h4>
                                <span className="header-status">
                                    {activeProject ? `Viewing: ${activeProject.title}` : "Available to join immediately · Online"}
                                </span>
                            </div>
                        </div>
                        <button
                            className="chatbot-close-btn"
                            onClick={() => setIsOpen(false)}
                            aria-label="Close Chat"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                    </div>

                    {/* Messages Body */}
                    <div className="chatbot-body" data-lenis-prevent>
                        {messages.map((msg, i) => {
                            const hasCards = msg.sender === 'bot' && detectMentionedProjects(msg.text, activeProject).length > 0;
                            return (
                                <div key={i} className={`chat-message ${msg.sender} ${hasCards ? 'has-cards' : ''}`}>
                                    {msg.sender === 'bot' && (
                                        <img src={portraitImg} alt="AI" className="message-avatar" />
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
                                <img src={portraitImg} alt="AI" className="message-avatar" />
                                <div className="message-bubble typing-dots">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    {/* Quick Prompts */}
                    <div className="chatbot-quick-prompts" data-lenis-prevent>
                        {quickPrompts.map((p, idx) => (
                            <button
                                key={idx}
                                className="quick-prompt-btn"
                                onClick={() => handleSendMessage(p.query)}
                            >
                                {p.label}
                            </button>
                        ))}
                    </div>

                    {/* Input Footer */}
                    <div className="chatbot-footer-container">
                        <div className="chatbot-footer">
                            <input
                                type="text"
                                placeholder={activeProject ? `Ask about ${activeProject.title}...` : "Ask me anything about Faheem..."}
                                className="chatbot-input"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={handleKeyDown}
                            />
                            <button
                                className="chatbot-send-btn"
                                onClick={() => handleSendMessage()}
                                disabled={!inputValue.trim()}
                                aria-label="Send message"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="22" y1="2" x2="11" y2="13"></line>
                                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                </svg>
                            </button>
                        </div>
                        <div className="chatbot-branding">
                            <span>Designed & Developed by <strong>Faheem</strong></span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;

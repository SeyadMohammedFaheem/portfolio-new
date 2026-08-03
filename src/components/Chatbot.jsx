import React, { useState, useRef, useEffect } from 'react';
import portraitImg from '../assets/faheem-portrait.webp';

const QUICK_PROMPTS = [
    { label: "Download Resume", query: "Can I download your resume?" },
    { label: "Open to work roles?", query: "What roles are you looking for?" },
    { label: "Top projects?", query: "Tell me about your top featured projects" },
    { label: "How to contact?", query: "How can I contact or hire Faheem?" },
];

const SYSTEM_PROMPT = `
You are Faheem AI, the intelligent portfolio assistant for Seyad Mohammed Faheem.
Faheem is a Mid-Level UI/UX & Product Designer with 3+ years of experience based in India.

CRITICAL SCOPE & GUARDRAILS:
You MUST ONLY answer questions directly related to Seyad Mohammed Faheem, his portfolio, design projects, background, resume, skills, experience, target locations, and contact details.
Do NOT answer general knowledge questions, world facts, coding tutorials, math problems, jokes, science, politics, or unrelated topics.
If a user asks an off-topic or general question, politely decline with:
"I am specifically trained to answer questions about Faheem, his product design work, case studies, and availability. Feel free to ask about his projects, skills, resume, or how to contact him."

Key Details about Faheem:
- **Status**: Actively looking for Product Designer & UI/UX Designer roles.
- **Preferred Locations**: Bangalore, Chennai, MENA (UAE, Saudi Arabia, Qatar).
- **Direct Contact**: Email: [faheemseyadmd@gmail.com](mailto:faheemseyadmd@gmail.com) | Phone/WhatsApp: +91 6379439162 | LinkedIn: [linkedin.com/in/seyad-mohammed-faheem](https://www.linkedin.com/in/seyad-mohammed-faheem/)
- **Featured Case Studies (Designed & Developed)**:
  1. OctaLume IoT Dashboard: Industrial smart streetlight telemetry & energy control platform.
  2. UF Brand E-Commerce: High-converting ethnic fashion web store.
  3. Multi-City Travel Planner: Intelligent multi-destination itinerary builder.
  4. Pickcel Website Redesign: Enterprise digital signage marketing site & cloud console UI.
  5. ThinkStack AI Platform: Enterprise AI orchestration & developer console UI.
- **Capabilities & Stack**: Product Design (UX Research, Wireframing, Figma Systems, Prototyping), Frontend (React.js, Vanilla CSS, GSAP, Lenis, Three.js), AI-Paired Workflow (Figma + AI Agents).

Instructions:
Be polite, professional, articulate, and concise. Format lists with clean Markdown bullet points. Do NOT use emojis in your responses.
Always format email addresses, LinkedIn, and websites as markdown links like [faheemseyadmd@gmail.com](mailto:faheemseyadmd@gmail.com) or [LinkedIn](https://www.linkedin.com/in/seyad-mohammed-faheem/).
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
            url: "/assets/Resume - Faheem Product Designer.pdf",
            filename: "Resume - Faheem Product Designer.pdf"
        }
    },
    {
        keywords: ["hi", "hello", "hey", "hola", "sup", "greetings", "good morning", "good evening", "good afternoon"],
        response: "Hi there! Great to meet you. What would you like to know about Faheem's work, experience, or availability?"
    },
    {
        keywords: ["thanks", "thank you", "bye", "goodbye", "cool", "awesome", "great"],
        response: "You're very welcome! Feel free to ask if you need anything else, or reach out to Faheem directly at [faheemseyadmd@gmail.com](mailto:faheemseyadmd@gmail.com)."
    },
    {
        keywords: ["roles", "looking for", "job", "hiring", "hire", "position", "location", "locations", "open to work"],
        response: "I'm actively looking for UI/UX Designer & Product Designer roles! Preferred locations include Bangalore, Chennai, and MENA (UAE, Saudi Arabia, Qatar). I bring 3+ years of experience across product design, design systems, and data-heavy dashboards."
    },
    {
        keywords: ["projects", "project", "work", "portfolio", "featured", "octalume", "uf brand", "pickcel", "thinkstack", "multi-city"],
        response: "My top featured projects (all Designed & Developed by me) include:\n\n1. **[OctaLume IoT Dashboard](/project/octalume-dashboard)**: Industrial smart streetlight telemetry platform.\n2. **[UF Brand E-Commerce](/project/ufbrand-salwar)**: High-converting ethnic fashion web store.\n3. **[Multi-City Travel Planner](/project/multi-city-travel-planner)**: Intelligent multi-destination itinerary builder.\n4. **[Pickcel Website Redesign](/project/website-revamp)**: Enterprise digital signage platform & cloud console UI.\n5. **[ThinkStack AI Platform](/project/thinkstack-core)**: Enterprise AI orchestration console."
    },
    {
        keywords: ["stack", "skills", "tools", "tech", "figma", "react", "design system", "coding", "agents"],
        response: "My core capabilities include:\n\n• **Product Design**: UX Research, Wireframing, High-Fidelity UI, Interactive Prototyping, Usability Testing.\n• **Design Systems**: Token Architecture, Figma Libraries, Reusable Components.\n• **Frontend & Motion**: React.js, HTML5, Vanilla CSS, GSAP, Lenis Smooth Scroll, Three.js.\n• **Workflow**: AI-paired design & dev workflow (Figma + AI Agents)."
    },
    {
        keywords: ["contact", "email", "phone", "whatsapp", "reach", "hire", "referral", "linkedin"],
        response: "You can reach me directly via:\n\n• **Email**: [faheemseyadmd@gmail.com](mailto:faheemseyadmd@gmail.com)\n• **Phone / WhatsApp**: +91 6379439162\n• **LinkedIn**: [linkedin.com/in/seyad-mohammed-faheem](https://www.linkedin.com/in/seyad-mohammed-faheem/)\n• **Portfolio**: [faheem.work](https://faheem.work)"
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

const findBestAnswer = (userQuery) => {
    const q = userQuery.toLowerCase().trim();

    // Resume request check
    if (q.includes("resume") || q.includes("cv")) {
        return {
            text: "Here is Faheem's official Product Designer resume. You can download the PDF directly using the button below:",
            action: {
                type: "download",
                label: "Download Resume (PDF)",
                url: "/assets/Resume - Faheem Product Designer.pdf",
                filename: "Resume - Faheem Product Designer.pdf"
            }
        };
    }

    // Direct greeting match
    if (["hi", "hello", "hey", "hola", "sup"].includes(q)) {
        return { text: "Hi there! Great to meet you. What would you like to know about Faheem's work, experience, or availability?" };
    }
    
    for (const entry of FAHEEM_KNOWLEDGE_BASE) {
        if (entry.keywords.some((kw) => q.includes(kw))) {
            return { text: entry.response, action: entry.action };
        }
    }

    return {
        text: "I am specifically trained to answer questions about Faheem, his product design work, case studies, and availability! Feel free to ask about his projects, skills, resume, or how to contact him."
    };
};

const fetchLLMResponse = async (userQuery, conversationHistory) => {
    const groqKey = import.meta.env.VITE_GROQ_API_KEY;
    const openaiKey = import.meta.env.VITE_OPENAI_API_KEY;
    const q = userQuery.toLowerCase().trim();

    // Always append download button if query is for resume
    const isResumeQuery = q.includes("resume") || q.includes("cv");

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
                        { role: "system", content: SYSTEM_PROMPT },
                        ...conversationHistory.slice(-4).map(m => ({
                            role: m.sender === "bot" ? "assistant" : "user",
                            content: m.text
                        })),
                        { role: "user", content: userQuery }
                    ],
                    temperature: 0.5,
                    max_tokens: 300
                })
            });
            const data = await res.json();
            if (data.choices?.[0]?.message?.content) {
                return {
                    text: data.choices[0].message.content,
                    action: isResumeQuery ? {
                        type: "download",
                        label: "Download Resume (PDF)",
                        url: "/assets/Resume - Faheem Product Designer.pdf",
                        filename: "Resume - Faheem Product Designer.pdf"
                    } : null
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
                        { role: "system", content: SYSTEM_PROMPT },
                        ...conversationHistory.slice(-4).map(m => ({
                            role: m.sender === "bot" ? "assistant" : "user",
                            content: m.text
                        })),
                        { role: "user", content: userQuery }
                    ],
                    temperature: 0.5,
                    max_tokens: 300
                })
            });
            const data = await res.json();
            if (data.choices?.[0]?.message?.content) {
                return {
                    text: data.choices[0].message.content,
                    action: isResumeQuery ? {
                        type: "download",
                        label: "Download Resume (PDF)",
                        url: "/assets/Resume - Faheem Product Designer.pdf",
                        filename: "Resume - Faheem Product Designer.pdf"
                    } : null
                };
            }
        } catch (err) {
            console.warn("OpenAI API fallback:", err);
        }
    }

    return findBestAnswer(userQuery);
};

const Chatbot = () => {
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

        const botAnswer = await fetchLLMResponse(text, messages);
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
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="trigger-spark-icon">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
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
                                <span className="header-status">Available to join immediately · Online</span>
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
                        {messages.map((msg, i) => (
                            <div key={i} className={`chat-message ${msg.sender}`}>
                                {msg.sender === 'bot' && (
                                    <img src={portraitImg} alt="AI" className="message-avatar" />
                                )}
                                <div className="message-bubble">
                                    {renderFormattedText(msg.text)}
                                    {msg.action?.type === 'download' && (
                                        <a
                                            href={msg.action.url}
                                            download={msg.action.filename}
                                            className="chat-download-btn"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                                <polyline points="7 10 12 15 17 10"></polyline>
                                                <line x1="12" y1="15" x2="12" y2="3"></line>
                                            </svg>
                                            <span>{msg.action.label}</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}

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
                        {QUICK_PROMPTS.map((p, idx) => (
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
                    <div className="chatbot-footer">
                        <input
                            type="text"
                            placeholder="Ask me anything about Faheem..."
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
                </div>
            )}
        </div>
    );
};

export default Chatbot;

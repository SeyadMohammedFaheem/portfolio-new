export const projectsData = [
    {
        id: "project-one",
        slug: "dashboard-design",
        title: "Dashboard Design",
        year: "2025",
        type: "UX Design",
        time: "5 Weeks",
        category: "Visual Design",
        image: "/images/work/work1.webp",
        client: "Pickcel",
        service: "UX Design",
        description: "A comprehensive digital system engineered to modernize complex enterprise workflows and data management.",
        heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=2000",
        challenge: {
            text: "Their concept was clear, but their visual language was not.",
            subtext: "We needed to align their ambition with a visual language that spoke to their avant-garde approach to daily wear."
        },
        solution: {
            text: "We created a refined brand system that included a logo, lookbook design, e-commerce UX, and tone of voice.",
            subtext: "Our approach drew direct inspiration from brutalist architecture, stripping away all unnecessary elements."
        },
        result: "Dashboard Design launched with a strong, cohesive identity that immediately stood out in the space.",
        gridImages: [
            "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=1000"
        ],
        stackImages: [
            "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1600",
            "https://images.unsplash.com/photo-1492288991661-058aa541ff43?auto=format&fit=crop&q=80&w=1600"
        ],
        impactImage: "https://images.unsplash.com/photo-1621257912423-e45f9411d619?auto=format&fit=crop&q=80&w=2000",
        caseStudy: {
            goals: [
                "Streamline enterprise data entry workflows",
                "Reduce cognitive load for daily power users",
                "Improve visibility of real-time server metrics"
            ],
            targetUsers: [
                "Operations Managers",
                "IT Administrators",
                "Data Integrity Officers"
            ],
            challengeBullets: [
                { icon: "📉", text: "Low efficiency in manual data sorting" },
                { icon: "🛠️", text: "Fragmented legacy toolsets and APIs" }
            ],
            solutions: [
                {
                    num: "1/2",
                    title: "The Central Dashboard",
                    desc: "A single pane of glass design that aggregates all critical metrics.",
                    rationale: "Research showed that switching between 5 different monitor screens was the source of 40% of human errors.",
                    mockupBg: "#111",
                    mockupImg: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=2000"
                }
            ],
            nextSteps: [
                "Deploy AI error-detection models in Q3",
                "Finalize mobile dashboard transition"
            ]
        }
    },
    {
        id: "pickcel-go-app-design",
        slug: "pickcel-go-app-design",
        title: "Pickcel Mobile Redesign",
        year: "2024",
        type: "Mobile App",
        image: "/images/work/work2.webp",
        client: "Pickcel",
        service: "Mobile UI/UX",
        description: "Redesigning the mobile experience to enable faster access, simplified workflows, and better on-the-go control for signage operators.",
        heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=2000",
        challenge: {
            text: "The existing mobile experience was limited, cluttered, and not optimized for quick actions.",
            subtext: "Users struggled to manage screens, monitor status, and perform key tasks efficiently on smaller devices. Navigation was not optimized for thumb-friendly interaction."
        },
        solution: {
            text: "A streamlined mobile experience focused on speed, clarity, and control.",
            subtext: "By introducing bottom navigation, quick actions, and real-time monitoring alerts, we reduced friction in critical workflows and increased user confidence."
        },
        result: "Faster on-the-go task completion, improved accessibility, and significantly reduced friction in critical maintenance workflows.",
        gridImages: [
            "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1000"
        ],
        stackImages: [
            "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1600",
            "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&q=80&w=1600"
        ],
        impactImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=2000",
        caseStudy: {
            goals: [
                "Enable quick access to key actions on mobile",
                "Simplify navigation for one-handed use",
                "Improve visibility of system status",
                "Reduce steps for common workflows"
            ],
            targetUsers: [
                "Operations teams and managers who need quick control and visibility while away from desktop"
            ],
            challengeBullets: [
                { icon: "📱", text: "Mobile usage was focused on quick checks only" },
                { icon: "👍", text: "Navigation not optimized for one-handed use" },
                { icon: "⏳", text: "Important actions required too many steps" },
                { icon: "🛑", text: "Lack of real-time visibility and status alerts" }
            ],
            solutions: [
                {
                    num: "1/4",
                    title: "Mobile Dashboard",
                    desc: "Key metrics surfaced upfront with simplified cards for quick scanning and real-time status indicators.",
                    rationale: "Instant visibility reduces the need for deeper drill-downs for common health checks.",
                    mockupBg: "#111",
                    mockupImg: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&q=80&w=1000"
                },
                {
                    num: "2/4",
                    title: "Bottom Navigation",
                    desc: "Thumb-friendly interface with reduced hierarchy and clear prioritization of core sections.",
                    rationale: "Optimizing for ergonomic one-handed use significantly decreases cognitive load and interaction time.",
                    mockupBg: "#1B2B4E",
                    mockupImg: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1000"
                },
                {
                    num: "3/4",
                    title: "Quick Actions",
                    desc: "Instant access to publish, update, and monitor tools based on contextual user needs.",
                    rationale: "Reducing dependency on Desktop allows operators to fix critical signage issues immediately from anywhere.",
                    mockupBg: "#2D1B4E",
                    mockupImg: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000"
                },
                {
                    num: "4/4",
                    title: "Monitoring & Alerts",
                    desc: "Live status updates and proactive alerts for hardware failures or schedule overlaps.",
                    rationale: "Faster response to problems is essential for enterprise-grade digital signage reliability.",
                    mockupBg: "#1B3A2B",
                    mockupImg: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&q=80&w=1000"
                }
            ],
            nextSteps: [
                "Introduce biometric authentication for secure quick-actions",
                "Advanced offline mode for remote location troubleshooting",
                "Integration with push notification infrastructure"
            ]
        }
    },
    {
        id: "website-revamp",
        slug: "website-revamp",
        title: "Website Revamp",
        year: "2025",
        type: "Visual Design",
        image: "/images/work/work3.webp",
        client: "Gamma Tech",
        service: "Visual Design",
        description: "Designing an intuitive, frictionless user interface for a complex financial dashboard.",
        heroImage: "/images/work/work3.webp",
        challenge: {
            text: "Users were overwhelmed by the density of data.",
            subtext: "Navigation was confusing, leading to high drop-off rates during onboarding."
        },
        solution: {
            text: "We restructured the information architecture and introduced progressive disclosure.",
            subtext: "By utilizing whitespace and clear typographic hierarchy, we reduced cognitive load."
        },
        result: "User engagement increased by 65%, and support tickets dropped significantly.",
        gridImages: [
            "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=1000"
        ],
        stackImages: [
            "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1600",
            "https://images.unsplash.com/photo-1492288991661-058aa541ff43?auto=format&fit=crop&q=80&w=1600"
        ],
        impactImage: "https://images.unsplash.com/photo-1621257912423-e45f9411d619?auto=format&fit=crop&q=80&w=2000"
    },
    {
        id: "octalume-iot-dashboard",
        slug: "octalume-iot-dashboard",
        title: "Octalume IOT Dashboard",
        year: "2025",
        type: "Design System",
        image: "/images/work/work4.webp",
        client: "Delta Studios",
        service: "Design System",
        description: "Guiding the creative vision for a global advertising campaign spanning digital and print.",
        heroImage: "/images/work/work4.webp",
        challenge: {
            text: "The campaign lacked a unifying theme across different media formats.",
            subtext: ""
        },
        solution: {
            text: "Developed a core visual motif that translated perfectly from billboard to mobile screen.",
            subtext: ""
        },
        result: "The campaign won several industry awards for cohesive creative execution.",
        gridImages: [
            "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=1000"
        ],
        stackImages: [
            "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1600",
            "https://images.unsplash.com/photo-1492288991661-058aa541ff43?auto=format&fit=crop&q=80&w=1600"
        ],
        impactImage: "https://images.unsplash.com/photo-1621257912423-e45f9411d619?auto=format&fit=crop&q=80&w=2000"
    },
    {
        id: "project-five",
        slug: "project-five",
        title: "Project Five",
        year: "2023",
        type: "Visual Design",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
        client: "Epsilon Arts",
        service: "Visual Design",
        description: "Creating a stunning digital gallery experience for contemporary artists.",
        heroImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2000",
        challenge: {
            text: "The digital format was dulling the impact of the physical artworks.",
            subtext: ""
        },
        solution: {
            text: "Implemented high-resolution immersive viewing modes with ultra-minimal UI framing.",
            subtext: ""
        },
        result: "Artists reported higher satisfaction and online sales doubled.",
        gridImages: [
            "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=1000"
        ],
        stackImages: [
            "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1600",
            "https://images.unsplash.com/photo-1492288991661-058aa541ff43?auto=format&fit=crop&q=80&w=1600"
        ],
        impactImage: "https://images.unsplash.com/photo-1621257912423-e45f9411d619?auto=format&fit=crop&q=80&w=2000"
    },
    {
        id: "project-six",
        slug: "project-six",
        title: "Project Six",
        year: "2022",
        type: "Mobile App",
        image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&q=80&w=800",
        client: "Zeta Mobility",
        service: "Mobile App",
        description: "A seamless transit tracking and ticketing application for urban commuters.",
        heroImage: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&q=80&w=2000",
        challenge: {
            text: "Commuters found the existing app confusing layout leading to missed trains.",
            subtext: ""
        },
        solution: {
            text: "A completely redesigned interface focusing strictly on real-time data and quick access actions.",
            subtext: ""
        },
        result: "App Store rating went from 2.1 to 4.8 within three months.",
        gridImages: [
            "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=1000"
        ],
        stackImages: [
            "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1600",
            "https://images.unsplash.com/photo-1492288991661-058aa541ff43?auto=format&fit=crop&q=80&w=1600"
        ],
        impactImage: "https://images.unsplash.com/photo-1621257912423-e45f9411d619?auto=format&fit=crop&q=80&w=2000"
    },
    {
        id: "gift-ease-app",
        slug: "gift-ease",
        title: "Gift Suggestion App",
        year: "2026",
        type: "Mobile App",
        image: "/images/work/giftease.webp",
        client: "Gift Ease",
        service: "Mobile App",
        description: "A smart gifting app that curates personalized gift suggestions based on recipient preferences.",
        heroImage: "/images/work/giftease.webp",
        challenge: {
            text: "Users often struggle to find meaningful gifts within short timeframes.",
            subtext: "The experience of navigating through endless e-commerce options is overwhelming."
        },
        solution: {
            text: "A clean, intuitive mobile app featuring quick preference quizzes and AI-driven recommendations.",
            subtext: "Incorporated a vibrant pink-themed UI to evoke the joyful nature of gifting."
        },
        result: "Gift Ease streamlined the gifting process and significantly reduced the time taken to find a perfect present.",
        gridImages: [
            "/images/work/giftease.webp",
            "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&q=80&w=1000"
        ],
        stackImages: [
            "/images/work/giftease.webp",
            "https://images.unsplash.com/photo-1540200049848-d9813ea0e120?auto=format&fit=crop&q=80&w=1600"
        ],
        impactImage: "/images/work/giftease.webp"
    }
];

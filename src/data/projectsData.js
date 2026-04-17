export const projectsData = [
    {
        id: "project-one",
        slug: "dashboard-design",
        title: "Console UI Redesign",
        year: "2025",
        type: "Product Design",
        time: "5 Weeks",
        category: "Product & UI/UX",
        image: "/images/work/work1.webp",
        client: "Pickcel",
        service: "Product Redesign",
        description: "A redesign of the Pickcel console experience to improve clarity, usability, and efficiency in managing digital signage at scale.",
        heroImage: "/images/work/work1.webp",
        challenge: {
            text: "Users struggled to organize and update content efficiently.",
            subtext: "Key features like bulk actions and real-time previews were missing or hard to access, causing friction."
        },
        solution: {
            text: "We restructured the UI to focus on clarity, organization, and scalability.",
            subtext: "Introduced structured systems, central dashboards, and guided real-time workflows."
        },
        result: "A streamlined console that reduces complexity and helps users focus on tasks rather than navigating.",
        gridImages: [
            "/images/work/old_dashboard_ui.webp",
            "/images/work/work1.webp"
        ],
        stackImages: [
            "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1600",
            "https://images.unsplash.com/photo-1492288991661-058aa541ff43?auto=format&fit=crop&q=80&w=1600"
        ],
        impactImage: "https://images.unsplash.com/photo-1621257912423-e45f9411d619?auto=format&fit=crop&q=80&w=2000",
        caseStudy: {
            goals: [
                "Create a centralized dashboard with key data visible at a glance",
                "Improve content organization through structured systems",
                "Simplify UI and workflows for better usability",
                "Provide guidance to help users navigate the platform confidently"
            ],
            targetUsers: [
                "Businesses worldwide using digital signage",
                "Existing Pickcel users needing to scale efficiently",
                "New customers managing complex screen networks"
            ],
            understandingUsers: [
                "Observed existing Pickcel users through internal tools to understand real workflows and challenges.",
                "Gathered insights from onboarding sessions conducted by sales and support teams.",
                "Analyzed support tickets and user feedback to identify recurring usability issues.",
                "Conducted competitor analysis to benchmark features and identify gaps."
            ],
            impactOnUsers: [
                "Increased visibility across all key metrics in a single view.",
                "Faster decision-making with real-time system insights.",
                "Simplified workflows through better data grouping and layout.",
                "Improved efficiency with quicker access to critical actions."
            ],
            challengeBullets: [
                { icon: "📉", text: "Users struggled to organize and update content efficiently, leading to delays and errors." },
                { icon: "⚠️", text: "New users found the platform difficult without guided onboarding." },
                { icon: "🚧", text: "Key features like bulk actions and real-time previews were missing or hard to access." },
                { icon: "🛑", text: "Users preferred simple workflows but were met with complex customization options." }
            ],
            solutions: [
                {
                    num: "1/3",
                    title: "Dashboard Overview",
                    desc: "Centralized view displaying total screens, active screens, storage usage, and schedules. Real-time analytics, an interactive map, and a personalized feedback module were added.",
                    rationale: "Increased visibility across all key metrics in a single view enables faster decision-making and simplified workflows through better data grouping.",
                    mockupBg: "#111",
                    mockupImg: "/images/work/1.webp",
                    mockupCaption: "Dashboard Overview with Metrics & Analytics"
                },
                {
                    num: "2/3",
                    title: "Redesigning Media Page",
                    desc: "Introduced folder-based media organization, a simplified 'Move Media' flow with drag-and-drop, and faster searching within the composition editor.",
                    rationale: "Faster media management with reduced organization time, improved discoverability, and a scalable system for large media libraries.",
                    mockupBg: "#1B2B4E",
                    mockupImg: "/images/work/2.webp",
                    mockupCaption: "Media Library with Folder Organization"
                },
                {
                    num: "3/3",
                    title: "Individual App Page",
                    desc: "Clean, structured layout with logical input grouping and a live preview panel for instant visual feedback. Integrated theme options and user guidance.",
                    rationale: "The live preview and logical grouping significantly reduced the complex and time-consuming setup process, increasing user confidence.",
                    mockupBg: "#2D1B4E",
                    mockupImg: [
                        "/images/work/3.webp",
                        "/images/work/4.webp"
                    ],
                    mockupCaption: [
                        "Individual App Page Before",
                        "Individual App Page After"
                    ]
                }
            ],
            nextSteps: [
                "Refine complex bulk-action flows based on post-launch metrics.",
                "Extend live preview rendering capability to multi-zone layouts.",
                "Continuously monitor user task-completion times across the new media organizer."
            ],
            finalOutcome: "A streamlined, scalable console experience that reduces complexity and helps users focus on tasks rather than navigating the interface. The redesign improves efficiency, usability, and confidence across all user types — from beginners to enterprise teams.",
            endNote: "The project involved multiple iterations and challenges, resulting in a significantly improved user experience aligned with real user needs."
        }
    },
    {
        id: "pickcel-go-app-design",
        slug: "pickcel-go-app-design",
        title: "Pickcel Mobile Redesign",
        year: "2024",
        type: "Mobile App",
        image: "/images/work/media-list.webp",
        client: "Pickcel",
        service: "Mobile UI/UX",
        description: "Redesigning the Pickcel mobile experience to make it modern, accessible, and truly usable for on-the-go management.\n\nThe existing mobile app felt outdated, visually heavy, and not optimized for mobile usage. It lacked clarity, accessibility, and critical functionality needed for real-time monitoring.",
        heroImage: "/images/work/media-list.webp",
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
                "Modernize the visual design for better readability and trust",
                "Improve accessibility and mobile usability",
                "Surface real-time status and scheduling clearly",
                "Enable quick actions with minimal steps"
            ],
            targetUsers: [
                "Business owners and operators managing digital signage networks who need quick, reliable access on mobile.",
                "Manage a few screens across stores or offices. Need quick visibility and simple controls without complexity.",
                "Needs to push updates instantly (e.g., offers, announcements) without going through long workflows."
            ],
            challengeBullets: [
                { icon: "📱", text: "Outdated, dark UI that reduced readability and usability" },
                { icon: "👍", text: "Poor mobile accessibility and touch ergonomics" },
                { icon: "🛑", text: "No clear visibility into screen status (online/offline)" },
                { icon: "⏳", text: "Scheduling information was missing or hard to access" },
                { icon: "⚠️", text: "Limited ability to monitor or take action quickly" }
            ],
            understandingUsers: [
                "Users open mobile primarily for quick checks, not deep workflows",
                "Screen status (online/offline) is the most critical information",
                "Scheduling visibility is essential for confidence in content delivery",
                "Users need fast actions, not complex flows"
            ],
            solutions: [
                {
                    num: "1/6",
                    title: "Visual Redesign",
                    desc: "Shifted from dark, heavy UI to a clean and modern interface. Improved contrast, spacing, and typography for better readability.",
                    rationale: "Designed with mobile-first accessibility in mind.",
                    mockupType: "clay",
                    mockupImg: [
                        "/images/work/1-pickcel-go.webp",
                        "/images/work/media-list.webp"
                    ]
                },
                {
                    num: "2/6",
                    title: "Dashboard Experience",
                    desc: "Clear overview of key metrics (active, offline, total screens) and real-time online/offline status indicators.",
                    rationale: "Immediate visibility of issues and system health.",
                    mockupType: "clay",
                    mockupImg: [
                        "/images/work/screen-management.webp",
                        "/images/work/screen-list.webp"
                    ]
                },
                {
                    num: "3/6",
                    title: "Scheduling Visibility",
                    desc: "Introduced clear scheduling information for each screen so users can quickly verify what is playing and when.",
                    rationale: "Reduced uncertainty around content delivery.",
                    mockupType: "clay",
                    mockupImg: [
                        "/images/work/composition-details.webp"
                    ]
                },
                {
                    num: "4/6",
                    title: "Screen Details",
                    desc: "Detailed screen view with status, last active time, and performance insights.",
                    rationale: "Better hierarchy to surface important information first.",
                    mockupType: "clay",
                    isScrollable: true,
                    noHover: true,
                    mockupImg: [
                        "/images/work/screen-details.webp"
                    ]
                },
          
            ],
            impactOnUsers: [
                "Improved readability and accessibility across the app",
                "Faster access to critical information like screen status and schedules",
                "Reduced time to perform key actions",
                "Increased confidence in monitoring and managing screens remotely",
                "Transformed mobile from a weak companion into a reliable tool"
            ],
            nextSteps: [
                "Prioritized clarity over visual heaviness",
                "Focused on real-world usage: quick checks and fast actions",
                "Emphasized status visibility (online/offline) as a primary element",
                "Designed for speed, simplicity, and accessibility"
            ],
            finalOutcome: "A modern, accessible mobile experience that allows users to monitor, manage, and act instantly — without needing to switch to desktop.",
            endNote: "The redesign addressed core usability gaps and brought mobile to parity with real user needs, making it a critical part of the Pickcel ecosystem.",
           
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

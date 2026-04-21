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
        isLocked: true,
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
        title: "OctaLume IoT Dashboard",
        year: "2024",
        type: "UX Design, UI Design, Branding, Design System",
        image: "/images/work/work4.webp",
        client: "OctaLume",
        service: "UX Design, UI Design, Branding, Design System",
        category: "Smart Home Technology",
        time: "6 Weeks",
        description: "OctaLume is an AI-powered IoT management dashboard designed to provide real-time insights, intelligent alerting, and seamless device control — helping users monitor and optimize smart environments efficiently. IoT dashboards today fail at the basics: users are overwhelmed by excessive data, critical issues go unnoticed, and interfaces lack the clarity needed to act fast.",
        heroImage: "/images/work/work4.webp",
        backgroundImages: [
            {
                heading: "Problems",
                desc: "I've discovered a common issue that many users may face in IoT dashboards.",
                columns: [
                    "Overwhelmed by the sheer amount of information presented",
                    "Notify users of important events, anomalies, or issues with their devices",
                    "IoT dashboards often lack proper contrast and hierarchy, making them hard to use."
                ]
            }
        ],
        visualSections: [
            {
                heading: "Branding & Logo",
                desc: "Illuminating spaces with an 8-pointed star, Octalume combines Octa (eight points) and Lume (light) to symbolize smart, advanced lighting solutions.",
                image: "/images/work/2.png"
            },
            {
                heading: "Typography & Color",
                desc: "Lufga is a modern sans-serif typeface designed with a clean, geometric, and minimalist style. It features rounded letterforms, giving it a friendly and approachable look.",
                image: "/images/work/3.png"
            }
        ],
        challenge: {
            text: "IoT dashboards overwhelm users with data, miss critical alerts, and lack the visual hierarchy needed for fast decision-making.",
            subtext: "Users needed a way to quickly scan, understand, and act on smart environment data without cognitive overload."
        },
        solution: {
            text: "Designed a system that simplifies complex IoT data, surfaces important insights instantly, enables quick action, and scales across devices and teams.",
            subtext: "Room-based grouping, real-time alerts, strong visual hierarchy, and a robust design token system formed the core of the solution."
        },
        result: "The redesigned dashboard significantly reduced cognitive overload, enabled faster response to critical issues, improved usability across the system, and established a consistent, scalable UI architecture.",
        gridImages: [
            "/images/work/work4.webp",
            "/images/work/work4.webp"
        ],
        stackImages: [
            "/images/work/work4.webp",
            "/images/work/work4.webp"
        ],
        impactImage: "/images/work/work4.webp",
        caseStudy: {
            goals: [
                "Simplify complex IoT data so users can scan and act quickly",
                "Surface important alerts and insights instantly without noise",
                "Establish a strong visual hierarchy for fast decision-making",
                "Build a scalable design system that works across devices and teams"
            ],
            targetUsers: [
                "Homeowners managing multiple smart devices across rooms",
                "Facility managers monitoring energy and network systems",
                "Teams requiring consistent real-time device visibility",
            ],
            challengeBullets: [
                { icon: "🛑", text: "Information Overload — too much data with no prioritization, leaving users confused and fatigued" },
                { icon: "🛑", text: "No Intelligent Alerts — users miss critical events like water leaks or open windows because alerts are buried" },
                { icon: "🛑", text: "Weak Visual Hierarchy — hard to scan and understand; no clear contrast or structure to guide the eye" },
                { icon: "🛑", text: "Slow Decision-Making — the lack of structure forces users to think too hard before they can act" }
            ],
            solutionsDesc: "I identified key friction points in existing IoT dashboards and designed targeted solutions to improve clarity, usability, and responsiveness.",
            solutions: [
                {
                    num: "1/4",
                    title: "Navigation Simplified",
                    desc: "All elements are grouped logically by rooms and usage context, making navigation predictable and easy to scan.",
                    rationale: "This reduces cognitive load and helps users find what they need without friction.",
                    mockupImg: "/images/work/nav-simplified.png"
                },
                {
                    num: "2/4",
                    title: "Warnings & Alerts",
                    desc: "A real-time alert system highlights critical issues instantly through notifications and a dedicated alert section.",
                    rationale: "This ensures users don’t miss important events and can take immediate action.",
                    mockupImg: "/images/work/warning-alert.png"
                },
                {
                    num: "3/4",
                    title: "Clear Typography & Better Hierarchy",
                    desc: "A strong visual hierarchy was established using typography, spacing, and contrast.",
                    rationale: "Important data stands out, allowing users to quickly understand insights without scanning the entire screen.",
                    mockupImg: "/images/work/clear-typo.png"
                },
                {
                    num: "4/4",
                    title: "Time-Sensitive Device Indicators",
                    desc: "Gradient progress bars and time-based indicators communicate device status and urgency.",
                    rationale: "This gives users immediate feedback on active processes and remaining time.",
                    mockupImg: "/images/work/time-sensitve.png"
                }
            ],
            designSystemSection: {
                heading: "Why Design Tokens?",
                why: "The goal of using design tokens is to bridge the gap between design and development. Tokens allow designers and developers to speak the same visual language while ensuring consistency across platforms and devices. This approach also simplifies theming, facilitates brand updates, and reduces visual bugs.",
                benefits: [
                    "Single source of truth",
                    "Scalable across teams and platforms",
                    "Easier theming and customization",
                    "Improved collaboration between design and dev"
                ],
                howItScales: [
                    "Modular architecture — tokens are layered (Global → Base → Semantic)",
                    "Update once → reflect everywhere across all screens and components",
                    "Supports white-labeling — swapping primary-default changes the full brand",
                    "Reduces design debt — no more one-off hardcoded values",
                    "Developers consume only semantic tokens, fully decoupled from raw values"
                ],
                colorLanguage: {
                    title: "Color Language",
                    desc: "Design tokens are the building blocks of a cohesive and scalable design system. In this project, I delve into the world of design tokens, exploring how they can streamline the design process and enhance consistency across various platforms.",
                    image: "/images/work/3re.png"
                },
                architectureSection: {
                    title: "Design Token Architecture",
                    desc: "Design tokens are the building blocks of a cohesive and scalable design system. In this project, I delve into the world of design tokens, exploring how they can streamline the design process and enhance consistency across various platforms.",
                    image: "/images/work/4re.png"
                },

                tokenLayers: [
                    {
                        title: "Global Tokens",
                        desc: "Global tokens are the raw design values that serve as the foundational palette for the entire system. These include brand colors like {b-500:#DFFE52}, {b-400:#E8FF8E} neutrals from {neutral-0:#FFFFFF}, {neutral-900:#111111} and status indicators {success:#4CAF50}, {warning:#FFC107} and {danger:#F44336} These values are universal and not tied to any specific UI component or context."
                    },
                    {
                        title: "Base Tokens",
                        desc: "Base tokens derive from global tokens and organize them into meaningful categories like {primary-default:#DFFE52} {background:#000000} or {icon-default:#FFFFFF} They introduce structure by mapping raw values to usage-based roles, while still remaining neutral. This layer provides a flexible bridge between raw values and their intended functional purpose."
                    },
                    {
                        title: "Semantic Tokens",
                        desc: "Semantic tokens are the most context-aware layer, assigning base tokens to specific UI roles—like {primary-button-fill:#DFFE52} {tertiary-button-border:#DFFE52} {primary-container-bg:#1A1A1A} are directly used in components to maintain clarity, consistency, and theme flexibility. They enable seamless theme swapping without changing component logic."
                    }
                ],
                systemImages: [
                    "/images/work/laptop.png",
                    "/images/work/comp-highlight.png"
                ],
                handoffSection: {
                    title: "Token Integration",
                    desc: "To ensure seamless handoff between design and development, I structured the token system in a platform-agnostic JSON format. This allowed easy integration into both design tools like Figma (via plugins such as Tokens Studio) and front-end codebases using CSS variables or design token libraries. By abstracting values into global, base, and semantic layers, developers could consume tokens at the appropriate level of abstraction. For example, component styles referenced semantic tokens like primary-button-fill, while the underlying value remained consistent and manageable across themes. This modular approach also made the system scalable and easy to maintain over time.",
                    code: {
                        "globalTokens": {
                            "b-500": "#dffe52",
                            "neutral-0": "#ffffff",
                            "neutral-50": "#fafafa",
                            "neutral-100": "#f5f5f5",
                            "neutral-200": "#e5e5e5",
                            "neutral-300": "#d4d4d4",
                            "neutral-400": "#a3a3a3",
                            "neutral-500": "#737373",
                            "neutral-600": "#525252",
                            "neutral-700": "#404040",
                            "neutral-800": "#2f2f2f",
                            "neutral-900": "#171717",
                            "black": "#000000",
                            "success": "#4caf50",
                            "warning": "#ffeb3b",
                            "danger": "#ff4545"
                        },
                        "baseTokens": {
                            "primary-default": "{b-500}",
                            "secondary-default": "{neutral-900}",
                            "primary-text-light": "{neutral-100}",
                            "primary-text-dark": "{neutral-900}",
                            "secondary-text": "{neutral-600}",
                            "primary-container-text": "{neutral-800}",
                            "secondary-container-text": "{neutral-800}",
                            "background": "{black}",
                            "icon-default": "{neutral-800}",
                            "icon-on-black": "{neutral-100}"
                        },
                        "semanticTokens": {
                            "primary-button-fill": "{primary-default}"
                        }
                    }
                },
                scalingSection: {
                    title: "How it Scales",
                    desc: "This token system is designed to be modular and easy to extend. By separating raw values (global), utility mappings (base), and context-specific meanings (semantic), updates can be made at any level without breaking visual consistency. As the product evolves, new components can be built quickly by referencing existing semantic tokens—ensuring a cohesive UI without adding visual debt.",
                    images: ["/images/work/scaled.png"],
                    bottomText: "I've updated the {primary-default:#00E5FF} {primary-container-bg:#1A1A1A} in design and i would refect on the code, See how easy and simple it is"
                },
                outcomeSection: {
                    title: "Outcome & Impact",
                    desc: "The final outcome is a production-ready UI system powered by design tokens — enabling fast, scalable, and consistent implementation across the interface. By abstracting styling logic into a flexible token structure, the product is now easier to maintain, expand, and evolve with minimal design debt.",
                    topImage: "/images/work/octalume-dashboard.png",
                    bottomImage: "/images/work/last.png"
                }
            }
        }
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

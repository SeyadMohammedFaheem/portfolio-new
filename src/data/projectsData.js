export const projectsData = [
    {
        id: "project-one",
        slug: "dashboard-design",
        title: "Console UI Redesign",
        year: "2025",
        type: "Product Design",
        time: "5 Weeks",
        category: "Product & UI/UX",
        image: "/images/work/work1.jpg",
        client: "Pickcel",
        service: "Product Redesign",
        description: "A redesign of the Pickcel console experience to improve clarity, usability, and efficiency in managing digital signage at scale.",
        heroImage: "/images/work/work1.jpg",
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
            "/images/work/old_dashboard_ui.png",
            "/images/work/work1.jpg"
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
                    mockupImg: "/images/work/1.jpg",
                    mockupCaption: "Dashboard Overview with Metrics & Analytics"
                },
                {
                    num: "2/3",
                    title: "Redesigning Media Page",
                    desc: "Introduced folder-based media organization, a simplified 'Move Media' flow with drag-and-drop, and faster searching within the composition editor.",
                    rationale: "Faster media management with reduced organization time, improved discoverability, and a scalable system for large media libraries.",
                    mockupBg: "#1B2B4E",
                    mockupImg: "/images/work/2.jpg",
                    mockupCaption: "Media Library with Folder Organization"
                },
                {
                    num: "3/3",
                    title: "Individual App Page",
                    desc: "Clean, structured layout with logical input grouping and a live preview panel for instant visual feedback. Integrated theme options and user guidance.",
                    rationale: "The live preview and logical grouping significantly reduced the complex and time-consuming setup process, increasing user confidence.",
                    mockupBg: "#2D1B4E",
                    mockupImg: [
                        "/images/work/3.jpg",
                        "/images/work/4.jpg"
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
        year: "2025",
        type: "Mobile App",
        isSimpleShowcase: false,
        image: "/images/work/work2.jpg",
        client: "Pickcel",
        service: "Mobile UI/UX",
        description: "Redesigning the Pickcel mobile experience to make it modern, accessible, and truly usable for on-the-go management.\n\nThe existing mobile app felt outdated, visually heavy, and not optimized for mobile usage. It lacked clarity, accessibility, and critical functionality needed for real-time monitoring.",
        heroImage: "/images/work/work2.jpg",
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
                        "/images/work/1-pickcel-go.png",
                        "/images/work/media-list.jpg"
                    ]
                },
                {
                    num: "2/6",
                    title: "Dashboard Experience",
                    desc: "Clear overview of key metrics (active, offline, total screens) and real-time online/offline status indicators.",
                    rationale: "Immediate visibility of issues and system health.",
                    mockupType: "clay",
                    mockupImg: [
                        "/images/work/screen-management.jpg",
                        "/images/work/screen-list.jpg"
                    ]
                },
                {
                    num: "3/6",
                    title: "Scheduling Visibility",
                    desc: "Introduced clear scheduling information for each screen so users can quickly verify what is playing and when.",
                    rationale: "Reduced uncertainty around content delivery.",
                    mockupType: "clay",
                    mockupImg: [
                        "/images/work/composition-details.jpg"
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
                        "/images/work/screen-details.jpg"
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
        year: "2024",
        type: "Web & Strategy",
        isSimpleShowcase: false,
        image: "/images/work/work3.jpg",
        client: "Pickcel",
        service: "Website Design, Strategy",
        time: "4 Weeks",
        description: "Pickcel is a cloud-based digital signage platform used by businesses to manage and display content across screens. The goal of this redesign was to modernize the marketing website, improve clarity, and create a stronger conversion-focused experience for enterprise users.\n\nThe previous website contained valuable information, but the experience felt visually crowded and difficult to navigate. Important messaging was buried under dense layouts, making it harder for users to quickly understand the product and its benefits.\n\nThe redesigned website focuses on simplicity, scalability, and trust — helping users understand the product faster while creating a cleaner and more modern brand experience.",
        heroImage: "/images/work/work3.jpg",
        challenge: {
            text: "The old website faced multiple usability and communication issues. The hero section lacked a strong and immediate value proposition. Too much information competed for attention at the same time. Weak visual hierarchy made scanning difficult. CTAs were inconsistent and not strategically placed. Sections felt disconnected, reducing storytelling flow. The overall UI felt outdated for a modern SaaS product. Trust indicators such as enterprise adoption and certifications were not emphasized enough.",
            subtext: "As a result, the experience created friction for users trying to evaluate the product quickly."
        },
        solution: {
            text: "The redesign process focused on simplifying the experience without removing important information. Instead of overwhelming users with content-heavy sections, the new design introduces clearer spacing, stronger hierarchy, and focused messaging.",
            subtext: "Every section was redesigned to answer a specific user question: What is the product? Why should businesses trust it? What problems does it solve? Which industries use it? How can users get started? This created a more guided and conversion-oriented journey."
        },
        result: "The redesign transformed the website into a cleaner, more modern, and conversion-focused experience. The new design improved product clarity, visual consistency, user flow, trust perception, and overall usability.",
        caseStudy: {
            targetUsers: [
                "Enterprise decision-makers (IT, Operations, Marketing)",
                "SMB owners exploring digital signage solutions",
                "Agencies and system integrators"
            ],
            goals: [
                "Improve first impressions and product understanding",
                "Create a cleaner and more structured layout",
                "Increase visibility of key actions such as free trial and demo booking",
                "Build credibility for enterprise customers",
                "Improve readability and visual consistency",
                "Design a scalable system for future website growth"
            ],
            challengeBullets: [
                { icon: "🛑", text: "The hero section lacked a strong and immediate value proposition" },
                { icon: "🛑", text: "Too much information competed for attention at the same time" },
                { icon: "🛑", text: "Weak visual hierarchy made scanning difficult" },
                { icon: "🛑", text: "CTAs were inconsistent and not strategically placed" },
                { icon: "🛑", text: "Sections felt disconnected, reducing storytelling flow" },
                { icon: "🛑", text: "The overall UI felt outdated for a modern SaaS product" },
                { icon: "🛑", text: "Trust indicators such as enterprise adoption and certifications were not emphasized enough" }
            ],
            solutions: [
                {
                    num: '1/4',
                    title: 'Hero Section Redesign',
                    desc: 'The old hero section lacked visual clarity and did not immediately communicate the product value. The new hero section introduces: A clear headline focused on scalability and simplicity, Strong primary and secondary CTAs, Cleaner composition with more whitespace, Product-focused visuals instead of cluttered elements.',
                    tags: ['Clarity', 'Action-Oriented', 'Value Prop'],
                    rationale: 'This helped create a stronger first impression and made the website easier to understand within seconds.',
                    mockupBg: '#7A1C1C',
                    mockupImg: '/images/work/hero-section-redesign.png',
                    mockupCaption: 'The new hero section prioritizes clarity and immediate conversion.',
                },
                {
                    num: '2/4',
                    title: 'Improved Visual Hierarchy',
                    desc: 'One of the biggest improvements was restructuring the content hierarchy. The old design contained several visually competing sections, making it difficult for users to identify what mattered most. The redesigned layout uses: Clear section separation, Better typography scaling, Consistent spacing, Simplified card layouts, Reduced visual noise.',
                    tags: ['Information Architecture', 'Readability'],
                    rationale: 'This improved scanability and made the content easier to consume.',
                    mockupBg: '#1B2B4E',
                    mockupImg: [
                        '/images/work/improved-visual-hierarchy-old.png',
                        '/images/work/improved-visual-hierarchy-new.png'
                    ],
                    mockupCaption: [
                        'BEFORE: Cluttered layout with competing elements',
                        'AFTER: Structured hierarchy with clear, breathable sections'
                    ],
                },
                {
                    num: '3/4',
                    title: 'Conversion-Focused Experience',
                    desc: 'The redesign placed stronger emphasis on conversion. In the old website, CTAs were less noticeable and inconsistently placed. The new experience introduces: Repeated high-visibility CTA buttons, Better CTA positioning after key sections, Clear user actions such as “Start Free Trial” and “Book Demo”, Stronger contrast using the brand color.',
                    tags: ['Conversion Rate Optimization', 'Visual Hierarchy'],
                    rationale: 'This created a more intentional conversion flow throughout the page.',
                    mockupBg: '#2D1B4E',
                    mockupImg: '/images/work/conversion-focused-experience.png',
                    mockupCaption: 'Persistent, high-contrast CTAs integrated seamlessly into the product storytelling.',
                },
                {
                    num: '4/4',
                    title: 'Trust & Credibility',
                    desc: 'Since Pickcel serves enterprise customers, trust became a major focus of the redesign. The updated website highlights: Client logos, Usage statistics, Enterprise certifications, Testimonials, Industry-specific solutions.',
                    tags: ['Social Proof', 'Reliability'],
                    rationale: 'These elements were strategically moved higher in the page structure to reinforce credibility earlier in the user journey.',
                    mockupBg: '#1B3A2B',
                    mockupImg: '/images/work/trust-credibility.png',
                    mockupCaption: 'Enterprise trust signals and usage metrics placed prominently to build credibility.',
                }
            ],
            learnings: [
                "Clarity beats creativity in SaaS landing pages",
                "Strong hierarchy is more important than adding more content",
                "Repetition of CTAs is necessary, not redundant",
                "Trust signals should appear early, not at the bottom",
                "Simplification directly improves perceived value"
            ],
            nextSteps: [
                "A/B test hero messaging and CTA copy",
                "Add interactive product preview",
                "Personalize sections based on user type (SMB vs Enterprise)",
                "Improve SEO structure for feature pages"
            ],
            finalOutcome: "The redesign transformed the website into a cleaner, more modern, and conversion-focused experience. The final result better reflects Pickcel’s position as a scalable enterprise digital signage platform while providing users with a more focused and intuitive browsing experience.",
            impactOnUsers: [
                "Product clarity",
                "Visual consistency",
                "User flow",
                "Trust perception",
                "CTA visibility",
                "Overall usability"
            ]
        }
    },
    {
        id: "octalume-iot-dashboard",
        slug: "octalume-iot-dashboard",
        title: "OctaLume IoT Dashboard",
        year: "2024",
        type: "Design System",
        image: "/images/work/work4.jpg",
        client: "OctaLume",
        liveWebsiteLink: "https://octalume.vercel.app/",
        service: "UX Design, UI Design, Branding, Design System",
        category: "Smart Home Technology",
        time: "6 Weeks",
        description: "OctaLume is an AI-powered IoT management dashboard designed to provide real-time insights, intelligent alerting, and seamless device control — helping users monitor and optimize smart environments efficiently. IoT dashboards today fail at the basics: users are overwhelmed by excessive data, critical issues go unnoticed, and interfaces lack the clarity needed to act fast.",
        heroImage: "/images/work/work4.jpg",
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
            "/images/work/work4.jpg",
            "/images/work/work4.jpg"
        ],
        stackImages: [
            "/images/work/work4.jpg",
            "/images/work/work4.jpg"
        ],
        impactImage: "/images/work/work4.jpg",
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
        id: "gift-ease-app",
        slug: "gift-ease",
        title: "GiftEase-Gifting App",
        year: "2026",
        type: "Mobile App",
        image: "/images/work/giftease.png",
        client: "Gift Ease",
        service: "Mobile App",
        description: "A smart gifting app that curates personalized gift suggestions based on recipient preferences.",
        heroImage: "/images/work/giftease.png",
        challenge: {
            text: "Users often struggle to find meaningful gifts within short timeframes.",
            subtext: "The experience of navigating through endless e-commerce options is overwhelming."
        },
        solution: {
            text: "A clean, intuitive mobile app featuring quick preference quizzes and AI-driven recommendations.",
            subtext: "Incorporated a vibrant pink-themed UI to evoke the joyful nature of gifting."
        },
        result: "Gift Ease streamlined the gifting process and significantly reduced the time taken to find a perfect present.",
        caseStudy: {
            goals: [
                "Eliminate decision fatigue through guided discovery",
                "Create an emotionally engaging and joyful user experience",
                "Provide highly personalized gift recommendations",
                "Simplify the transition from discovery to purchase"
            ],
            targetUsers: [
                "Busy professionals who value efficiency in gifting",
                "Users struggling with 'Gift-Giver's block' or decision fatigue",
                "Millennials and Gen Z looking for curated, non-generic ideas",
                "People managing multiple special occasions simultaneously"
            ],
            understandingUsers: [
                "Identified that users feel most stressed about the 'relevance' of a gift, not just the price.",
                "Discovered that 70% of users prefer a guided experience over an open-ended search bar.",
                "Learned that emotional connection is the primary driver for high-value gift purchases.",
                "Observed that mobile-first speed is critical for last-minute gift shopping."
            ],
            designProcess: [
                {
                    heading: "1. Initial Ideations",
                    desc: "The project began with rapid sketching and mind-mapping to explore different ways of categorization and recommendation logic. These rough ideas formed the foundation of the final product.",
                    image: [
                        "/images/work/iteration 1.png",
                        "/images/work/iteration 2.png",
                        "/images/work/iteration 3.png",
                        "/images/work/iteration 4.png",
                        "/images/work/iteration 5.png"
                    ]
                },
                {
                    heading: "2. Wireframes",
                    desc: "Translating the rough sketches into low-fidelity wireframes to establish the user flow and information architecture, ensuring that the 'Personalized Quiz' and 'Discovery Hubs' felt intuitive.",
                    scrollStyle: 'auto',
                    image: [
                        "/images/work/Onboarding-1.png",
                        "/images/work/Onboarding-2.png",
                        "/images/work/Onboarding-3.png",
                        "/images/work/Home Page-4.png",
                        "/images/work/Product Listing Page-5.png",
                        "/images/work/Product Listing Page-6.png",
                        "/images/work/Checkout-7.png",
                        "/images/work/Payment option-8.png",
                        "/images/work/Payment Successful-9.png"
                    ]
                },
                {
                    heading: "3. Typography",
                    desc: "The typography system uses 'Inter' to ensure clean, high-legibility communication across all mobile screens. The hierarchy is carefully balanced to guide users from bold headings to digestible body content.",
                    typography: {
                        fontFamily: "Inter",
                        weights: ["Regular", "Medium", "SemiBold", "Bold"],
                        examples: [
                            { label: "Heading H1", size: "28px", weight: "Bold", text: "Heading H1" },
                            { label: "Heading H2", size: "24px", weight: "Bold", text: "Heading H2" },
                            { label: "Heading H3", size: "18px", weight: "Bold", text: "Heading H3" },
                            { label: "Heading H4", size: "16px", weight: "Bold", text: "Heading H4" },
                            { label: "Paragraph Default", size: "14px", weight: "Medium", text: "Paragraph Default" },
                            { label: "Paragraph Small", size: "12px", weight: "Medium", text: "Paragraph Small" },
                            { label: "Paragraph Extra Small", size: "10px", weight: "Medium", text: "Paragraph Extra Small" }
                        ]
                    }
                },
                {
                    heading: "4. Colors",
                    desc: "A comprehensive color system featuring primary branding tones, feedback states, and a refined neutral palette for text and interactive elements.",
                    colors: [
                        // Row 1
                        { name: "Primary", hex: "#D9416F", type: "Main" },
                        { name: "Primary Dark", hex: "#9E2F51", type: "Main" },
                        { name: "Secondary", hex: "#F6F6F6", type: "Main" },
                        { name: "White", hex: "#FFFFFF", type: "Main" },
                        { name: "Purple", hex: "#924FE9", type: "Main" },
                        { name: "Light Purple", hex: "#EFE2FF", type: "Main" },
                        { name: "Yellow", hex: "#F6CC3E", type: "Main" },
                        { name: "Dark Grey", hex: "#BEBEBE", type: "Main" },
                        // Row 2
                        { name: "Success Bg", hex: "#CEFFE6", type: "Feedback" },
                        { name: "Warning Bg", hex: "#FFE694", type: "Feedback" },
                        { name: "Error Bg", hex: "#FFD8D8", type: "Feedback" },
                        { name: "Grey Bg", hex: "#F6F6F6", type: "Feedback" },
                        // Row 3
                        { name: "Primary Text", hex: "#333333", type: "UI" },
                        { name: "Secondary Text", hex: "#606060", type: "UI" },
                        { name: "Placeholder", hex: "#858585", type: "UI" },
                        { name: "Disabled Text", hex: "#ADADAD", type: "UI" },
                        { name: "Success Text", hex: "#1C925C", type: "UI" },
                        { name: "Warning Text", hex: "#E0B113", type: "UI" },
                        { name: "Error Text", hex: "#CB3A3A", type: "UI" },
                        { name: "Link Text", hex: "#4971FF", type: "UI" }
                    ]
                },
                {
                    heading: "5. Icons",
                    desc: "Designed a custom set of line icons with a consistent stroke weight. These icons were crafted to be intuitive and visually light, complementing the 'Inter' typography and the rounded UI elements.",
                    icons: [
                        { name: "Home", path: "/images/work/icons/HouseLine.svg" },
                        { name: "Search", path: "/images/work/icons/MagnifyingGlass.svg" },
                        { name: "Gift", path: "/images/work/icons/Gift.svg" },
                        { name: "Calendar", path: "/images/work/icons/CalendarBlank.svg" },
                        { name: "Location", path: "/images/work/icons/MapPin.svg" },
                        { name: "Clock", path: "/images/work/icons/Clock.svg" },
                        { name: "Filter", path: "/images/work/icons/Sliders.svg" },
                        { name: "Menu", path: "/images/work/icons/List.svg" },
                        { name: "Payments", path: "/images/work/icons/Cards.svg" },
                        { name: "Banking", path: "/images/work/icons/Bank.svg" },
                        { name: "Lifestyle", path: "/images/work/icons/TShirt.svg" },
                        { name: "Entertainment", path: "/images/work/icons/Ticket.svg" },
                        { name: "Sports", path: "/images/work/icons/Volleyball.svg" },
                        { name: "Education", path: "/images/work/icons/Books.svg" },
                        { name: "Electronics", path: "/images/work/icons/Monitor.svg" },
                        { name: "Back", path: "/images/work/icons/ArrowLeft.svg" }
                    ]
                },
                {
                    heading: "6. Onboarding Illustration",
                    desc: "Engaging, story-driven illustrations that guide new users through the app's value proposition, making the first interaction feel warm and inviting. Each screen introduces a core benefit of the Gift Ease ecosystem.",
                    gridStyle: 'compact',
                    image: [
                        "/images/work/app-onboarding-1.png",
                        "/images/work/app-onboarding-2.png",
                        "/images/work/app-onboarding-3.png",
                        "/images/work/app-onboarding-4.png"
                    ]
                },
                {
                    heading: "7. Illustration Library",
                    desc: "A comprehensive library of 18 custom SVG illustrations categorized into three distinct stylistic groups. This collection supports various app states, from promotional banners to error feedback, ensuring a cohesive and delightful user experience.",
                    illustrationLibrary: [
                        {
                            title: "Style Group A",
                            images: [
                                "/images/work/Illustration/All gifts in one place.svg",
                                "/images/work/Illustration/Discount Offers.svg",
                                "/images/work/Illustration/Empty state - \u2028Add Products in Cart.svg",
                                "/images/work/Illustration/Error state - Payment Failure.svg",
                                "/images/work/Illustration/Gift for loved ones.svg",
                                "/images/work/Illustration/On Time Delivery.svg"
                            ]
                        },
                        {
                            title: "Style Group B",
                            images: [
                                "/images/work/Illustration/All gifts in one place-1.svg",
                                "/images/work/Illustration/Discount Offers-1.svg",
                                "/images/work/Illustration/Empty state - \u2028Add Products in Cart-1.svg",
                                "/images/work/Illustration/Error state - Payment Failure-1.svg",
                                "/images/work/Illustration/Gift for loved ones-1.svg",
                                "/images/work/Illustration/On Time Delivery-1.svg"
                            ]
                        },
                        {
                            title: "Style Group C",
                            images: [
                                "/images/work/Illustration/All gifts in one place-2.svg",
                                "/images/work/Illustration/Discount Offers-2.svg",
                                "/images/work/Illustration/Empty state - \u2028Add Products in Cart-2.svg",
                                "/images/work/Illustration/Error state - Payment Failure-2.svg",
                                "/images/work/Illustration/Gift for loved ones-2.svg",
                                "/images/work/Illustration/On Time Delivery-2.svg"
                            ]
                        }
                    ]
                }
            ],
            solutions: [
                {
                    num: "1/8",
                    title: "Personalized Gift Flow",
                    desc: "A guided personalization flow was created to simplify gift selection. Users can choose preferences such as relationship, occasion, age group, interests, and budget to receive more relevant gift recommendations.",
                    rationale: "Simplifying complex decision-making through progressive disclosure ensures users aren't overwhelmed by choice.",
                    mockupType: "clay",
                    mockupImg: "/images/work/personal-setting.png",
                    mockupCaption: "Refined UI: Guided personalization flow"
                },
                {
                    num: "2/8",
                    title: "Home Screen",
                    desc: "The home screen was designed to help users quickly discover gifts through categories, personalized recommendations, and special occasion collections. A clean layout, large product visuals, and a simple navigation system were used to create an easy and engaging browsing experience.",
                    rationale: "Fast discovery is key to retention. The layout prioritizes high-intent actions while maintaining a joyful aesthetic.",
                    mockupType: "clay",
                    mockupImg: "/images/work/Home Page.png",
                    mockupCaption: "Refined UI: Engaging and clean Home Screen layout"
                },
                {
                    num: "3/8",
                    title: "Product Listing Page",
                    desc: "The product listing page uses a clean grid layout to improve product browsing and comparison. Each card displays the product image, name, price, and wishlist option for a simple shopping experience.",
                    rationale: "Visual consistency in grids reduces cognitive load, allowing users to scan and compare items effortlessly.",
                    mockupType: "clay",
                    mockupImg: "/images/work/Product Listing Page.png",
                    mockupCaption: "Refined UI: Optimized Product Listing Grid"
                },
                {
                    num: "4/8",
                    title: "Product Detail Page",
                    desc: "The product detail page focuses on product visibility and clear information hierarchy. Large product images, descriptions, pricing, and similar product suggestions help users make quicker decisions.",
                    rationale: "By prioritizing information hierarchy, we answer the user's most important questions first (Price, Details, Availability).",
                    mockupType: "clay",
                    mockupImg: "/images/work/Single product View.png",
                    mockupCaption: "Refined UI: High-visibility Product Detail View"
                },
                {
                    num: "5/8",
                    title: "Checkout Experience",
                    desc: "The checkout flow was designed to collect recipient details, delivery information, and personalized messages in a simple and organized way. Clear form sections improve readability and reduce friction during checkout.",
                    rationale: "Reducing friction in the final steps is critical for conversion. Structured forms help users complete the process without errors.",
                    mockupType: "clay",
                    mockupImg: "/images/work/Checkout.png",
                    mockupCaption: "Refined UI: Frictionless multi-step checkout experience"
                },
                {
                    num: "6/8",
                    title: "Payment Options",
                    desc: "The payment screen provides a clean and familiar transaction experience with saved cards, offers, and multiple payment methods. The strong CTA improves visibility and guides users toward completing the purchase.",
                    rationale: "Trust and clarity are paramount during payment. A familiar layout reduces anxiety and speeds up the transaction.",
                    mockupType: "clay",
                    mockupImg: "/images/work/Payment option.png",
                    mockupCaption: "Refined UI: Secure and intuitive payment selection"
                },
                {
                    num: "7/8",
                    title: "Payment Success Screen",
                    desc: "The payment success screen confirms the completed order with a success illustration, delivery information, and order summary. The layout was designed to create a positive and reassuring post-purchase experience.",
                    rationale: "Confirmation is the peak of the user's emotional journey. Celebrating the success reinforces a positive brand association.",
                    mockupType: "clay",
                    mockupImg: "/images/work/Payment Successful.png",
                    mockupCaption: "Refined UI: Celebratory and informative Success Screen"
                },
                {
                    num: "8/9",
                    title: "Empty & Error States",
                    desc: "Custom empty state and error illustrations were designed to improve communication and maintain consistency across the application. These visuals help make the experience feel more engaging and user-friendly.",
                    rationale: "Even negative paths should feel branded. Engaging illustrations prevent user frustration during errors or empty views.",
                    mockupType: "clay",
                    mockupImg: [
                        "/images/work/empty Cart.png",
                        "/images/work/Payment Declined.png"
                    ],
                    mockupLabels: ["EMPTY CART", "TRANSACTION DECLINED"],
                    mockupCaption: "Refined UI: Engaging error and empty state management"
                },
                {
                    num: "9/9",
                    title: "Illustration Iterations",
                    desc: "The visual language of Gift Ease evolved through multiple rounds of sketching and refining. This iterative process ensured that the illustrations felt warm, approachable, and perfectly aligned with the brand's 'joy of giving' philosophy.",
                    rationale: "Iterating on key visuals allowed us to find the perfect balance between playfulness and clarity, ensuring the storytelling remains effective at every touchpoint.",
                    mockupType: "clay",
                    mockupImg: [
                        "/images/work/iteration 1.png",
                        "/images/work/iteration 2.png",
                        "/images/work/iteration 3.png"
                    ],
                    mockupLabels: ["ITERATION 01", "ITERATION 02", "ITERATION 03"],
                    mockupCaption: "Evolution of the Gift Ease visual storytelling"
                }
            ],
            impactOnUsers: [
                "Reduced average gift-searching time by over 50%",
                "Increased user confidence in gift relevance",
                "Higher conversion rates compared to traditional e-commerce",
                "Improved emotional satisfaction during the gifting process"
            ],
            finalOutcome: "Gift Ease transformed a stressful chore into a joyful, efficient experience, bridging the gap between data-driven technology and human emotional connection.",
            nextSteps: [
                "Integrate social calendar syncing for automated reminders",
                "Implement AR previews for physical gift scale",
                "Expand into global gifting and group-buying features"
            ]
        },
        gridImages: [
            "/images/work/giftease.png",
            "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&q=80&w=1000"
        ],
        stackImages: [
            "/images/work/giftease.png",
            "https://images.unsplash.com/photo-1540200049848-d9813ea0e120?auto=format&fit=crop&q=80&w=1600"
        ],
        impactImage: "/images/work/giftease.png"
    },
    {
        id: "video-editing-brand-film",
        slug: "video-editing",
        title: "Pickcel Video Editing",
        year: "2023-2026",
        type: "Motion Design",
        time: "3 Years",
        isSimpleShowcase: true,
        image: "/images/work/video_hero.png",
        videoUrls: [
            "https://www.youtube.com/watch?v=TInIxaV14rY",
            "https://www.youtube.com/watch?v=QDYKB-7qx8g",
            "https://www.youtube.com/watch?v=iFuy_XKBn7U",
            "https://www.youtube.com/watch?v=VONTBiSwOgo",
            "https://www.youtube.com/watch?v=ukWlpmriw6U",
            "https://www.youtube.com/watch?v=9CB9JEWQVW4",
            "https://www.youtube.com/watch?v=qi3ewcHrD1E",
            "https://www.youtube.com/watch?v=7qPekebQCLw",
            "https://www.youtube.com/watch?v=fq7jRZJRu6c",
            "https://www.youtube.com/watch?v=1IszBd2lYJI",
            "https://www.youtube.com/watch?v=aH4Y3cE4Mlc",
            "https://www.youtube.com/watch?v=wS2pD1NUo_M",
            "https://www.youtube.com/watch?v=FdDnqb1MORs",
            "https://www.youtube.com/watch?v=BPE8q3QHz9I",
            "https://www.youtube.com/watch?v=pXO8CXaM4cY",
            "https://www.youtube.com/watch?v=5pP9_Gg6hkU"
        ],
        client: "Pickcel",
        service: "Video Editing",
        description: "A multi-video project showcasing various digital signage solutions and brand stories.",
        thinkStackNote: {
            text: "I have also produced numerous videos for ThinkStack AI (a sister company of Pickcel).",
            link: "https://www.youtube.com/@thinkstack_ai/videos",
            linkText: "View ThinkStack Videos"
        },
        heroImage: "/images/work/video_hero.png",
        challenge: {
            text: "Capturing the essence of a heritage brand while appealing to a younger demographic.",
            subtext: "The challenge was to maintain luxury appeal while introducing dynamic, modern editing rhythms."
        },
        solution: {
            text: "A cinematic edit featuring rhythmic transitions and deep, moody color grading.",
            subtext: "We used a sophisticated palette to emphasize texture and mood, creating an emotional connection."
        },
        result: "The brand film achieved over 1M views across social platforms and increased brand engagement by 45%.",
        gridImages: [
            "/images/work/video_hero.png",
            "/images/work/video_grading.png"
        ],
        stackImages: [
            "/images/work/video_grading.png",
            "https://images.unsplash.com/photo-1492288991661-058aa541ff43?auto=format&fit=crop&q=80&w=1600"
        ],
        impactImage: "/images/work/video_hero.png"
    },
     {
        id: "thinkstack-core",
        slug: "thinkstack",
        title: "Thinkstack Digital Core",
        year: "2024",
        type: "Web & Strategy",
        isLocked: true,
        isSimpleShowcase: false,
        image: "/images/work/thinkstack-web.png",
        client: "Thinkstack",
        service: "UX/UI Design, Web Development",
        time: "6 Weeks",
        category: "Web & Product",
        description: "Designing and developing a high-performance digital presence for Thinkstack, focusing on technical authority, seamless navigation, and a future-ready architectural aesthetic.",
        heroImage: "/images/work/thinkstack-web.png",
        challenge: {
            text: "Creating a web experience that balances complex technical infrastructure with human-centric usability.",
            subtext: "The goal was to move away from generic corporate layouts toward a more cinematic, information-rich design system."
        },
        solution: {
            text: "Developed a dark-themed, high-contrast interface using bold typography and fluid transitions to guide users through the technical ecosystem.",
            subtext: "Leveraged modular components to ensure the site remains scalable as the product offering grows."
        },
        result: "A state-of-the-art corporate website that significantly increased lead generation and improved brand authority in the digital signage space.",
        gridImages: [
            "/images/work/launchkit.png",
            "/images/work/design-system-2.png"
        ],
        stackImages: [
            "/images/work/launchkit.png",
            "/images/work/design-system-2.png"
        ],
        impactImage: "/images/work/launchkit.png",
        caseStudy: {
            goals: [
                "Establish a strong technical visual identity",
                "Optimize site performance and load times",
                "Create a modular, scalable CMS structure",
                "Enhance information architecture for complex products"
            ],
            targetUsers: [
                "Enterprise IT Managers",
                "Marketing Directors",
                "Systems Integrators",
                "Internal Stakeholders"
            ],
            solutions: [
                {
                    num: '1/2',
                    title: 'The Digital Backbone',
                    desc: 'A robust homepage architecture designed to explain complex infrastructure at a glance. We used a "Cinematic Scroll" approach to keep users engaged as they learn about the product.',
                    tags: ['Interaction Design', 'Architecture', 'Web Performance'],
                    rationale: 'Technical users value efficiency. The layout prioritizes data-heavy sections with clean, high-contrast visual hierarchies.',
                    mockupBg: '#0A0A0A',
                    mockupImg: '/images/work/launchkit.png'
                },
                {
                    num: '2/2',
                    title: 'Component Design System',
                    desc: 'To ensure long-term consistency, we built a comprehensive library of UI components, from data tables to interactive maps, all adhering to the new Thinkstack core style.',
                    tags: ['Design Systems', 'React', 'Consistency'],
                    rationale: 'As a growing company, Thinkstack needed a system that non-designers could use to build new pages while maintaining the brand’s premium feel.',
                    mockupBg: '#111',
                    mockupImg: '/images/work/design-system-2.png'
                }
            ],
            finalOutcome: "Thinkstack now possesses a digital platform that matches the sophistication of its technology, resulting in a 40% increase in average session duration."
        }
    },
    {
        id: "print-design-identity",
        slug: "print-design",
        title: "Print Design Portfolio",
        year: "2024",
        type: "Print & Branding",
        isSimpleShowcase: false,
        image: "/images/work/print_hero.png",
        client: "Pickcel",
        service: "Print Design, Brand Identity",
        time: "4 Weeks",
        category: "Print & Branding",
        description: "A collection of premium print assets designed for Pickcel's global expo showcases, including a comprehensive trifold brand brochure and a minimalist square feature showcase. Both pieces were engineered to capture attention at high-traffic international trade shows while providing deep technical clarity.",
        heroImage: "/images/work/print_hero.png",
        challenge: {
            text: "Translating a complex digital signage ecosystem into two distinct tactile formats: a high-info trifold and a visual-first square brochure.",
            subtext: "Maintaining brand consistency across different layouts and paper sizes."
        },
        solution: {
            text: "Developed a modular grid system that adapts to both tri-fold and square formats, using bold typography and Pickcel's signature red to anchor the visual identity.",
            subtext: "The trifold handles technical integration details, while the square brochure focuses on high-impact product photography."
        },
        result: "The dual-brochure system provided a versatile toolset for both technical sales meetings and high-level brand awareness at international events.",
        gridImages: [
            "/images/work/print_hero.png",
            "/images/work/print_detail_2.png"
        ],
        stackImages: [
            "/images/work/print_hero.png",
            "/images/work/print_detail_2.png"
        ],
        impactImage: "/images/work/print_hero.png",
        caseStudy: {
            goals: [
                "Translate complex tech into accessible print formats",
                "Create a premium, tactile brand experience",
                "Design modular layouts for different brochure types",
                "Maintain perfect color fidelity for Pickcel Red"
            ],
            targetUsers: [
                "Enterprise decision-makers",
                "Trade show attendees",
                "Potential integration partners",
                "Internal sales teams"
            ],
            solutions: [
                {
                    num: '1/2',
                    title: 'The Pickcel Trifold Brochure',
                    desc: 'Designed as a high-density information piece, the trifold brochure uses a structured 6-panel layout to guide users through Pickcel’s digital signage solutions, global statistics, and ecosystem partners.',
                    tags: ['Information Architecture', 'Tri-fold Layout', 'Technical Print'],
                    rationale: 'For enterprise sales, detail matters. The trifold format allowed us to group complex features into digestible panels while maintaining a professional aesthetic.',
                    mockupBg: '#7A1C1C',
                    mockupImg: '/images/work/print_hero.png',
                    pdfLink: '/pdfs/pickcel-trifold-brochure.pdf'
                },
                {
                    num: '2/2',
                    title: 'The Minimalist Square Brochure',
                    desc: 'Focusing on brand impact, the square brochure uses large-scale imagery and minimal typography to create a luxury feel. It highlights the core value propositions with maximum white space and architectural balance.',
                    tags: ['Visual Impact', 'Minimalism', 'Luxury Print'],
                    rationale: 'In high-level networking, first impressions are everything. The square format breaks away from standard paper sizes to immediately signal a premium product.',
                    mockupBg: '#111',
                    mockupImg: '/images/work/print_detail_2.png',
                    pdfLink: '/pdfs/pickcel-square-brochure.pdf'
                }
            ],
            finalOutcome: "The resulting print portfolio has become a cornerstone of Pickcel’s physical marketing strategy, praised for its clarity and premium feel by international partners and clients."
        }
    },
   
    {
        id: "social-visual-ecosystem",
        slug: "social-media",
        title: "Social Visual Ecosystem",
        year: "2024",
        type: "Social Media",
        isLocked: true,
        isSimpleShowcase: false,
        image: "/images/work/pickcel_collage.jpg",
        client: "Pickcel",
        service: "Social Media Strategy, Content Design",
        time: "Ongoing",
        category: "Branding & Content",
        description: "Engineering a cohesive visual narrative across social platforms, transforming static updates into a dynamic brand ecosystem that drives community engagement.",
        heroImage: "/images/work/pickcel_collage.jpg",
        challenge: {
            text: "Overcoming a fragmented social presence with inconsistent visuals and low engagement across LinkedIn and Instagram.",
            subtext: "Designing a system that allows for rapid content creation without sacrificing high-end aesthetic quality."
        },
        solution: {
            text: "Created a modular template system based on Pickcel's brand tokens, enabling a consistent look and feel across all social-first content.",
            subtext: "Introduced cinematic motion graphics and bold typography to differentiate the brand from competitors."
        },
        result: "A 120% increase in social engagement and a unified brand presence that reflects Pickcel’s position as a market leader.",
        gridImages: [
            "/images/work/pickcel_collage.jpg",
            "/images/work/google-ads-banner.png",
            "/images/work/poster.jpg"
        ],
        stackImages: [
            "/images/work/pickcel_collage.jpg",
            "/images/work/google-ads-banner.png"
        ],
        impactImage: "/images/work/poster.jpg",
        caseStudy: {
            goals: [
                "Unify visual identity across LinkedIn, Instagram, and X",
                "Increase community engagement and interaction",
                "Design scalable content templates",
                "Establish a 'Premium-Tech' social aesthetic"
            ],
            targetUsers: [
                "Industry professionals",
                "Potential partners",
                "Community followers",
                "Recruiters and job seekers"
            ],
            solutions: [
                {
                    num: '1/2',
                    title: 'The Content Grid System',
                    desc: 'We developed a mathematical grid for social posts that ensures perfect alignment and hierarchy, whether the content is a technical whitepaper or a brand announcement.',
                    tags: ['Grid Systems', 'Layout Design', 'Hierarchy'],
                    rationale: 'Social feeds are noisy. A disciplined grid system creates a "pattern of recognition" for the audience, making Pickcel posts immediately identifiable.',
                    mockupBg: '#7A1C1C',
                    mockupImg: '/images/work/pickcel_collage.jpg'
                },
                {
                    num: '2/2',
                    title: 'Ad & Campaign Identity',
                    desc: 'Designed a series of high-performance ad banners and campaign posters that translate complex digital signage benefits into simple, striking visuals.',
                    tags: ['Campaign Design', 'Advertising', 'Visual Impact'],
                    rationale: 'In advertising, you have seconds to capture attention. We used high-contrast colors and minimalist layouts to maximize click-through rates.',
                    mockupBg: '#111',
                    mockupImg: '/images/work/google-ads-banner.png'
                }
            ],
            finalOutcome: "The social media ecosystem has successfully shifted public perception of the brand, moving it from a 'utility' to a 'premium technology leader'."
        }
    },
    {
        id: "ufbrand-salwar-ecommerce",
        slug: "ufbrand-salwar",
        title: "UF Brand: Heritage Couture",
        year: "2025",
        type: "Web & Strategy",
        isLocked: true,
        image: "/images/work/work3.jpg",
        client: "UF Brand",
        service: "E-Commerce Design & Development",
        description: "A digital flagship for luxury ethnic wear, redefining the boutique experience through high-fidelity visuals and advanced interaction design. Currently in active development.",
        category: "E-Commerce"
    },

];

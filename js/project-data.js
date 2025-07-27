/**
 * PROJECT DATA CONFIGURATION
 * 
 * This file contains all project information used throughout the portfolio.
 * Separating data from logic improves maintainability and makes it easier
 * to update project details without touching the main application code.
 * 
 * @author Portfolio Website
 * @version 1.0.0
 */

const projectData = {
  flologic: {
    title: 'FloLogic Mobile App Redesign',
    subtitle: 'Smart Leak Detection & Device Management',
    images: [
      'assets/images/projects/flologic.png'
    ],
    overviewTags: [
      'UX Focus', 'Mobile', 'Website',
      'Role: Lead UI/UX Designer, Beta Program Lead',
      'Tools: Figma', 'Tools: Miro', 'Timeline: Q1 2024 – Q2 2025'
    ],
    // New flexible content blocks for magazine-style layout
    contentBlocks: [
      {
        type: 'hero',
        image: 'assets/images/projects/flologic.png',
        title: 'Beyond the Faucet',
        description: 'A System, Not Just a Device',
        alt: 'FloLogic app showing device ecosystem'
      },
      {
        type: 'text',
        heading: 'Introduction',
        content: '<p>In the rapidly evolving landscape of smart home technology, the challenge often lies not just in creating innovative hardware, but in designing intuitive and scalable user experiences that can keep pace with technological advancements. This was precisely the scenario at FloLogic, a pioneer in water monitoring systems.</p><p>The company was undergoing a significant transformation:</p><ul><li><strong>From Legacy to Mesh:</strong> Transitioning from a single, Wi-Fi-connected shutoff valve to a sophisticated, multi-unit mesh network.</li><li><strong>The Core Dilemma:</strong> How to evolve an application originally conceived for a singular device to effectively manage a complex ecosystem of gateways, valves, and an array of sensors, potentially spread across multiple properties.</li></ul>'
      },
      {
        type: 'two-col',
        heading: 'My Role',
        content: '<p>As the sole UI/UX designer at FloLogic, my responsibilities extended far beyond traditional interface design:</p><ul><li><strong>Comprehensive Design System Development:</strong> Building a robust foundation for consistent user experiences.</li><li><strong>Beta Feedback Integration:</strong> Incorporating real-world user insights directly into the design process.</li><li><strong>Cross-Functional Bridge:</strong> Acting as a crucial liaison between diverse internal teams—engineering, QA, marketing, and customer service.</li></ul><p>This case study delves into the organic, non-linear journey of redesigning the FloLogic mobile application.</p>',
        image: 'assets/images/projects/flologic.png',
        alt: 'FloLogic design process'
      },
      {
        type: 'text',
        heading: 'The Unfolding Challenge: Scaling Complexity, Not Just UI',
        content: '<p>The initial impetus for the redesign was deceptively simple: the existing app needed to support new devices beyond its legacy system. Stakeholders, understandably focused on immediate product launches, initially favored minimal additions, expecting to simply "bolt on" support for the new hardware.</p><p>However, as we began to explore the implications of this approach, it quickly became evident that the existing structure was fundamentally inadequate. It wasn\'t merely a UI issue; it was a profound information architecture and usability problem that threatened to undermine the entire user experience.</p>'
      },
      {
        type: 'text',
        heading: 'Why the Old UI Failed',
        content: '<p>The old UI, designed for a singular, directly controlled unit, had no inherent model for:</p><ul><li>Parent/child relationships between devices</li><li>Multiple units across different locations</li><li>Mesh-networked dependencies and communication flows</li><li>Non-controllable devices like the gateway</li><li>Branching capabilities of new sensors</li></ul><p>This architectural rigidity meant that a superficial UI update would only exacerbate user confusion, making a full structural redesign not just desirable, but essential.</p>'
      },
      {
        type: 'full-image',
        image: 'assets/images/projects/flologic.png',
        alt: 'Old vs. New UI Comparison showing the transformation from device-centric to location-centric design',
        caption: 'The shift from cluttered, single-device view to clean, organized, location-based grouping'
      },
      {
        type: 'text',
        heading: 'The Strategic Pivot: From Device to Location-Centric Thinking',
        content: '<p>Our initial design goal was to ensure users understood that both the legacy Wi-Fi valves and the new GConnect valves offered equivalent control features, despite the new system\'s underlying hierarchy.</p><p><strong>First Attempt: Visual Consistency</strong><br/>The first attempt focused on visual consistency, making both device types appear with the same color in the UI to signal functional parity. However, beta testing quickly revealed a critical flaw—users still struggled to understand the relationships and hierarchy within their system.</p>'
      },
      {
        type: 'quote',
        content: 'Visual parity alone proved insufficient to convey functional equivalence or the overall system structure.'
      },
      {
        type: 'text',
        heading: 'The UX Breakthrough: Location-Based Model',
        content: '<p>This feedback prompted a significant UX pivot: a shift from a device-type framing to a location-based model. Instead of organizing by device type, each FloLogic system was now visually grouped within a distinct white container box, clearly labeled with the physical address associated with the provisioned gateway.</p><p><strong>Impact of the Change:</strong></p><ul><li><strong>Unified Grouping:</strong> All units appeared logically grouped under their respective physical location.</li><li><strong>Clear Mental Model:</strong> Created immediate understanding: "This is my house, and these are all the connected devices within it."</li><li><strong>Scalable Foundation:</strong> Laid crucial groundwork for supporting property managers.</li><li><strong>Logical Navigation:</strong> Settings, valve controls, and alerts felt logically grouped.</li></ul>'
      },
      {
        type: 'full-image',
        image: 'assets/images/projects/flologic.png',
        alt: 'Design System Components showing icons, UI patterns, and visual language',
        caption: 'Key elements from the FloLogic design system establishing visual consistency'
      },
      {
        type: 'two-col',
        heading: 'Crafting the Experience: Design in Motion',
        content: '<p>This redesign was not a linear, start-to-finish UX cycle, but rather an iterative and adaptive process, deeply informed by:</p><ul><li>Real-time feedback from field testers and installers</li><li>Ongoing conversations with engineering about technical limitations</li><li>Constant negotiation between design simplicity and system transparency</li></ul><p>While we referenced established smart home interfaces like Blink and Nest, FloLogic\'s unique challenges demanded more tailored solutions.</p>',
        image: 'assets/images/projects/flologic.png',
        alt: 'Iterative design process'
      },
      {
        type: 'text',
        heading: 'Architectural Innovations: Building for Scale and Clarity',
        content: '<p>To bring the location-centric vision to life, several key architectural innovations were designed and implemented:</p><p><strong>Redesigned Main Device Listing</strong></p><ul><li>Complete restructuring away from cluttered, icon-heavy top section</li><li>Modernized navigation with bottom navigation bar (Jakob\'s Law)</li><li>Enhanced information access with tappable locations</li></ul><p><strong>Sophisticated Device Status Logic</strong></p><ul><li>Icon state changes for detailed feedback</li><li>Individual GConnect listings within each location</li><li>Grouped Pinpoint sensors (up to 64 per system)</li><li>Critical alert badges for immediate attention</li></ul>'
      },
      {
        type: 'text',
        heading: 'Recent Activity System',
        content: '<p>Inspired by Google Nest and direct user feedback about the annoyance of digging for past notifications, we introduced a "Recent Activity" feed:</p><ul><li><strong>Centralized History:</strong> Summarized key events across all devices in one easily scannable location</li><li><strong>Reduced Alert Confusion:</strong> Provided a clear overview of system activity</li><li><strong>Valuable Diagnostic Tool:</strong> Served as a crucial resource for both users and customer support</li></ul>'
      },
      {
        type: 'full-image',
        image: 'assets/images/projects/flologic.png',
        alt: 'Key UI screens showing device listing, status indicators, and Recent Activity feed',
        caption: 'The redesigned interface featuring bottom navigation, status indicators, and activity feed'
      },
      {
        type: 'stats',
        heading: 'Impact & Results',
        stats: [
          { value: '↓', label: 'Alert Confusion', desc: 'Dramatically reduced through grouped events' },
          { value: '✓', label: 'Multi-Location Support', desc: 'Enabled property manager workflows' },
          { value: '∞', label: 'Scalable Framework', desc: 'Ready for future sensor types' },
          { value: '↑', label: 'User Clarity', desc: 'Clear system overview at a glance' }
        ]
      },
      {
        type: 'text',
        heading: 'Lessons Learned',
        content: '<p>Looking back, this project was a complex systems challenge disguised as a UI update. Several key learnings emerged:</p><ul><li><strong>Early Hierarchy Validation:</strong> The importance of validating hierarchy concepts even earlier in the process.</li><li><strong>Rigorous Documentation:</strong> Documenting mid-process decisions more rigorously would have facilitated faster stakeholder onboarding.</li><li><strong>Continuous Communication:</strong> This experience underscored the value of transparency when navigating significant architectural shifts.</li></ul>'
      },
      {
        type: 'full-image',
        image: 'assets/images/projects/flologic.png',
        alt: 'User flow diagram showing key interactions within the new system',
        caption: 'Simplified user flow for checking sensor status and switching between properties'
      },
      {
        type: 'text',
        heading: 'The Unfinished Journey: Continuous Evolution',
        content: '<p>The current version of the FloLogic application is live in beta and continues to evolve with each new hardware release and user feedback cycle. This project was never intended to be a static deliverable, but rather a strategic restructuring—a foundational shift in how FloLogic approaches its digital product experience.</p><p>As the smart home ecosystem continues to expand and user expectations become more sophisticated, the FloLogic app is now positioned to embrace these changes. The architectural decisions made during this redesign ensure that the system is built to adapt, providing users with:</p><ul><li><strong>Clarity and Control:</strong> Over every part of their water system</li><li><strong>Future-Proof Scalability:</strong> Seamless integration of future features</li></ul>'
      },
      {
        type: 'quote',
        content: 'The journey of product design is, by its very nature, an ongoing one, and the FloLogic case stands as a testament to the power of iterative design, strategic thinking, and a commitment to solving complex problems with user-centric solutions.'
      },
      {
        type: 'full-image',
        image: 'assets/images/projects/flologic.png',
        alt: 'Future vision mockup showing potential features and expansions',
        caption: 'Conceptual view of future FloLogic features: smart home integration, analytics, and new sensors'
      }
    ],
    // Keep old structure for backward compatibility
    sections: [
      { heading: 'Problem', body: `The original FloLogic app wasn't designed to support both legacy and next-gen devices. To move forward with next-gen development, the app had to be restructured to visually reflect the new device system hierarchy while still functioning in a way that felt familiar to existing users.` },
      { heading: 'Objectives', body: `<ul><li>Redesign the interface to seamlessly support both next-gen and legacy devices.</li><li>Enhance real-time monitoring capabilities with clear navigation and status indicators.</li><li>Simplify the device management process for quicker user access and troubleshooting.</li><li>Ensure the app maintains brand consistency while introducing modern design principles.</li></ul>` },
      { heading: 'Summary', body: `FloLogic is a smart leak detection system that monitors a home's main water line and automatically shuts off water when it detects abnormal flow. The brand introduced cloud IoT developments and a new system of thread-based devices, offering reliable, long-term protection for homes and properties.` },
      { heading: 'Key Responsibilities', body: `<ul><li>Conducted user research to identify pain points in device management and app navigation.</li><li>Created wireframes and high-fidelity prototypes to iterate design solutions.</li><li>Collaborated with engineering to sync front-end changes with device communication protocols.</li><li>Led a beta testing program to gather user feedback and fine-tune the user experience.</li></ul>` },
      { heading: 'Heuristic Evaluation & Key Findings', body: `<ul><li><b>Navigation Structure:</b> The app's navigation was highly linear, limiting flexibility as more device types were added.</li><li><b>Overly Novel:</b> Unfamiliar language and design choices made the experience harder to navigate.</li><li><b>Recognition Over Recall:</b> Important settings and notifications were buried, making them hard to find.</li><li><b>Error Prevention and Help:</b> Limited support for preventing user errors or guiding users through in-app assistance.</li></ul>` },
      { heading: 'Beta Program', body: `Managed a 20-person beta program with a mix of long-time customers, plumbers, and homeowners. Gathered real-world feedback to inform decisions on navigation clarity, language simplification, and system feedback.` },
      { heading: 'Solutions & Improvements', body: `<ul><li><b>Visibility and Clarity:</b> Added clear indicators for device issues and centralized notifications.</li><li><b>Simplified Navigation Settings:</b> Surfaced the most relevant information upfront.</li><li><b>Consolidated Device Status:</b> Introduced a System Activity page for reviewing alerts.</li><li><b>Streamlined Language:</b> Removed confusing terms and aligned device names with user expectations.</li><li><b>Visual Hierarchy Enhancements:</b> Grouped related devices visually for clarity.</li></ul>` },
      { heading: 'Stakeholder Feedback', body: `Ongoing input from engineering and customer service helped validate beta feedback and prioritize usability issues.` },
      { heading: 'Design System', body: `Established a design system to unify visuals across the app, website, and devices, especially as the app transitions from Xamarin to MAUI.` },
      { heading: 'Professional Takeaways', body: `<ul><li>Users often adapt to bad design without complaining—interviews and observation are essential.</li><li>Silence from users or stakeholders is not approval.</li><li>Most problems can be solved once they're actually noticed.</li></ul>` }
    ],
    impacts: [
      { value: '30+', label: 'Unique brand-catered screens', desc: 'Mapped & prototyped' },
      { value: '40+', label: 'Token design system', desc: 'Components created' },
      { value: '12', label: 'Custom animations', desc: 'Built for the app' }
    ]
  },
  circadia: {
    title: 'Circadia',
    subtitle: 'Circadia module popup inside a manifestation app built for stillness, designed to guide, not instruct',
    images: [
      'assets/images/projects/circadia.png'
    ],
    overviewTags: [
      'Role: Sole Designer',
      'Type: Mobile UI', 'Type: Animation',
      'Tools: Illustrator', 'Tools: Rive',
      'Timeline: Beta, 2024 – Ongoing'
    ],
    // New flexible content blocks for magazine-style layout
    contentBlocks: [
      {
        type: 'hero',
        image: 'assets/images/projects/circadia 1.webp',
        title: 'A Bedtime Ritual for the Digital Age',
        description: 'More than a dream journal – Circadia is a pre-sleep experience designed to help users wind down and manifest intentionally, synced to the phases of the moon.',
        alt: 'Circadia app showing moon phases and dream interface'
      },
      {
        type: 'text',
        heading: 'From Dream Journal to Digital Ritual',
        content: '<p>Originally imagined as a simple dream journal, Circadia evolved into something more immersive and meaningful. It became a pre-sleep experience to help users wind down and manifest intentionally.</p><p>I joined as the sole designer and shaped the product\'s identity from the ground up, transforming a basic concept into a fully-realized digital ritual that respects the sacred transition from waking to sleeping.</p>'
      },
      {
        type: 'two-col',
        heading: '🌀 My Role & Approach',
        content: '<ul><li>Created the entire visual system in Illustrator</li><li>Developed a 40+ token design system for scale and clarity</li><li>Designed all user flows, including manifestation guides, unconscious tests, and onboarding</li><li>Built 15+ custom Rive animations to support fluid, emotionally resonant transitions</li><li>Led UX strategy by replacing traditional login with a frictionless, immersive onboarding experience</li></ul>',
        image: 'assets/images/projects/circadia-design-system.jpg',
        alt: 'Circadia design system tokens and components'
      },
      {
        type: 'gallery',
        heading: 'Key Screens & Interactions',
        images: [
          { src: 'assets/images/projects/Teamu 1.png', alt: 'Onboarding flow' },
          { src: 'assets/images/projects/Teamu 2.png', alt: 'Manifestation guide' },
          { src: 'assets/images/projects/Teamu 3.png', alt: 'Dream journal entry' },
          { src: 'assets/images/projects/Teamu 4.png', alt: 'Moon phase tracking' }
        ]
      },
      {
        type: 'quote',
        content: 'With limited features, the UX had to carry emotional weight. I focused on subtle microinteractions, calm pacing, and seamless transitions. Everything needed to feel intentional.'
      },
      {
        type: 'text',
        heading: '✦ The Design Process',
        content: '<p>Stakeholders wanted to move quickly with minimal research and tight timelines. The original scope included a manifestation guide, a Rorschach-inspired test, and a follow-up flow. As the product shifted direction, I focused on building trust through tone, animation, and intuitive flow rather than data collection.</p><p>Onboarding initially felt transactional – it asked users for information before letting them in. I reworked it to feel like part of the experience, with each question and interaction designed to draw the user in gently, like the beginning of a meditation.</p>'
      },
      {
        type: 'stats',
        heading: '📊 Impact & Results',
        stats: [
          { value: '40+', label: 'Token Design System', desc: 'Used across all product flows' },
          { value: '15+', label: 'Custom Animations', desc: 'For immersive transitions' },
          { value: '100%', label: 'Onboarding Completion', desc: 'During internal beta testing' },
          { value: '0', label: 'Traditional Logins', desc: 'Replaced with seamless flow' }
        ]
      },
      {
        type: 'full-image',
        image: 'assets/images/projects/circadia-hero-wide.jpg',
        alt: 'Circadia app ecosystem showing various screens and moon phases',
        caption: 'Circadia transforms bedtime routines into meaningful rituals through thoughtful design and lunar synchronization'
      },
      {
        type: 'timeline',
        heading: 'Evolution of the Experience',
        items: [
          { title: 'Initial Concept', description: 'Simple dream journal app for recording nightly dreams' },
          { title: 'Vision Expansion', description: 'Evolved to include manifestation and pre-sleep rituals' },
          { title: 'Design System Creation', description: 'Built comprehensive token system in Illustrator' },
          { title: 'Animation Development', description: 'Created 15+ custom Rive animations for fluid experience' },
          { title: 'Beta Testing', description: 'Currently gathering feedback and iterating on the experience' }
        ]
      },
      {
        type: 'text',
        heading: '⤿ Reflections & Next Steps',
        content: '<p>If I had more time, I would have explored more conceptual directions early on and used AI tools to iterate faster. This was part-time work alongside a full-time role, but the goal remained clear: <strong>Build something that feels like a ritual, not just an app.</strong></p><p>The challenge was creating an experience that respects the liminal space between waking and sleeping – a digital tool that actually helps people disconnect from their digital lives.</p><p>We are currently in beta testing and continuing to iterate based on user feedback. The early response has been overwhelmingly positive, with users describing the app as "calming," "intuitive," and "unlike anything else."</p>'
      }
    ],
    // Keep old structure for backward compatibility
    sections: [
      { heading: 'Project Evolution', body: `Originally imagined as a dream journal, Circadia evolved into something more immersive. It became a pre-sleep experience to help users wind down and manifest intentionally. I joined as the sole designer and shaped the product's identity from the ground up.` },
      { heading: '🌀 My Role', body: `<ul><li>Created the entire visual system in Illustrator</li><li>Developed a 40+ token design system for scale and clarity</li><li>Designed all user flows, including manifestation guides, unconscious tests, and onboarding</li><li>Built 15+ custom Rive animations to support fluid, emotionally resonant transitions</li><li>Led UX strategy by replacing traditional login with a frictionless, immersive onboarding experience</li></ul>` },
      { heading: '✦ The Process', body: `Stakeholders wanted to move quickly with minimal research and tight timelines. The original scope included a manifestation guide, a Rorschach-inspired test, and a follow-up flow. As the product shifted direction, I focused on building trust through tone, animation, and intuitive flow rather than data collection.<br><br>Onboarding initially felt transactional. It asked users for information before letting them in. I reworked it to feel like part of the experience, with each question and interaction designed to draw the user in gently.<br><br>With limited features, the UX had to carry emotional weight. I focused on subtle microinteractions, calm pacing, and seamless transitions. Everything needed to feel intentional.` },
      { heading: '📊 Impact', body: `<ul><li>Delivered a 40+ token design system used across all product flows</li><li>Created 15+ custom animations for immersive transitions and motion</li><li>Replaced traditional login with seamless onboarding that achieved a 100% completion rate during internal beta</li></ul>` },
      { heading: '⤿ Looking Back', body: `If I had more time, I would have explored more conceptual directions early on and used AI tools to iterate faster. This was part-time work alongside a full-time role, but the goal remained clear. Build something that feels like a ritual, not just an app.<br><br>We are currently in beta testing and continuing to iterate. More to come.` }
    ],
    impacts: [
      { value: '40+', label: 'Token design system', desc: 'Used across all product flows' },
      { value: '15+', label: 'Custom animations', desc: 'For immersive transitions' },
      { value: '100%', label: 'Onboarding completion', desc: 'Internal beta' }
    ]
  },
   teamu: {
     title: 'Teamu',
     subtitle: 'AI social media platform solving the loneliness epidemic',
    images: [
       'assets/images/projects/teamu.png'
    ],
    overviewTags: [
       'Role: UX Researcher & Designer',
       'Type: Mobile', 'Type: Social Platform',
       'Tools: Figma', 'Tools: Miro',
       'Timeline: Q2 2024 - Q4 2024'
    ],
    sections: [
       { heading: 'Problem', body: `In our increasingly digital world, social isolation and loneliness have reached epidemic levels. Traditional social media platforms often exacerbate these issues by promoting superficial connections and comparison-driven interactions rather than meaningful relationships.` },
       { heading: 'Objectives', body: `<ul><li>Conduct comprehensive UX research to understand user pain points around loneliness and social connection</li><li>Perform competitive analysis of existing social platforms to identify gaps in meaningful connection features</li><li>Design an AI-powered platform that facilitates authentic relationships and community building</li><li>Create features that prioritize mental health and genuine human connection over engagement metrics</li></ul>` },
       { heading: 'Research & Analysis', body: `Conducted extensive user interviews and surveys to understand the root causes of digital loneliness. Performed competitive analysis of 15+ social platforms to identify opportunities for more meaningful connection tools. Research revealed that users craved deeper, more authentic interactions rather than surface-level engagement.` },
       { heading: 'Key Features Designed', body: `<ul><li>AI-powered matching system based on shared interests and values rather than proximity</li><li>Structured conversation starters and activity suggestions to facilitate meaningful interactions</li><li>Community building tools focused on small, intimate groups rather than large follower counts</li><li>Mental health-first design principles with built-in wellness check-ins and support resources</li></ul>` }
    ],
    impacts: [
       { value: '8k+', label: 'Active Members', desc: 'Engaged in beta testing' },
       { value: '24/7', label: 'Moderation', desc: 'AI-powered safety systems' },
       { value: '73%', label: 'User Satisfaction', desc: 'Reported feeling less lonely' }
     ]
   },
   provisioning: {
     title: 'End-to-End Provisioning Reimagined',
     subtitle: 'Device provisioning process overhaul focusing on reliability, speed, and user clarity',
     images: [
       'assets/images/projects/flologic.png'
     ],
     overviewTags: [
       'Role: Lead UX Designer',
       'Type: IoT Setup Process', 'Type: Mobile & Web',
       'Tools: Figma', 'Tools: Miro',
       'Timeline: Q3 2024 - Q1 2025'
     ],
     sections: [
       { heading: 'Problem', body: `The existing device provisioning process was a major source of customer frustration and support tickets. Users struggled with complex connection steps, unclear error messages, and lengthy setup times, leading to high abandonment rates and negative first impressions.` },
       { heading: 'Objectives', body: `<ul><li>Redesign the entire provisioning flow to be more intuitive and error-resistant</li><li>Reduce customer confusion through clearer communication and visual feedback</li><li>Streamline backend communication to improve connection reliability</li><li>Future-proof the system to easily accommodate new hardware integrations</li></ul>` },
       { heading: 'Research & Discovery', body: `Analyzed support ticket data to identify the most common failure points. Conducted user interviews with customers who had experienced provisioning issues. Collaborated with engineering to understand technical constraints and opportunities for improvement.` },
       { heading: 'Design Solutions', body: `<ul><li>Created a step-by-step wizard with clear progress indicators and visual feedback</li><li>Implemented proactive error prevention with real-time validation and helpful error messages</li><li>Designed a unified flow that works consistently across different device types</li><li>Added diagnostic tools to help users troubleshoot connection issues independently</li></ul>` },
       { heading: 'Results & Impact', body: `The redesigned provisioning process significantly improved the user experience and reduced support burden. Customer satisfaction increased dramatically, and the streamlined process enabled faster rollout of new device types.` }
     ],
     impacts: [
       { value: '63%', label: 'Support Ticket Reduction', desc: 'Cut provisioning-related tickets within first month' },
       { value: '42%', label: 'Connection Success Rate', desc: 'Improved first-time device connections' },
       { value: '3.1min', label: 'Setup Time Reduction', desc: 'Reduced average time to full system setup' }
     ]
   },
   dashboard: {
     title: 'A Unified UI for Complex Systems',
     subtitle: 'Scalable dashboard for real-time control and monitoring of connected devices',
     images: [
       'assets/images/projects/teamu.png'
     ],
     overviewTags: [
       'Role: Lead UI/UX Designer',
       'Type: Dashboard Design', 'Type: Web Application',
       'Tools: Figma', 'Tools: Design System',
       'Timeline: Q1 2024 - Q3 2024'
     ],
     sections: [
       { heading: 'Problem', body: `Technicians and end-users needed a comprehensive view of multiple connected devices across properties or zones, but existing tools were fragmented and difficult to navigate. Critical information was buried, and remote actions were cumbersome to perform.` },
       { heading: 'Objectives', body: `<ul><li>Create a scalable, intuitive dashboard for real-time device monitoring</li><li>Enable quick assessment of network health and device states</li><li>Streamline remote actions and troubleshooting workflows</li><li>Design for both technical users (installers/technicians) and end-users (homeowners)</li></ul>` },
       { heading: 'Design Approach', body: `Conducted extensive user research with both technician and homeowner user groups to understand their different needs and workflows. Created information architecture that prioritizes the most critical data while keeping advanced features accessible.` },
       { heading: 'Key Features', body: `<ul><li>Real-time status overview with color-coded health indicators</li><li>Hierarchical device organization by location and system type</li><li>Quick action buttons for common remote operations</li><li>Detailed diagnostic views with historical data and trends</li><li>Responsive design that works across desktop, tablet, and mobile devices</li></ul>` },
       { heading: 'Technical Considerations', body: `Worked closely with engineering to ensure the dashboard could handle real-time data updates efficiently. Designed with scalability in mind to accommodate growing numbers of connected devices and new device types.` }
     ],
     impacts: [
       { value: '88%', label: 'System Visibility', desc: 'Increased visibility across units' },
       { value: '41%', label: 'Troubleshooting Time', desc: 'Cut average troubleshooting time per site' },
       { value: '76%', label: 'User Satisfaction', desc: 'Boosted dashboard usability (beta feedback)' }
     ]
   },
   
     project6: {
     title: 'A Clean Digital Presence for Embedded Systems',
     subtitle: 'Lightweight, fast-loading static marketing site for firmware-focused company',
     images: [
       'assets/images/projects/circadia.png'
     ],
     overviewTags: [
       'Role: Web Designer & Developer',
       'Type: Marketing Website', 'Type: Static Site',
       'Tools: HTML/CSS', 'Tools: JavaScript',
       'Timeline: Q2 2024 - Q3 2024'
     ],
     sections: [
       { heading: 'Problem', body: `A firmware-focused embedded systems company needed a professional web presence that could effectively communicate their technical expertise while being accessible to both developers and decision-makers. Their existing site was slow, outdated, and not optimized for search engines or lead generation.` },
       { heading: 'Objectives', body: `<ul><li>Create a lightweight, fast-loading static site optimized for performance</li><li>Highlight real-time solutions and technical capabilities in an accessible way</li><li>Provide easy access to documentation and service offerings</li><li>Optimize for SEO to improve organic discovery</li><li>Design with developer-first usability principles</li></ul>` },
       { heading: 'Design Approach', body: `Focused on clean, minimal design that lets the technical content shine. Prioritized page speed and accessibility, using modern web standards and optimized assets. Created clear information architecture that guides both technical and business users to relevant content quickly.` },
       { heading: 'Key Features', body: `<ul><li>Ultra-fast loading times through optimized static site generation</li><li>Clean, developer-friendly documentation navigation</li><li>Clear service offering presentations with technical depth</li><li>Mobile-responsive design optimized for all device types</li><li>SEO-optimized content structure and metadata</li><li>Streamlined contact and lead capture forms</li></ul>` },
       { heading: 'Technical Implementation', body: `Built as a static site for maximum performance and reliability. Implemented modern CSS and JavaScript best practices, optimized images and assets, and structured content for search engine visibility. Used performance budgets to ensure sub-1.2 second load times globally.` },
       { heading: 'Results & Impact', body: `The new site significantly improved user engagement and lead generation. The combination of better performance, clearer messaging, and improved SEO resulted in substantial business impact within the first 60 days of launch.` }
     ],
     impacts: [
       { value: '39%', label: 'Bounce Rate Reduction', desc: 'Decreased bounce rate after launch' },
       { value: '1.2s', label: 'Page Load Time', desc: 'Improved average load time globally' },
       { value: '2.3x', label: 'Lead Generation', desc: 'More inbound leads within 60 days post-launch' }
     ]
   }
};

// Export for use in other modules (if using ES6 modules)
// export { projectData };

// Make available globally (for current implementation)
window.projectData = projectData; 
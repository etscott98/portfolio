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
    subtitle: 'A bedtime app that helps you wind down with astrology, dream journaling, and manifestation rituals',
    images: [
      'assets/images/projects/circadia.png'
    ],
    overviewTags: [
      'Role: Founding Designer',
      'Type: Mobile UI', 'Type: Animation',
      'Tools: Miro', 'Tools: Figma',
      'Timeline: 2025 - Ongoing'
    ],
    sections: [
      { heading: 'Problem', body: `In an age of constant stimulation and fragmented attention, many individuals struggle to wind down, process their emotions, and align with their inner goals before sleep. While wellness apps offer generic solutions like meditation or journaling, few provide an immersive, personalized nighttime experience that honors the cyclical nature of both the cosmos and the self.` },
      { heading: 'Objectives', body: `<ol><li><strong>Fast Launch Strategy:</strong> The initial release focused on delivering a core product quickly. Feature prioritizations were deferred to post-launch user interviews, allowing real feedback to shape future iterations after providing a physical product for users to engage with.</li><li><strong>Dark-Mode-First Experience:</strong> Create a dark-mode-first experience with soft gradients, subtle animations, and minimal distractions to support a peaceful, end-of-day ritual.</li><li><strong>Lightweight Onboarding:</strong> Use lightweight onboarding and modular navigation to align rituals with each user's chart, offering structure without friction.</li><li><strong>Accessible Mystical Content:</strong> Make complex astrological and subconscious information feel accessible through visual tools like moon wheels, dream cards, and guided prompt modals.</li></ol>` },
      { heading: 'Summary', body: `<strong>Circadia</strong> is a bedtime app that helps you wind down with astrology, dream journaling, and manifestation rituals, all synced to the moon. It mixes personalized prompts, a Rorschach-style unconscious test, and gentle guidance to help you reflect, set intentions, and tap into your intuitive side. The vibe is mystical but grounded, with a calming design that makes everything feel easy, not like another self-help app. Circadia brings together astrology, psychology, and nightly rituals to create a more meaningful way to end your day.` },
      { heading: 'Key Responsibilities', body: `<ul><li>Developed the core concept and vision for the app, combining astrology, manifestation, and subconscious exploration</li><li>Defined key features such as dream journaling, zodiac-based guidance, and Rorschach-inspired prompts</li><li>Designed intuitive user flows that support a reflective, nighttime experience</li><li>Created custom icons and visual assets to align with the app's mystical theme</li><li>Currently building Rive animations to enhance micro interactions and reinforce calming user engagement</li><li>Prioritized a dark-mode-first UI for immersive nighttime use</li><li>Integrated symbolic and astrological data into clear, accessible visual components</li></ul>` },
      { heading: 'User Flow', body: `This user flow journey map helped shape <em>Circadia's</em> UI by clarifying the app's core interactions before any mockups were made. It allowed the founders to visualize the sequence of user actions, identify key decision points, and ensure the experience felt cohesive and intentional from the start.<br><br><ul><li><strong>Manifestation Guide Flow:</strong> Users receive astrology-based guidance tailored to the moon phase and their birth chart to support intentional manifestation before sleep.</li><li><strong>Unconscious Test Flow:</strong> Users are prompted to explore their unconscious by responding to a Rorschach-style inkblot image, submitting their interpretation for later analysis.</li><li><strong>Unconscious Report Flow:</strong> After a delay, users receive a detailed report analyzing their inkblot interpretation through psychological and astrological lenses, including alignment with their manifestation goal.</li><li><strong>Notification & Re-engagement Flow:</strong> Users are notified when their unconscious report is ready, leading them back into the app to revisit and reflect on their test results and personalized insights.</li></ul>` },
      { heading: 'Design System', body: `A lightweight design system was created after aligning on branding direction with the founders. It was kept intentionally flexible, with minimal constraints, knowing that the visual language and components would continue to evolve post-launch.` },
      { heading: 'Current Status', body: `Circadia is currently in development and expected to launch on the App Store in the coming months. I'm continuing to support the team with Rive animations and design assistance. Once the app is deployed, I'll begin the next phase of UX research to guide future iterations.` },
      { heading: 'Professional Takeaways', body: `<strong>Design can be flexible.</strong> A fast launch was a business requirement, and I used it to shape a focused design strategy. I kept the solution minimal and easy to build so we could launch quickly and learn directly from users. Prioritizing feedback on features instead of over-designing in isolation.` }
    ],
    impacts: [
      { value: 'Ongoing', label: 'Development Status', desc: 'Expected App Store launch in coming months' },
      { value: 'Custom', label: 'Rive Animations', desc: 'Built for micro-interactions' },
      { value: 'Flexible', label: 'Design System', desc: 'Created for post-launch evolution' }
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
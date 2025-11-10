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
    subtitle: 'From one valve to an entire ecosystem – clarity for homeowners, power for property managers',
    images: [
      'assets/images/projects/flologic/image of all new pages.png'
    ],
    overviewTags: [
      'Lead UI/UX Designer', 'Mobile App Redesign', 'Ecosystem Design', 'Beta Program Lead'
    ],
    tools: ['Figma', 'Miro', 'Prototyping', 'User Research'],
    // New flexible content blocks for magazine-style layout
    contentBlocks: [
      {
        type: 'hero',
        image: 'assets/images/projects/flologic/image of all new pages.png',
        title: 'From One Valve to an Entire Ecosystem',
        description: 'Clarity for homeowners, power for property managers',
        alt: 'FloLogic app showing all new pages and interface redesign'
      },
      {
        type: 'text',
        heading: 'My Role & Responsibilities',
        content: '<div class="role-responsibilities"><div class="responsibility-item"><h4>1. Complete App Re-work + Modernization</h4><p>Tore the legacy linear flow apart and rebuilt it around a clean tab bar, location-centric device tree, and sleek Apple-inspired settings pages. Prototyped, user-tested, and shipped the new flows with devs (TestFlight every Friday). Helped engineering stand up new APIs for multi-property support and real-time sensor feeds. Rolled out inline troubleshooting and contextual help so users solve 90% of issues without calling support.</p><p class="result-box"><strong>Result:</strong> 50% fewer taps to reach valve controls, 25% drop in support calls within beta cohort.</p></div><div class="responsibility-item with-image"><div><h4>2. Comprehensive Design System + Brand Guidelines</h4><p>Tokenized color, type, spacing, radius, opacity – delivered both primitive and semantic tokens so devs could ramp up fast. Built a starter component library (valve cards, alert chips, status pills, etc.) and coded Figma → Storybook hand-off docs. Co-authored the first brand guidelines doc with another designer: tone, imagery, and motion rules so marketing, support, and app feel like one product.</p><p class="why-box"><strong>Why?</strong> Dev handoff became plug-and-play. Instead of "pick any blue," engineers grabbed primary-600, shipped, done. Felt like stapling success into FloLogic\'s near future, not just polishing one flow.</p></div><img src="assets/images/projects/flologic/flologic wireframes.jpg" alt="FloLogic design system"/></div><div class="responsibility-item"><h4>3. Beta Feedback Integration</h4><p>Ran a 20-person beta (plumbers, retirees, property managers). Weekly surveys, guided Zoom walkthroughs, and "record your screen" tasks. Logged every friction point in Airtable, tagged by severity, pushed high-impact items straight to the sprint board. Closed the loop: emailed testers release notes and asked, "Did this fix it?"</p><p class="why-box"><strong>Why?</strong> Real houses, real water leaks. Lab tests can\'t mimic a crawl space router. Early truth bombs saved months of re-work.</p></div><div class="responsibility-item"><h4>4. Stakeholder Presentations on Hi-Fi Prototypes</h4><p>Hosted live Figma walkthroughs with CEO, hardware lead, support manager. Encouraged them to "break it" – every question captured in a running decision log. Used their feedback to kill scope creep and keep design debt visible before dev sprint planning.</p><p class="why-box"><strong>Why?</strong> With a vocal bunch that wants everything and nothing, regular show-and-tell kept me on the right path and surfaced blockers fast.</p></div><div class="responsibility-item"><h4>5. Project + Cross-Team Management</h4><p>Daily Slack stand-ups with devs, weekly sync with customer support, bi-weekly demo for execs. Published timeline in Notion – clear dates for design freeze, dev handoff, QA, and TestFlight. Acted as the glue between hardware quirks, marketing asks, and user pain points.</p></div></div>'
      },
      {
        type: 'text',
        heading: 'Building a New System Architecture',
        content: '<p class="large-text">The transformation wasn\'t just about adding features - it required fundamentally rethinking how devices connect, communicate, and are controlled:</p><div class="side-by-side-panels"><div class="panel legacy-panel"><div class="panel-badge">LEGACY</div><h4 class="panel-title"><span class="icon-ui icon-signal"></span> Simple & Direct</h4><div class="panel-content"><div class="icon-bg icon-bg-device"></div><p>One standalone device connected directly to Wi-Fi, controlling the home\'s main water shutoff.</p></div></div><div class="panel new-panel"><div class="panel-badge">NEW ECOSYSTEM</div><h4 class="panel-title"><span class="icon-ui icon-hub"></span> Modular & Nested</h4><div class="panel-content"><div class="nested-list"><div><div class="icon-bg icon-bg-gateway"></div><div><strong>Gateway Hub</strong><span>Connects directly to router, manages network</span></div></div><ul><li><div><div class="icon-bg icon-bg-valve"></div><span>Thread-connected valves</span></div></li><li><div><div class="icon-bg icon-bg-sensor"></div><span>Environmental sensors</span></div></li><li><div><div class="icon-bg icon-bg-trigger"></div><span>Dry-contact triggers</span></div></li></ul></div></div></div></div>'
      },
      {
        type: 'text',
        heading: 'Why the Legacy Interface Broke Down',
        content: '<p class="large-text">The original UI was elegantly simple - because it only had to handle one scenario. But when we introduced the ecosystem approach, that simplicity became a liability:</p><div class="highlight-box error-box"><h4 class="box-title"><span class="icon-ui icon-warning"></span> Critical Gaps in the Legacy Model</h4><ul class="bullet-list"><li><div class="bullet-icon"></div><div><strong>No concept of device hierarchy</strong><span>Couldn\'t show parent/child relationships between Gateways and devices.</span></div></li><li><div class="bullet-icon"></div><div><strong>Every device assumed direct control</strong><span>No model for "monitoring-only" devices like Gateways or Extenders.</span></div></li><li><div class="bullet-icon"></div><div><strong>Mesh network dependencies invisible</strong><span>Users couldn\'t understand why Device A affected Device B.</span></div></li><li><div class="bullet-icon"></div><div><strong>Inconsistent notification patterns</strong><span>Different device types needed different alert and status displays.</span></div></li><li><div class="bullet-icon"></div><div><strong>Settings complexity explosion</strong><span>Each new device type required branching settings logic.</span></div></li></ul></div><div class="highlight-box info-box"><h4 class="box-title"><span class="icon-ui icon-target"></span> The Initial (Naive) Solution</h4><p>Our first instinct was to maintain visual consistency - make legacy Wi-Fi valves and new GConnect valves look identical in the interface. The thinking was that users would intuitively understand they offered the same control features, despite the new system\'s hierarchy.</p></div><p class="caption-text">Spoiler alert: This approach completely failed in beta testing.</p>'
      },
      {
        type: 'full-image',
        image: 'assets/images/projects/flologic/image of first take.png',
        alt: 'First attempt at new UI design',
        caption: 'The first attempt at visual consistency'
      },
      {
        type: 'text',
        heading: 'The First Attempt: Visual Band-Aids',
        content: '<div class="side-by-side-panels"><div class="panel warning-panel"><h4 class="panel-title"><span class="icon-ui icon-paint"></span> Our Initial Strategy</h4><p>We focused on visual consistency, maintaining stakeholder requests for minimal changes while making both device types the same color in the UI to signal equivalence.</p><div class="mini-box"><div><span class="icon-ui icon-lightbulb-small"></span></div><div><strong>The Logic</strong><span>"If they look the same, users will understand they work the same."</span></div></div></div><div class="panel error-panel"><h4 class="panel-title"><span class="icon-ui icon-chart"></span> What Beta Testing Revealed</h4><ul class="bullet-list compact"><li><div class="bullet-icon"></div><div><strong>Users couldn\'t understand device relationships</strong><span>Especially confusing within the mesh network structure.</span></div></li><li><div class="bullet-icon"></div><div><strong>Visual parity ≠ Functional clarity</strong><span>Looking the same didn\'t help users understand capabilities.</span></div></li><li><div class="bullet-icon"></div><div><strong>The design itself was lackluster</strong><span>Aesthetic issues on top of usability problems.</span></div></li></ul></div></div><p class="caption-text">Time to go back to the drawing board...</p>'
      },
      {
        type: 'text',
        heading: 'The Breakthrough: Location-Centric Design',
        content: '<div class="breakthrough-grid"><div class="highlight-box info-box"><h4 class="box-title"><span class="icon-ui icon-lightbulb"></span> The Mental Model Shift</h4><div class="side-by-side-panels compact"><div class="panel error-panel-alt"><h5 class="panel-title"><span class="icon-ui icon-close"></span> Device-Type Framing</h5><p>"You have a GConnect valve, a Legacy valve, a Gateway, and sensors..."</p><div class="panel-tag">Technical, abstract, confusing</div></div><div class="panel success-panel-alt"><h5 class="panel-title"><span class="icon-ui icon-check"></span> Location-Based Framing</h5><p>"This is your house. These are the devices protecting it."</p><div class="panel-tag">Intuitive, spatial, familiar</div></div></div></div><div class="highlight-box info-box"><h4 class="box-title"><span class="icon-ui icon-structure"></span> The New Structure</h4><ul class="icon-list"><li><div class="list-icon icon-bg-house"></div><div><strong>White Container Boxes</strong><span>Each system grouped visually by physical address, not device type.</span></div></li><li><div class="list-icon icon-bg-scale"></div><div><strong>Visual Equality</strong><span>Legacy and new devices appeared visually similar within each location.</span></div></li></ul></div><div class="highlight-box quote-box"><h3 class="box-title"><span class="icon-ui icon-target"></span> The User Mental Model</h3><div class="quote-content">"This is my house.<br/>These are the devices in it."</div><p>Simple. Spatial. Intuitive.</p></div><div class="highlight-box success-box"><h4 class="box-title"><span class="icon-ui icon-graph-up"></span> The Results</h4><ul class="bullet-list"><li><div class="bullet-icon"></div><div><strong>Logical grouping achieved</strong><span>Settings, controls, and alerts felt navigable rather than abstract.</span></div></li><li><div class="bullet-icon"></div><div><strong>Bridge between legacy and new</strong><span>Users could understand their system layout without decoding technical hierarchy.</span></div></li><li><div class="bullet-icon"></div><div><strong>Beta testing success</strong><span>Significant improvement in user comprehension and task completion.</span></div></li></ul></div></div>'
      },
      {
        type: 'full-image',
        image: 'assets/images/projects/flologic/showing the transformation from device-centric to location-centric.png',
        alt: 'Old vs. New UI Comparison',
        caption: 'Showing the transformation from device-centric to location-centric design'
      },
      {
        type: 'text',
        heading: 'Strategic Implementation: Simplifying the Language',
        content: '<div class="implementation-grid"><div class="highlight-box secondary-box"><h4 class="box-title"><span class="icon-ui icon-cut"></span> Cutting Complexity</h4><ul class="icon-list"><li><div class="list-icon icon-bg-mute"></div><div><strong>Removed "Gateway" from interface</strong><span>Eliminated technical jargon that confused users.</span></div></li><li><div class="list-icon icon-bg-pin"></div><div><strong>Focused on "location" in settings</strong><span>Consistent language across legacy and new devices.</span></div></li><li><div class="list-icon icon-bg-sync"></div><div><strong>Universal consistency</strong><span>Same location-based approach for all device types.</span></div></li></ul></div><div class="highlight-box centered-box"><p>The result: One interface language that worked for everyone <span class="icon-ui icon-target-small"></span></p></div></div>'
      },
      {
        type: 'text',
        heading: 'Comprehensive App Modernization',
        content: '<div class="highlight-box tertiary-box"><h4 class="box-title"><span class="icon-ui icon-users"></span> Real-World Beta Testing</h4><div class="user-types"><div class="user-type"><div class="user-icon icon-bg-wrench"></div><strong>Plumbers</strong></div><div class="user-type"><div class="user-icon icon-bg-person"></div><strong>Retirees</strong></div><div class="user-type"><div class="user-icon icon-bg-home"></div><strong>Homeowners</strong></div></div><p>Twenty diverse beta testers received weekly TestFlight builds. Through calls and emails, we uncovered critical pain points that users were quietly enduring rather than reporting.</p></div><div class="highlight-box error-box"><h4 class="box-title"><span class="icon-ui icon-search"></span> Key Discovery: Silent Suffering</h4><ul class="bullet-list"><li><div class="bullet-icon"></div><div><strong>Alert source confusion</strong><span>Users forgot which device triggered push notifications (Miller\'s Law in action).</span></div></li><li><div class="bullet-icon"></div><div><strong>Adaptation over feedback</strong><span>People adapted to confusing language rather than complain.</span></div></li><li><div class="bullet-icon"></div><div><strong>Missing troubleshooting</strong><span>Clear lack of in-app assistance and guidance.</span></div></li></ul></div><div class="highlight-box info-box"><h4 class="box-title"><span class="icon-ui icon-clipboard"></span> Comprehensive Heuristic Evaluation</h4><p>Beyond user testing, I conducted a thorough heuristic evaluation to identify systematic usability issues and ensure the redesign addressed core interaction principles.</p></div>'
      },
      {
        type: 'full-image',
        image: 'assets/images/projects/flologic/screenshots of old app.avif',
        alt: 'Screenshots of old app',
        caption: 'The legacy FloLogic app interface showing its limitations'
      },
      {
        type: 'text',
        heading: 'key findings',
        content: '<div class="key-findings-grid"><div class="finding-card"><h4>1. navigation structure</h4><p>The app\'s navigation is highly linear, which limits flexibility when switching between devices. As more device types are added, this structure becomes increasingly inefficient. The amount of clicks it takes to get to one crumble of information is extremely diluting. With Miller\'s Law in mind, cross-referencing information would be nearly impossible.</p></div><div class="finding-card"><h4>2. overly novel</h4><p>FloLogic often introduces new and unfamiliar ideas across their brand, from the language they use to past design choices and the overall user experience with the physical product. The app design alone can make the experience feel unfamiliar or harder to navigate. Following established patterns (Jakob\'s Law), would help users feel more grounded and confident as they move through the app.</p></div><div class="finding-card"><h4>3. recognition over recall</h4><p>The current layout forces users to remember where certain settings or features are located instead of making them easily visible. For example, notifications are buried within individual device settings. With the expected addition of high-volume devices like PinPoints, a centralized notification center would improve accessibility.</p></div><div class="finding-card"><h4>4. error prevention and help</h4><p>The app provides limited support for preventing user errors, offering recovery steps, or guiding users through in-app assistance. The FloLogic support team is extremely overwhelmed with the amount of troubleshooting calls they get per day, and the app\'s support is non-existent.</p></div></div>'
      },
      {
        type: 'text',
        heading: 'first change - centralized menu bar',
        content: '<p>The previous app had one way to access Account information, Sharing, and Support, all of which didn\'t take you far. So I combined them and made things accessible.</p><ul class="feature-list"><li><strong>Device Tree page:</strong> list of devices.</li><li><strong>Centralized History:</strong> Summarized key events across all devices in one easily scannable location.</li><li><strong>Profile page:</strong> now held Account information, support, app-based notification control, and more.</li></ul>'
      },
      {
        type: 'full-image',
        image: 'assets/images/projects/flologic/picture of old app menu bar and new menu bar.png',
        alt: 'Old app menu bar and new menu bar comparison',
        caption: 'Picture of old app menu bar and new menu bar'
      },
      {
        type: 'full-image',
        image: 'assets/images/projects/flologic/image of all new pages.png',
        alt: 'All new pages',
        caption: 'Image of all new pages'
      },
      {
        type: 'text',
        heading: 'second change - settings pages',
        content: '<p>This one is my personal favorite out of all of them. The FloLogic brand really appreciates Apple\'s sleek look so I took inspiration from that design. I continued with functionality from the device tree and put it into the valve settings. I cleaned up a lot of loose ends with this part of the project.</p><p>Many of these settings you had to dig for but the new design groups like-settings and makes it far more readable.</p><p>Implementing the same functionality in the device tree to keep things consistent while giving users access to the settings they care about the most. This is also where I was able to add little information icons to allow the user to understand FloLogic lingo.</p>'
      },
      {
        type: 'full-image',
        image: 'assets/images/projects/flologic/before Gateway settings and after.png',
        alt: 'Before Gateway Settings vs after',
        caption: 'Gateway settings comparison showing the dramatic improvement in design and usability'
      },
      {
        type: 'text',
        heading: 'Settings in Motion: Before & After',
        content: '<p>To truly appreciate the transformation, here are the actual interface interactions in motion. These videos show the real user experience - from the cluttered, confusing legacy settings to the clean, intuitive new design.</p><div class="side-by-side-panels video-panels"><div class="panel error-panel"><h4 class="panel-title"><span class="icon-ui icon-close"></span> Before: Legacy Settings</h4><video controls><source src="assets/images/projects/flologic/Gconnect settings before.mov" type="video/quicktime"><source src="assets/images/projects/flologic/Gconnect settings before.mov" type="video/mp4">Your browser does not support the video tag.</video><p>Cluttered interface with poor information hierarchy and confusing navigation patterns.</p></div><div class="panel success-panel"><h4 class="panel-title"><span class="icon-ui icon-check"></span> After: Redesigned</h4><video controls><source src="assets/images/projects/flologic/GConnect Settings after.mov" type="video/quicktime"><source src="assets/images/projects/flologic/GConnect Settings after.mov" type="video/mp4">Your browser does not support the video tag.</video><p>Clean, Apple-inspired design with logical grouping and intuitive user flow.</p></div></div><div class="highlight-box info-box"><p><strong><span class="icon-ui icon-lightbulb"></span> Key Insight:</strong> The difference isn\'t just visual—it\'s about creating an interaction flow that feels natural and reduces cognitive load.</p></div>'
      },
      {
        type: 'stats',
        stats: [
          { value: '↓ 25%', label: 'Support call reduction', desc: 'Fewer confused users calling support' },
          { value: '30%', label: 'Faster implementation', desc: 'According to dev feedback' },
          { value: '↓ 50%', label: 'Average taps required', desc: 'To reach critical valve controls (cut from 6 taps to 3)' }
        ]
      },
      {
        type: 'text',
        heading: 'lessons learned',
        content: '<p style="line-height: 1.8;">Looking back, this project was a complex systems challenge disguised as a UI update. Several key learnings emerged:</p><div style="margin-top: 1rem; display: grid; gap: 1rem;"><div style="padding: 1.5rem; background: rgba(255, 255, 255, 0.03); border-radius: 12px;"><p><strong>Low-fidelity prototypes:</strong> I would use more low-fidelity prototypes in the future (now that I have a design system), creating these would be quicker and communicate a concept without completely going balls to the wall with high fidelity just to have it shot down. In the end it\'s just a time saver.</p></div><div style="padding: 1.5rem; background: rgba(255, 255, 255, 0.03); border-radius: 12px;"><p><strong>Decision log:</strong> Keep a decision log for stakeholders. One running doc that records "what we decided and why" prevents repeat debates and speeds approvals on future iterations.</p></div><div style="padding: 1.5rem; background: rgba(255, 255, 255, 0.03); border-radius: 12px;"><p><strong>Version control:</strong> Version the design system. Tag each major change (v1.0, v1.1) so devs know which token set to pull. It prevents "mystery overrides" when multiple teams ship in parallel.</p></div></div>'
      },
      {
        type: 'text',
        heading: 'Additional Work - Interactive Troubleshooting Guide',
        content: '<p class="large-text">To reduce support burden and empower customers to resolve issues independently, I created an interactive LED and button troubleshooting guide for FloLogic\'s website. This comprehensive resource walks customers through common device states, LED patterns, and button interactions, helping them understand and resolve issues without needing to call support.</p><div class="figma-embed-container" style="margin: 2rem 0; border-radius: 12px; overflow: hidden; border: 1px solid rgba(110, 234, 255, 0.2);"><iframe style="border: none; width: 100%; height: 600px;" src="https://embed.figma.com/proto/XEEVXVWp0JV7Ht5V4vMMts/FloLogic-Interactive-User-Guide-Prototype?page-id=459%3A3167&node-id=557-3238&starting-point-node-id=466%3A4284&show-proto-sidebar=1&embed-host=share" allowfullscreen></iframe></div>'
      },
      {
        type: 'text',
        heading: 'Continuous Evolution',
        content: '<p class="large-text" style="line-height: 1.8; margin: 0;">The current version of the FloLogic application is live in beta and continues to evolve with each new device firmware release and user feedback. The main change with the device hierarchy exists in production. FloLogic plans on slowly rolling out these changes over time as the dev team is able to implement them.</p>'
      }
    ],
    // Keep old structure for backward compatibility
    sections: [
      { heading: 'Problem', body: `FloLogic began as a single Wi-Fi shut-off valve. In 2024, the company was transitioning to a sophisticated, multi-unit mesh network. Early stakeholder hopes of "adding a few screens" collapsed as soon as we watched beta users try to navigate the old linear interface. The mental model had to change.` },
      { heading: 'My Role', body: `<ul><li>Complete app re-work + modernization</li><li>Comprehensive design system + FloLogic brand guidelines</li><li>Beta feedback integration with 20-person test group</li><li>Stakeholder presentations on hi-fi prototypes</li><li>Project + cross-team management</li></ul>` },
      { heading: 'Key Achievements', body: `<ul><li>50% fewer taps to reach valve controls</li><li>25% drop in support calls within beta cohort</li><li>30% faster implementation according to dev feedback</li><li>Built tokenized design system for plug-and-play dev handoff</li></ul>` },
      { heading: 'The Challenge', body: `The old UI was built around a single device with no model for parent/child relationships, mesh-networked dependencies, or multiple locations. Visual parity alone failed to convey functional parity.` },
      { heading: 'The Solution', body: `Shifted from device-type framing to location-based framing. Each system was grouped visually inside a white container box, labeled by physical address. This created a clear mental model: "This is my house. These are the devices in it."` },
      { heading: 'Key Improvements', body: `<ul><li>Centralized menu bar combining account, sharing, and support</li><li>Apple-inspired settings pages with grouped like-settings</li><li>Device tree page with location-centric organization</li><li>Centralized history for all device events</li><li>Inline troubleshooting and contextual help</li></ul>` },
      { heading: 'Heuristic Evaluation Findings', body: `<ul><li><b>Navigation Structure:</b> Highly linear, limiting flexibility</li><li><b>Overly Novel:</b> Unfamiliar language and design choices</li><li><b>Recognition Over Recall:</b> Important settings buried</li><li><b>Error Prevention:</b> Limited support for preventing user errors</li></ul>` },
      { heading: 'Beta Testing', body: `20-person beta group (plumbers, retirees, property managers) with weekly TestFlight builds. Used surveys, Zoom walkthroughs, and screen recordings to identify friction points.` },
      { heading: 'Lessons Learned', body: `<ul><li>Use more low-fidelity prototypes for faster iteration</li><li>Keep a decision log for stakeholders to prevent repeat debates</li><li>Version the design system (v1.0, v1.1) for parallel team shipping</li></ul>` }
    ],
    impacts: [
      { value: '↓ 25%', label: 'Support call reduction', desc: 'Fewer confused users calling support' },
      { value: '30%', label: 'Faster implementation', desc: 'According to dev feedback' },
      { value: '↓ 50%', label: 'Average taps required', desc: 'To reach critical valve controls (cut from 6 taps to 3)' }
    ]
  },
  circadia: {
    title: 'Circadia - AI Powered Bed-Time App',
    subtitle: 'A pre-sleep ritual designed for stillness, built to guide, not instruct',
    images: [
      'assets/images/projects/circadia/circadia.png'
    ],
    overviewTags: [
      'Sole Designer', 'AI App Design', 'Custom Animations', 'Mobile UI', 'Beta Program'
    ],
    tools: ['Illustrator', 'Rive', 'Animation', 'Prototyping'],
    timeline: '2025',
    theme: {
      primary: '#8b5cf6',
      secondary: '#a855f7',
      accent: '#c084fc'
    },
    contentBlocks: [
      {
        type: 'hero',
        image: 'assets/images/projects/circadia/circadia 1.webp',
        title: 'A Bedtime Ritual for the Digital Age',
        description: 'More than a dream journal – Circadia is a pre-sleep experience designed to help users wind down and manifest intentionally, synced to the phases of the moon.',
        alt: 'Circadia app showing moon phases and dream interface'
      },
      {
        type: 'text',
        heading: 'The Challenge: From Dream Journal to Digital Ritual',
        content: '<p class="large-text">Circadia began with a simple premise: a digital dream journal. However, the vision quickly evolved. The true challenge wasn\'t just to build a tool for recording dreams, but to create an immersive pre-sleep ritual that could help people disconnect, wind down, and manifest their intentions.</p><div class="side-by-side-panels"><div class="panel legacy-panel"><h4><span class="icon-ui icon-mobile-old"></span>Original Concept</h4><p>A simple, functional dream journal for recording nightly events.</p></div><div class="panel new-panel"><h4><span class="icon-ui icon-network-new"></span>Realized Vision</h4><p>An immersive pre-sleep ritual that makes bedtime feel sacred, not transactional.</p></div></div><div class="challenge-box"><h3>The Core Design Challenge</h3><p>How do you design a mobile app that helps people disconnect from their digital lives? The goal was to respect the liminal space between waking and sleeping, using technology to escape technology.</p></div>'
      },
      {
        type: 'text',
        heading: 'My Role: Sole Designer & UX Architect',
        content: '<div class="role-responsibilities"><div class="responsibility-item"><h4>1. Product Identity & Visual System</h4><p>As the sole designer, I had complete ownership of the visual direction and user experience. I created the entire visual system from the ground up in Illustrator, including a comprehensive 40+ token design system to ensure clarity and scalability.</p><p class="why-box"><strong>Why?</strong> A strong, coherent design system was crucial for a small team to build a polished, high-quality experience quickly and consistently.</p></div><div class="responsibility-item with-image"><div><h4>2. User Experience & Flow Design</h4><p>I designed all user flows, from the unique onboarding sequence to the manifestation guides and unconscious tests. The key was to make every interaction feel calm, gentle, and intentional, replacing traditional UI patterns with a more fluid, emotionally resonant experience.</p><p class="result-box"><strong>Result:</strong> A seamless, meditative onboarding flow that achieved a 100% completion rate in beta testing, with zero traditional login screens.</p></div><img src="assets/images/projects/circadia/circadia design system.svg" alt="Circadia design system"/></div><div class="responsibility-item"><h4>3. Custom Animation & Microinteractions</h4><p>To carry the emotional weight of the experience, I built over 15 custom animations in Rive. These weren\'t just decorative; they were core to the UX, creating seamless transitions and subtle microinteractions that guided the user without demanding their attention. The goal was to honor the sacred transition between waking and sleeping.</p></div><div class="responsibility-item"><h4>4. UX Strategy & Stakeholder Collaboration</h4><p>The project involved fast-paced stakeholder demands and a constantly evolving scope. I led the UX strategy, successfully advocating for a shift away from a data-collection mindset towards a trust-building one. This involved transforming the onboarding from a transactional gateway into the first step of the bedtime ritual itself.</p></div></div>'
      },
      {
        type: 'text',
        heading: 'The Breakthrough: Onboarding as Ritual',
        content: '<p class="large-text">The most critical strategic shift was in the onboarding. Initially, it functioned as a typical transactional gateway: "give us your information before we let you in." This felt completely at odds with the app\'s core philosophy.</p><div class="highlight-box info-box"><h4 class="box-title"><span class="icon-ui icon-lightbulb"></span> The Mental Model Shift</h4><div class="side-by-side-panels compact"><div class="panel error-panel-alt"><h5 class="panel-title"><span class="icon-ui icon-close"></span> Transactional Gateway</h5><p>"Give us your data, then you can use the app."</p><div class="panel-tag">Barrier to entry, feels like work</div></div><div class="panel success-panel-alt"><h5 class="panel-title"><span class="icon-ui icon-check"></span> Meditative Experience</h5><p>"Each question draws you in gently, like the start of a meditation."</p><div class="panel-tag">Part of the ritual, builds trust</div></div></div></div><div class="highlight-box quote-box compact"><h3 class="box-title"><span class="icon-ui icon-target"></span>The Design Philosophy</h3><div class="quote-content">"Onboarding should feel like<br/>the beginning of the ritual,<br/>not a barrier to it."</div><p>Every interaction was redesigned to invite, not interrogate.</p></div>'
      },
      {
        type: 'stacked-deliverables',
        heading: 'Deliverables',
        deliverables: [
          {
            number: '01',
            title: 'Main Immersive UI Flows',
            description: 'Mapped out complete user journeys from onboarding through daily ritual use, ensuring seamless transitions between states.',
            image: 'assets/images/projects/circadia/dAXewvJ6lleBv4zSq76LKdQL9NE.webp',
            alt: 'Main immersive UI flows mapped out'
          },
          {
            number: '02',
            title: 'Wireframing Flows',
            description: 'Low-fidelity wireframes establishing information architecture and interaction patterns before visual design.',
            image: 'assets/images/projects/circadia/sPG5Zmop1bG0Iyp3PNN0RwMSOE.webp',
            alt: 'Wireframing flows'
          },
          {
            number: '03',
            title: 'Design System',
            description: 'Minimal design system creation with 40+ tokens for consistency moving forward across all product flows.',
            image: 'assets/images/projects/circadia/UGkyq0MnIHLRdSHmT3ERnDECA4.webp',
            alt: 'Minimal design system creation for consistency moving forward'
          },
          {
            number: '04',
            title: 'Custom Illustrations',
            description: 'Mudra illustrations crafted in Illustrator to enhance the spiritual and meditative aspects of the experience.',
            image: 'assets/images/projects/circadia/Circadia Mudras.png',
            alt: 'Mudra illustrations made in Illustrator'
          },
          {
            number: '05',
            title: 'RIVE Animations',
            description: 'Custom animation created in RIVE – one of 15+ animations designed to guide users through the bedtime ritual with subtle, intentional microinteractions.',
            video: 'assets/images/projects/circadia/Animation recording.mp4',
            alt: 'Custom RIVE animation showcase'
          },
          {
            number: '06',
            title: 'Final Product',
            description: 'Circadia transforms bedtime routines into meaningful rituals through thoughtful design and lunar synchronization.',
            image: 'assets/images/projects/circadia/circadia.avif',
            alt: 'Circadia app ecosystem showing various screens and moon phases'
          }
        ]
      },
      {
        type: 'quote',
        content: 'With limited features, the UX had to carry emotional weight. I focused on subtle microinteractions, calm pacing, and seamless transitions. Everything needed to feel intentional.'
      },
      {
        type: 'stats',
        stats: [
          { value: '40+', label: 'Token design system', desc: 'Used across all product flows' },
          { value: '15+', label: 'Custom animations', desc: 'For immersive transitions' },
          { value: '100%', label: 'Onboarding completion', desc: 'During internal beta testing' }
        ]
      },
      {
        type: 'text',
        heading: 'Lessons Learned',
        content: '<p class="large-text">This project was a lesson in designing for emotion and intention under tight constraints. It was part-time work alongside a full-time role, but the vision remained clear.</p><div style="margin-top: 1rem; display: grid; gap: 1rem;"><div style="padding: 1.5rem; background: rgba(255, 255, 255, 0.03); border-radius: 12px;"><p><strong>More conceptual exploration early:</strong> Given more time, I would have dedicated a specific phase to divergent thinking and broad vision exploration before diving into high-fidelity designs. This could have uncovered even more innovative approaches.</p></div><div style="padding: 1.5rem; background: rgba(255, 255, 255, 0.03); border-radius: 12px;"><p><strong>AI-accelerated iteration:</strong> The pace of the project would have benefited from leveraging modern AI tools to rapidly prototype and test different visual concepts and user flows, getting feedback faster.</p></div><div style="padding: 1.5rem; background: rgba(255, 255, 255, 0.03); border-radius: 12px;"><p><strong>The power of a clear vision:</strong> Despite changing requirements and constraints, having an unwavering goal—"build something that feels like a ritual, not just an app"—was the anchor that kept the project focused and coherent.</p></div></div>'
      }
    ],
    impacts: [
      { value: '40+', label: 'Token design system', desc: 'Used across all product flows' },
      { value: '15+', label: 'Custom animations', desc: 'For immersive transitions' },
      { value: '100%', label: 'Onboarding completion', desc: 'During internal beta testing' }
    ]
  },
   teamu: {
     title: 'Teamu',
     subtitle: 'AI social media platform solving the loneliness epidemic',
    images: [
       'assets/images/projects/teamu.png'
    ],
    overviewTags: [
       'UX Research', 'Social Platform Design', 'AI Integration', 'Mental Health Focus'
    ],
    tools: ['Figma', 'Miro', 'User Interviews', 'Competitive Analysis'],
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
   dashboard: {
     title: 'FloLogic Dashboard MVP',
     subtitle: 'Giving property managers instant clarity across devices and properties',
     images: [
       'assets/images/projects/user dashboard/thumbnail.png'
     ],
     overviewTags: [
      'Lead Product Designer', 'B2B Dashboard', 'MVP Development', 'Property Management'
    ],
    tools: ['Figma', 'MAUI/Telerik', 'User Testing', 'Design Systems'],
    contentBlocks: [
      {
        type: 'hero',
        image: 'assets/images/projects/user dashboard/thumbnail.png',
        title: '',
        description: '',
        alt: 'FloLogic dashboard MVP showing property management interface'
      },
      {
        type: 'text',
        heading: 'From Consumer to Commercial',
        content: '<p style="line-height: 1.8;">When FloLogic expanded from consumer homes into commercial properties, our sales team needed something fast: a working MVP dashboard that made sense to property managers - not just engineers. I stepped in as the lead product designer to ship a clean, no-fluff user interface that brought value from day one.</p>'
      },
      {
        type: 'text',
        heading: 'The Ask: "We just need something to show"',
        content: '<p style="line-height: 1.8;">FloLogic\'s sales team was moving fast. With new B2B partnerships forming, we needed a working dashboard to demo - one that let stakeholders visualize devices across multiple properties without confusing or overwhelming them.</p><div style="margin: 2rem 0; padding: 1.5rem; background: rgba(255, 255, 255, 0.03); border-radius: 12px; border-left: 4px solid var(--color-primary);"><h4 style="color: var(--color-primary); margin-bottom: 1rem;">The Challenge</h4><ul style="line-height: 1.6; margin-bottom: 0;"><li><strong>No prior web dashboard existed</strong></li><li><strong>Needed MVP-level scope - fast</strong></li><li><strong>Minimal backend flexibility</strong> (MAUI - Telerik)</li><li><strong>Needed to work for both B2B and individual property managers</strong></li><li><strong>Data was device-heavy, but context-light</strong></li></ul></div>'
      },
      {
        type: 'text',
        heading: 'The Problem: Early Designs Confused Users',
        content: '<p style="line-height: 1.8;">Early designs confused beta users and stakeholders with feedback like:</p><div style="margin: 1.5rem 0; padding: 1.5rem; background: rgba(255, 69, 58, 0.05); border-radius: 12px; border: 1px solid rgba(255, 69, 58, 0.2);"><p style="margin-bottom: 0.5rem; color: rgba(255, 69, 58, 0.9);">"Why are the PinPoints separated out?"</p><p style="margin-bottom: 0.5rem; color: rgba(255, 69, 58, 0.9);">"Where is my Wi-Fi Connect?"</p></div><p style="line-height: 1.8;">While it worked for internal testers who already understood the system, new users hit a wall trying to find even basic device info.</p>'
      },
      {
        type: 'text',
        heading: 'What They Originally Had',
        content: '<p style="line-height: 1.8;">Before my involvement, the "dashboard" was clunky, but workable. This is the design they were working with:</p>'
      },
      {
        type: 'gallery',
        heading: 'Original Dashboard Design',
        images: [
          { src: 'assets/images/projects/user dashboard/image of design before 1.png', alt: 'Original dashboard design showing confusing layout' },
          { src: 'assets/images/projects/user dashboard/image of design before 2.png', alt: 'Original dashboard with separated PinPoints' },
          { src: 'assets/images/projects/user dashboard/image of design before3.png', alt: 'Original dashboard lacking clear hierarchy' },
          { src: 'assets/images/projects/user dashboard/image of design before4.png', alt: 'Original dashboard with usability issues' }
        ]
      },
      {
        type: 'text',
        heading: 'My Role: Sole Designer, Full Product Ownership',
        content: '<p style="line-height: 1.8;">I was the sole designer on the project. I led the product design from scratch - integrating what I knew about the current direction of the app I had designed and expanding upon their newly implemented design system.</p>'
      },
      {
        type: 'text',
        heading: 'What I Built Instead',
        content: '<div style="margin: 2rem 0;"><h4 style="color: var(--color-primary); margin-bottom: 1rem;">Key Changes Made:</h4><div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;"><div style="padding: 1.5rem; background: rgba(110, 234, 255, 0.05); border-radius: 12px; border: 1px solid rgba(110, 234, 255, 0.2);"><h5 style="color: var(--color-primary); margin-bottom: 0.5rem;">🏢 Clear Property-Level Hierarchy</h5><p style="line-height: 1.6;">Grouped gateways, valves, and sensors by property for intuitive navigation</p></div><div style="padding: 1.5rem; background: rgba(110, 234, 255, 0.05); border-radius: 12px; border: 1px solid rgba(110, 234, 255, 0.2);"><h5 style="color: var(--color-primary); margin-bottom: 0.5rem;">📱 Dedicated Information Sections</h5><p style="line-height: 1.6;">Removed confusing slide-outs and gave information its own designated section</p></div><div style="padding: 1.5rem; background: rgba(110, 234, 255, 0.05); border-radius: 12px; border: 1px solid rgba(110, 234, 255, 0.2);"><h5 style="color: var(--color-primary); margin-bottom: 0.5rem;">⚙️ Clear Grouping & Customization</h5><p style="line-height: 1.6;">More intuitive dashboard customization with logical device groupings</p></div></div></div>'
      },
      {
        type: 'gallery',
        heading: 'New Dashboard Design',
        images: [
          { src: 'assets/images/projects/user dashboard/new design.png', alt: 'New dashboard design with clear property hierarchy' },
          { src: 'assets/images/projects/user dashboard/new design 2.png', alt: 'New dashboard showing improved grouping and customization' }
        ]
      },
      {
        type: 'full-image',
        image: 'assets/images/projects/user dashboard/thumbnail.png',
        alt: 'Final FloLogic dashboard MVP showing clean property management interface',
        caption: 'The final MVP dashboard: clear, purposeful, and ready for B2B demos'
      }
    ],
    impacts: [
      { value: '88%', label: 'Increase in System Visibility', desc: 'Property managers gained clear oversight across devices' },
      { value: '70%', label: 'Reduction in Device Grouping Confusion', desc: 'Eliminated user confusion around device organization' },  
      { value: '>3×', label: 'Faster Onboarding During Demos', desc: 'Prospects understood the system immediately' }
     ]
   }
   
   // REMOVED: project6 case study
   /*,
    project6: {
    title: 'A Clean Digital Presence for Embedded Systems',
    subtitle: 'Lightweight, fast-loading static marketing site for firmware-focused company',
    images: [
      'assets/images/projects/circadia/circadia.png'
    ],
    overviewTags: [
      'Designer & Developer', 'Marketing Website', 'Performance Optimization', 'Static Site'
    ],
    tools: ['HTML/CSS', 'JavaScript', 'Performance Optimization', 'SEO'],
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
  */,
   admintool: {
    title: 'Internal Support Tool Redesign',
    subtitle: 'Consolidating fragmented workflows into a single source of truth for Customer Service and Engineering',
    images: [
      'assets/images/projects/admintool/Main Card Photo mockup.png'
    ],
    overviewTags: [
      'Lead Product Designer', 'Internal Tools', 'Workflow Optimization', 'AI Integration'
    ],
    tools: ['Blazor', 'Telerik', 'User Testing', 'Naturalistic Observation'],
    contentBlocks: [
      {
        type: 'hero',
        image: 'assets/images/projects/admintool/Main Card Photo mockup.png',
        title: 'Internal Support Tool Redesign',
        description: 'From scattered workflows to a unified hub for Customer Service and Engineering',
        alt: 'AdminTool interface showing consolidated support workflow'
      },
      {
        type: 'text',
        heading: 'Overview',
        content: '<p class="large-text">FloLogic\'s Customer Service (CS) team was reliant on Engineering for daily troubleshooting, reaching out via Teams chat over ten times a day. Workflows were scattered: ticket details lived in Freshdesk / Microsoft teams, and RMA protocols were handled manually across multiple windows.</p><p class="large-text">I led the redesign of AdminTool, the core internal tool, to consolidate these fragmented processes. The goal was to create a single source of truth that would reduce friction, simplify navigation, and introduce automation, empowering both CS and Engineering to work more efficiently.</p><div class="highlight-box info-box"><p><strong>⚠️ Can\'t cut out FreshDesk from the flow</strong>, but once the CS team moves over to AdminTool, they\'re able to stay there.</p></div>'
      },
      {
        type: 'text',
        heading: '1. The Challenge',
        content: '<p class="large-text">The existing setup was a significant drain on time and resources for both departments. Customer Service agents needed to keep at least five different programs open just to handle a single customer troubleshooting call.</p><div class="highlight-box error-box"><h4 class="box-title"><span class="icon-ui icon-warning"></span> Key Pain Points:</h4><ul class="bullet-list"><li><div class="bullet-icon"></div><div><strong>Scattered Tools:</strong> Support staff juggled Freshdesk, Shopify, Teams, the Admin Dashboard, and historic reference tool (WooCommerce).</div></li><li><div class="bullet-icon"></div><div><strong>Workflow Friction:</strong> The handoff to Engineering was a manual copy-paste of long Freshdesk conversation, which Engineering (who were unfamiliar with Freshdesk) had to read in full to find the necessary data.</div></li><li><div class="bullet-icon"></div><div><strong>Ambiguous Protocols:</strong> The process for handling Customer Returns (RMAs), lost devices, and restocks was notoriously unclear and "up for interpretation," leading to inconsistent data and frequent escalations.</div></li></ul></div><div class="highlight-box secondary-box"><h4 class="box-title">Baseline KPIs (Starting Point):</h4><ul class="icon-list"><li><div class="list-icon icon-bg-time"></div><div><strong>Time per Ticket:</strong> ~1 hour for CS and ~1 hour for Engineering (if an RMA was involved).</div></li><li><div class="list-icon icon-bg-alert"></div><div><strong>Engineering Interruptions:</strong> ~10 pings per day from CS for troubleshooting assistance.</div></li></ul></div>'
      },
      {
        type: 'full-image',
        image: 'assets/images/projects/admintool/Old AdminTool Design.png',
        alt: 'Old AdminTool interface showing cluttered and fragmented layout',
        caption: 'The original AdminTool interface: fragmented, device-ID based, and difficult to navigate'
      },
      {
        type: 'text',
        heading: '2. My Role & Approach',
        content: '<div class="role-responsibilities"><div class="responsibility-item"><h4>My Role: Lead Product Designer</h4><p><strong>Team:</strong> 2 Engineers, Customer Service (for statistics and observation)</p><p><strong>Timeline:</strong> 3-month project, Q4 2025</p><p><strong>Tech Stack:</strong> Blazor server with Telerik components</p></div></div><p class="large-text">My approach was to first understand the <em>why</em> behind the fragmented workflows by observing the CS team directly and then use those insights to move toward AdminTool use as the central hub for all support and engineering tasks.</p>'
      },
      {
        type: 'text',
        heading: '3. Research & Discovery',
        content: '<p class="large-text">I used a mix of qualitative and quantitative methods to identify the biggest opportunities for improvement.</p><div class="highlight-box info-box"><h4 class="box-title"><span class="icon-ui icon-search"></span> Research Methods:</h4><ul class="bullet-list"><li><div class="bullet-icon"></div><div><strong>Naturalistic Observation:</strong> I silently observed the CS team during live calls to see their genuine behavior and identify organic workarounds and friction points.</div></li><li><div class="bullet-icon"></div><div><strong>User Testing & Heatmapping:</strong> We analyzed click patterns and user tests on the existing AdminTool to see which features were most critical and what wasn\'t used.</div></li><li><div class="bullet-icon"></div><div><strong>Ticket Analysis:</strong> We reviewed Freshdesk ticket types and frequencies to pinpoint the most common and time-consuming issues.</div></li></ul></div>'
      },
      {
        type: 'full-image',
        image: 'assets/images/projects/admintool/hotspots -admintoool.png',
        alt: 'Heatmap showing user interaction patterns on AdminTool',
        caption: 'Heatmap analysis revealing the most critical features and neglected areas'
      },
      {
        type: 'text',
        heading: 'Key Insights',
        content: '<div class="key-findings-grid"><div class="finding-card"><h4>The "Location" Mental Model</h4><p>The most critical insight was that Support\'s workflow isn\'t device-ID based; it\'s <strong>location-based</strong>. They think "Who is this customer?" and "Where is this system?" This directly conflicted with the tool\'s ID-based architecture.</p></div><div class="finding-card"><h4>The "5 Window" Problem</h4><p>Observation confirmed that CS agents had multiple tools open at all times, leading to "context switching" that added significant time to each ticket.</p></div><div class="finding-card"><h4>The "Lost in Translation" Handoff</h4><p>Engineering didn\'t need the entire customer conversation from Freshdesk. They needed a distilled summary of the problem, the device, and the steps already taken. The current process wasted time for both teams.</p></div></div>'
      },
      {
        type: 'text',
        heading: '4. The Solutions: Driving Efficiency and Clarity',
        content: '<p class="large-text">Based on these insights, we designed four core solutions to consolidate workflows and align the tool with the team\'s mental model.</p>'
      },
      {
        type: 'stacked-deliverables',
        heading: '',
        deliverables: [
          {
            number: '01',
            title: 'Location-Based Issue Layout & Multi-Column View',
            description: '<div class="deliverable-table"><div class="deliverable-section"><h5>The Problem</h5><p>The original interface was structured around internal Device IDs, forcing the Support team to translate customer queries (based on location/address) into technical terms, slowing down troubleshooting.</p></div><div class="deliverable-section"><h5>The Action</h5><p>We completely restructured the entire issue view around the customer\'s address and location. The Information Hierarchy was realigned to surface the most critical live-call data (customer details, system status) first. We introduced a Multi-Column View based on usability testing, enabling agents to reference system details, ticket history, and warranty info simultaneously.</p></div><div class="deliverable-section"><h5>The Impact</h5><p>Immediately aligned the tool with the Support team\'s existing troubleshooting workflow, significantly reducing cognitive load and time-to-diagnosis on live calls.</p></div></div>',
            image: 'assets/images/projects/admintool/solution1-placeholder.svg',
            alt: 'Old vs new device detail view and device listing view'
          },
          {
            number: '02',
            title: 'AI-Powered Freshdesk Integration',
            description: '<div class="deliverable-table"><div class="deliverable-section"><h5>The Problem</h5><p>Critical context and troubleshooting steps were "Lost in Translation" during the handoff from Customer Service\'s ticketing system (Freshdesk) to the Engineering team\'s internal AdminTool.</p></div><div class="deliverable-section"><h5>The Action</h5><p>We built a seamless workflow to pull Freshdesk ticket data directly into AdminTool. Whenever an issue is escalated or a ticket is created in the tool, it automatically runs an AI Ticket Parser to extract and organize key information for the engineering team.</p></div><div class="deliverable-section"><h5>The Impact</h5><p>Eliminated manual data entry and context-switching for engineers, providing them with immediate, structured data for faster resolution of escalated issues.</p></div></div>',
            image: 'assets/images/projects/admintool/solution2-placeholder.svg',
            alt: 'Create issue immediately imports information from Freshdesk'
          },
          {
            number: '03',
            title: 'Automated Warranty Processing',
            description: '<div class="deliverable-table"><div class="deliverable-section"><h5>The Problem</h5><p>Ambiguous and time-consuming manual protocols for determining warranty status led to inconsistent customer experiences and wasted agent time.</p></div><div class="deliverable-section"><h5>The Action</h5><p>We automated the entire warranty process. The tool instantly checks if a device has been replaced and determines current warranty eligibility by referencing purchase data (WooCommerce) and customer type (Homeowner, Plumber) to apply the correct terms.</p></div><div class="deliverable-section"><h5>The Impact</h5><p>Fixed ambiguous protocols and provided an instant, transparent warranty decision, leading to faster resolutions and improved customer trust.</p></div></div>',
            image: 'assets/images/projects/admintool/solution3-placeholder.svg',
            alt: 'Warranty flow and button selection importing referenced information'
          },
          {
            number: '04',
            title: 'A Prioritized Engineering-Specific Workflow',
            description: '<div class="deliverable-table"><div class="deliverable-section"><h5>The Problem</h5><p>Critical escalation conversations were happening ad-hoc in platforms like Teams, where they were easily lost, untracked, and lacked necessary context.</p></div><div class="deliverable-section"><h5>The Action</h5><p>I designed a dedicated, structured flow for all issues escalated to Engineering, moving critical conversations directly into the AdminTool where the work is tracked. Customer Service can now set Priority (e.g., "High Priority") and is prompted to add specific context. Engineering receives a Prioritized Dashboard surfacing the most critical tickets at the top. Additionally, QA and Engineering leads receive Automated Email Alerts for all new, critically-assigned tickets.</p></div><div class="deliverable-section"><h5>The Impact</h5><p>Cut down on direct, ad-hoc reach-outs and created a single source of truth for all engineering work, ensuring critical issues are never missed and are addressed in priority order.</p></div></div>',
            image: 'assets/images/projects/admintool/solution4-placeholder.svg',
            alt: 'Engineering dashboard with prioritized tickets'
          }
        ]
      },
      {
        type: 'text',
        heading: '5. Impact & Results',
        content: '<p class="large-text">By centralizing workflows and introducing intelligent automation, we projected a significant reduction in cross-department friction and manual data entry.</p><div class="highlight-box success-box"><h4 class="box-title">Projected Improvements to KPIs:</h4><ul class="bullet-list"><li><div class="bullet-icon"></div><div><strong>Engineering Interruption Frequency:</strong> Reduced daily interruptions from 10+ pings to structured, asynchronous updates within AdminTool.</div></li><li><div class="bullet-icon"></div><div><strong>RMA Processing Time:</strong> Shortened RMA handling time by replacing five open programs with one unified interface.</div></li><li><div class="bullet-icon"></div><div><strong>Average Time to Resolve:</strong> Cleared visibility and AI summaries for Engineering are projected to reduce the time spent on escalated tickets.</div></li></ul></div>'
      },
      {
        type: 'text',
        heading: '6. Key Takeaways',
        content: '<div style="margin-top: 1rem; display: grid; gap: 1rem;"><div style="padding: 1.5rem; background: rgba(255, 255, 255, 0.03); border-radius: 12px;"><p><strong>Design for Mental Models:</strong> The shift from a device-ID-based to a location-based layout was the most impactful change. Aligning the tool with the team\'s natural mental model created immediate clarity and efficiency.</p></div><div style="padding: 1.5rem; background: rgba(255, 255, 255, 0.03); border-radius: 12px;"><p><strong>Summarization as a Feature:</strong> For cross-functional tools, AI summarization isn\'t just a "nice to have"; it\'s a critical feature that translates context between teams (like CS and Engineering) who speak different "languages."</p></div><div style="padding: 1.5rem; background: rgba(255, 255, 255, 0.03); border-radius: 12px;"><p><strong>A Single Source of Truth:</strong> By embedding consistent RMA and warranty workflows into the tool, both teams now operate from the same page. This saves time, reduces errors, and eliminates ambiguity.</p></div></div>'
      },
      {
        type: 'text',
        heading: 'Future Additions (In Progress)',
        content: '<ul class="feature-list"><li><strong>Shopify Workflows:</strong> To generate AdminTool work orders for frequent replacements automatically.</li><li><strong>Internal RAG AI Bot:</strong> An AI helper embedded into AdminTool, trained on internal documentation to answer CS questions instantly.</li><li><strong>3rd Party Ticket API:</strong> An integration to allow Support to post responses back to Freshdesk directly from AdminTool, closing the loop.</li><li><strong>Engineering View Patterns:</strong> Reveals frequent patterns once a formal tagging system is used.</li></ul>'
      },
      {
        type: 'text',
        heading: 'Developer Handoff & Scalable Design System',
        content: '<p class="large-text">A key constraint was that the engineering team was most comfortable implementing components using their established Blazor and Telerik framework. To bridge the gap between my high-fidelity prototypes and the final implementation, I directly utilized the Telerik ThemeBuilder.</p><p>Instead of a static handoff, I went into the ThemeBuilder and systematically adjusted the visual properties of all core components to align perfectly with the prototypes.</p><div class="highlight-box success-box"><h4>Result:</h4><p>This effort resulted in a standardized, web-based design system. This new theme not only streamlined the developer handoff for the AdminTool but was then adopted as the <strong>single source of truth</strong> for all of FloLogic\'s web-based tools. These include the Insurance Dashboard (an insurance carrier tool) and the User Dashboard (a property manager tool), ensuring a consistent UI and user experience across the entire product ecosystem.</p></div>'
      },
      {
        type: 'full-image',
        image: 'assets/images/projects/admintool/Main Card Photo mockup.png',
        alt: 'Final AdminTool interface showing consolidated support workflow',
        caption: 'The redesigned AdminTool: A single source of truth for Customer Service and Engineering'
      }
    ],
    impacts: [
      { value: '~10', label: 'Daily interruptions eliminated', desc: 'From Teams to structured workflow' },
      { value: '5→1', label: 'Programs consolidated', desc: 'All workflows in one tool' },
      { value: '~2hrs', label: 'Time saved per RMA ticket', desc: 'For CS and Engineering combined' }
    ]
  },
   loneliness: {
    title: 'Solving the Loneliness Epidemic',
    subtitle: 'Teamu transforms passive social interaction into meaningful collaboration through AI-driven project matching',
    images: [
      'assets/images/projects/teamu/prototype 1.png'
    ],
    overviewTags: [
      'Lead Product Designer', 'AI Platform', 'Community Building', 'UX Research'
    ],
    tools: ['Figma', 'User Research', 'Prototyping', 'Marketing Strategy'],
    contentBlocks: [
      {
        type: 'hero',
        image: 'assets/images/projects/teamu/prototype 1.png',
        title: 'Solving the Loneliness Epidemic',
        description: 'Transforming passive social interaction into meaningful collaboration',
        alt: 'Teamu prototype showing community-driven project platform'
      },
      {
        type: 'text',
        heading: 'The Challenge: From Isolation to Collaboration',
        content: '<p class="large-text">Our true passions often simmer on the back burner, lost to a lack of motivation and a growing sense of isolation. The loneliness epidemic has made it harder than ever to find meaningful connection and support, leaving many feeling stuck and uninspired.</p><div class="side-by-side-panels"><div class="panel legacy-panel"><h4><span class="icon-ui icon-mobile-old"></span>The Problem</h4><p>Digital isolation<br/>Lack of motivation<br/>Superficial connections</p></div><div class="panel new-panel"><h4><span class="icon-ui icon-network-new"></span>The Goal</h4><p>Meaningful collaboration<br/>AI-driven ideas<br/>Real-world impact</p></div></div><div class="challenge-box"><h3>The Core Design Challenge</h3><p>How do we transform passive social interaction into active, meaningful collaboration, leveraging AI to bridge the gap between online communities and real-world projects?</p></div>'
      },
      {
        type: 'text',
        heading: 'Objectives',
        content: '<ul class="bullet-list"><li><div class="bullet-icon"></div><div>Create a space where users can actively collaborate on community-driven projects.</div></li><li><div class="bullet-icon"></div><div>Leverage AI to generate project ideas based on user passions.</div></li><li><div class="bullet-icon"></div><div>Build a community-focused platform that allows users to connect, collaborate, and create meaningful change.</div></li><li><div class="bullet-icon"></div><div>Implement features that allow users to swipe on ideas, form groups, and launch projects with minimal friction.</div></li></ul>'
      },
      {
        type: 'text',
        heading: 'Summary',
        content: '<p class="large-text">Teamu is a community-driven platform that transforms passive social interaction into meaningful collaboration. Through AI-driven idea generation, users can swipe on project concepts, join community boards, and turn ideas into action. The platform is designed to bridge the gap between social media and real-world impact.</p>'
      },
      {
        type: 'full-image',
        image: 'assets/images/projects/teamu/prototype 2.png',
        alt: 'Teamu prototype showing AI-driven project matching interface',
        caption: ''
      },
      {
        type: 'text',
        heading: 'Key Responsibilities',
        content: '<div class="role-responsibilities"><div class="responsibility-item"><h4>1. User Research & Strategy</h4><p>Conducted in-depth user interviews and competitive analysis to identify the core needs and frustrations of users seeking meaningful connection. Used these insights to define the product\'s core value proposition and strategic direction.</p></div><div class="responsibility-item"><h4>2. UX/UI Design & Prototyping</h4><p>Designed all user flows, from idea swiping to group formation and project launch. Created high-fidelity mockups and interactive prototypes in Figma, focusing on a simple, intuitive, and engaging user experience.</p></div><div class="responsibility-item"><h4>3. Community & Marketing</h4><p>Developed a tagging system for community boards to improve discoverability and engagement. Established early-stage marketing strategies to drive user adoption and build an initial community base.</p></div></div>'
      },
      {
        type: 'text',
        heading: 'User Interviews',
        content: '<p>To better understand Teamu\'s potential users, I conducted in-depth interviews with five young professionals (ages 25–45) who all held full-time jobs and actively pursued hobbies outside their work.</p><div class="highlight-box info-box"><h4 class="box-title"><span class="icon-ui icon-users"></span> User Interview Goals:</h4><ul class="bullet-list"><li><div class="bullet-icon"></div><div>Understand how users currently try to connect with others around shared passions</div></li><li><div class="bullet-icon"></div><div>Identify obstacles to meaningful collaboration or community involvement</div></li><li><div class="bullet-icon"></div><div>Learn about their current experience with social media or productivity platforms</div></li><li><div class="bullet-icon"></div><div>Gauge interest in alternative, purpose-driven platforms like Teamu</div></li></ul></div>'
      },
      {
        type: 'full-image',
        image: 'assets/images/projects/teamu/user interviews.webp',
        alt: 'User interview insights and findings',
        caption: ''
      },
      {
        type: 'text',
        heading: 'Competitive Analysis',
        content: '<p class="large-text">A SWOT analysis of 15+ social and community platforms helped identify a clear market gap for a platform focused on collaborative, project-based connection rather than passive content consumption.</p>'
      },
      {
        type: 'full-image',
        image: 'assets/images/projects/teamu/competitive analysis.webp',
        alt: 'Competitive analysis showing SWOT of similar platforms',
        caption: ''
      },
      {
        type: 'text',
        heading: 'Initial Wireframes',
        content: '<p>The wireframing process for Teamu was highly collaborative and iterative. Working closely with the founder, we moved quickly from rough concepts to more defined layouts, constantly adapting to new insights and feedback. This agile approach, while sometimes messy, allowed us to stay aligned and evolve the product rapidly.</p>'
      },
      {
        type: 'full-image',
        image: 'assets/images/projects/teamu/iterations.png',
        alt: 'Iterations of wireframes and design evolution',
        caption: ''
      },
      {
        type: 'text',
        heading: 'Final Design & Technical Stack',
        content: '<p>While the Teamu app was successfully published to the Apple App Store, the project has been on hiatus for an extended period. As a result, much of the app’s functionality (particularly those tied to the AI backend) is no longer operational.</p><p>Despite this, the Founder still intends to pursue the core vision of Teamu moving forward.</p><div class="side-by-side-panels"><div class="panel"><h4 class="panel-title"><span class="icon-ui icon-structure"></span> Technical Stack</h4><ul class="bullet-list compact"><li><div class="bullet-icon"></div><div><strong>Database:</strong> Supabase (PostgreSQL)</div></li><li><div class="bullet-icon"></div><div><strong>Cloud Functions:</strong> Google Cloud (Python)</div></li><li><div class="bullet-icon"></div><div><strong>AI Model:</strong> Chat GPT 3.0</div></li></ul></div><div class="panel"><h4 class="panel-title"><span class="icon-ui icon-target"></span> Project Status</h4><ul class="bullet-list compact"><li><div class="bullet-icon"></div><div>YC Finalist 2022</div></li><li><div class="bullet-icon"></div><div>MVP Shipped to App Store</div></li><li><div class="bullet-icon"></div><div>Currently on Hiatus</div></li></ul></div></div><p style="margin-top:1rem;">These final screens reflect the last working version of the app before development paused.</p>'
      },
      {
        type: 'gallery',
        heading: '',
        images: [
          { src: 'assets/images/projects/teamu/Teamu 1.png', alt: 'Teamu final design screen 1' },
          { src: 'assets/images/projects/teamu/Teamu 2.png', alt: 'Teamu final design screen 2' },
          { src: 'assets/images/projects/teamu/Teamu 3.png', alt: 'Teamu final design screen 3' },
          { src: 'assets/images/projects/teamu/Teamu 4.png', alt: 'Teamu final design screen 4' },
          { src: 'assets/images/projects/teamu/Teamu 5.png', alt: 'Teamu final design screen 5' },
          { src: 'assets/images/projects/teamu/Teamu 6.png', alt: 'Teamu final design screen 6' },
          { src: 'assets/images/projects/teamu/Teamu 7.png', alt: 'Teamu final design screen 7' }
        ]
      }
    ],
    impacts: [
      { value: 'YC', label: 'Finalist 2022', desc: 'Recognized by Y Combinator' },
      { value: '300+', label: 'MAU in the first month', desc: 'Successful user ramp-up' },
      { value: 'MVP', label: 'Shipped to App Store', desc: 'Launched on iOS' }
    ]
   },
   provisioning: {
    title: 'Gateway Connect Provisioning',
    subtitle: 'Streamlining the setup experience for Gateway Connect devices',
    images: [
      'assets/images/projects/provisioning/provisioning New.png'
    ],
    overviewTags: [
      'Lead UX Designer', 'IoT Experience', 'Flow Optimization'
    ],
    tools: ['Figma', 'User Testing', 'Flow Mapping'],
    wip: true,
    contentBlocks: [
      {
        type: 'hero',
        image: 'assets/images/projects/provisioning/provisioning New.png',
        title: 'Gateway Connect Provisioning',
        description: 'Streamlining the setup experience for Gateway Connect devices',
        alt: 'Gateway Connect provisioning interface'
      },
      {
        type: 'text',
        heading: 'Overview',
        content: '<p class="large-text">A complete redesign of the Gateway Connect provisioning experience, focusing on reducing friction and improving success rates for first-time device setup.</p><p class="large-text" style="margin-top: 2rem; padding: 2rem; background: rgba(255, 255, 255, 0.03); border-radius: 12px; border-left: 4px solid var(--color-primary);">📝 <strong>Work in Progress:</strong> Full case study coming soon. This project involved end-to-end redesign of the provisioning flow, reducing setup time and improving user confidence during the critical first-time setup experience.</p>'
      }
    ],
    impacts: [
      { value: 'WIP', label: 'Case Study', desc: 'Full details coming soon' }
    ]
   },
   remoteio: {
    title: 'Remote I/O Configuration',
    subtitle: 'Simplifying complex industrial device setup',
    images: [
      'assets/images/projects/remote IO provisioning/remote IO main image.png'
    ],
    overviewTags: [
      'Lead Product Designer', 'Industrial IoT', 'Configuration UX'
    ],
    tools: ['Figma', 'Technical Documentation', 'User Research'],
    wip: true,
    contentBlocks: [
      {
        type: 'hero',
        image: 'assets/images/projects/remote IO provisioning/remote IO main image.png',
        title: 'Remote I/O Configuration',
        description: 'Simplifying complex industrial device setup',
        alt: 'Remote I/O configuration interface'
      },
      {
        type: 'text',
        heading: 'Overview',
        content: '<p class="large-text">Designed an intuitive interface for configuring industrial remote I/O devices, making complex technical setup accessible to field technicians without extensive training.</p><p class="large-text" style="margin-top: 2rem; padding: 2rem; background: rgba(255, 255, 255, 0.03); border-radius: 12px; border-left: 4px solid var(--color-primary);">📝 <strong>Work in Progress:</strong> Full case study coming soon. This project focused on translating technical complexity into an intuitive visual interface for industrial device configuration.</p>'
      }
    ],
    impacts: [
      { value: 'WIP', label: 'Case Study', desc: 'Full details coming soon' }
    ]
   }
};

// Export for use in other modules (if using ES6 modules)
// export { projectData };

// Make available globally (for current implementation)
window.projectData = projectData; 
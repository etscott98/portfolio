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
        heading: 'The Evolution Challenge',
        content: '<p class="large-text">FloLogic began as a single Wi-Fi shut-off valve that stopped leaks at the main water line. In 2024, the company was undergoing a massive transformation that would fundamentally change how users interact with their water systems:</p><div class="side-by-side-panels"><div class="panel legacy-panel"><h4><span class="icon-ui icon-mobile-old"></span>Legacy System</h4><p>Single Wi-Fi valve<br/>Direct app control<br/>Linear interface<br/>One device, one home</p></div><div class="panel new-panel"><h4><span class="icon-ui icon-network-new"></span>New Ecosystem</h4><p>Multi-unit mesh network<br/>Gateway + sensors + valves<br/>Complex relationships<br/>Multiple properties</p></div></div><div class="highlight-box info-box"><p><strong><span class="icon-ui icon-lightbulb"></span>The reality check:</strong> Early stakeholder hopes of "just adding a few screens" collapsed as soon as we watched beta users try to navigate the old linear interface. The mental model had to completely change.</p></div><div class="challenge-box"><h3>The Core Design Challenge</h3><p>How do you evolve an application originally conceived for a singular device to effectively manage a complex ecosystem of gateways, valves, and sensors—potentially spread across multiple properties?</p></div>'
      },
      {
        type: 'text',
        heading: 'My Role & Responsibilities',
        content: '<div class="role-responsibilities"><div class="responsibility-item"><h4>1. Complete App Re-work + Modernization</h4><p>Tore the legacy linear flow apart and rebuilt it around a clean tab bar, location-centric device tree, and sleek Apple-inspired settings pages. Prototyped, user-tested, and shipped the new flows with devs (TestFlight every Friday). Helped engineering stand up new APIs for multi-property support and real-time sensor feeds. Rolled out inline troubleshooting and contextual help so users solve 90% of issues without calling support.</p><p class="result-box"><strong>Result:</strong> 50% fewer taps to reach valve controls, 25% drop in support calls within beta cohort.</p></div><div class="responsibility-item with-image"><div><h4>2. Comprehensive Design System + Brand Guidelines</h4><p>Tokenized color, type, spacing, radius, opacity – delivered both primitive and semantic tokens so devs could ramp up fast. Built a starter component library (valve cards, alert chips, status pills, etc.) and coded Figma → Storybook hand-off docs. Co-authored the first brand guidelines doc with another designer: tone, imagery, and motion rules so marketing, support, and app feel like one product.</p><p class="why-box"><strong>Why?</strong> Dev handoff became plug-and-play. Instead of "pick any blue," engineers grabbed primary-600, shipped, done. Felt like stapling success into FloLogic\'s near future, not just polishing one flow.</p></div><img src="assets/images/projects/flologic/flologic wireframes.jpg" alt="FloLogic design system"/></div><div class="responsibility-item"><h4>3. Beta Feedback Integration</h4><p>Ran a 20-person beta (plumbers, retirees, property managers). Weekly surveys, guided Zoom walkthroughs, and "record your screen" tasks. Logged every friction point in Airtable, tagged by severity, pushed high-impact items straight to the sprint board. Closed the loop: emailed testers release notes and asked, "Did this fix it?"</p><p class="why-box"><strong>Why?</strong> Real houses, real water leaks. Lab tests can\'t mimic a crawl space router. Early truth bombs saved months of re-work.</p></div><div class="responsibility-item"><h4>4. Stakeholder Presentations on Hi-Fi Prototypes</h4><p>Hosted live Figma walkthroughs with CEO, hardware lead, support manager. Encouraged them to "break it" – every question captured in a running decision log. Used their feedback to kill scope creep and keep design debt visible before dev sprint planning.</p><p class="why-box"><strong>Why?</strong> With a vocal bunch that wants everything and nothing, regular show-and-tell kept me on the right path and surfaced blockers fast.</p></div><div class="responsibility-item"><h4>5. Project + Cross-Team Management</h4><p>Daily Slack stand-ups with devs, weekly sync with customer support, bi-weekly demo for execs. Published timeline in Notion – clear dates for design freeze, dev handoff, QA, and TestFlight. Acted as the glue between hardware quirks, marketing asks, and user pain points.</p></div></div>'
      },
      {
        type: 'text',
        heading: 'Building a New System Architecture',
        content: '<p class="large-text">The transformation wasn\'t just about adding features—it required fundamentally rethinking how devices connect, communicate, and are controlled:</p><div class="side-by-side-panels"><div class="panel legacy-panel"><div class="panel-badge">LEGACY</div><h4 class="panel-title"><span class="icon-ui icon-signal"></span> Simple & Direct</h4><div class="panel-content"><div class="icon-bg icon-bg-device"></div><p>One standalone device connected directly to Wi-Fi, controlling the home\'s main water shutoff.</p></div></div><div class="panel new-panel"><div class="panel-badge">NEW ECOSYSTEM</div><h4 class="panel-title"><span class="icon-ui icon-hub"></span> Modular & Nested</h4><div class="panel-content"><div class="nested-list"><div><div class="icon-bg icon-bg-gateway"></div><div><strong>Gateway Hub</strong><span>Connects directly to router, manages network</span></div></div><ul><li><div><div class="icon-bg icon-bg-valve"></div><span>Thread-connected valves</span></div></li><li><div><div class="icon-bg icon-bg-sensor"></div><span>Environmental sensors</span></div></li><li><div><div class="icon-bg icon-bg-trigger"></div><span>Dry-contact triggers</span></div></li></ul></div></div></div></div>'
      },
      {
        type: 'text',
        heading: 'Why the Legacy Interface Broke Down',
        content: '<p class="large-text">The original UI was elegantly simple—because it only had to handle one scenario. But when we introduced the ecosystem approach, that simplicity became a liability:</p><div class="highlight-box error-box"><h4 class="box-title"><span class="icon-ui icon-warning"></span> Critical Gaps in the Legacy Model</h4><ul class="bullet-list"><li><div class="bullet-icon"></div><div><strong>No concept of device hierarchy</strong><span>Couldn\'t show parent/child relationships between Gateway → devices.</span></div></li><li><div class="bullet-icon"></div><div><strong>Every device assumed direct control</strong><span>No model for "monitoring-only" devices like Gateways or Extenders.</span></div></li><li><div class="bullet-icon"></div><div><strong>Mesh network dependencies invisible</strong><span>Users couldn\'t understand why Device A affected Device B.</span></div></li><li><div class="bullet-icon"></div><div><strong>Inconsistent notification patterns</strong><span>Different device types needed different alert and status displays.</span></div></li><li><div class="bullet-icon"></div><div><strong>Settings complexity explosion</strong><span>Each new device type required branching settings logic.</span></div></li></ul></div><div class="highlight-box info-box"><h4 class="box-title"><span class="icon-ui icon-target"></span> The Initial (Naive) Solution</h4><p>Our first instinct was to maintain visual consistency—make legacy Wi-Fi valves and new GConnect valves look identical in the interface. The thinking was that users would intuitively understand they offered the same control features, despite the new system\'s hierarchy.</p></div><p class="caption-text">Spoiler alert: This approach completely failed in beta testing.</p>'
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
        heading: 'impact & results',
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
        heading: 'continuous evolution',
        content: '<p>The current version of the FloLogic application is live in beta and continues to evolve with each new device firmware release and user feedback. The main change with the device hierarchy exists in production. FloLogic plans on slowly rolling out these changes over time as the dev team is able to implement them.</p>'
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
        content: '<p class="large-text">The most critical strategic shift was in the onboarding. Initially, it functioned as a typical transactional gateway: "give us your information before we let you in." This felt completely at odds with the app\'s core philosophy.</p><div class="highlight-box info-box"><h4 class="box-title"><span class="icon-ui icon-lightbulb"></span> The Mental Model Shift</h4><div class="side-by-side-panels compact"><div class="panel error-panel-alt"><h5 class="panel-title"><span class="icon-ui icon-close"></span> Transactional Gateway</h5><p>"Give us your data, then you can use the app."</p><div class="panel-tag">Barrier to entry, feels like work</div></div><div class="panel success-panel-alt"><h5 class="panel-title"><span class="icon-ui icon-check"></span> Meditative Experience</h5><p>"Each question draws you in gently, like the start of a meditation."</p><div class="panel-tag">Part of the ritual, builds trust</div></div></div></div><div class="highlight-box quote-box"><h3 class="box-title"><span class="icon-ui icon-target"></span> The Design Philosophy</h3><div class="quote-content">"Onboarding should feel like<br/>the beginning of the ritual,<br/>not a barrier to it."</div><p>Every interaction was redesigned to invite, not interrogate.</p></div>'
      },
      {
        type: 'gallery',
        heading: 'Key Screens & Interactions',
        images: [
          { src: 'assets/images/projects/circadia/dAXewvJ6lleBv4zSq76LKdQL9NE.webp', alt: 'Onboarding flow' },
          { src: 'assets/images/projects/circadia/sPG5Zmop1bG0Iyp3PNN0RwMSOE.webp', alt: 'Manifestation guide' },
          { src: 'assets/images/projects/circadia/UGkyq0MnIHLRdSHmT3ERnDECA4.webp', alt: 'Dream journal entry' },
          { src: 'assets/images/projects/circadia/Circadia Mudras.png', alt: 'Moon phase tracking' }
        ]
      },
      {
        type: 'quote',
        content: 'With limited features, the UX had to carry emotional weight. I focused on subtle microinteractions, calm pacing, and seamless transitions. Everything needed to feel intentional.'
      },
      {
        type: 'stats',
        heading: 'Impact & Results',
        stats: [
          { value: '40+', label: 'Token design system', desc: 'Used across all product flows' },
          { value: '15+', label: 'Custom animations', desc: 'For immersive transitions' },
          { value: '100%', label: 'Onboarding completion', desc: 'During internal beta testing' },
          { value: '0', label: 'Traditional logins', desc: 'Replaced with seamless flow' }
        ]
      },
      {
        type: 'text',
        heading: 'Lessons Learned',
        content: '<p class="large-text">This project was a lesson in designing for emotion and intention under tight constraints. It was part-time work alongside a full-time role, but the vision remained clear.</p><div style="margin-top: 1rem; display: grid; gap: 1rem;"><div style="padding: 1.5rem; background: rgba(255, 255, 255, 0.03); border-radius: 12px;"><p><strong>More conceptual exploration early:</strong> Given more time, I would have dedicated a specific phase to divergent thinking and broad vision exploration before diving into high-fidelity designs. This could have uncovered even more innovative approaches.</p></div><div style="padding: 1.5rem; background: rgba(255, 255, 255, 0.03); border-radius: 12px;"><p><strong>AI-accelerated iteration:</strong> The pace of the project would have benefited from leveraging modern AI tools to rapidly prototype and test different visual concepts and user flows, getting feedback faster.</p></div><div style="padding: 1.5rem; background: rgba(255, 255, 255, 0.03); border-radius: 12px;"><p><strong>The power of a clear vision:</strong> Despite changing requirements and constraints, having an unwavering goal—"build something that feels like a ritual, not just an app"—was the anchor that kept the project focused and coherent.</p></div></div>'
      },
      {
        type: 'full-image',
        image: 'assets/images/projects/circadia/circadia.avif',
        alt: 'Circadia app ecosystem showing various screens and moon phases',
        caption: 'Circadia transforms bedtime routines into meaningful rituals through thoughtful design and lunar synchronization'
      }
    ],
    impacts: [
      { value: '40+', label: 'Token design system', desc: 'Used across all product flows' },
      { value: '15+', label: 'Custom animations', desc: 'For immersive transitions' },
      { value: '100%', label: 'Onboarding completion', desc: 'During internal beta testing' },
      { value: '0', label: 'Traditional logins', desc: 'Replaced with seamless flow' }
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
   provisioning: {
     title: 'End-to-End Provisioning Reimagined',
     subtitle: 'Device provisioning process overhaul focusing on reliability, speed, and user clarity',
     images: [
       'assets/images/projects/flologic/showing the transformation from device-centric to location-centric.png'
     ],
     overviewTags: [
       'Lead UX Designer', 'IoT Experience', 'Process Redesign', 'Cross-Platform'
     ],
     tools: ['Figma', 'Miro', 'Journey Mapping', 'Prototyping'],
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
        content: '<p style="line-height: 1.8;">When FloLogic expanded from consumer homes into commercial properties, our sales team needed something fast: a working MVP dashboard that made sense to property managers — not just engineers. I stepped in as the lead product designer to ship a clean, no-fluff user interface that brought value from day one.</p>'
      },
      {
        type: 'text',
        heading: 'The Ask: "We just need something to show"',
        content: '<p style="line-height: 1.8;">FloLogic\'s sales team was moving fast. With new B2B partnerships forming, we needed a working dashboard to demo — one that let stakeholders visualize devices across multiple properties without confusing or overwhelming them.</p><div style="margin: 2rem 0; padding: 1.5rem; background: rgba(255, 255, 255, 0.03); border-radius: 12px; border-left: 4px solid var(--color-primary);"><h4 style="color: var(--color-primary); margin-bottom: 1rem;">The Challenge</h4><ul style="line-height: 1.6; margin-bottom: 0;"><li><strong>No prior web dashboard existed</strong></li><li><strong>Needed MVP-level scope — fast</strong></li><li><strong>Minimal backend flexibility</strong> (MAUI - Telerik)</li><li><strong>Needed to work for both B2B and individual property managers</strong></li><li><strong>Data was device-heavy, but context-light</strong></li></ul></div>'
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
        content: '<p style="line-height: 1.8;">I was the sole designer on the project. I led the product design from scratch — integrating what I knew about the current direction of the app I had designed and expanding upon their newly implemented design system.</p>'
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
   },
   
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
};

// Export for use in other modules (if using ES6 modules)
// export { projectData };

// Make available globally (for current implementation)
window.projectData = projectData; 
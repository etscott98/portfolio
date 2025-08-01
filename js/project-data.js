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
      'UX Focus', 'Mobile', 'Website',
      'Role: Lead UI/UX Designer, Beta Program Lead',
      'Tools: Figma, Miro', 'Timeline: Q1 2024 – Q2 2025'
    ],
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
        content: '<p style="line-height: 1.8; font-size: 1.1em;">FloLogic began as a single Wi-Fi shut-off valve that stopped leaks at the main water line. In 2024, the company was undergoing a massive transformation that would fundamentally change how users interact with their water systems:</p><div style="margin: 2rem 0;"><div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin: 2rem 0;"><div style="padding: 1.5rem; background: rgba(255, 107, 107, 0.05); border-radius: 12px; border: 1px solid rgba(255, 107, 107, 0.2);"><h4 style="color: #ff6b6b; margin-bottom: 1rem;">📱 Legacy System</h4><p style="line-height: 1.6;">Single Wi-Fi valve<br/>Direct app control<br/>Linear interface<br/>One device, one home</p></div><div style="padding: 1.5rem; background: rgba(110, 234, 255, 0.05); border-radius: 12px; border: 1px solid rgba(110, 234, 255, 0.2);"><h4 style="color: var(--color-primary); margin-bottom: 1rem;">🌐 New Ecosystem</h4><p style="line-height: 1.6;">Multi-unit mesh network<br/>Gateway + sensors + valves<br/>Complex relationships<br/>Multiple properties</p></div></div></div><div style="margin: 2rem 0; padding: 1.5rem; background: rgba(255, 255, 255, 0.03); border-radius: 12px; border-left: 4px solid var(--color-primary);"><p style="margin-bottom: 1rem; font-weight: 600;">💡 The reality check:</p><p style="line-height: 1.8;">Early stakeholder hopes of "just adding a few screens" collapsed as soon as we watched beta users try to navigate the old linear interface. The mental model had to completely change.</p></div><div style="text-align: center; margin: 2rem 0; padding: 2rem; background: rgba(110, 234, 255, 0.08); border-radius: 16px; border: 1px solid rgba(110, 234, 255, 0.2);"><h3 style="color: var(--color-primary); margin-bottom: 1rem; font-size: 1.3em;">The Core Design Challenge</h3><p style="font-size: 1.1em; line-height: 1.8; max-width: 600px; margin: 0 auto;">How do you evolve an application originally conceived for a singular device to effectively manage a complex ecosystem of gateways, valves, and sensors—potentially spread across multiple properties?</p></div>'
      },
      {
        type: 'text',
        heading: '',
        content: '<style>.collapsible-header { cursor: pointer; position: relative; padding-right: 1.5rem; background: linear-gradient(135deg, #6eeaff, #4facfe); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; font-weight: 700; transition: all 0.3s ease; margin: 0; } .collapsible-header::after { content: "▼"; position: absolute; right: 0; top: 50%; transform: translateY(-50%) rotate(-90deg); transition: transform 0.3s ease; font-size: 0.8em; color: var(--color-primary); background: none; -webkit-text-fill-color: initial; } .collapsible-header.collapsed::after { transform: translateY(-50%) rotate(-90deg); } .collapsible-content { overflow: hidden; transition: max-height 0.3s ease; } .collapsible-content.collapsed { max-height: 0 !important; }</style><h3 class="collapsible-header collapsed" onclick="this.classList.toggle(\'collapsed\'); this.nextElementSibling.classList.toggle(\'collapsed\'); this.nextElementSibling.style.maxHeight = this.nextElementSibling.classList.contains(\'collapsed\') ? \'0\' : this.nextElementSibling.scrollHeight + \'px\';">lead product designer: things i did (tl;dr)</h3><div class="collapsible-content collapsed" style="max-height: 0;"><div style="padding-top: 1.5rem;"><div style="margin-bottom: 2rem;"><h4 style="color: var(--color-primary); margin-bottom: 1rem;">1. complete app re-work + modernization</h4><p style="line-height: 1.8;">Tore the legacy linear flow apart and rebuilt it around a clean tab bar, location-centric device tree, and sleek Apple-inspired settings pages. Prototyped, user-tested, and shipped the new flows with devs (TestFlight every Friday). Helped engineering stand up new APIs for multi-property support and real-time sensor feeds. Rolled out inline troubleshooting and contextual help so users solve 90% of issues without calling support.</p><p style="margin-top: 1rem; padding: 1rem; background: rgba(110, 234, 255, 0.1); border-radius: 8px; border-left: 4px solid var(--color-primary);"><strong>Result:</strong> 50% fewer taps to reach valve controls, 25% drop in support calls within beta cohort.</p></div><div style="margin-bottom: 2rem;"><h4 style="color: var(--color-primary); margin-bottom: 1rem;">2. comprehensive design system + flologic brand guidelines</h4><p style="line-height: 1.8;">Tokenized color, type, spacing, radius, opacity – delivered both primitive and semantic tokens so devs could ramp up fast. Built a starter component library (valve cards, alert chips, status pills, etc.) and coded Figma → Storybook hand-off docs. Co-authored the first brand guidelines doc with another designer: tone, imagery, and motion rules so marketing, support, and app feel like one product.</p><p style="margin-top: 1rem; font-style: italic; opacity: 0.9;"><strong>Why?</strong> Dev handoff became plug-and-play. Instead of "pick any blue," engineers grabbed primary-600, shipped, done. Felt like stapling success into FloLogic\'s near future, not just polishing one flow.</p><img src="assets/images/projects/flologic/flologic wireframes.jpg" alt="FloLogic design system" style="width: 100%; border-radius: 12px; margin: 2rem 0; box-shadow: 0 4px 20px rgba(0,0,0,0.1);"/></div><div style="margin-bottom: 2rem;"><h4 style="color: var(--color-primary); margin-bottom: 1rem;">3. beta feedback integration</h4><p style="line-height: 1.8;">Ran a 20-person beta (plumbers, retirees, property managers). Weekly surveys, guided Zoom walkthroughs, and "record your screen" tasks. Logged every friction point in Airtable, tagged by severity, pushed high-impact items straight to the sprint board. Closed the loop: emailed testers release notes and asked, "Did this fix it?"</p><p style="margin-top: 1rem; font-style: italic; opacity: 0.9;"><strong>Why?</strong> Real houses, real water leaks. Lab tests can\'t mimic a crawl space router. Early truth bombs saved months of re-work.</p></div><div style="margin-bottom: 2rem;"><h4 style="color: var(--color-primary); margin-bottom: 1rem;">4. stakeholder presentations on hi-fi prototypes</h4><p style="line-height: 1.8;">Hosted live Figma walkthroughs with CEO, hardware lead, support manager. Encouraged them to "break it" – every question captured in a running decision log. Used their feedback to kill scope creep and keep design debt visible before dev sprint planning.</p><p style="margin-top: 1rem; font-style: italic; opacity: 0.9;"><strong>Why?</strong> With a vocal bunch that wants everything and nothing, regular show-and-tell kept me on the right path and surfaced blockers fast.</p></div><div style="margin-bottom: 2rem;"><h4 style="color: var(--color-primary); margin-bottom: 1rem;">5. project + cross-team management</h4><p style="line-height: 1.8;">Daily Slack stand-ups with devs, weekly sync with customer support, bi-weekly demo for execs. Published timeline in Notion – clear dates for design freeze, dev handoff, QA, and TestFlight. Acted as the glue between hardware quirks, marketing asks, and user pain points.</p></div></div></div>'
      },

      {
        type: 'text',
        heading: 'Building a New System Architecture',
        content: '<p style="line-height: 1.8; margin-bottom: 2rem;">The transformation wasn\'t just about adding features—it required fundamentally rethinking how devices connect, communicate, and are controlled:</p><div style="display: grid; gap: 2rem; margin: 2rem 0;"><div style="padding: 2rem; background: rgba(255, 107, 107, 0.08); border-radius: 16px; border: 1px solid rgba(255, 107, 107, 0.2); position: relative;"><div style="position: absolute; top: -12px; left: 24px; background: #ff6b6b; color: white; padding: 6px 16px; border-radius: 20px; font-size: 0.9em; font-weight: 600;">LEGACY</div><h4 style="color: #ff6b6b; margin: 1rem 0 1rem 0; font-size: 1.2em;">📱 Simple & Direct</h4><div style="display: flex; align-items: center; gap: 1rem; margin: 1.5rem 0;"><div style="width: 60px; height: 60px; background: rgba(255, 107, 107, 0.2); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 24px;">📶</div><div style="flex: 1;"><p style="margin: 0; line-height: 1.6;">One standalone device connected directly to Wi-Fi, controlling the home\'s main water shutoff</p></div></div></div><div style="padding: 2rem; background: rgba(110, 234, 255, 0.08); border-radius: 16px; border: 1px solid rgba(110, 234, 255, 0.2); position: relative;"><div style="position: absolute; top: -12px; left: 24px; background: var(--color-primary); color: #0a0e17; padding: 6px 16px; border-radius: 20px; font-size: 0.9em; font-weight: 600;">NEW ECOSYSTEM</div><h4 style="color: var(--color-primary); margin: 1rem 0 1rem 0; font-size: 1.2em;">🌐 Modular & Nested</h4><div style="margin: 1.5rem 0;"><div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;"><div style="width: 50px; height: 50px; background: rgba(110, 234, 255, 0.2); border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 20px;">🏠</div><div style="flex: 1;"><p style="margin: 0; font-weight: 600; color: var(--color-primary);">Gateway Hub</p><p style="margin: 0; font-size: 0.9em; opacity: 0.8;">Connects directly to router, manages network</p></div></div><div style="margin-left: 2rem; padding-left: 1rem; border-left: 2px solid rgba(110, 234, 255, 0.3);"><div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 0.8rem;"><div style="width: 40px; height: 40px; background: rgba(110, 234, 255, 0.15); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 16px;">🔧</div><div style="flex: 1;"><p style="margin: 0; font-size: 0.9em;">Thread-connected valves</p></div></div><div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 0.8rem;"><div style="width: 40px; height: 40px; background: rgba(110, 234, 255, 0.15); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 16px;">📡</div><div style="flex: 1;"><p style="margin: 0; font-size: 0.9em;">Environmental sensors</p></div></div><div style="display: flex; align-items: center; gap: 1rem;"><div style="width: 40px; height: 40px; background: rgba(110, 234, 255, 0.15); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 16px;">⚡</div><div style="flex: 1;"><p style="margin: 0; font-size: 0.9em;">Dry-contact triggers</p></div></div></div></div></div></div>'
      },
      {
        type: 'text',
        heading: 'Why the Legacy Interface Broke Down',
        content: '<p style="line-height: 1.8; font-size: 1.1em; margin-bottom: 2rem;">The original UI was elegantly simple—because it only had to handle one scenario. But when we introduced the ecosystem approach, that simplicity became a liability:</p><div style="margin: 2rem 0; padding: 2rem; background: rgba(255, 107, 107, 0.05); border-radius: 16px; border: 1px solid rgba(255, 107, 107, 0.2);"><h4 style="color: #ff6b6b; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.5rem;"><span style="font-size: 1.5em;">⚠️</span> Critical Gaps in the Legacy Model</h4><div style="display: grid; gap: 1rem;"><div style="display: flex; align-items: flex-start; gap: 1rem; padding: 1rem; background: rgba(255, 255, 255, 0.03); border-radius: 8px;"><div style="width: 8px; height: 8px; background: #ff6b6b; border-radius: 50%; margin-top: 8px; flex-shrink: 0;"></div><div><p style="margin: 0; font-weight: 600;">No concept of device hierarchy</p><p style="margin: 0.5rem 0 0 0; font-size: 0.9em; opacity: 0.8;">Couldn\'t show parent/child relationships between Gateway → devices</p></div></div><div style="display: flex; align-items: flex-start; gap: 1rem; padding: 1rem; background: rgba(255, 255, 255, 0.03); border-radius: 8px;"><div style="width: 8px; height: 8px; background: #ff6b6b; border-radius: 50%; margin-top: 8px; flex-shrink: 0;"></div><div><p style="margin: 0; font-weight: 600;">Every device assumed direct control</p><p style="margin: 0.5rem 0 0 0; font-size: 0.9em; opacity: 0.8;">No model for "monitoring-only" devices like Gateways or Extenders</p></div></div><div style="display: flex; align-items: flex-start; gap: 1rem; padding: 1rem; background: rgba(255, 255, 255, 0.03); border-radius: 8px;"><div style="width: 8px; height: 8px; background: #ff6b6b; border-radius: 50%; margin-top: 8px; flex-shrink: 0;"></div><div><p style="margin: 0; font-weight: 600;">Mesh network dependencies invisible</p><p style="margin: 0.5rem 0 0 0; font-size: 0.9em; opacity: 0.8;">Users couldn\'t understand why Device A affected Device B</p></div></div><div style="display: flex; align-items: flex-start; gap: 1rem; padding: 1rem; background: rgba(255, 255, 255, 0.03); border-radius: 8px;"><div style="width: 8px; height: 8px; background: #ff6b6b; border-radius: 50%; margin-top: 8px; flex-shrink: 0;"></div><div><p style="margin: 0; font-weight: 600;">Inconsistent notification patterns</p><p style="margin: 0.5rem 0 0 0; font-size: 0.9em; opacity: 0.8;">Different device types needed different alert and status displays</p></div></div><div style="display: flex; align-items: flex-start; gap: 1rem; padding: 1rem; background: rgba(255, 255, 255, 0.03); border-radius: 8px;"><div style="width: 8px; height: 8px; background: #ff6b6b; border-radius: 50%; margin-top: 8px; flex-shrink: 0;"></div><div><p style="margin: 0; font-weight: 600;">Settings complexity explosion</p><p style="margin: 0.5rem 0 0 0; font-size: 0.9em; opacity: 0.8;">Each new device type required branching settings logic</p></div></div></div></div><div style="margin: 2rem 0; padding: 1.5rem; background: rgba(110, 234, 255, 0.05); border-radius: 12px; border-left: 4px solid var(--color-primary);"><h4 style="color: var(--color-primary); margin-bottom: 1rem;">🎯 The Initial (Naive) Solution</h4><p style="line-height: 1.8; margin: 0;">Our first instinct was to maintain visual consistency—make legacy Wi-Fi valves and new GConnect valves look identical in the interface. The thinking was that users would intuitively understand they offered the same control features, despite the new system\'s hierarchy.</p></div><p style="line-height: 1.8; font-style: italic; text-align: center; margin-top: 2rem; opacity: 0.9;">Spoiler alert: This approach completely failed in beta testing. 🤦‍♀️</p>'
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
        content: '<div style="margin: 2rem 0; padding: 2rem; background: rgba(255, 193, 7, 0.05); border-radius: 16px; border: 1px solid rgba(255, 193, 7, 0.2);"><h4 style="color: #ffc107; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.5rem;"><span style="font-size: 1.3em;">🎨</span> Our Initial Strategy</h4><p style="line-height: 1.8; margin-bottom: 1rem;">We focused on visual consistency, maintaining stakeholder requests for minimal changes while making both device types the same color in the UI to signal equivalence.</p><div style="display: flex; align-items: center; gap: 1rem; margin: 1.5rem 0; padding: 1rem; background: rgba(255, 255, 255, 0.03); border-radius: 8px;"><div style="width: 40px; height: 40px; background: rgba(255, 193, 7, 0.2); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 18px;">💡</div><div><p style="margin: 0; font-weight: 600;">The Logic</p><p style="margin: 0.3rem 0 0 0; font-size: 0.9em; opacity: 0.8;">"If they look the same, users will understand they work the same"</p></div></div></div><div style="margin: 2rem 0; padding: 2rem; background: rgba(255, 107, 107, 0.05); border-radius: 16px; border: 1px solid rgba(255, 107, 107, 0.2);"><h4 style="color: #ff6b6b; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.5rem;"><span style="font-size: 1.3em;">📊</span> What Beta Testing Revealed</h4><div style="display: grid; gap: 1rem;"><div style="display: flex; align-items: flex-start; gap: 1rem; padding: 1rem; background: rgba(255, 255, 255, 0.03); border-radius: 8px;"><div style="width: 8px; height: 8px; background: #ff6b6b; border-radius: 50%; margin-top: 8px; flex-shrink: 0;"></div><div><p style="margin: 0; font-weight: 600;">Users couldn\'t understand device relationships</p><p style="margin: 0.5rem 0 0 0; font-size: 0.9em; opacity: 0.8;">Especially confusing within the mesh network structure</p></div></div><div style="display: flex; align-items: flex-start; gap: 1rem; padding: 1rem; background: rgba(255, 255, 255, 0.03); border-radius: 8px;"><div style="width: 8px; height: 8px; background: #ff6b6b; border-radius: 50%; margin-top: 8px; flex-shrink: 0;"></div><div><p style="margin: 0; font-weight: 600;">Visual parity ≠ Functional clarity</p><p style="margin: 0.5rem 0 0 0; font-size: 0.9em; opacity: 0.8;">Looking the same didn\'t help users understand capabilities</p></div></div><div style="display: flex; align-items: flex-start; gap: 1rem; padding: 1rem; background: rgba(255, 255, 255, 0.03); border-radius: 8px;"><div style="width: 8px; height: 8px; background: #ff6b6b; border-radius: 50%; margin-top: 8px; flex-shrink: 0;"></div><div><p style="margin: 0; font-weight: 600;">The design itself was lackluster</p><p style="margin: 0.5rem 0 0 0; font-size: 0.9em; opacity: 0.8;">Aesthetic issues on top of usability problems</p></div></div></div></div><div style="text-align: center; margin: 2rem 0; padding: 1.5rem; background: rgba(255, 255, 255, 0.02); border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.1);"><p style="font-size: 1.1em; font-style: italic; margin: 0; opacity: 0.9;">Time to go back to the drawing board... 📝</p></div>'
      },
      {
        type: 'text',
        heading: 'The Breakthrough: Location-Centric Design',
        content: '<div style="margin: 2rem 0; padding: 2rem; background: rgba(34, 197, 94, 0.05); border-radius: 16px; border: 1px solid rgba(34, 197, 94, 0.2);"><h4 style="color: #22c55e; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.5rem;"><span style="font-size: 1.3em;">💡</span> The Mental Model Shift</h4><div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin: 2rem 0;"><div style="padding: 1.5rem; background: rgba(255, 107, 107, 0.08); border-radius: 12px; border: 1px solid rgba(255, 107, 107, 0.2); text-align: center;"><h5 style="color: #ff6b6b; margin-bottom: 1rem;">❌ Device-Type Framing</h5><p style="font-size: 0.9em; line-height: 1.6; margin: 0;">"You have a GConnect valve, a Legacy valve, a Gateway, and sensors..."</p><div style="margin-top: 1rem; padding: 0.8rem; background: rgba(255, 255, 255, 0.03); border-radius: 6px; font-size: 0.8em; opacity: 0.8;">Technical, abstract, confusing</div></div><div style="padding: 1.5rem; background: rgba(34, 197, 94, 0.08); border-radius: 12px; border: 1px solid rgba(34, 197, 94, 0.2); text-align: center;"><h5 style="color: #22c55e; margin-bottom: 1rem;">✅ Location-Based Framing</h5><p style="font-size: 0.9em; line-height: 1.6; margin: 0;">"This is your house. These are the devices protecting it."</p><div style="margin-top: 1rem; padding: 0.8rem; background: rgba(255, 255, 255, 0.03); border-radius: 6px; font-size: 0.8em; opacity: 0.8;">Intuitive, spatial, familiar</div></div></div></div><div style="margin: 2rem 0; padding: 2rem; background: rgba(110, 234, 255, 0.05); border-radius: 16px; border: 1px solid rgba(110, 234, 255, 0.2);"><h4 style="color: var(--color-primary); margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.5rem;"><span style="font-size: 1.3em;">🏗️</span> The New Structure</h4><div style="display: flex; align-items: center; gap: 1.5rem; margin: 1.5rem 0;"><div style="width: 60px; height: 60px; background: rgba(110, 234, 255, 0.15); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 24px; flex-shrink: 0;">🏠</div><div style="flex: 1;"><p style="margin: 0; font-weight: 600; color: var(--color-primary);">White Container Boxes</p><p style="margin: 0.5rem 0 0 0; line-height: 1.6;">Each system grouped visually by physical address, not device type</p></div></div><div style="display: flex; align-items: center; gap: 1.5rem; margin: 1.5rem 0;"><div style="width: 60px; height: 60px; background: rgba(110, 234, 255, 0.15); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 24px; flex-shrink: 0;">⚖️</div><div style="flex: 1;"><p style="margin: 0; font-weight: 600; color: var(--color-primary);">Visual Equality</p><p style="margin: 0.5rem 0 0 0; line-height: 1.6;">Legacy and new devices appeared visually similar within each location</p></div></div></div><div style="text-align: center; margin: 2rem 0; padding: 2rem; background: rgba(110, 234, 255, 0.08); border-radius: 16px; border: 1px solid rgba(110, 234, 255, 0.2);"><h3 style="color: var(--color-primary); margin-bottom: 1rem; font-size: 1.4em;">🎯 The User Mental Model</h3><div style="font-size: 1.2em; line-height: 1.6; margin: 1rem 0; padding: 1rem; background: rgba(255, 255, 255, 0.05); border-radius: 12px; border-left: 4px solid var(--color-primary);"><p style="margin: 0; font-style: italic; font-weight: 600;">"This is my house.<br/>These are the devices in it."</p></div><p style="line-height: 1.8; margin-top: 1.5rem; opacity: 0.9;">Simple. Spatial. Intuitive.</p></div><div style="margin: 2rem 0; padding: 2rem; background: rgba(34, 197, 94, 0.05); border-radius: 16px; border: 1px solid rgba(34, 197, 94, 0.2);"><h4 style="color: #22c55e; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.5rem;"><span style="font-size: 1.3em;">📈</span> The Results</h4><div style="display: grid; gap: 1rem;"><div style="display: flex; align-items: flex-start; gap: 1rem; padding: 1rem; background: rgba(255, 255, 255, 0.03); border-radius: 8px;"><div style="width: 8px; height: 8px; background: #22c55e; border-radius: 50%; margin-top: 8px; flex-shrink: 0;"></div><div><p style="margin: 0; font-weight: 600;">Logical grouping achieved</p><p style="margin: 0.5rem 0 0 0; font-size: 0.9em; opacity: 0.8;">Settings, controls, and alerts felt navigable rather than abstract</p></div></div><div style="display: flex; align-items: flex-start; gap: 1rem; padding: 1rem; background: rgba(255, 255, 255, 0.03); border-radius: 8px;"><div style="width: 8px; height: 8px; background: #22c55e; border-radius: 50%; margin-top: 8px; flex-shrink: 0;"></div><div><p style="margin: 0; font-weight: 600;">Bridge between legacy and new</p><p style="margin: 0.5rem 0 0 0; font-size: 0.9em; opacity: 0.8;">Users could understand their system layout without decoding technical hierarchy</p></div></div><div style="display: flex; align-items: flex-start; gap: 1rem; padding: 1rem; background: rgba(255, 255, 255, 0.03); border-radius: 8px;"><div style="width: 8px; height: 8px; background: #22c55e; border-radius: 50%; margin-top: 8px; flex-shrink: 0;"></div><div><p style="margin: 0; font-weight: 600;">Beta testing success</p><p style="margin: 0.5rem 0 0 0; font-size: 0.9em; opacity: 0.8;">Significant improvement in user comprehension and task completion</p></div></div></div></div>'
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
        content: '<div style="margin: 2rem 0; padding: 2rem; background: rgba(79, 172, 254, 0.05); border-radius: 16px; border: 1px solid rgba(79, 172, 254, 0.2);"><h4 style="color: var(--color-secondary); margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.5rem;"><span style="font-size: 1.3em;">✂️</span> Cutting Complexity</h4><div style="display: grid; gap: 1.5rem;"><div style="display: flex; align-items: center; gap: 1.5rem;"><div style="width: 50px; height: 50px; background: rgba(79, 172, 254, 0.15); border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0;">🔇</div><div style="flex: 1;"><p style="margin: 0; font-weight: 600; color: var(--color-secondary);">Removed "Gateway" from interface</p><p style="margin: 0.5rem 0 0 0; line-height: 1.6; font-size: 0.9em; opacity: 0.8;">Eliminated technical jargon that confused users</p></div></div><div style="display: flex; align-items: center; gap: 1.5rem;"><div style="width: 50px; height: 50px; background: rgba(79, 172, 254, 0.15); border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0;">📍</div><div style="flex: 1;"><p style="margin: 0; font-weight: 600; color: var(--color-secondary);">Focused on "location" in settings</p><p style="margin: 0.5rem 0 0 0; line-height: 1.6; font-size: 0.9em; opacity: 0.8;">Consistent language across legacy and new devices</p></div></div><div style="display: flex; align-items: center; gap: 1.5rem;"><div style="width: 50px; height: 50px; background: rgba(79, 172, 254, 0.15); border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0;">🔄</div><div style="flex: 1;"><p style="margin: 0; font-weight: 600; color: var(--color-secondary);">Universal consistency</p><p style="margin: 0.5rem 0 0 0; line-height: 1.6; font-size: 0.9em; opacity: 0.8;">Same location-based approach for all device types</p></div></div></div></div><div style="text-align: center; margin: 2rem 0; padding: 1.5rem; background: rgba(255, 255, 255, 0.02); border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.1);"><p style="font-size: 1.1em; line-height: 1.8; margin: 0; color: var(--color-secondary);">The result: One interface language that worked for everyone 🎯</p></div>'
      },
      {
        type: 'text',
        heading: 'Comprehensive App Modernization',
        content: '<div style="margin: 2rem 0; padding: 2rem; background: rgba(156, 163, 175, 0.05); border-radius: 16px; border: 1px solid rgba(156, 163, 175, 0.2);"><h4 style="color: var(--color-tertiary); margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.5rem;"><span style="font-size: 1.3em;">👥</span> Real-World Beta Testing</h4><div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin: 1.5rem 0;"><div style="text-align: center; padding: 1rem; background: rgba(255, 255, 255, 0.03); border-radius: 8px;"><div style="font-size: 2rem; margin-bottom: 0.5rem;">👷</div><p style="margin: 0; font-weight: 600;">Plumbers</p></div><div style="text-align: center; padding: 1rem; background: rgba(255, 255, 255, 0.03); border-radius: 8px;"><div style="font-size: 2rem; margin-bottom: 0.5rem;">👴</div><p style="margin: 0; font-weight: 600;">Retirees</p></div><div style="text-align: center; padding: 1rem; background: rgba(255, 255, 255, 0.03); border-radius: 8px;"><div style="font-size: 2rem; margin-bottom: 0.5rem;">🏠</div><p style="margin: 0; font-weight: 600;">Homeowners</p></div></div><p style="line-height: 1.8; margin-top: 1rem;">Twenty diverse beta testers received weekly TestFlight builds. Through calls and emails, we uncovered critical pain points that users were quietly enduring rather than reporting.</p></div><div style="margin: 2rem 0; padding: 2rem; background: rgba(255, 107, 107, 0.05); border-radius: 16px; border: 1px solid rgba(255, 107, 107, 0.2);"><h4 style="color: #ff6b6b; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.5rem;"><span style="font-size: 1.3em;">🔍</span> Key Discovery: Silent Suffering</h4><div style="display: grid; gap: 1rem;"><div style="display: flex; align-items: flex-start; gap: 1rem; padding: 1rem; background: rgba(255, 255, 255, 0.03); border-radius: 8px;"><div style="width: 8px; height: 8px; background: #ff6b6b; border-radius: 50%; margin-top: 8px; flex-shrink: 0;"></div><div><p style="margin: 0; font-weight: 600;">Alert source confusion</p><p style="margin: 0.5rem 0 0 0; font-size: 0.9em; opacity: 0.8;">Users forgot which device triggered push notifications (Miller\'s Law in action)</p></div></div><div style="display: flex; align-items: flex-start; gap: 1rem; padding: 1rem; background: rgba(255, 255, 255, 0.03); border-radius: 8px;"><div style="width: 8px; height: 8px; background: #ff6b6b; border-radius: 50%; margin-top: 8px; flex-shrink: 0;"></div><div><p style="margin: 0; font-weight: 600;">Adaptation over feedback</p><p style="margin: 0.5rem 0 0 0; font-size: 0.9em; opacity: 0.8;">People adapted to confusing language rather than complain</p></div></div><div style="display: flex; align-items: flex-start; gap: 1rem; padding: 1rem; background: rgba(255, 255, 255, 0.03); border-radius: 8px;"><div style="width: 8px; height: 8px; background: #ff6b6b; border-radius: 50%; margin-top: 8px; flex-shrink: 0;"></div><div><p style="margin: 0; font-weight: 600;">Missing troubleshooting</p><p style="margin: 0.5rem 0 0 0; font-size: 0.9em; opacity: 0.8;">Clear lack of in-app assistance and guidance</p></div></div></div></div><div style="margin: 2rem 0; padding: 1.5rem; background: rgba(110, 234, 255, 0.05); border-radius: 12px; border-left: 4px solid var(--color-primary);"><h4 style="color: var(--color-primary); margin-bottom: 1rem;">🔬 Comprehensive Heuristic Evaluation</h4><p style="line-height: 1.8; margin: 0;">Beyond user testing, I conducted a thorough heuristic evaluation to identify systematic usability issues and ensure the redesign addressed core interaction principles.</p></div>'
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
        content: '<div style="display: grid; gap: 1.5rem;"><div style="padding: 1.5rem; background: rgba(255, 255, 255, 0.03); border-radius: 12px; border-left: 4px solid var(--color-primary);"><h4 style="color: var(--color-primary); margin-bottom: 0.5rem;">1. navigation structure</h4><p>The app\'s navigation is highly linear, which limits flexibility when switching between devices. As more device types are added, this structure becomes increasingly inefficient. The amount of clicks it takes to get to one crumble of information is extremely diluting. With Miller\'s Law in mind, cross-referencing information would be nearly impossible.</p></div><div style="padding: 1.5rem; background: rgba(255, 255, 255, 0.03); border-radius: 12px; border-left: 4px solid var(--color-primary);"><h4 style="color: var(--color-primary); margin-bottom: 0.5rem;">2. overly novel</h4><p>FloLogic often introduces new and unfamiliar ideas across their brand, from the language they use to past design choices and the overall user experience with the physical product. The app design alone can make the experience feel unfamiliar or harder to navigate. Following established patterns (Jakob\'s Law), would help users feel more grounded and confident as they move through the app.</p></div><div style="padding: 1.5rem; background: rgba(255, 255, 255, 0.03); border-radius: 12px; border-left: 4px solid var(--color-primary);"><h4 style="color: var(--color-primary); margin-bottom: 0.5rem;">3. recognition over recall</h4><p>The current layout forces users to remember where certain settings or features are located instead of making them easily visible. For example, notifications are buried within individual device settings. With the expected addition of high-volume devices like PinPoints, a centralized notification center would improve accessibility.</p></div><div style="padding: 1.5rem; background: rgba(255, 255, 255, 0.03); border-radius: 12px; border-left: 4px solid var(--color-primary);"><h4 style="color: var(--color-primary); margin-bottom: 0.5rem;">4. error prevention and help</h4><p>The app provides limited support for preventing user errors, offering recovery steps, or guiding users through in-app assistance. The FloLogic support team is extremely overwhelmed with the amount of troubleshooting calls they get per day, and the app\'s support is non-existent.</p></div></div>'
      },
      {
        type: 'text',
        heading: 'first change - centralized menu bar',
        content: '<p style="line-height: 1.8;">The previous app had one way to access Account information, Sharing, and Support, all of which didn\'t take you far. So I combined them and made things accessible.</p><div style="margin-top: 1rem; display: grid; gap: 1rem;"><div style="padding: 1rem; background: rgba(255, 255, 255, 0.03); border-radius: 8px;"><strong>Device Tree page:</strong> list of devices.</div><div style="padding: 1rem; background: rgba(255, 255, 255, 0.03); border-radius: 8px;"><strong>Centralized History:</strong> Summarized key events across all devices in one easily scannable location.</div><div style="padding: 1rem; background: rgba(255, 255, 255, 0.03); border-radius: 8px;"><strong>Profile page:</strong> now held Account information, support, app-based notification control, and more.</div></div>'
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
        content: '<p style="line-height: 1.8; margin-bottom: 2rem;">To truly appreciate the transformation, here are the actual interface interactions in motion. These videos show the real user experience - from the cluttered, confusing legacy settings to the clean, intuitive new design.</p><div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin: 2rem 0;"><div style="padding: 1.5rem; background: rgba(255, 107, 107, 0.05); border-radius: 16px; border: 1px solid rgba(255, 107, 107, 0.2);"><h4 style="color: #ff6b6b; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;"><span style="font-size: 1.2em;">❌</span> Before: Legacy Settings</h4><video controls style="width: 100%; border-radius: 12px; margin-bottom: 1rem;"><source src="assets/images/projects/flologic/Gconnect settings before.mov" type="video/quicktime"><source src="assets/images/projects/flologic/Gconnect settings before.mov" type="video/mp4">Your browser does not support the video tag.</video><p style="font-size: 0.9em; line-height: 1.6; margin: 0; opacity: 0.8;">Cluttered interface with poor information hierarchy and confusing navigation patterns</p></div><div style="padding: 1.5rem; background: rgba(34, 197, 94, 0.05); border-radius: 16px; border: 1px solid rgba(34, 197, 94, 0.2);"><h4 style="color: #22c55e; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;"><span style="font-size: 1.2em;">✅</span> After: Redesigned Settings</h4><video controls style="width: 100%; border-radius: 12px; margin-bottom: 1rem;"><source src="assets/images/projects/flologic/GConnect Settings after.mov" type="video/quicktime"><source src="assets/images/projects/flologic/GConnect Settings after.mov" type="video/mp4">Your browser does not support the video tag.</video><p style="font-size: 0.9em; line-height: 1.6; margin: 0; opacity: 0.8;">Clean, Apple-inspired design with logical grouping and intuitive user flow</p></div></div><div style="text-align: center; margin: 2rem 0; padding: 1.5rem; background: rgba(110, 234, 255, 0.05); border-radius: 12px; border-left: 4px solid var(--color-primary);"><p style="font-size: 1.1em; line-height: 1.8; margin: 0; color: var(--color-primary);"><strong>💡 Key Insight:</strong> The difference isn\'t just visual—it\'s about creating an interaction flow that feels natural and reduces cognitive load.</p></div>'
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
    title: 'Circadia',
    subtitle: 'Circadia module popup inside a manifestation app built for stillness, designed to guide, not instruct',
    images: [
      'assets/images/projects/circadia/circadia.png'
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
        image: 'assets/images/projects/circadia/circadia 1.webp',
        title: 'A Bedtime Ritual for the Digital Age',
        description: 'More than a dream journal – Circadia is a pre-sleep experience designed to help users wind down and manifest intentionally, synced to the phases of the moon.',
        alt: 'Circadia app showing moon phases and dream interface'
      },
      {
        type: 'text',
        heading: 'From Dream Journal to Digital Ritual',
        content: '<div style="margin: 2rem 0; padding: 2rem; background: rgba(139, 92, 246, 0.05); border-radius: 16px; border: 1px solid rgba(139, 92, 246, 0.2);"><h4 style="color: #8b5cf6; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.5rem;"><span style="font-size: 1.3em;">🌙</span> The Evolution of Intent</h4><div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin: 2rem 0;"><div style="padding: 1.5rem; background: rgba(156, 163, 175, 0.08); border-radius: 12px; border: 1px solid rgba(156, 163, 175, 0.2); text-align: center;"><h5 style="color: #9ca3af; margin-bottom: 1rem;">📖 Original Vision</h5><p style="font-size: 0.9em; line-height: 1.6; margin: 0;">"A simple dream journal for recording nightly dreams"</p><div style="margin-top: 1rem; padding: 0.8rem; background: rgba(255, 255, 255, 0.03); border-radius: 6px; font-size: 0.8em; opacity: 0.8;">Functional, basic, transactional</div></div><div style="padding: 1.5rem; background: rgba(139, 92, 246, 0.08); border-radius: 12px; border: 1px solid rgba(139, 92, 246, 0.2); text-align: center;"><h5 style="color: #8b5cf6; margin-bottom: 1rem;">✨ Realized Vision</h5><p style="font-size: 0.9em; line-height: 1.6; margin: 0;">"A pre-sleep ritual that helps users wind down and manifest intentionally"</p><div style="margin-top: 1rem; padding: 0.8rem; background: rgba(255, 255, 255, 0.03); border-radius: 6px; font-size: 0.8em; opacity: 0.8;">Immersive, meaningful, transformative</div></div></div></div><div style="margin: 2rem 0; padding: 2rem; background: rgba(168, 85, 247, 0.05); border-radius: 16px; border: 1px solid rgba(168, 85, 247, 0.2);"><h4 style="color: #a855f7; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.5rem;"><span style="font-size: 1.3em;">🎨</span> My Role as Sole Designer</h4><div style="display: grid; gap: 1.5rem;"><div style="display: flex; align-items: center; gap: 1.5rem;"><div style="width: 50px; height: 50px; background: rgba(168, 85, 247, 0.15); border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0;">🏗️</div><div style="flex: 1;"><p style="margin: 0; font-weight: 600; color: #a855f7;">Shaped product identity from the ground up</p><p style="margin: 0.5rem 0 0 0; line-height: 1.6; font-size: 0.9em; opacity: 0.8;">Complete ownership of visual direction and user experience</p></div></div><div style="display: flex; align-items: center; gap: 1.5rem;"><div style="width: 50px; height: 50px; background: rgba(168, 85, 247, 0.15); border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0;">🔄</div><div style="flex: 1;"><p style="margin: 0; font-weight: 600; color: #a855f7;">Transformed basic concept into digital ritual</p><p style="margin: 0.5rem 0 0 0; line-height: 1.6; font-size: 0.9em; opacity: 0.8;">Elevated simple functionality into meaningful experience</p></div></div><div style="display: flex; align-items: center; gap: 1.5rem;"><div style="width: 50px; height: 50px; background: rgba(168, 85, 247, 0.15); border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0;">🌅</div><div style="flex: 1;"><p style="margin: 0; font-weight: 600; color: #a855f7;">Honored the sacred transition</p><p style="margin: 0.5rem 0 0 0; line-height: 1.6; font-size: 0.9em; opacity: 0.8;">Respecting the liminal space between waking and sleeping</p></div></div></div></div><div style="text-align: center; margin: 2rem 0; padding: 2rem; background: rgba(139, 92, 246, 0.08); border-radius: 16px; border: 1px solid rgba(139, 92, 246, 0.2);"><h3 style="color: #8b5cf6; margin-bottom: 1rem; font-size: 1.4em;">🎯 Core Philosophy</h3><div style="font-size: 1.2em; line-height: 1.6; margin: 1rem 0; padding: 1rem; background: rgba(255, 255, 255, 0.05); border-radius: 12px; border-left: 4px solid #8b5cf6;"><p style="margin: 0; font-style: italic; font-weight: 600;">"Make bedtime feel sacred,<br/>not transactional."</p></div><p style="line-height: 1.8; margin-top: 1.5rem; opacity: 0.9;">Every interaction designed to ease the transition into rest.</p></div>'
      },
      {
        type: 'two-col',
        heading: '🌀 My Role & Approach',
        content: '<ul><li>Created the entire visual system in Illustrator</li><li>Developed a 40+ token design system for scale and clarity</li><li>Designed all user flows, including manifestation guides, unconscious tests, and onboarding</li><li>Built 15+ custom Rive animations to support fluid, emotionally resonant transitions</li><li>Led UX strategy by replacing traditional login with a frictionless, immersive onboarding experience</li></ul>',
        image: 'assets/images/projects/circadia/circadia design system.svg',
        alt: 'Circadia design system tokens and components'
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
        type: 'text',
        heading: '✦ The Design Process',
        content: '<div style="margin: 2rem 0; padding: 2rem; background: rgba(251, 191, 36, 0.05); border-radius: 16px; border: 1px solid rgba(251, 191, 36, 0.2);"><h4 style="color: #fbbf24; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.5rem;"><span style="font-size: 1.3em;">⚡</span> Constraints & Challenges</h4><div style="display: grid; gap: 1rem;"><div style="display: flex; align-items: flex-start; gap: 1rem; padding: 1rem; background: rgba(255, 255, 255, 0.03); border-radius: 8px;"><div style="width: 8px; height: 8px; background: #fbbf24; border-radius: 50%; margin-top: 8px; flex-shrink: 0;"></div><div><p style="margin: 0; font-weight: 600;">Fast-paced stakeholder demands</p><p style="margin: 0.5rem 0 0 0; font-size: 0.9em; opacity: 0.8;">Move quickly with minimal research and tight timelines</p></div></div><div style="display: flex; align-items: flex-start; gap: 1rem; padding: 1rem; background: rgba(255, 255, 255, 0.03); border-radius: 8px;"><div style="width: 8px; height: 8px; background: #fbbf24; border-radius: 50%; margin-top: 8px; flex-shrink: 0;"></div><div><p style="margin: 0; font-weight: 600;">Evolving scope complexity</p><p style="margin: 0.5rem 0 0 0; font-size: 0.9em; opacity: 0.8;">Manifestation guide + Rorschach-inspired test + follow-up flows</p></div></div><div style="display: flex; align-items: flex-start; gap: 1rem; padding: 1rem; background: rgba(255, 255, 255, 0.03); border-radius: 8px;"><div style="width: 8px; height: 8px; background: #fbbf24; border-radius: 50%; margin-top: 8px; flex-shrink: 0;"></div><div><p style="margin: 0; font-weight: 600;">Shifting product direction</p><p style="margin: 0.5rem 0 0 0; font-size: 0.9em; opacity: 0.8;">Pivoting requirements mid-process while maintaining vision</p></div></div></div></div><div style="margin: 2rem 0; padding: 2rem; background: rgba(16, 185, 129, 0.05); border-radius: 16px; border: 1px solid rgba(16, 185, 129, 0.2);"><h4 style="color: #10b981; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.5rem;"><span style="font-size: 1.3em;">🎯</span> Strategic Focus Shift</h4><div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin: 2rem 0;"><div style="padding: 1.5rem; background: rgba(255, 107, 107, 0.08); border-radius: 12px; border: 1px solid rgba(255, 107, 107, 0.2); text-align: center;"><h5 style="color: #ff6b6b; margin-bottom: 1rem;">❌ Data Collection Approach</h5><p style="font-size: 0.9em; line-height: 1.6; margin: 0;">Gathering user information and metrics</p><div style="margin-top: 1rem; padding: 0.8rem; background: rgba(255, 255, 255, 0.03); border-radius: 6px; font-size: 0.8em; opacity: 0.8;">Transactional, extractive</div></div><div style="padding: 1.5rem; background: rgba(16, 185, 129, 0.08); border-radius: 12px; border: 1px solid rgba(16, 185, 129, 0.2); text-align: center;"><h5 style="color: #10b981; margin-bottom: 1rem;">✅ Trust-Building Approach</h5><p style="font-size: 0.9em; line-height: 1.6; margin: 0;">Tone, animation, and intuitive flow</p><div style="margin-top: 1rem; padding: 0.8rem; background: rgba(255, 255, 255, 0.03); border-radius: 6px; font-size: 0.8em; opacity: 0.8;">Relationship-focused, giving</div></div></div></div><div style="margin: 2rem 0; padding: 2rem; background: rgba(139, 92, 246, 0.05); border-radius: 16px; border: 1px solid rgba(139, 92, 246, 0.2);"><h4 style="color: #8b5cf6; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.5rem;"><span style="font-size: 1.3em;">🚪</span> Onboarding Transformation</h4><div style="margin: 1.5rem 0;"><div style="display: flex; align-items: center; gap: 1.5rem; margin-bottom: 1.5rem;"><div style="width: 60px; height: 60px; background: rgba(255, 107, 107, 0.15); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 24px; flex-shrink: 0;">🚫</div><div style="flex: 1;"><p style="margin: 0; font-weight: 600; color: #ff6b6b;">Before: Transactional Gateway</p><p style="margin: 0.5rem 0 0 0; line-height: 1.6; font-size: 0.9em; opacity: 0.8;">"Give us your information before we let you in"</p></div></div><div style="display: flex; align-items: center; gap: 1.5rem;"><div style="width: 60px; height: 60px; background: rgba(139, 92, 246, 0.15); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 24px; flex-shrink: 0;">🧘</div><div style="flex: 1;"><p style="margin: 0; font-weight: 600; color: #8b5cf6;">After: Meditative Experience</p><p style="margin: 0.5rem 0 0 0; line-height: 1.6; font-size: 0.9em; opacity: 0.8;">"Each question draws you in gently, like the beginning of meditation"</p></div></div></div></div><div style="text-align: center; margin: 2rem 0; padding: 2rem; background: rgba(139, 92, 246, 0.08); border-radius: 16px; border: 1px solid rgba(139, 92, 246, 0.2);"><h3 style="color: #8b5cf6; margin-bottom: 1rem; font-size: 1.4em;">💫 Design Philosophy</h3><div style="font-size: 1.2em; line-height: 1.6; margin: 1rem 0; padding: 1rem; background: rgba(255, 255, 255, 0.05); border-radius: 12px; border-left: 4px solid #8b5cf6;"><p style="margin: 0; font-style: italic; font-weight: 600;">"Onboarding should feel like<br/>the beginning of the ritual,<br/>not a barrier to it."</p></div><p style="line-height: 1.8; margin-top: 1.5rem; opacity: 0.9;">Every interaction designed to invite rather than interrogate.</p></div>'
      },
      {
        type: 'stats',
        heading: '📊 Impact & Results',
        stats: [
          { value: '40+', label: 'Token design system', desc: 'Used across all product flows' },
          { value: '15+', label: 'Custom animations', desc: 'For immersive transitions' },
          { value: '100%', label: 'Onboarding completion', desc: 'During internal beta testing' },
          { value: '0', label: 'Traditional logins', desc: 'Replaced with seamless flow' }
        ]
      },
      {
        type: 'full-image',
        image: 'assets/images/projects/circadia/circadia.avif',
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
        content: '<div style="margin: 2rem 0; padding: 2rem; background: rgba(251, 191, 36, 0.05); border-radius: 16px; border: 1px solid rgba(251, 191, 36, 0.2);"><h4 style="color: #fbbf24; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.5rem;"><span style="font-size: 1.3em;">🔮</span> What I\'d Do Differently</h4><div style="display: grid; gap: 1rem;"><div style="display: flex; align-items: flex-start; gap: 1rem; padding: 1rem; background: rgba(255, 255, 255, 0.03); border-radius: 8px;"><div style="width: 8px; height: 8px; background: #fbbf24; border-radius: 50%; margin-top: 8px; flex-shrink: 0;"></div><div><p style="margin: 0; font-weight: 600;">More conceptual exploration early</p><p style="margin: 0.5rem 0 0 0; font-size: 0.9em; opacity: 0.8;">Dedicated time for divergent thinking and vision exploration</p></div></div><div style="display: flex; align-items: flex-start; gap: 1rem; padding: 1rem; background: rgba(255, 255, 255, 0.03); border-radius: 8px;"><div style="width: 8px; height: 8px; background: #fbbf24; border-radius: 50%; margin-top: 8px; flex-shrink: 0;"></div><div><p style="margin: 0; font-weight: 600;">AI-accelerated iteration</p><p style="margin: 0.5rem 0 0 0; font-size: 0.9em; opacity: 0.8;">Using AI tools to rapidly prototype and test concepts</p></div></div><div style="display: flex; align-items: flex-start; gap: 1rem; padding: 1rem; background: rgba(255, 255, 255, 0.03); border-radius: 8px;"><div style="width: 8px; height: 8px; background: #fbbf24; border-radius: 50%; margin-top: 8px; flex-shrink: 0;"></div><div><p style="margin: 0; font-weight: 600;">Full-time focus</p><p style="margin: 0.5rem 0 0 0; font-size: 0.9em; opacity: 0.8;">This was part-time work alongside a full-time role</p></div></div></div></div><div style="text-align: center; margin: 2rem 0; padding: 2rem; background: rgba(139, 92, 246, 0.08); border-radius: 16px; border: 1px solid rgba(139, 92, 246, 0.2);"><h3 style="color: #8b5cf6; margin-bottom: 1rem; font-size: 1.4em;">🎯 The Unwavering Goal</h3><div style="font-size: 1.3em; line-height: 1.6; margin: 1rem 0; padding: 1.5rem; background: rgba(255, 255, 255, 0.05); border-radius: 12px; border-left: 4px solid #8b5cf6;"><p style="margin: 0; font-style: italic; font-weight: 600;">"Build something that feels like a ritual,<br/>not just an app."</p></div><p style="line-height: 1.8; margin-top: 1.5rem; opacity: 0.9;">Clear vision despite changing constraints.</p></div><div style="margin: 2rem 0; padding: 2rem; background: rgba(168, 85, 247, 0.05); border-radius: 16px; border: 1px solid rgba(168, 85, 247, 0.2);"><h4 style="color: #a855f7; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.5rem;"><span style="font-size: 1.3em;">🌙</span> The Core Challenge</h4><div style="padding: 1.5rem; background: rgba(255, 255, 255, 0.03); border-radius: 12px; border-left: 3px solid #a855f7;"><p style="line-height: 1.8; margin: 0; font-size: 1.1em;">Creating an experience that respects the <strong>liminal space between waking and sleeping</strong> – a digital tool that actually helps people disconnect from their digital lives.</p></div><div style="text-align: center; margin-top: 1.5rem; padding: 1rem; background: rgba(255, 255, 255, 0.02); border-radius: 8px;"><p style="margin: 0; font-style: italic; opacity: 0.9;">The paradox: using technology to escape technology.</p></div></div><div style="margin: 2rem 0; padding: 2rem; background: rgba(16, 185, 129, 0.05); border-radius: 16px; border: 1px solid rgba(16, 185, 129, 0.2);"><h4 style="color: #10b981; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.5rem;"><span style="font-size: 1.3em;">🚀</span> Current Status & Reception</h4><div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin: 1.5rem 0;"><div style="padding: 1.5rem; background: rgba(255, 255, 255, 0.03); border-radius: 12px;"><h5 style="color: #10b981; margin-bottom: 1rem; font-size: 1.1em;">📊 Beta Testing</h5><p style="line-height: 1.6; margin: 0; font-size: 0.9em;">Currently gathering feedback and iterating based on real user experiences</p></div><div style="padding: 1.5rem; background: rgba(255, 255, 255, 0.03); border-radius: 12px;"><h5 style="color: #10b981; margin-bottom: 1rem; font-size: 1.1em;">💬 User Feedback</h5><p style="line-height: 1.6; margin: 0; font-size: 0.9em;">Overwhelmingly positive, with users calling it "calming," "intuitive," and "unlike anything else"</p></div></div><div style="margin: 1.5rem 0; padding: 1rem; background: rgba(16, 185, 129, 0.08); border-radius: 8px; border-left: 3px solid #10b981;"><p style="margin: 0; font-weight: 600; color: #10b981;">Key Insight:</p><p style="margin: 0.5rem 0 0 0; line-height: 1.6;">Users are craving meaningful digital experiences that serve their wellbeing rather than extract their attention.</p></div></div><div style="text-align: center; margin: 2rem 0; padding: 2rem; background: rgba(139, 92, 246, 0.08); border-radius: 16px; border: 1px solid rgba(139, 92, 246, 0.2);"><h3 style="color: #8b5cf6; margin-bottom: 1rem; font-size: 1.4em;">✨ Looking Forward</h3><p style="line-height: 1.8; margin: 0; font-size: 1.1em; opacity: 0.9;">Continuing to refine the experience that bridges technology and mindfulness, one gentle interaction at a time.</p></div>'
      },
      {
        type: 'full-image',
        image: 'assets/images/projects/circadia/circadia.png',
        alt: 'Circadia project overview showing the complete app interface and design system',
        caption: 'Circadia: A bedtime ritual for the digital age'
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
       'assets/images/projects/flologic/showing the transformation from device-centric to location-centric.png'
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
       'assets/images/projects/user dashboard/Macbook Mockup.png'
     ],
     overviewTags: [
      'UX Focus', 'Dashboard Design', 'Enterprise Software',
      'Role: Lead UI/UX Designer, Systems Architect', 
      'Tools: Figma, User Research, Prototyping',
      'Timeline: Q1 2024 – Q3 2024'
    ],
         contentBlocks: [
      {
        type: 'hero',
        image: 'assets/images/projects/user dashboard/Macbook Mockup.png',
        alt: 'Unified dashboard interface showing real-time device monitoring and control systems'
      },
      {
        type: 'text',
        heading: 'The Challenge: Fragmented Visibility',
        content: '<p style="line-height: 1.8;">Property managers, technicians, and homeowners were drowning in disconnected tools. Each device had its own app, each system its own portal. Critical information was scattered across multiple interfaces, making it nearly impossible to understand the complete health of connected systems.</p><div style="margin: 1.5rem 0; padding: 1.5rem; background: rgba(255, 255, 255, 0.03); border-radius: 12px; border-left: 4px solid var(--color-primary);"><p style="margin-bottom: 1rem;"><strong>The breaking point:</strong> A technician would need to open 5+ different apps just to diagnose a single issue across connected devices.</p><p>Emergency situations became chaos. When a water leak sensor triggered, users had to navigate through multiple screens, remember different login credentials, and piece together information from disparate sources while water damage escalated.</p></div><p style="font-size: 1.1em; color: var(--color-primary); margin-top: 2rem;"><strong>The vision:</strong> One unified interface that would give users complete visibility and control over their entire connected ecosystem—from a single water valve to enterprise-scale deployments across multiple properties.</p>'
      },
      {
        type: 'text',
        heading: 'Research: Understanding Two Worlds',
        content: '<p style="line-height: 1.8;">This wasn\'t just about building another dashboard—it was about bridging the gap between two completely different user types with conflicting needs:</p><div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin: 2rem 0;"><div style="padding: 1.5rem; background: rgba(110, 234, 255, 0.05); border-radius: 12px; border: 1px solid rgba(110, 234, 255, 0.2);"><h4 style="color: var(--color-primary); margin-bottom: 1rem;">👔 Property Managers & Technicians</h4><ul style="line-height: 1.6;"><li>Need comprehensive system overviews</li><li>Want detailed diagnostic data</li><li>Require bulk actions and automation</li><li>Prioritize efficiency and expert controls</li></ul></div><div style="padding: 1.5rem; background: rgba(79, 172, 254, 0.05); border-radius: 12px; border: 1px solid rgba(79, 172, 254, 0.2);"><h4 style="color: var(--color-secondary); margin-bottom: 1rem;">🏠 Homeowners & End Users</h4><ul style="line-height: 1.6;"><li>Want simple, at-a-glance status</li><li>Need clear, actionable alerts</li><li>Prefer guided troubleshooting</li><li>Value peace of mind over complexity</li></ul></div></div><p style="line-height: 1.8;">Through 15+ user interviews and shadowing sessions, I discovered that both groups shared one critical need: <strong style="color: var(--color-primary);">immediate confidence in system health</strong>. The difference was in the depth of information required to achieve that confidence.</p>'
      },
      {
        type: 'text',
        heading: 'Design System: Built for Scale',
        content: '<p style="line-height: 1.8;">Creating a dashboard that could handle everything from a single homeowner\'s setup to enterprise deployments across hundreds of properties required a robust, scalable design foundation:</p><div style="margin: 2rem 0;"><div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;"><div style="padding: 1.5rem; background: rgba(255, 255, 255, 0.03); border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.1);"><h4 style="color: var(--color-primary); margin-bottom: 0.5rem;">🎨 Visual Hierarchy</h4><p style="line-height: 1.6;">Color-coded status system, typography scales, and spacing tokens that maintain clarity regardless of data density.</p></div><div style="padding: 1.5rem; background: rgba(255, 255, 255, 0.03); border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.1);"><h4 style="color: var(--color-primary); margin-bottom: 0.5rem;">📱 Responsive Components</h4><p style="line-height: 1.6;">Modular dashboard widgets that gracefully adapt from desktop grids to mobile stacks without losing functionality.</p></div><div style="padding: 1.5rem; background: rgba(255, 255, 255, 0.03); border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.1);"><h4 style="color: var(--color-primary); margin-bottom: 0.5rem;">⚡ Real-time Updates</h4><p style="line-height: 1.6;">Designed animated states and loading patterns that keep users informed during live data refreshes.</p></div></div></div><p style="line-height: 1.8; margin-top: 1.5rem;">Every component was built with the assumption that the system would grow—more device types, more data points, more concurrent users. The design needed to be as scalable as the technology beneath it.</p>'
      },
      {
        type: 'full-image',
        image: 'assets/images/projects/user dashboard/Macbook Mockup.png',
        alt: 'Final dashboard interface showing unified device management and real-time monitoring capabilities',
        caption: 'The unified dashboard: bringing clarity to complex systems'
      }
        ],
    stats: [
      { value: '88%', label: 'System visibility', desc: 'Increased cross-device visibility and monitoring' },
      { value: '41%', label: 'Faster resolution', desc: 'Cut average troubleshooting time per incident' },
      { value: '76%', label: 'User satisfaction', desc: 'Improved usability scores in beta testing' }
     ],
     impacts: [
      { value: '88%', label: 'System visibility', desc: 'Increased cross-device visibility and monitoring' },
      { value: '41%', label: 'Faster resolution', desc: 'Cut average troubleshooting time per incident' },  
      { value: '76%', label: 'User satisfaction', desc: 'Improved usability scores in beta testing' }
     ]
   },
   
     project6: {
     title: 'A Clean Digital Presence for Embedded Systems',
     subtitle: 'Lightweight, fast-loading static marketing site for firmware-focused company',
     images: [
       'assets/images/projects/circadia/circadia.png'
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
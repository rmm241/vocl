# Vocl — AI Voice Receptionist Landing Page

A premium, single-page marketing site with an Apple-meets-Linear aesthetic: deep charcoal background, Electric Cyan accent, frosted-glass cards, Inter typography, and tasteful scroll-reveal animations.

## Design System

- **Palette**: charcoal/near-black background (`#0A0A0B`), elevated surfaces with subtle white borders and frosted-glass blur, Electric Cyan primary accent (`hsl(186 100% 60%)`), soft lavender as secondary accent, muted grays for body text.
- **Typography**: Inter via Google Fonts. Tight tracking, large display sizes for hero, generous line height for body.
- **Motion**: fade-in-up on section enter (IntersectionObserver), hover-scale on cards, gradient glow pulses behind hero visual.
- **Layout**: 1200px max width, generous whitespace, 12-col grid for bento.

## Sections

1. **Sticky Nav** — Vocl wordmark, anchor links (Features, Use Cases, Pricing), "Start Free Trial" button. Translucent on scroll.

2. **Hero** — "The End of Missed Appointments." with the provided sub-headline. Dual CTAs: solid cyan "Start Free Trial" + ghost "Listen to Demo" (with play icon). **Hero visual**: animated SVG/CSS waveform layered with a glassmorphic "Incoming Call" card mock showing caller name, live transcription bubbles, and a "Booked: Tue 3:00 PM" confirmation chip. Soft cyan radial glow behind.

3. **Integrations marquee** — infinite horizontal scroll of integration name pills (Google Calendar, Outlook, Calendly, Zapier, Make.com, HubSpot) with edge fade masks.

4. **Feature Bento Grid** — 3 frosted cards of varying sizes:
   - Human-Level Nuance (with animated waveform mini-visual)
   - Direct Calendar Action (with mock calendar tile being written to)
   - Smart Redirection (with call-routing diagram)

5. **Industry Switcher** — Tabs: Healthcare / Legal / Home Services / Wellness & Beauty. Each tab swaps a descriptive blurb and a "Sample Conversation" transcript styled like a chat (caller vs Vocl bubbles).

6. **Revenue Recovery Calculator** — Two sliders: Average Service Value ($) and Missed Calls / Week. Live-updating big number: "Annual Revenue Saved: $X". Formula: `serviceValue × missedCalls × 52 × recoveryRate(0.6)`. Animated number counter on change.

7. **How It Works** — 3 numbered steps in a horizontal flow with connecting line: Connect Calendar → Define Rules → Forward Calls.

8. **Pricing** — 3 glass cards: Starter (pay-as-you-go), Professional (highlighted/featured with cyan border glow), Enterprise (custom). Each with feature checklist and CTA.

9. **Final CTA + Footer** — Big "Ready to clear your desk?" headline with primary CTA. Footer with product/company/legal link columns and copyright.

## Technical Notes

- Update `src/index.css` design tokens (background, foreground, primary=cyan, secondary=lavender, glass border/bg variables) and add Inter font import.
- Extend `tailwind.config.ts` with `fade-in-up`, `marquee`, `glow-pulse` keyframes/animations and a `glass` utility.
- Build section components under `src/components/landing/` (Nav, Hero, Marquee, Bento, IndustryTabs, Calculator, HowItWorks, Pricing, FinalCTA, Footer); compose them in `src/pages/Index.tsx`.
- Use shadcn `Tabs`, `Slider`, `Button`, `Card` for primitives.
- Lightweight `useReveal` hook with IntersectionObserver for scroll-in animations.
- Fully responsive: bento collapses to single column, hero stacks, sliders full-width on mobile.
- No backend required for v1; CTAs are visual.
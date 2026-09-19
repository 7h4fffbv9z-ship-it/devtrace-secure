# DevTrace AI Dashboard

## Goal
Build a polished dark developer dashboard for auditing GitHub repositories for security, dependency, and license risks.

## Experience
- Add a compact header with DevTrace AI branding, navigation, and live engine status.
- Make repository URL entry the primary action, with quick-try repository shortcuts.
- Present four immediately scannable audit metrics: health score, exposed secrets, vulnerable packages, and license risk.
- Add three detailed result views with realistic sample findings, severity and compliance states, and accessible tab controls.
- Add a remediation sidebar with AI patch generation, PDF export, and recent repository audits.
- Make interactions functional in the browser: sample selection, audit loading/completion state, tab switching, patch feedback, and export feedback.

## Visual Direction
- Default dark slate/zinc workspace with crisp borders and restrained emerald, amber, red, and cyan status accents.
- Dense, professional layout inspired by security consoles and code intelligence tools.
- Use semantic design tokens, a distinctive technical display/body font pairing, Lucide icons, and subtle motion with reduced-motion support.
- Keep cards compact with modest corner radii and responsive layouts for desktop and mobile.

## Implementation
- Replace the placeholder home page with the complete dashboard.
- Expand the global design system with semantic security/status tokens, typography, shadows, and motion.
- Update page metadata and root font loading for DevTrace AI.
- Use local sample data only; no GitHub connection or persistent backend is required for this interface.
- Verify the rendered dashboard at desktop and mobile widths, including interactions and overflow.

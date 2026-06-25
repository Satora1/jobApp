### Landing Homepage

File: app/page.tsx
Last updated: 2026-06-25

| Property | Class |
| --- | --- |
| Background | bg-background, bg-surface, bg-surface-tertiary, bg-surface-muted |
| Border | border border-border, border-x border-border, divide-y divide-border |
| Border radius | rounded-sm for buttons, rounded-md for small marks, rounded-lg for cards, rounded-xl for large mockups |
| Text - primary | text-text-primary, text-text-darkest, text-text-black |
| Text - secondary | text-text-secondary, text-text-muted |
| Spacing | px-6, py-12, py-24, gap-3, gap-8 |
| Hover state | hover:bg-overlay-dark, hover:bg-surface-secondary |
| Shadow | shadow-sm, shadow-lg shadow-info-muted/20, shadow-2xl shadow-info-muted/30 |
| Accent usage | bg-accent, text-accent, bg-info, bg-success, bg-warning |

**Pattern notes:**
The landing page uses token-backed Tailwind theme classes only for color. Buttons keep a compact rectangular shape with `rounded-sm`; repeated data cards use `rounded-lg`; large browser and table mockups use `rounded-xl`. CTA and hero panels use token-based radial gradients and should stay centered, spacious, and text-first.

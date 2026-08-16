# Seokhee Lee — Design System

## 0. Research Log

- Existing-site extraction (2026-08-16): codified the homepage's existing quiet, dark editorial system before adding SG. The page keeps the site's small personal-note scale rather than introducing a product-marketing surface.

## 1. Design Direction

The site is a dark field note: spare, calm, and personal. Long-form serif text carries the story; small mono metadata gives links and navigation a practical, builderly texture. The memorable moment is the absence of chrome: each page reads like a single, well-set note rather than a dashboard or sales page.

## 2. Color

| Token | Value | Use |
| --- | --- | --- |
| `--background` | `#071827` | Page field |
| `--foreground` | `#edf4fb` | Primary text |
| `--muted` | `#9fb0c3` | Navigation and metadata |
| `--link` | `#b7d2f0` | Links |
| `--focus` | `#8bbcff` | Keyboard focus |

## 3. Typography

- Body: `ui-serif, "Iowan Old Style", Georgia, serif`, 16px / 1.6.
- Navigation: body face at 16px.
- Metadata: `ui-monospace, SFMono-Regular, Menlo, monospace`, 11px / 1.6 with 0.08em tracking and uppercase.
- Strong text: 600 weight.

## 4. Layout

- Reading measure: `33rem` (`--measure`).
- Page shell: centered; 24px horizontal padding and 64px / 96px top / bottom padding.
- Base rhythm: 4px. Paragraphs sit 16px apart; sections sit 32px apart.
- The layout is one readable column at every viewport. The header may wrap naturally rather than adding a compact navigation pattern.

## 5. Reusable Primitives

### Identity line

- **Structure:** name link plus simple navigation.
- **States:** muted default nav; foreground on hover/current; visible blue focus outline.
- **Accessibility:** semantic `nav`, current page via `aria-current`.

### Note section

- **Structure:** one semantic `section` with paragraphs and inline links.
- **States:** static; inline links remain underlined in body copy.
- **Accessibility:** headings or `aria-labelledby` identify each section.

### Metadata links

- **Structure:** mono, uppercase inline links separated by slashes.
- **States:** muted by default; foreground on hover; visible focus outline.
- **Accessibility:** native links with descriptive labels.

## 6. Motion & Interaction

- No decorative motion. Homepage section selection uses an immediate hash-based state change.
- Hover only changes the affordance of a real link.
- Keyboard focus uses the shared focus token. The site honors the browser's reduced-motion preference by avoiding nonessential animation.

## 7. Depth & Surface

- Strategy: borders-only only when a structural divider is necessary; otherwise the system relies on the dark field and typographic hierarchy. No shadows or cards.

## 8. Accessibility Constraints & Accepted Debt

- Target: WCAG 2.2 AA. Keep body text above 14px, retain visible keyboard focus, use semantic landmarks, and make every navigation target reachable with a keyboard.
- No accepted debt.

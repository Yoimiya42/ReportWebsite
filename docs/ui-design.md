---
title: UI Design
sidebar_position: 4
---

# UI Design


## Design Principles

- Keep the style simple and calm, with pastel and cartoon-like visuals.
- Use clear visual hierarchy and consistent button behavior across screens.
- Prefer icons plus short text labels instead of long instructions.
- Avoid stress triggers (for example: countdowns, failure sounds, warning-heavy visuals).

## Typography

### Font Family

- Primary: `Arial`
- Fallback: `sans-serif` (if Arial is unavailable)

### Font Scale

| Usage | Spec (pt) | CSS Equivalent (px) | Preview |
| --- | --- | --- | --- |
| Screen title | `36pt` | `48px` | <span className="ui-size-sample ui-size-title">Screen Title</span> |
| Menu header | `30pt` | `40px` | <span className="ui-size-sample ui-size-menu">Menu Header</span> |
| Button label | `24pt` | `32px` | <span className="ui-size-sample ui-size-button">Play</span> |
| Body text | `18pt` | `24px` | <span className="ui-size-sample ui-size-body">Body Text</span> |

### Title Rules

- Alignment: center
- Weight: bold

## Color System

### Global Palette

| Token | Usage | Color |
| --- | --- | --- |
| Primary | Home, menu, settings, dialogs | <span className="ui-swatch ui-swatch-primary"></span> `#D9E5F7` |
| Secondary A | Accent and warm highlights | <span className="ui-swatch ui-swatch-secondary-a"></span> `#F09F4F` |
| Secondary B | Neutral background/text contrast | <span className="ui-swatch ui-swatch-secondary-b"></span> `#FFFFFF` |
| General UI button | Generic actions | <span className="ui-swatch ui-swatch-general-btn"></span> `#B2CCEB` |

### Action Colors

| Action | Color | Example |
| --- | --- | --- |
| Play | <span className="ui-swatch ui-swatch-play"></span> `#6FCF97` | <span className="ui-btn-chip ui-btn-play">Play</span> |
| Options | <span className="ui-swatch ui-swatch-options"></span> `#808080` | <span className="ui-btn-chip ui-btn-options">Options</span> |
| Home | <span className="ui-swatch ui-swatch-home"></span> `#D9E5F7` | <span className="ui-btn-chip ui-btn-home">Home</span> |
| Quit | <span className="ui-swatch ui-swatch-quit"></span> `#FF746C` | <span className="ui-btn-chip ui-btn-quit">Quit</span> |
| Restart / Retry | <span className="ui-swatch ui-swatch-restart"></span> `#779ECB` | <span className="ui-btn-chip ui-btn-restart">Retry</span> |

### Difficulty Support Colors

| Difficulty Token | Color | Text Color |
| --- | --- | --- |
| Yellow | <span className="ui-swatch ui-swatch-difficulty-yellow"></span> `#FFF3B0` | `#5A4A10` |
| Maroon | <span className="ui-swatch ui-swatch-difficulty-maroon"></span> `#E8A3A3` | `#4B1010` |

## Icons, Emoji, and Symbol Rules

- Prefer icons over long text: stars `⭐`, badges `🎖️🏆`.
- Use rounded iconography and rounded UI shapes.
- Avoid visually stressful symbols in normal flow: `❌` and `⚠️`.
- Use [Google Material Icons](https://fonts.google.com/icons) as the primary icon set.
- Pair icon + text together for action clarity.

### Suggested Action Icons

| Action | Icon Suggestion | Notes |
| --- | --- | --- |
| Play | `▶️` (`play_arrow`) | Largest button on screen |
| Options | `⚙️` (`settings`) | Second largest button |
| Home | `🏠` (`home`) | Always visible at top-left |
| Restart / Retry | `🔄` (`restart_alt`) | Use consistent location |
| Quit | `🚪` (`logout`) | Keep visually distinct |

## Buttons and Interaction Rules

- Minimum touch target: `48px`-`64px` height.
- Keep one primary action per button.
- Ensure strong background contrast for readability.
- Keep button color/icon mapping consistent on every page.
- Home button should always return users to the game launcher.

## Audio and Accessibility

### Audio Style

- Calm, quiet, and predictable.
- Use soft and warm sound effects.
- Do not use sharp/high-frequency sounds.
- Audio must always be optional.
- Never use sound to indicate failure.

### Accessibility Options

- Persist user preferences across sessions.
- Toggle options:
  - Sound on/off
  - Animation reduction
  - High contrast mode
  - Voice instruction on/off
  - Input method toggles: Motion Input, Mouse + Keyboard, Controller, Xbox Adaptive Controller

### Key Interaction Safety

- No timers or countdown pressure.
- Let users choose when to finish.
- Keep animation speed slow and stable.


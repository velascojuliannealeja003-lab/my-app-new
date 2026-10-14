# MediScan Design System Guide

**Phase 0 — Design System**

## 1. Purpose

The MediScan Design System provides a shared set of colors, typography, spacing, and reusable UI components. It helps the team maintain a consistent interface across all MediScan screens.

## 2. Design Tokens

Location: `src/app/theme/tokens.ts`

Use the existing design tokens instead of repeatedly hardcoding styles.

### Brand Colors

| Token | Hex Value | Purpose |
|---|---|---|
| Primary | `#246B50` | Main buttons and brand elements |
| Primary Dark | `#174D3B` | Dark green brand accents |
| Primary Light | `#DDF4E8` | Light green backgrounds |

### Status Colors

| Status | Text Color | Background |
|---|---|---|
| Success | `#2E7D32` | `#E1F7E5` |
| Warning | `#B8750A` | `#FFF0D9` |
| Error | `#B83232` | `#FCE8E8` |

### Neutral Colors

| Token | Hex Value |
|---|---|
| Background | `#F7F9FA` |
| Surface | `#FFFFFF` |
| Primary Text | `#102B2A` |
| Secondary Text | `#617473` |
| Border | `#D9E1E0` |
| Muted Surface | `#F0F4F4` |

## 3. Typography

Font family: System

| Token | Size |
|---|---:|
| XS | 12 px |
| SM | 14 px |
| MD | 16 px |
| LG | 20 px |
| XL | 24 px |
| XXL | 32 px |

Font weights:
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700

Use larger sizes for headings and smaller sizes for supporting text and captions.

## 4. Spacing

Use the spacing tokens from `tokens.ts`.

| Token | Value |
|---|---:|
| XS | 4 px |
| SM | 8 px |
| MD | 12 px |
| LG | 16 px |
| XL | 24 px |
| XXL | 32 px |
| XXXL | 40 px |

## 5. Corner Radius

| Token | Value |
|---|---:|
| SM | 6 px |
| MD | 12 px |
| LG | 16 px |
| XL | 24 px |
| FULL | 999 px |

Use consistent corner radii for cards, buttons, and status badges.

## 6. Reusable Components

### AppButton

File: `src/components/AppButton.tsx`

Supports primary and secondary variants, disabled states, and customizable button actions.

Example:

    import { AppButton } from "../components/AppButton";

    <AppButton
      title="Scan Medicine"
      onPress={() => console.log("Scan pressed")}
      variant="primary"
    />

### AppCard

File: `src/components/AppCard.tsx`

Provides consistent background color, border, padding, and rounded corners.

Example:

    import { AppCard } from "../components/AppCard";

    <AppCard>
      <Text>Medicine details</Text>
    </AppCard>

### StatusBadge

File: `src/components/StatusBadge.tsx`

Displays medicine verification status using consistent colors.

Supported statuses:
- `verified`
- `review`
- `expired`

Example:

    import { StatusBadge } from "../components/StatusBadge";

    <StatusBadge status="verified" />

## 7. Theme Support

The token file provides `lightTheme` and `darkTheme`.

Components that accept a `theme` prop can receive the appropriate theme:

    <AppCard theme={lightTheme}>
      <Text>Example content</Text>
    </AppCard>

Import `lightTheme` or `darkTheme` from `src/app/theme/tokens.ts` when needed.

## 8. Team Guidelines

1. Reuse existing components before creating duplicates.
2. Use tokens from `tokens.ts` for colors, spacing, typography, and dimensions.
3. Keep component names descriptive and consistent.
4. Preserve accessibility labels and disabled states where applicable.
5. Test changes in the running Expo app.
6. Confirm colors and typography against the approved design reference before finalizing.

## 9. Phase 0 Deliverables

- Centralized design tokens
- Reusable button component
- Reusable card component
- Reusable status badge component
- Design system showcase screen
- Documentation for team usage

**Note:** These values are the current implementation. Confirm them against the team's approved design reference before treating them as final.


/**
 * MediScan Design Tokens
 * Phase 0 — Design System
 */

export const colors = {
  brand: {
    primary: "#246B50",
    primaryDark: "#174D3B",
    primaryLight: "#DDF4E8",
  },

  status: {
    success: "#2E7D32",
    successBackground: "#E1F7E5",
    warning: "#B8750A",
    warningBackground: "#FFF0D9",
    error: "#B83232",
    errorBackground: "#FCE8E8",
  },

  neutral: {
    white: "#FFFFFF",
    black: "#000000",
    background: "#F7F9FA",
    text: "#102B2A",
    secondaryText: "#617473",
    border: "#D9E1E0",
    muted: "#F0F4F4",
  },
} as const;

export const typography = {
  fontFamily: {
    regular: "System",
  },

  fontSize: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
    xxl: 32,
  },

  fontWeight: {
    regular: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
  } as const,

  lineHeight: {
    sm: 18,
    md: 24,
    lg: 28,
    xl: 32,
  },
} as const;

export const spacing = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
  xxxl: 40,
} as const;

export const radius = {
  sm: 6,
  md: 12,
  lg: 16,
  xl: 24,
  full: 999,
} as const;

export const sizes = {
  buttonHeight: 48,
  inputHeight: 48,
  iconSm: 16,
  iconMd: 24,
  iconLg: 32,
  headerHeight: 56,
  tabBarHeight: 64,
} as const;

export const lightTheme = {
  mode: "light" as const,

  colors: {
    ...colors.brand,
    ...colors.status,

    background: "#F7F9FA",
    surface: "#FFFFFF",
    surfaceSecondary: "#F0F4F4",
    text: "#102B2A",
    textSecondary: "#617473",
    border: "#D9E1E0",
    tabBar: "#FFFFFF",
    inputBackground: "#FFFFFF",
    overlay: "rgba(0, 0, 0, 0.35)",
  },

  typography,
  spacing,
  radius,
  sizes,
};

export const darkTheme = {
  mode: "dark" as const,

  colors: {
    ...colors.brand,
    ...colors.status,

    background: "#101918",
    surface: "#1A2624",
    surfaceSecondary: "#243431",
    text: "#F1F7F5",
    textSecondary: "#B0C2BC",
    border: "#354743",
    tabBar: "#172320",
    inputBackground: "#1A2624",
    overlay: "rgba(0, 0, 0, 0.65)",
  },

  typography,
  spacing,
  radius,
  sizes,
};

export type AppTheme =
  | typeof lightTheme
  | typeof darkTheme;

export type ThemeMode = "light" | "dark";

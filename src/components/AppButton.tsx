
import {
    Pressable,
    StyleSheet,
    Text,
    type StyleProp,
    type TextStyle,
    type ViewStyle,
} from "react-native";

import {
    lightTheme,
    radius,
    sizes,
    spacing,
    typography,
    type AppTheme,
} from "../app/theme/tokens";

type ButtonVariant = "primary" | "secondary";

interface AppButtonProps {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant;
  disabled?: boolean;
  theme?: AppTheme;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export function AppButton({
  title,
  onPress,
  variant = "primary",
  disabled = false,
  theme = lightTheme,
  style,
  textStyle,
}: AppButtonProps) {
  const isPrimary = variant === "primary";

  const backgroundColor = disabled
    ? theme.colors.surfaceSecondary
    : isPrimary
      ? theme.colors.primary
      : theme.colors.surface;

  const borderColor = disabled
    ? theme.colors.border
    : theme.colors.primary;

  const textColor = disabled
    ? theme.colors.textSecondary
    : isPrimary
      ? "#FFFFFF"
      : theme.colors.primary;

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityState={{ disabled }}
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor,
          borderColor,
          opacity: pressed && !disabled ? 0.75 : 1,
        },
        style,
      ]}
    >
      <Text style={[styles.label, { color: textColor }, textStyle]}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: sizes.buttonHeight,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderRadius: radius.md,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  label: {
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.md,
    lineHeight: typography.lineHeight.md,
    fontWeight: typography.fontWeight.semibold,
    textAlign: "center",
  },
});

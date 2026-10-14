import React from "react";
import {
  View,
  StyleSheet,
  type ViewProps,
} from "react-native";

import {
  lightTheme,
  spacing,
  radius,
  type AppTheme,
} from "../app/theme/tokens";

interface AppCardProps extends ViewProps {
  children: React.ReactNode;
  theme?: AppTheme;
}

export function AppCard({
  children,
  theme = lightTheme,
  style,
  ...props
}: AppCardProps) {
  return (
    <View
      {...props}
      style={[
        styles.card,
        {
          backgroundColor: theme.colors.surface,
          borderColor: theme.colors.border,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: spacing.lg,
    borderRadius: radius.md,
    borderWidth: 1,
    gap: spacing.md,
  },
});

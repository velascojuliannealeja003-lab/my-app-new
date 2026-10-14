import React from "react";
import { Text, StyleSheet } from "react-native";

import {
  lightTheme,
  spacing,
  radius,
  typography,
  type AppTheme,
} from "../app/theme/tokens";

type BadgeStatus = "verified" | "review" | "expired";

interface StatusBadgeProps {
  status: BadgeStatus;
  theme?: AppTheme;
}

const statusLabels: Record<BadgeStatus, string> = {
  verified: "✓ Verified",
  review: "⚠ Review",
  expired: "! Expired",
};

export function StatusBadge({
  status,
  theme = lightTheme,
}: StatusBadgeProps) {
  const colors = {
    verified: {
      text: theme.colors.success,
      background: theme.colors.successBackground,
    },
    review: {
      text: theme.colors.warning,
      background: theme.colors.warningBackground,
    },
    expired: {
      text: theme.colors.error,
      background: theme.colors.errorBackground,
    },
  }[status];

  return (
    <Text
      style={[
        styles.badge,
        {
          color: colors.text,
          backgroundColor: colors.background,
        },
      ]}
    >
      {statusLabels[status]}
    </Text>
  );
}

const styles = StyleSheet.create({
  badge: {
    alignSelf: "flex-start",
    overflow: "hidden",
    borderRadius: radius.full,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    fontSize: typography.fontSize.xs,
    fontWeight: "600",
  },
});

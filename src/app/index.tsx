import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppButton } from "../components/AppButton";
import { AppCard } from "../components/AppCard";
import { StatusBadge } from "../components/StatusBadge";

import {
  lightTheme,
  radius,
  sizes,
  spacing,
  typography,
} from "./theme/tokens";

const theme = lightTheme;
const c = theme.colors;

export default function HomeScreen() {
  return (
    <SafeAreaView
      style={[
        styles.safe,
        { backgroundColor: c.background },
      ]}
    >
      <StatusBar barStyle="dark-content" />

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* App Header */}
        <View style={styles.header}>
          <View style={styles.logo}>
            <Text style={styles.logoText}>M</Text>
          </View>

          <View style={styles.brand}>
            <Text style={styles.brandName}>MediScan</Text>
            <Text style={styles.tagline}>
              Your Family's Medicine Companion
            </Text>
          </View>

          <Text style={styles.bell}>♧</Text>
        </View>

        {/* Welcome Banner */}
        <View style={styles.hero}>
          <Text style={styles.eyebrow}>
            YOUR FAMILY'S HEALTH
          </Text>

          <Text style={styles.greeting}>
            Hello, Maria! 👋
          </Text>

          <Text style={styles.subtitle}>
            Take care, stay safe.
          </Text>
        </View>

        {/* Medicine Overview */}
        <Text style={styles.sectionTitle}>
          Medicine Overview
        </Text>

        <View style={styles.stats}>
          <View style={styles.statCard}>
            <Text style={styles.statIcon}>▰</Text>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Total</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={[styles.statIcon, { color: c.success }]}>
              ✓
            </Text>
            <Text style={styles.statNumber}>8</Text>
            <Text style={styles.statLabel}>Verified</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={[styles.statIcon, { color: c.warning }]}>
              ⚠
            </Text>
            <Text style={styles.statNumber}>3</Text>
            <Text style={styles.statLabel}>Review</Text>
          </View>
        </View>

        {/* Status Badges */}
        <Text style={styles.sectionTitle}>
          Verification Status
        </Text>

        <View style={styles.card}>
          <View style={styles.statusRow}>
            <Text style={styles.body}>Verified medicine</Text>
            <StatusBadge status="verified" />
          </View>

          <View style={styles.statusRow}>
            <Text style={styles.body}>Needs review</Text>
            <StatusBadge status="review" />
          </View>

          <View style={styles.statusRow}>
            <Text style={styles.body}>Expired medicine</Text>
            <StatusBadge status="expired" />
          </View>

        {/* Medicine Card */}
        <Text style={styles.sectionTitle}>
          Medicine Card
        </Text>
        </View>

        <AppCard>
          <View style={styles.medicineRow}>
            <View style={styles.medicineIcon}>
              <Text style={styles.pillIcon}>💊</Text>
            </View>

            <View style={styles.medicineInfo}>
              <Text style={styles.medicineName}>
                Paracetamol Biogesic
              </Text>

              <Text style={styles.muted}>
                Tablet · 500 mg
              </Text>

              <Text style={styles.expiry}>
                Expires December 25, 2026
              </Text>
            </View>
          </View>

          <View style={styles.divider} />

          <Text style={styles.muted}>
            Saved in Mama's medicine vault
          </Text>
        </AppCard>

        {/* Button Styles */}
        <Text style={styles.sectionTitle}>Buttons</Text>

        <View style={styles.card}>
          <AppButton
            title="Scan Medicine"
            onPress={() => console.log("Scan button pressed")}
            variant="primary"
          />

          <AppButton
            title="View Medicine Details"
            onPress={() => console.log("Details button pressed")}
            variant="secondary"
          />
        </View>

        {/* Typography Samples */}
        <Text style={styles.sectionTitle}>Typography</Text>

        <View style={styles.card}>
          <Text style={styles.headingSample}>
            Page Heading
          </Text>

          <Text style={styles.body}>
            Body text — 16 px
          </Text>

          <Text style={styles.muted}>
            Secondary text — 14 px
          </Text>

          <Text style={styles.caption}>
            CAPTION — 12 PX
          </Text>
        </View>

        {/* Color Palette */}
        <Text style={styles.sectionTitle}>Color Tokens</Text>

        <View style={styles.card}>
          {[
            ["Primary Green", c.primary],
            ["Primary Dark", c.primaryDark],
            ["Light Green", c.primaryLight],
            ["Background", c.background],
            ["Surface", c.surface],
            ["Primary Text", c.text],
            ["Success", c.success],
            ["Warning", c.warning],
            ["Error", c.error],
          ].map(([name, color]) => (
            <View key={name} style={styles.colorRow}>
              <View
                style={[
                  styles.swatch,
                  { backgroundColor: color },
                ]}
              />

              <Text style={styles.body}>{name}</Text>

              <Text style={styles.hex}>{color}</Text>
            </View>
          ))}
        </View>

        {/* Footer */}
        <Text style={styles.footer}>
          MEDISCAN · DESIGN SYSTEM · PHASE 0
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },

  content: {
    padding: spacing.lg,
    paddingBottom: spacing.xxxl,
    gap: spacing.md,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    paddingVertical: spacing.sm,
  },

  logo: {
    width: 42,
    height: 42,
    borderRadius: radius.md,
    backgroundColor: c.primary,
    alignItems: "center",
    justifyContent: "center",
  },

  logoText: {
    color: "#FFFFFF",
    fontSize: typography.fontSize.xl,
    fontWeight: "700",
  },

  brand: {
    flex: 1,
  },

  brandName: {
    color: c.text,
    fontSize: typography.fontSize.lg,
    fontWeight: "700",
  },

  tagline: {
    color: c.textSecondary,
    fontSize: typography.fontSize.xs,
    marginTop: spacing.xs / 2,
  },

  bell: {
    fontSize: typography.fontSize.xl,
    color: c.text,
  },

  hero: {
    backgroundColor: c.primaryLight,
    borderRadius: radius.lg,
    padding: spacing.xl,
    marginVertical: spacing.xs,
  },

  eyebrow: {
    color: c.primary,
    fontSize: typography.fontSize.xs,
    fontWeight: "700",
    letterSpacing: 1.2,
  },

  greeting: {
    color: c.text,
    fontSize: typography.fontSize.xl,
    fontWeight: "700",
    marginTop: spacing.sm,
  },

  subtitle: {
    color: c.text,
    fontSize: typography.fontSize.sm,
    marginTop: spacing.xs,
  },

  sectionTitle: {
    color: c.text,
    fontSize: typography.fontSize.lg,
    fontWeight: "700",
    marginTop: spacing.md,
    marginBottom: spacing.xs,
  },

  stats: {
    flexDirection: "row",
    gap: spacing.sm,
  },

  statCard: {
    flex: 1,
    backgroundColor: c.surface,
    borderRadius: radius.md,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: c.border,
  },

  statIcon: {
    fontSize: typography.fontSize.lg,
    color: c.primary,
  },

  statNumber: {
    color: c.text,
    fontSize: typography.fontSize.xl,
    fontWeight: "700",
    marginTop: spacing.sm,
  },

  statLabel: {
    color: c.textSecondary,
    fontSize: typography.fontSize.xs,
    marginTop: spacing.xs / 2,
  },

  card: {
    backgroundColor: c.surface,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: c.border,
    padding: spacing.lg,
    gap: spacing.md,
  },

  statusRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: spacing.sm,
  },

  body: {
    color: c.text,
    fontSize: typography.fontSize.md,
  },

  badge: {
    fontSize: typography.fontSize.xs,
    fontWeight: "600",
    overflow: "hidden",
    borderRadius: radius.full,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
  },

  medicineRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
  },

  medicineIcon: {
    width: 58,
    height: 58,
    backgroundColor: c.primaryLight,
    borderRadius: radius.md,
    alignItems: "center",
    justifyContent: "center",
  },

  pillIcon: {
    fontSize: 26,
  },

  medicineInfo: {
    flex: 1,
  },

  medicineName: {
    color: c.text,
    fontSize: typography.fontSize.sm,
    fontWeight: "700",
  },

  muted: {
    color: c.textSecondary,
    fontSize: typography.fontSize.sm,
    marginTop: spacing.xs,
  },

  expiry: {
    color: c.warning,
    fontSize: typography.fontSize.xs,
    marginTop: spacing.xs,
  },

  divider: {
    height: 1,
    backgroundColor: c.border,
  },

  primaryButton: {
    minHeight: sizes.buttonHeight,
    backgroundColor: c.primary,
    borderRadius: radius.md,
    alignItems: "center",
    justifyContent: "center",
  },

  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: typography.fontSize.sm,
    fontWeight: "700",
  },

  secondaryButton: {
    minHeight: sizes.buttonHeight,
    borderWidth: 1,
    borderColor: c.primary,
    borderRadius: radius.md,
    alignItems: "center",
    justifyContent: "center",
  },

  secondaryButtonText: {
    color: c.primary,
    fontSize: typography.fontSize.sm,
    fontWeight: "600",
  },

  headingSample: {
    color: c.text,
    fontSize: typography.fontSize.xl,
    fontWeight: "700",
  },

  caption: {
    color: c.textSecondary,
    fontSize: typography.fontSize.xs,
    letterSpacing: 0.5,
  },

  colorRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
  },

  swatch: {
    width: 30,
    height: 30,
    borderRadius: radius.sm,
    borderWidth: 1,
    borderColor: c.border,
  },

  hex: {
    color: c.textSecondary,
    fontSize: typography.fontSize.xs,
    marginLeft: "auto",
  },

  footer: {
    textAlign: "center",
    color: c.textSecondary,
    fontSize: typography.fontSize.xs,
    letterSpacing: 1,
    marginTop: spacing.lg,
  },
});

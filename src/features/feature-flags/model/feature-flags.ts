export const FEATURE_FLAGS = ['showProjectsLink'] as const;

export type FeatureFlags = (typeof FEATURE_FLAGS)[number];

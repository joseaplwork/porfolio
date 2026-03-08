import type { FeatureFlagProvider } from './model/feature-flag-provider';
import { FEATURE_FLAGS, type FeatureFlags } from './model/feature-flags';

export { FEATURE_FLAGS };

export type FeatureFlagName = FeatureFlags;
export type FeatureFlagSnapshot = Record<FeatureFlagName, boolean>;
export type { FeatureFlagProvider };

import { FeatureFlags } from './feature-flags';

export interface FeatureFlagProvider {
  init: () => Promise<void>;
  get: (name: FeatureFlags) => boolean;
}

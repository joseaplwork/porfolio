import 'server-only';

import type { FeatureFlagProvider } from '../../contracts';
import { FEATURE_FLAGS } from '../../contracts';
import type { FeatureFlags } from '../../model/feature-flags';

function createDefaultSnapshot(): Record<FeatureFlags, boolean> {
  return FEATURE_FLAGS.reduce(
    (snapshot, featureFlagName) => ({
      ...snapshot,
      [featureFlagName]: false,
    }),
    {} as Record<FeatureFlags, boolean>,
  );
}

function parseSnapshot(rawValue: string): Record<FeatureFlags, boolean> {
  let parsed: Partial<Record<FeatureFlags, unknown>>;

  try {
    parsed = JSON.parse(rawValue) as Partial<Record<FeatureFlags, unknown>>;
  } catch (error) {
    throw new Error(
      `Invalid FEATURE_FLAGS_STATIC_JSON value: ${(error as Error).message}`,
    );
  }

  return FEATURE_FLAGS.reduce(
    (snapshot, featureFlagName) => ({
      ...snapshot,
      [featureFlagName]: parsed[featureFlagName] === true,
    }),
    {} as Record<FeatureFlags, boolean>,
  );
}

export default class StaticProvider implements FeatureFlagProvider {
  private featureFlags: Record<FeatureFlags, boolean> = createDefaultSnapshot();

  async init() {
    const rawValue = process.env.FEATURE_FLAGS_STATIC_JSON;
    if (rawValue) {
      this.featureFlags = parseSnapshot(rawValue);
    }
  }

  get(name: FeatureFlags): boolean {
    return this.featureFlags[name];
  }
}

import 'server-only';

import type { FeatureFlagName, FeatureFlagProvider, FeatureFlagSnapshot } from '../contracts';
import { FEATURE_FLAGS } from '../contracts';

import { HypertuneProvider } from './providers/hypertune-provider';
import JsonSiloProvider from './providers/jsonsilo-provider';
import StaticProvider from './providers/static-provider';

class FeatureFlag {
  private isInitialized = false;

  constructor(private readonly provider: FeatureFlagProvider) {}

  async init() {
    await this.provider.init();
    this.isInitialized = true;
  }

  get(name: FeatureFlagName): boolean {
    if (!this.isInitialized) {
      throw new Error('Feature flag provider has not been initialized');
    }

    return this.provider.get(name);
  }

  getAll(): FeatureFlagSnapshot {
    return FEATURE_FLAGS.reduce(
      (snapshot, featureFlagName) => ({
        ...snapshot,
        [featureFlagName]: this.get(featureFlagName),
      }),
      {} as FeatureFlagSnapshot,
    );
  }
}

function getProvider(): FeatureFlagProvider {
  if (process.env.FEATURE_FLAGS_PROVIDER === 'static') {
    return new StaticProvider();
  }

  if (process.env.FEATURE_FLAGS_PROVIDER === 'jsonsilo') {
    return new JsonSiloProvider();
  }

  return new HypertuneProvider();
}

export const featureFlags = new FeatureFlag(getProvider());

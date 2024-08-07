// eslint-disable-next-line camelcase
import { unstable_noStore } from 'next/cache';

import { FeatureFlagProvider, FeatureFlags } from '@/shared/interfaces';

export default class JsonSiloProvider implements FeatureFlagProvider {
  featureFlags: Record<FeatureFlags, boolean> | undefined;

  async init() {
    unstable_noStore();
    const response = await fetch(process.env.FEATURE_FLAG_SOURCE!, {
      headers: { 'Content-Type': 'application/json', cache: 'no-store' },
    });

    this.featureFlags = await response.json();
  }

  get(name: FeatureFlags): boolean {
    if (typeof this.featureFlags === 'undefined') {
      throw new Error('provider JsonSiloProvider was not initialized');
    }

    return this.featureFlags[name];
  }
}

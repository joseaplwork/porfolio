import { unstable_noStore as noStore } from 'next/cache';
import 'server-only';

import { getRequiredEnv } from '@/shared/config/env.server';

import type { FeatureFlagProvider } from '../../contracts';
import type { FeatureFlags } from '../../model/feature-flags';

export default class JsonSiloProvider implements FeatureFlagProvider {
  featureFlags: Record<FeatureFlags, boolean> | undefined;

  async init() {
    noStore();

    const response = await fetch(getRequiredEnv('FEATURE_FLAG_SOURCE'), {
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

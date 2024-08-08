import { FeatureFlagProvider, FeatureFlags } from '@/shared/interfaces';
import { HypertuneProvider } from '@/shared/lib/feature-flag-providers/hypertune-provider';

class FeatureFlagService {
  isInitialized = false;

  constructor(private _provider: FeatureFlagProvider) {}

  async init() {
    await this._provider.init();

    this.isInitialized = true;
  }

  get(name: FeatureFlags): boolean {
    if (!this.isInitialized) {
      throw new Error('Feature flag provider has not been initialized');
    }

    return this._provider.get(name);
  }

  getAll(): Record<FeatureFlags, boolean> {
    return {
      showProjectsLink: this._provider.get('showProjectsLink'),
    };
  }
}

export default new FeatureFlagService(new HypertuneProvider());

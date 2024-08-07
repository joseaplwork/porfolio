import { FeatureFlagProvider, FeatureFlags } from '@/shared/interfaces';

import {
  Root,
  RootNode,
  initHypertune,
} from '../auto-generated/generated-hypertune';

export default class HypertuneProvider implements FeatureFlagProvider {
  rootNode: RootNode | undefined;

  async init() {
    const hypertune = initHypertune({
      token: process.env.NEXT_PUBLIC_HYPERTUNE_TOKEN!,
    });

    await hypertune.initIfNeeded();

    this.rootNode = hypertune.root({
      args: {
        context: {
          environment: process.env.NODE_ENV.toUpperCase() as any,
          user: {
            id: '1',
            name: 'Jose Paredes Leon',
            email: 'joseaplwork@gmail.com',
          },
        },
      },
    });
  }

  get(name: FeatureFlags): boolean {
    if (!this.rootNode) {
      throw new Error('provider HypertuneProvider was not initialized');
    }

    const node = this.rootNode.get();

    return node[name as keyof Root];
  }
}

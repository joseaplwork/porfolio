import 'server-only';
import { createClient } from '@vercel/edge-config';
import { VercelEdgeConfigInitDataProvider } from 'hypertune';
import { unstable_noStore as noStore } from 'next/cache';

import { getRequiredEnv } from '@/shared/config/env.server';
import {
  Root,
  RootNode,
  createSource,
} from '@/shared/lib/hypertune-auto-generated/hypertune';
import { getVercelOverride } from '@/shared/lib/hypertune-auto-generated/hypertune.vercel';

import type { FeatureFlagProvider } from '../../contracts';
import type { FeatureFlags } from '../../model/feature-flags';

let hypertuneSource: ReturnType<typeof createSource> | null = null;

function getHypertuneSource() {
  if (!hypertuneSource) {
    hypertuneSource = createSource({
      token: getRequiredEnv('NEXT_PUBLIC_HYPERTUNE_TOKEN'),
      initDataProvider:
        process.env.EDGE_CONFIG && process.env.EDGE_CONFIG_HYPERTUNE_ITEM_KEY
          ? new VercelEdgeConfigInitDataProvider({
              edgeConfigClient: createClient(process.env.EDGE_CONFIG),
              itemKey: process.env.EDGE_CONFIG_HYPERTUNE_ITEM_KEY,
            })
          : undefined,
    });
  }

  return hypertuneSource;
}

export default async function getHypertune() {
  const hypertune = getHypertuneSource();

  noStore();
  await hypertune.initIfNeeded();

  hypertune.setOverride(await getVercelOverride());

  return hypertune.root({
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

export class HypertuneProvider implements FeatureFlagProvider {
  rootNode: RootNode | undefined;

  async init() {
    this.rootNode = await getHypertune();
  }

  get(name: FeatureFlags): boolean {
    if (!this.rootNode) {
      throw new Error('provider HypertuneProvider was not initialized');
    }

    const node = this.rootNode.get();

    return node[name as keyof Root];
  }
}

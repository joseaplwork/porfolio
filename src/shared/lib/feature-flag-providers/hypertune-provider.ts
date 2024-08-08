import { createClient } from '@vercel/edge-config';
import { VercelEdgeConfigInitDataProvider } from 'hypertune';
import { unstable_noStore as noStore } from 'next/cache';
import { ReadonlyHeaders } from 'next/dist/server/web/spec-extension/adapters/headers';
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';
import 'server-only';

import { FeatureFlagProvider, FeatureFlags } from '@/shared/interfaces';

import {
  Root,
  RootNode,
  createSource,
} from '../hypertune-auto-generated/hypertune';
import { getVercelOverride } from '../hypertune-auto-generated/hypertune.vercel';

const hypertune = createSource({
  token: process.env.NEXT_PUBLIC_HYPERTUNE_TOKEN!,
  initDataProvider:
    process.env.EDGE_CONFIG && process.env.EDGE_CONFIG_HYPERTUNE_ITEM_KEY
      ? new VercelEdgeConfigInitDataProvider({
          edgeConfigClient: createClient(process.env.EDGE_CONFIG),
          itemKey: process.env.EDGE_CONFIG_HYPERTUNE_ITEM_KEY,
        })
      : undefined,
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default async function getHypertune(params?: {
  headers?: ReadonlyHeaders;
  cookies?: ReadonlyRequestCookies;
}) {
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

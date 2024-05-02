import { Root } from '@/lib/feature-flag-providers/generated-hypertune';
import hypertune from '@/lib/feature-flag-providers/hypertune';

export default async function getFeatureFlags(): Promise<
  Record<keyof Root, boolean>
> {
  await hypertune.initIfNeeded();

  const rootNode = hypertune.root({
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

  return {
    showProjectsLink: rootNode.showProjectsLink({ fallback: false }),
  };
}

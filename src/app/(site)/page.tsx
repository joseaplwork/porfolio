import { featureFlags } from '@/features/feature-flags';
import { PersonalIntroduction } from '@/features/profile';

export default async function HomePage() {
  await featureFlags.init();

  return (
    <main className="flex items-center justify-center h-[100dvh] lg:justify-start">
      <PersonalIntroduction
        shouldShowProjectsLink={featureFlags.get('showProjectsLink')}
      />
    </main>
  );
}

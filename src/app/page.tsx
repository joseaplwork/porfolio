import featureFlagsService from '@/shared/services/feature-flag/feature-flags.service';

import PersonalIntroduction from './ui/personal-introduction';

export default async function Home() {
  await featureFlagsService.init();

  return (
    <main className="flex items-center justify-center h-[100dvh] lg:justify-start">
      <PersonalIntroduction
        shouldShowProjectsLink={featureFlagsService.get('showProjectsLink')}
      />
    </main>
  );
}

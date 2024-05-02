import getFeatureFlags from '@/service/feature-flag/feature-flags.service';

import PersonalIntroduction from './ui/personal-introduction';

export default async function Home() {
  const { showProjectsLink } = await getFeatureFlags();

  return (
    <main className="flex items-center justify-center h-[100dvh] lg:justify-start">
      <PersonalIntroduction shouldShowProjectsLink={showProjectsLink} />
    </main>
  );
}

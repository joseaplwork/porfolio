import { VT323 } from 'next/font/google';

import PersonalLinks from './personal-links';
import SocialLinks from './social-links.component';

import './personal-introduction.css';

const vt323 = VT323({ weight: ['400'], subsets: ['latin'] });

interface Props {
  shouldShowProjectsLink: boolean;
}

export default function PersonalIntroduction({
  shouldShowProjectsLink,
}: Props) {
  return (
    <section className="p-7 lg:pl-40 dark:text-stale-50">
      <div
        aria-label="Hi! I'm Jose Paredes"
        className={`typewrite ${vt323.className} text-4xl md:text-6xl mb-5`}
      />
      <p>I&apos;m a Full Stack developer specialized in Front-end.</p>
      <p className="mb-2">
        I love creating innovative solutions and pushing the boundaries of
        technology.
      </p>
      <PersonalLinks shouldShowProjectsLink={shouldShowProjectsLink} />
      <SocialLinks />
    </section>
  );
}

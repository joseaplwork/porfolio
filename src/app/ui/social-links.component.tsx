import Link from 'next/link';

import IconCodePen from './icon-codepen';
import IconGithub from './icon-github';
import IconLinkedin from './icon-linkedin';
import IconStackOverflow from './icon-stackoverflow';

export default function SocialLinks() {
  const {
    SOCIAL_LINK_LINKEDIN,
    SOCIAL_LINK_STACKOVERFLOW,
    SOCIAL_LINK_GITHUB,
    SOCIAL_LINK_CODEPEN,
  } = process.env;

  const socialLinks = [
    { label: 'linkedin', href: SOCIAL_LINK_LINKEDIN, Icon: IconLinkedin },
    { label: 'github', href: SOCIAL_LINK_GITHUB, Icon: IconGithub },
    {
      label: 'stackoverflow',
      href: SOCIAL_LINK_STACKOVERFLOW,
      Icon: IconStackOverflow,
    },
    { label: 'codepen', href: SOCIAL_LINK_CODEPEN, Icon: IconCodePen },
  ];

  return (
    <div className="flex gap-3">
      {socialLinks.map((link) => (
        <Link
          key={link.label}
          href={link.href || '/'}
          target="_blank"
          rel="noreferrer"
          aria-label={link.label}
        >
          <link.Icon />
        </Link>
      ))}
    </div>
  );
}

import Link from 'next/link';

interface Props {
  shouldShowProjectsLink: boolean;
}

export default async function PersonalLinks({ shouldShowProjectsLink }: Props) {
  return (
    <p>
      {shouldShowProjectsLink && (
        <Link
          className="underline font-bold inline-block mb-5 text-l mr-5"
          href="projects"
        >
          See projects
        </Link>
      )}
      <Link
        className="underline font-bold inline-block mb-5 text-l"
        href={process.env.CV_LINK || '/'}
        target="_blank"
        rel="noreferrer"
      >
        Download CV
      </Link>
    </p>
  );
}

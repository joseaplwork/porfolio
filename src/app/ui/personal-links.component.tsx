import Link from 'next/link';

export default function PersonalLinks() {
  return (
    <p>
      <Link
        className="underline font-bold inline-block mb-5 text-l mr-5"
        href="projects"
      >
        See projects
      </Link>
      <Link
        className="underline font-bold inline-block mb-5 text-l"
        href={process.env.CV_LINK || ''}
        target="_blank"
        rel="noreferrer"
      >
        Download CV
      </Link>
    </p>
  );
}

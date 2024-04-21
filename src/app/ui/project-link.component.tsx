import Link from 'next/link';

export default function ProjectsLink() {
  return (
    <Link
      className="underline font-bold inline-block mb-5 text-l"
      href="projects"
    >
      See my projects
    </Link>
  );
}

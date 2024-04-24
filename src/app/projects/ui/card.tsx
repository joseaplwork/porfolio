import Link from 'next/link';

import Chip from './chip';

interface Props {
  title: string;
  description: string;
  demoLink?: string;
  codeLink: string;
  tags: string[];
}

export default function Card({
  title,
  description,
  demoLink,
  codeLink,
  tags,
}: Props) {
  return (
    <div className="flex flex-col gap-4 p-4 bg-white dark:bg-black dark:bg-opacity-15 bg-opacity-20 rounded-2xl shadow-xl backdrop-filter backdrop-blur-sm border-[0.5px] border-white	border-opacity-40 dark:border-black dark:border-opacity-15">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-sm flex-1 text-secondary-color">
        <span className="inline-block">{description}</span>
        <br />
        <span className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <Chip key={tag} text={tag} />
          ))}
        </span>
      </p>
      <div className="flex gap-5">
        {demoLink && (
          <Link
            href={demoLink}
            className="btn btn-primary underline"
            target="_blank"
          >
            Demo
          </Link>
        )}
        <Link
          href={codeLink}
          className="btn btn-secondary underline"
          target="_blank"
        >
          Code
        </Link>
      </div>
    </div>
  );
}

Card.defaultProps = {
  demoLink: null,
};

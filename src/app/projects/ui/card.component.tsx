import Link from 'next/link';

interface Props {
  title: string;
  description: string;
  demoLink?: string;
  codeLink: string;
}

export default function Card({
  title,
  description,
  demoLink,
  codeLink,
}: Props) {
  return (
    <div className="flex flex-col gap-4 p-4 bg-white dark:bg-black dark:bg-opacity-15 bg-opacity-20 rounded-2xl shadow-2xl backdrop-filter backdrop-blur-sm border-[0.5px] border-white	border-opacity-40 dark:border-black dark:border-opacity-15">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-sm text-secondary-color">{description}</p>
      <div className="flex gap-5">
        {demoLink && (
          <Link href={demoLink} className="btn btn-primary underline">
            Demo
          </Link>
        )}
        <Link href={codeLink} className="btn btn-secondary underline">
          Code
        </Link>
      </div>
    </div>
  );
}

Card.defaultProps = {
  demoLink: null,
};

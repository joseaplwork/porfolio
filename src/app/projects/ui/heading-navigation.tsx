import Link from 'next/link';

import IconBack from './icon-back';

export default function HeadingNavigation() {
  return (
    <div className="flex gap-5 items-center justify-center">
      <Link href="/">
        <IconBack size={35} />
      </Link>
      <h1 className="text-center text-4xl my-10">Projects</h1>
    </div>
  );
}

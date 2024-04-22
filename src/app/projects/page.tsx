import Link from 'next/link';

import Card from './ui/card.component';
import IconBack from './ui/icon-back.component';

export default function Portfolio() {
  return (
    <main className="flex h-[100dvh] lg:items-center justify-center">
      <div className='lg:container mx-auto px-8 py-6"'>
        <div className="flex gap-5 items-center justify-center">
          <Link href="/">
            <IconBack size={35} />
          </Link>
          <h1 className="text-center text-4xl my-10">Projects</h1>
        </div>
        <div className="grid justify-between items-center pb-10 gap-10 lg:grid-cols-3">
          <Card
            title="My title"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, ab? Nesciunt atque perspiciatis et eius repellat quia laboriosam odit natus nostrum reiciendis quae saepe, dicta in eum provident ipsum libero?"
            demoLink="https://example.com"
            codeLink="https://example.com"
          />
          <Card
            title="My title"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, ab? Nesciunt atque perspiciatis et eius repellat quia laboriosam odit natus nostrum reiciendis quae saepe, dicta in eum provident ipsum libero?"
            demoLink="https://example.com"
            codeLink="https://example.com"
          />
          <Card
            title="My title"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, ab? Nesciunt atque perspiciatis et eius repellat quia laboriosam odit natus nostrum reiciendis quae saepe, dicta in eum provident ipsum libero?"
            demoLink="https://example.com"
            codeLink="https://example.com"
          />
          <Card
            title="My title"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, ab? Nesciunt atque perspiciatis et eius repellat quia laboriosam odit natus nostrum reiciendis quae saepe, dicta in eum provident ipsum libero?"
            demoLink="https://example.com"
            codeLink="https://example.com"
          />
          <Card
            title="My title"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, ab? Nesciunt atque perspiciatis et eius repellat quia laboriosam odit natus nostrum reiciendis quae saepe, dicta in eum provident ipsum libero?"
            demoLink="https://example.com"
            codeLink="https://example.com"
          />
          <Card
            title="My title"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, ab? Nesciunt atque perspiciatis et eius repellat quia laboriosam odit natus nostrum reiciendis quae saepe, dicta in eum provident ipsum libero?"
            demoLink="https://example.com"
            codeLink="https://example.com"
          />
        </div>
      </div>
    </main>
  );
}

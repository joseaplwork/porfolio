import { Projects } from '../model/projects.model';

import Card from './card.component';

interface Props {
  projects: Projects[];
}

export default function ProjectList({ projects }: Props) {
  return (
    <div className="w-full grid justify-between items-stretch pb-10 gap-10 grid-cols-1 lg:grid-cols-3">
      {projects.map((project) => (
        <Card
          key={project.name}
          title={project.name}
          description={project.description}
          demoLink={project.demoLink}
          codeLink={project.sourceLink}
          tags={project.tags}
        />
      ))}
    </div>
  );
}

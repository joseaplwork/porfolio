import fetchProjects from '../server/fetch-projects';

import HeadingNavigation from './heading-navigation';
import ProjectList from './project-list';

export default async function ProjectsPage() {
  const projects = await fetchProjects();

  return (
    <>
      <HeadingNavigation />
      <ProjectList projects={projects} />
    </>
  );
}

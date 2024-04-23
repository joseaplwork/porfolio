import fetchProjects from './lib/fetch-projects';
import HeadingNavigation from './ui/heading-navigation';
import ProjectList from './ui/project-list';

export default async function Portfolio() {
  const projects = await fetchProjects();

  return (
    <>
      <HeadingNavigation />
      <ProjectList projects={projects} />
    </>
  );
}

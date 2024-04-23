import fetchProjects from './lib/fetch-projects.lib';
import HeadingNavigation from './ui/heading-navigation.component';
import ProjectList from './ui/project-list.component';

export default async function Portfolio() {
  const projects = await fetchProjects();

  return (
    <>
      <HeadingNavigation />
      <ProjectList projects={projects} />
    </>
  );
}

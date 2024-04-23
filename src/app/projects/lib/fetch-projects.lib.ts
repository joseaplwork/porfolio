import { ProjectsResponse } from '../interfaces/projects-response.interface';
import { Projects } from '../model/projects.model';

export default async function fetchProjects(): Promise<Projects[]> {
  const projectsSource = process.env.PROJECTS_SOURCE;

  if (!projectsSource) {
    throw new Error('PROJECTS_SOURCE environment variable is not defined.');
  }

  const resp = await fetch(projectsSource);
  const { projects }: ProjectsResponse = await resp.json();

  return projects;
}

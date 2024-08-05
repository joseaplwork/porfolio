// eslint-disable-next-line camelcase
import { unstable_noStore } from 'next/cache';

import { ProjectsResponse } from '../interfaces/projects-response';
import { Projects } from '../model/projects';

export default async function fetchProjects(): Promise<Projects[]> {
  unstable_noStore();
  const projectsSource = process.env.PROJECTS_SOURCE;

  if (!projectsSource) {
    throw new Error('PROJECTS_SOURCE environment variable is not defined.');
  }

  const response = await fetch(projectsSource, {
    headers: { 'Content-Type': 'application/json', cache: 'no-store' },
  });
  const { projects }: ProjectsResponse = await response.json();

  return projects;
}

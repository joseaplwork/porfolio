import type { Project, ProjectsResponse } from '../contracts';

function isProject(value: unknown): value is Project {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const project = value as Project;

  return (
    typeof project.name === 'string' &&
    typeof project.description === 'string' &&
    typeof project.sourceLink === 'string' &&
    Array.isArray(project.tags) &&
    project.tags.every((tag) => typeof tag === 'string') &&
    (typeof project.demoLink === 'undefined' ||
      typeof project.demoLink === 'string')
  );
}

export function isProjectsResponse(value: unknown): value is ProjectsResponse {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const payload = value as ProjectsResponse;

  return Array.isArray(payload.projects) && payload.projects.every(isProject);
}

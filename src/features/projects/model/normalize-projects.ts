import type { Project } from '../contracts';

export function normalizeProjects(projects: Project[]): Project[] {
  return projects
    .map((project) => ({
      ...project,
      name: project.name.trim(),
      description: project.description.trim(),
      tags: project.tags.map((tag) => tag.trim()),
      demoLink: project.demoLink?.trim(),
      sourceLink: project.sourceLink.trim(),
    }))
    .filter((project) => project.name.length > 0);
}

import type { Project } from '@/entities/project';

export type { Project };

export interface ProjectsResponse {
  projects: Project[];
}

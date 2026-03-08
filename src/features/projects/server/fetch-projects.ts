import { unstable_noStore as noStore } from 'next/cache';
import 'server-only';

import { getRequiredEnv } from '@/shared/config/env.server';

import type { Project } from '../contracts';
import { isProjectsResponse } from '../model/guards';
import { normalizeProjects } from '../model/normalize-projects';

export default async function fetchProjects(): Promise<Project[]> {
  noStore();

  const projectsSource = getRequiredEnv('PROJECTS_SOURCE');
  const response = await fetch(projectsSource, {
    headers: { 'Content-Type': 'application/json', cache: 'no-store' },
  });

  if (!response.ok) {
    throw new Error(`Projects source request failed with status ${response.status}.`);
  }

  const payload: unknown = await response.json();

  if (!isProjectsResponse(payload)) {
    throw new Error('Invalid projects payload shape.');
  }

  return normalizeProjects(payload.projects);
}

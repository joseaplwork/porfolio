export type EnrollmentStatus = 'active' | 'completed' | 'dropped';

export interface Enrollment {
  userId: string;
  courseId: string;
  status: EnrollmentStatus;
}

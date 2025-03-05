
export interface User {
  id: number;
  name: string;
  email: string;
  role: 'teacher' | 'student' | 'admin';
  courses: number[];
  department?: string;
  enrollmentDate?: string;
}

export interface Course {
  id: number;
  title: string;
  description: string;
  instructor: string;
  students: number[];
  department: string;
  credits: number;
  duration: string;
}

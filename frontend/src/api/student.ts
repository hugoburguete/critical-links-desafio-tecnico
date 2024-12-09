import { Student } from '../types/Student';

/**
 * Retrieves students from the API service.
 */
export const getStudents = async () => {
  // using fetch for the sake of simplicity.
  const response = await fetch('http://localhost:3000/student');
  const students: Student[] = (await response.json()) || [];

  return students;
};

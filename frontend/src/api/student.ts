import { Student } from '../types/Student';

/**
 * Creates a new student resource.
 */
export const createStudent = async (student: Student) => {
  // using fetch for the sake of simplicity.
  const response = await fetch('http://localhost:3000/student', {
    method: 'POST',
    body: JSON.stringify(student),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  const students: Student[] = (await response.json()) || [];

  return students;
};

/**
 * Retrieves students from the API service.
 */
export const getStudents = async () => {
  // using fetch for the sake of simplicity.
  const response = await fetch('http://localhost:3000/student');
  const students: Student[] = (await response.json()) || [];

  return students;
};

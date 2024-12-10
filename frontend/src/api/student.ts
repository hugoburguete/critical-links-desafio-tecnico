import { Student } from '../types/Student';
import { API_URL } from './common';

/**
 * Creates a new student resource.
 */
export const createStudent = async (student: Student) => {
  // using fetch for the sake of simplicity.
  await fetch(`${API_URL}/student`, {
    method: 'POST',
    body: JSON.stringify(student),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};

/**
 * Retrieves students from the API service.
 */
export const getStudents = async () => {
  // using fetch for the sake of simplicity.
  const response = await fetch(`${API_URL}/student`);
  const students: Student[] = (await response.json()) || [];

  return students;
};

/**
 * Updates a student resource.
 */
export const updateStudent = async (student: Student) => {
  await fetch(`${API_URL}/student/${student._id}`, {
    method: 'PATCH',
    body: JSON.stringify(student),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};

/**
 * Delete a student resource.
 */
export const deleteStudent = async (studentId: string) => {
  // using fetch for the sake of simplicity.
  await fetch(`${API_URL}/student/${studentId}`, {
    method: 'DELETE',
  });
};

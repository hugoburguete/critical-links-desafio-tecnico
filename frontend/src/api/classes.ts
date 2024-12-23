import { SchoolClass } from '../types/Class';
import { API_URL } from './common';

/**
 * Creates a new class resource.
 */
export const createClass = async (SchoolClass: SchoolClass) => {
  // using fetch for the sake of simplicity.
  const response = await fetch(`${API_URL}/school-class`, {
    method: 'POST',
    body: JSON.stringify(SchoolClass),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  return await response.json();
};

/**
 * Retrieves classes from the API service.
 */
export const getClasses = async (): Promise<SchoolClass[]> => {
  // using fetch for the sake of simplicity.
  const response = await fetch(`${API_URL}/school-class`);
  const classes: SchoolClass[] = (await response.json()) || [];

  return classes;
};

/**
 * Updates a class resource.
 */
export const updateClass = async (schoolClass: SchoolClass) => {
  const response = await fetch(`${API_URL}/school-class/${schoolClass._id}`, {
    method: 'PATCH',
    body: JSON.stringify(schoolClass),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  return await response.json();
};

/**
 * Delete a class resource.
 */
export const deleteClass = async (classId: string) => {
  // using fetch for the sake of simplicity.
  const response = await fetch(`${API_URL}/school-class/${classId}`, {
    method: 'DELETE',
  });

  return await response.json();
};

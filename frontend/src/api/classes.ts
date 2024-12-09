import { SchoolClass } from '../types/Class';

/**
 * Retrieves classes from the API service.
 */
export const getClasses = async (): Promise<SchoolClass[]> => {
  // using fetch for the sake of simplicity.
  const response = await fetch('http://localhost:3000/school-class');
  const classes: SchoolClass[] = (await response.json()) || [];

  return classes;
};

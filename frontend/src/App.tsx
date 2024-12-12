import { useEffect, useState } from 'react';
import {
  createClass,
  deleteClass,
  getClasses,
  updateClass,
} from './api/classes';
import {
  createStudent,
  deleteStudent,
  getStudents,
  updateStudent,
} from './api/student';
import ClassFormModal from './components/ClassFormModal';
import { SubmitClassEvent } from './components/ClassFormModal/ClassFormModal';
import DeleteModal from './components/DeleteModal';
import Header from './components/Header';
import ManageClassModal from './components/ManageClassModal';
import StudentFormModal from './components/StudentFormModal';
import { SubmitStudentEvent } from './components/StudentFormModal/StudentFormModal';
import StudentList from './components/StudentList';
import { SchoolClass } from './types/Class';
import { Student } from './types/Student';

/**
 * Application entry point.
 */
function App() {
  const [students, setStudents] = useState<Student[]>([]);
  const [schoolClasses, setSchoolClasses] = useState<SchoolClass[]>([]);
  const [isStudentFormModalOpen, setIsStudentFormModalOpen] =
    useState<boolean>(false);
  const [studentToUpdate, setStudentToUpdate] = useState<Student | null>(null);
  const [studentToDelete, setStudentToDelete] = useState<Student | null>(null);
  const [isClassFormModalOpen, setIsClassFormModalOpen] =
    useState<boolean>(false);
  const [classToUpdate, setClassToUpdate] = useState<SchoolClass | null>(null);
  const [classToDelete, setClassToDelete] = useState<SchoolClass | null>(null);
  const [isManageClassModalOpen, setIsManageClassModalOpen] =
    useState<boolean>(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);

  const loadData = async () => {
    const students = await getStudents();
    setStudents(students);

    const classes = await getClasses();
    setSchoolClasses(classes);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleStudentSubmit: SubmitStudentEvent = async (student: Student) => {
    if (studentToUpdate) {
      await updateStudent(student);
    } else {
      await createStudent(student);
    }
    setIsStudentFormModalOpen(false);
    loadData();
  };

  const handleEditStudentBtnClick = async (student: Student) => {
    setStudentToUpdate(student);
    setIsStudentFormModalOpen(true);
  };

  const handleRemoveStudentBtnClick = async (student: Student) => {
    setStudentToDelete(student);
    setIsDeleteModalOpen(true);
  };

  const handleClassSubmit: SubmitClassEvent = async (
    schoolClass: SchoolClass,
  ) => {
    if (classToUpdate) {
      await updateClass(schoolClass);
    } else {
      await createClass(schoolClass);
    }
    setIsClassFormModalOpen(false);
    loadData();
  };

  const handleDelete = async () => {
    if (classToDelete?._id) {
      await deleteClass(classToDelete._id);
    }
    if (studentToDelete?._id) {
      await deleteStudent(studentToDelete._id);
    }

    loadData();
    setIsDeleteModalOpen(false);
  };

  return (
    <div className="p-7 lg:py-4 lg:px-10 bg-verylightgrey min-h-screen">
      <Header
        schoolClasses={schoolClasses}
        onCreateClassClick={() => setIsClassFormModalOpen(true)}
        onCreateStudentClick={() => setIsStudentFormModalOpen(true)}
        onManageClassClick={() => setIsManageClassModalOpen(true)}
      />

      <StudentList
        students={students}
        onEditClick={handleEditStudentBtnClick}
        onRemoveClick={handleRemoveStudentBtnClick}
      />

      <StudentFormModal
        schoolClasses={schoolClasses}
        title="Create student"
        student={studentToUpdate}
        isOpen={isStudentFormModalOpen}
        onSubmitStudent={handleStudentSubmit}
        onClose={() => {
          setStudentToUpdate(null);
          setIsStudentFormModalOpen(false);
        }}
      />

      <ManageClassModal
        title="Manage classes"
        classes={schoolClasses}
        isOpen={isManageClassModalOpen}
        onEditClick={(schoolClass: SchoolClass) => {
          setClassToUpdate(schoolClass);
          setIsClassFormModalOpen(true);
        }}
        onRemoveClick={(schoolClass: SchoolClass) => {
          setClassToDelete(schoolClass);
          setIsDeleteModalOpen(true);
        }}
        onClose={() => {
          setClassToDelete(null);
          setClassToUpdate(null);
          setIsManageClassModalOpen(false);
        }}
      />

      <ClassFormModal
        title="Create class"
        schoolClass={classToUpdate}
        isOpen={isClassFormModalOpen}
        onSubmitClass={handleClassSubmit}
        onClose={() => {
          setClassToUpdate(null);
          setIsClassFormModalOpen(false);
        }}
      />

      <DeleteModal
        title="Are you sure you want to delete?"
        isOpen={isDeleteModalOpen}
        onClose={() => {
          setClassToDelete(null);
          setStudentToDelete(null);
          setIsDeleteModalOpen(false);
        }}
        onConfirm={handleDelete}
      />
    </div>
  );
}

export default App;

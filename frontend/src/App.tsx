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
import ClickableIcon from './components/ClickableIcon';
import { IconSize, IconType } from './components/ClickableIcon/ClickableIcon';
import DeleteModal from './components/DeleteModal';
import Header from './components/Header';
import ProfileModal from './components/ProfileModal';
import SchoolClassesList from './components/SchoolClassesList';
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
  const [isStudentProfileModalOpen, setIsStudentProfileModalOpen] =
    useState<boolean>(false);
  const [studentToUpdate, setStudentToUpdate] = useState<Student | null>(null);
  const [studentToDelete, setStudentToDelete] = useState<Student | null>(null);
  const [isClassFormModalOpen, setIsClassFormModalOpen] =
    useState<boolean>(false);
  const [classToUpdate, setClassToUpdate] = useState<SchoolClass | null>(null);
  const [classToDelete, setClassToDelete] = useState<SchoolClass | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [errs, setErrs] = useState<string[]>([]);

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
    let response;

    if (studentToUpdate) {
      response = await updateStudent(student);
    } else {
      response = await createStudent(student);
    }
    if (response?.error) {
      setErrs(response?.message);
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

  const handleViewProfileClick = async (student: Student) => {
    setStudentToUpdate(student);
    setIsStudentProfileModalOpen(true);
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
    <div className="bg-light-blue min-h-screen pt-16">
      <Header
        schoolClasses={schoolClasses}
        onCreateClassClick={() => setIsClassFormModalOpen(true)}
        onCreateStudentClick={() => setIsStudentFormModalOpen(true)}
      />

      <div className="max-w-screen-xl m-auto p-4 lg:py-4 lg:px-10">
        {!!errs.length && (
          <div className="bg-red-400 text-white rounded-lg p-3 mb-3 flex justify-between">
            {errs.map((err) => {
              return <p>{err}</p>;
            })}

            <ClickableIcon
              iconType={IconType.Close}
              size={IconSize.Small}
              onClick={() => setErrs([])}
            />
          </div>
        )}

        <StudentList
          students={students}
          onEditClick={handleEditStudentBtnClick}
          onRemoveClick={handleRemoveStudentBtnClick}
          onViewProfileClick={handleViewProfileClick}
        />

        <SchoolClassesList
          classes={schoolClasses}
          onEditClick={(schoolClass: SchoolClass) => {
            setClassToUpdate(schoolClass);
            setIsClassFormModalOpen(true);
          }}
          onRemoveClick={(schoolClass: SchoolClass) => {
            setClassToDelete(schoolClass);
            setIsDeleteModalOpen(true);
          }}
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

        {studentToUpdate && (
          <ProfileModal
            title={`Student #${studentToUpdate.studentNum}`}
            student={studentToUpdate}
            classes={schoolClasses}
            isOpen={isStudentProfileModalOpen}
            onClose={() => {
              setStudentToUpdate(null);
              setIsStudentProfileModalOpen(false);
            }}
          />
        )}

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
    </div>
  );
}

export default App;

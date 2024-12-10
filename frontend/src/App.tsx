import { useEffect, useState } from 'react';
import {
  createStudent,
  deleteStudent,
  getStudents,
  updateStudent,
} from './api/student';
import Button from './components/Button';
import StudentCard from './components/StudentCard';
import { Student } from './types/Student';
import H1 from './typography/H1';
import StudentFormModal from './components/StudentFormModal';
import { SchoolClass } from './types/Class';
import { createClass, getClasses, updateClass } from './api/classes';
import { SubmitStudentEvent } from './components/StudentFormModal/StudentFormModal';
import ClassFormModal from './components/ClassFormModal';
import { SubmitClassEvent } from './components/ClassFormModal/ClassFormModal';

function App() {
  const [students, setStudents] = useState<Student[]>([]);
  const [schoolClasses, setSchoolClasses] = useState<SchoolClass[]>([]);
  const [isStudentFormModalOpen, setIsStudentFormModalOpen] =
    useState<boolean>(false);
  const [studentToUpdate, setStudentToUpdate] = useState<Student | null>(null);
  const [isClassFormModalOpen, setIsClassFormModalOpen] =
    useState<boolean>(false);
  const [classToUpdate, setClassToUpdate] = useState<SchoolClass | null>(null);

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
      // TODO: Fix cors issue for PATCH requests.
      await updateStudent(student);
    } else {
      await createStudent(student);
    }
    setIsStudentFormModalOpen(false);
    loadData();
  };

  const handleRemoveStudentBtnClick = async (student: Student) => {
    if (student._id) {
      await deleteStudent(student._id);
    }

    // TODO: Fix cors issue for DELETE requests...
    loadData();
  };

  const handleEditStudentBtnClick = async (student: Student) => {
    setStudentToUpdate(student);
    setIsStudentFormModalOpen(true);
  };

  const handleClassSubmit: SubmitClassEvent = async (
    schoolClass: SchoolClass,
  ) => {
    if (classToUpdate) {
      // TODO: Fix cors issue for PATCH requests.
      await updateClass(schoolClass);
    } else {
      await createClass(schoolClass);
    }
    setIsClassFormModalOpen(false);
    loadData();
  };

  // FIXME: paddings not 100% accurate
  return (
    <div className="py-4 px-10">
      <div className="flex justify-between items-center w-full mb-[34px]">
        <H1>Student Manager</H1>

        <div className="flex gap-[14px]">
          <Button onClick={() => setIsStudentFormModalOpen(true)}>
            Create student
          </Button>
          <Button onClick={() => setIsClassFormModalOpen(true)}>
            Create class
          </Button>
          <Button>Manage classes</Button>
        </div>
      </div>
      <div className="flex flex-wrap gap-[45px]">
        {students.map((student) => {
          return (
            <StudentCard
              key={student._id}
              student={student}
              onEditClick={handleEditStudentBtnClick}
              onRemoveClick={handleRemoveStudentBtnClick}
            />
          );
        })}
      </div>

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
    </div>
  );
}

export default App;

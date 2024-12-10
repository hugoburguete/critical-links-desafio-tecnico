import { useEffect, useState } from 'react';
import { createStudent, getStudents } from './api/student';
import Button from './components/Button';
import StudentCard from './components/StudentCard';
import { Student } from './types/Student';
import H1 from './typography/H1';
import StudentFormModal from './components/StudentFormModal';
import { SchoolClass } from './types/Class';
import { getClasses } from './api/classes';
import { CreateStudentEvent } from './components/StudentFormModal/StudentFormModal';

function App() {
  const [students, setStudents] = useState<Student[]>([]);
  const [schoolClasses, setSchoolClasses] = useState<SchoolClass[]>([]);
  const [isCreateStudentModalOpen, setIsCreateStudentModalOpen] =
    useState<boolean>(false);

  const loadData = async () => {
    const students = await getStudents();
    setStudents(students);

    const classes = await getClasses();
    setSchoolClasses(classes);
  };

  useEffect(() => {
    loadData();
  }, []);

  const createStudentHandler: CreateStudentEvent = async (student: Student) => {
    await createStudent(student);
    setIsCreateStudentModalOpen(false);
    loadData();
  };

  // FIXME: paddings not 100% accurate
  return (
    <div className="py-4 px-10">
      <div className="flex justify-between items-center w-full mb-[34px]">
        <H1>Student Manager</H1>

        <div className="flex gap-[14px]">
          <Button
            onClick={() => {
              setIsCreateStudentModalOpen(true);
            }}
          >
            Create student
          </Button>
          <Button>Create class</Button>
          <Button>Manage classes</Button>
        </div>
      </div>
      <div className="flex flex-wrap gap-[45px]">
        {students.map((student) => {
          return <StudentCard key={student.email} student={student} />;
        })}
      </div>

      <StudentFormModal
        schoolClasses={schoolClasses}
        title="Create student"
        isOpen={isCreateStudentModalOpen}
        onCreateStudent={createStudentHandler}
        onClose={() => setIsCreateStudentModalOpen(false)}
      />
    </div>
  );
}

export default App;

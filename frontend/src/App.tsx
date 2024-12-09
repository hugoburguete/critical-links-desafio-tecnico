import { useEffect, useState } from 'react';
import { getStudents } from './api/student';
import Button from './components/Button';
import StudentCard from './components/StudentCard';
import { Student } from './types/Student';
import H1 from './typography/H1';

function App() {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    getStudents().then((students) => {
      setStudents(students);
    });
  }, []);

  // FIXME: paddings not 100% accurate
  return (
    <div className="py-4 px-10">
      <div className="flex justify-between items-center w-full mb-[34px]">
        <H1>Student Manager</H1>

        <div className="flex gap-[14px]">
          <Button>Create student</Button>
          <Button>Create class</Button>
          <Button>Manage classes</Button>
        </div>
      </div>
      <div className="flex flex-wrap gap-[45px]">
        {students.map((student) => {
          return <StudentCard key={student.email} student={student} />;
        })}
      </div>
    </div>
  );
}

export default App;

import { Student } from '../../types/Student';
import StudentCard from '../StudentCard';

type Props = {
  students: Student[];
  onEditClick?: (student: Student) => void;
  onRemoveClick?: (student: Student) => void;
};

const StudentList = ({
  onEditClick,
  onRemoveClick,
  students,
}: Props): React.JSX.Element => {
  return (
    <div className="bg-white rounded-lg p-4">
      <p className="font-semibold mb-3 text-xl tracking-tight">
        Student Listing
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
        {students.map((student) => {
          return (
            <StudentCard
              key={student._id}
              student={student}
              onEditClick={onEditClick}
              onRemoveClick={onRemoveClick}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StudentList;

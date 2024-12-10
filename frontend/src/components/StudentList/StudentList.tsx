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
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-[45px]">
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
  );
};

export default StudentList;

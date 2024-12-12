import { useState } from 'react';
import { Student } from '../../types/Student';
import Panel from '../Panel';
import StudentCard from '../StudentCard';
import paginate from '../../helpers/paginate';
import Pagination from '../Pagination';

type Props = {
  students: Student[];
  onEditClick?: (student: Student) => void;
  onRemoveClick?: (student: Student) => void;
  onViewProfileClick?: (student: Student) => void;
};

const studentsNumToShow = 6;

const StudentList = ({
  onEditClick,
  onRemoveClick,
  onViewProfileClick,
  students,
}: Props): React.JSX.Element => {
  const [page, setPage] = useState(1);
  const filteredStudents = paginate(students, studentsNumToShow, page);

  return (
    <Panel title="Student List">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
        {filteredStudents.map((student) => {
          return (
            <StudentCard
              key={student._id}
              student={student}
              onEditClick={onEditClick}
              onRemoveClick={onRemoveClick}
              onViewProfileClick={onViewProfileClick}
            />
          );
        })}
      </div>

      <div className="mt-3 flex justify-end">
        <Pagination
          onPageClick={(p) => setPage(p)}
          maxPages={Math.ceil(students.length / studentsNumToShow)}
        />
      </div>
    </Panel>
  );
};

export default StudentList;

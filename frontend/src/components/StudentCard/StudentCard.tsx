import { Student } from '../../types/Student';
import Button from '../Button';
import ThreeDotsMenu from '../ThreeDotsMenu';

type Props = {
  onEditClick?: (student: Student) => void;
  onRemoveClick?: (student: Student) => void;
  onViewProfileClick?: (student: Student) => void;
  student: Student;
};

const StudentCard = ({
  student,
  onEditClick,
  onRemoveClick,
  onViewProfileClick,
}: Props): React.JSX.Element => {
  return (
    <div className="w-full rounded-lg bg-white p-4">
      {/* Card body */}
      <div className="flex flex-col gap-3 justify-between items-center relative">
        <div className="absolute top-0 right-0">
          <ThreeDotsMenu
            dropdownButtons={[
              {
                label: 'Edit',
                onClick: () => onEditClick?.(student),
              },
              {
                label: 'Remove',
                onClick: () => onRemoveClick?.(student),
              },
            ]}
          />
        </div>

        {/* Profile picture */}
        <div className="rounded-full overflow-hidden min-w-[90px] w-[90px] h-[90px] min-h-[90px]">
          <img src="/img/dummy-img.jpg" className=" w-[90px] h-[90px]" alt="" />
        </div>

        {/* Details */}
        <div className="max-w-full text-center overflow-hidden">
          <p className="font-sans font-semibold overflow-hidden text-ellipsis tracking-tight text-nowrap">
            {`${student.firstname} ${student.lastname}`}
          </p>
          <p className="font-sans font-light leading-5 overflow-hidden text-ellipsis text-nowrap max-w-full">
            <span className="text-dimmed">{student.email}</span>
          </p>
          {/* <p className="font-sans leading-5 font-extralight overflow-hidden text-ellipsis">
            <span className="text-dimmed">{student.studentNum}</span>
          </p> */}
        </div>

        <Button
          className="mt-2 max-w-full"
          onClick={() => onViewProfileClick?.(student)}
        >
          View profile
        </Button>
      </div>
    </div>
  );
};

export default StudentCard;

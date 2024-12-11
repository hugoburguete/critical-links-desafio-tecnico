import { Student } from '../../types/Student';
import ClickableIcon from '../ClickableIcon';
import { IconSize, IconType } from '../ClickableIcon/ClickableIcon';

type Props = {
  onEditClick?: (student: Student) => void;
  onRemoveClick?: (student: Student) => void;
  student: Student;
};

const StudentCard = ({
  student,
  onEditClick,
  onRemoveClick,
}: Props): React.JSX.Element => {
  return (
    <div className="w-full rounded-lg bg-verylightgrey p-3">
      {/* Card body */}
      <div className="flex gap-3 justify-between items-center">
        {/* Profile picture */}
        <div className="hidden xl:block rounded-full bg-lightgrey min-w-[90px] w-[90px] h-[90px] min-h-[90px]"></div>

        {/* Details */}
        <div className="min-w-0">
          <p className="font-sans font-bold overflow-hidden text-ellipsis mb-2 uppercase tracking-tight">
            {`${student.firstname} ${student.lastname}`}
          </p>
          <p className="font-sans font-light leading-5 overflow-hidden text-ellipsis text-nowrap">
            Email: <span className="text-dimmed">{student.email}</span>
          </p>
          <p className="font-sans leading-5 font-extralight overflow-hidden text-ellipsis">
            ID: <span className="text-dimmed">{student.studentNum}</span>
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-[15px]">
          <ClickableIcon
            iconType={IconType.Pencil}
            size={IconSize.Small}
            onClick={() => onEditClick?.(student)}
          />
          <ClickableIcon
            iconType={IconType.Bin}
            size={IconSize.Small}
            onClick={() => onRemoveClick?.(student)}
          />
        </div>
      </div>
    </div>
  );
};

export default StudentCard;

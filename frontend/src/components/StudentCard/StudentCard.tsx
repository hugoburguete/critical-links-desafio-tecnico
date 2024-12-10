import { Student } from '../../types/Student';
import ClickableIcon from '../ClickableIcon';
import { IconType } from '../ClickableIcon/ClickableIcon';

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
    <div className="w-full rounded-3xl bg-white card-box-shadow p-5">
      {/* Card body */}
      <div className="flex gap-[30px] justify-between">
        {/* Profile picture */}
        <div className="hidden xl:block rounded-full bg-lightgrey w-[90px] h-[90px]"></div>

        {/* Details */}
        <div className="min-w-0">
          <p className="font-sans font-bold text-[22px] leading-[30px] overflow-hidden text-ellipsis">
            {`${student.firstname} ${student.lastname}`}
          </p>
          <p className="font-sans font-light text-[22px] leading-[30px] overflow-hidden text-ellipsis">
            {student.email}
          </p>
          <p className="font-sans text-dimmed font-extralight text-[22px] leading-[30px] overflow-hidden text-ellipsis">
            ID: {student.studentNum}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-[15px]">
          <ClickableIcon
            iconType={IconType.Pencil}
            onClick={() => onEditClick?.(student)}
          />
          <ClickableIcon
            iconType={IconType.Bin}
            onClick={() => onRemoveClick?.(student)}
          />
        </div>
      </div>
    </div>
  );
};

export default StudentCard;

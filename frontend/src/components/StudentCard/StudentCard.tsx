import { Student } from '../../types/Student';
import ClickableIcon from '../ClickableIcon';
import { IconType } from '../ClickableIcon/ClickableIcon';

type Props = {
  onEditClick?: () => void;
  onRemoveClick?: () => void;
  student: Student;
};

const StudentCard = ({
  student,
  onEditClick,
  onRemoveClick,
}: Props): React.JSX.Element => {
  // FIXME: Drop shadow is not correct.
  return (
    <div className="rounded-3xl bg-white shadow-sm p-5">
      {/* Card body */}
      <div className="flex gap-[30px]">
        {/* Profile picture */}
        <div className="rounded-full bg-lightgrey w-[90px] h-[90px]"></div>

        {/* Details */}
        <div>
          <p className="font-sans font-bold text-[22px] leading-[30px]">
            {`${student.firstname} ${student.lastname}`}
          </p>
          <p className="font-sans font-light text-[22px] leading-[30px]">
            {student.email}
          </p>
          <p className="font-sans text-dimmed font-extralight text-[22px] leading-[30px]">
            ID: {student.studentNum}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-[15px]">
          <ClickableIcon
            iconType={IconType.Pencil}
            onClick={() => onEditClick?.()}
          />
          <ClickableIcon
            iconType={IconType.Bin}
            onClick={() => onRemoveClick?.()}
          />
        </div>
      </div>
    </div>
  );
};

export default StudentCard;

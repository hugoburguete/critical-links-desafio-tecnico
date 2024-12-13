import { SchoolClass } from '../../types/Class';
import { Student } from '../../types/Student';
import Modal from '../Modal';
import { Props as ModalProps } from '../Modal/Modal';

export type SubmitStudentEvent = (student: Student) => void;

type Props = ModalProps & {
  onStudentEdit?: SubmitStudentEvent;
  onStudentRemove?: SubmitStudentEvent;
  student: Student;
  classes: SchoolClass[];
};

const ProfileModal = ({
  student,
  classes,
  ...modalProps
}: Props): React.JSX.Element => {
  const studentClass = classes.find((c) => c._id === student.class);
  return (
    <Modal {...modalProps} className="w-full max-w-[380px]">
      {/* Card body */}
      <div className="flex flex-col gap-3 justify-between relative">
        {/* Profile picture */}
        <div className="self-center rounded-full overflow-hidden min-w-[90px] w-[90px] h-[90px] min-h-[90px]">
          <img src="/img/dummy-img.jpg" className=" w-[90px] h-[90px]" alt="" />
        </div>

        {/* Details */}
        <p className="max-w-full font-sans self-center mb-3 font-bold overflow-hidden text-ellipsis uppercase tracking-tight text-nowrap">
          {`${student.firstname} ${student.lastname}`}
        </p>
        <p className="font-sans font-light overflow-hidden text-ellipsis text-nowrap max-w-full">
          <span className="font-bold">Email:</span>{' '}
          <span className="text-grey">{student.email}</span>
        </p>
        <p className="font-sans font-extralight overflow-hidden text-ellipsis">
          <span className="font-bold">Student Number:</span>{' '}
          <span className="text-grey">{student.studentNum}</span>
        </p>
        {studentClass && (
          <p className="font-sans font-extralight overflow-hidden text-nowrap text-ellipsis">
            <span className="font-bold">Class:</span>{' '}
            <span className="text-grey">
              {studentClass.year} - {studentClass.name}
            </span>
          </p>
        )}
      </div>
    </Modal>
  );
};

export default ProfileModal;

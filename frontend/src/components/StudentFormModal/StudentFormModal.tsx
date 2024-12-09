import { useState } from 'react';
import { SchoolClass } from '../../types/Class';
import { Student } from '../../types/Student';
import Button from '../Button';
import FormInput from '../forms/FormInput';
import Modal from '../Modal';
import { Props as ModalProps } from '../Modal/Modal';

export type CreateStudentEvent = (student: Student) => void;

type Props = ModalProps & {
  onCreateStudent?: CreateStudentEvent;
  schoolClasses: SchoolClass[];
};

const StudentFormModal = ({
  schoolClasses,
  onCreateStudent,
  ...modalProps
}: Props): React.JSX.Element => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [studentNum, setStudentNum] = useState<number>();
  // FIXME: Hardcoded
  const [schoolClass, setSchoolClass] = useState('6756f324301c21ac2856baff');

  return (
    <Modal {...modalProps} className="min-w-[380px]">
      <form action="">
        <FormInput
          label="First name"
          value={firstname}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <FormInput
          label="Last name"
          value={lastname}
          onChange={(e) => setLastName(e.target.value)}
        />
        <FormInput
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormInput
          label="Student ID"
          value={studentNum}
          onChange={(e) => setStudentNum(+e.target.value)}
        />

        <div className="flex justify-end">
          <Button onClick={() => modalProps.onClose?.()}>Cancel</Button>
          <Button
            onClick={() =>
              onCreateStudent?.({
                firstname,
                lastname,
                email,
                studentNum: studentNum || 0,
                class: schoolClass,
              })
            }
          >
            Create
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default StudentFormModal;

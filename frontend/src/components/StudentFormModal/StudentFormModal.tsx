import { useEffect, useState } from 'react';
import { SchoolClass } from '../../types/Class';
import { Student } from '../../types/Student';
import Button from '../Button';
import FormInput from '../forms/FormInput';
import Modal from '../Modal';
import { Props as ModalProps } from '../Modal/Modal';
import { ButtonAppearance } from '../Button/Button';
import FormSelect from '../forms/FormSelect/FormSelect';

export type SubmitStudentEvent = (student: Student) => void;

type Props = ModalProps & {
  onSubmitStudent?: SubmitStudentEvent;
  student: Student | null;
  schoolClasses: SchoolClass[];
};

const StudentFormModal = ({
  student,
  schoolClasses,
  onSubmitStudent,
  ...modalProps
}: Props): React.JSX.Element => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [studentNum, setStudentNum] = useState<string>('');
  const [schoolClass, setSchoolClass] = useState(schoolClasses[0]?._id);

  useEffect(() => {
    setFirstName(student?.firstname || '');
    setLastName(student?.lastname || '');
    setEmail(student?.email || '');
    setStudentNum(student?.studentNum.toString() || '');
    setSchoolClass(student?.class || schoolClasses[0]?._id);
  }, [student, schoolClasses]);

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
          className="mb-[20px]"
          label="Student ID"
          value={studentNum}
          onChange={(e) => setStudentNum(e.target.value)}
        />
        <FormSelect
          label="Class"
          value={schoolClass}
          options={schoolClasses.map((schoolClass) => {
            return {
              label: `${schoolClass.year}${schoolClass.name}`,
              value: `${schoolClass._id}`,
            };
          })}
          onChange={(e) => setSchoolClass(e.target.value)}
        />

        <div className="flex justify-end gap-2">
          <Button
            appearance={ButtonAppearance.Secondary}
            onClick={() => modalProps.onClose?.()}
          >
            Cancel
          </Button>
          <Button
            appearance={ButtonAppearance.Secondary}
            onClick={() =>
              onSubmitStudent?.({
                _id: student?._id,
                firstname,
                lastname,
                email,
                studentNum: +studentNum || 0,
                class: schoolClass || '',
              })
            }
          >
            {student ? 'Edit' : 'Create'}
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default StudentFormModal;

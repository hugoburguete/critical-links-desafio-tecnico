import { useEffect, useRef, useState } from 'react';
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
  const formRef = useRef<HTMLFormElement>(null);
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
    const existingClass = schoolClasses.find((c) => c._id === student?.class);
    if (!existingClass || !student?.class) {
      setSchoolClass(schoolClasses[0]?._id);
    } else {
      setSchoolClass(student.class);
    }
  }, [student, schoolClasses]);

  const resetForm = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setStudentNum('');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = formRef.current?.reportValidity();
    if (isValid) {
      onSubmitStudent?.({
        _id: student?._id,
        firstname,
        lastname,
        email,
        studentNum: +studentNum || 0,
        class: schoolClass || '',
      });
      resetForm();
    }
  };

  return (
    <Modal {...modalProps} className="w-full max-w-[380px]">
      <form ref={formRef} action="" onSubmit={handleFormSubmit} noValidate>
        <FormInput
          data-testid="input-firstname"
          type="text"
          label="First name"
          value={firstname}
          required
          onChange={(e) => setFirstName(e.target.value)}
        />
        <FormInput
          data-testid="input-lastname"
          type="text"
          required
          label="Last name"
          value={lastname}
          onChange={(e) => setLastName(e.target.value)}
        />
        <FormInput
          data-testid="input-email"
          type="email"
          required
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormInput
          data-testid="input-student-num"
          required
          max={999999}
          type="number"
          className="mb-[20px]"
          label="Student ID"
          value={studentNum}
          onChange={(e) => setStudentNum(e.target.value)}
        />
        <FormSelect
          required
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
            type="submit"
            appearance={ButtonAppearance.Secondary}
            data-testid="input-submit"
          >
            {student ? 'Edit' : 'Create'}
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default StudentFormModal;

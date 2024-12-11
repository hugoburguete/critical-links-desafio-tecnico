import { useEffect, useRef, useState } from 'react';
import { SchoolClass } from '../../types/Class';
import Button from '../Button';
import FormInput from '../forms/FormInput';
import Modal from '../Modal';
import { Props as ModalProps } from '../Modal/Modal';
import { ButtonAppearance } from '../Button/Button';

export type SubmitClassEvent = (schoolClass: SchoolClass) => void;

type Props = ModalProps & {
  onSubmitClass?: SubmitClassEvent;
  schoolClass: SchoolClass | null;
};

const ClassFormModal = ({
  schoolClass,
  onSubmitClass,
  ...modalProps
}: Props): React.JSX.Element => {
  const formRef = useRef<HTMLFormElement>(null);
  const [name, setName] = useState('');
  const [year, setYear] = useState('');

  useEffect(() => {
    setName(schoolClass?.name || '');
    setYear(schoolClass?.year.toString() || '');
  }, [schoolClass]);

  const resetForm = () => {
    setName('');
    setYear('');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = formRef.current?.reportValidity();
    if (isValid) {
      onSubmitClass?.({
        _id: schoolClass?._id,
        name,
        year: +year,
      });
      resetForm();
    }
  };

  return (
    <Modal {...modalProps} className="w-full max-w-[380px]">
      <form ref={formRef} onSubmit={handleFormSubmit}>
        <FormInput
          type="text"
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <FormInput
          type="number"
          max={99}
          min={0}
          label="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />

        <div className="flex justify-end gap-2">
          <Button
            appearance={ButtonAppearance.Secondary}
            onClick={() => modalProps.onClose?.()}
          >
            Cancel
          </Button>
          <Button appearance={ButtonAppearance.Secondary} type="submit">
            {schoolClass ? 'Edit' : 'Create'}
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default ClassFormModal;

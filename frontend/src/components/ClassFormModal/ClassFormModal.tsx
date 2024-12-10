import { useEffect, useState } from 'react';
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

  return (
    <Modal {...modalProps} className="min-w-[380px]">
      <form action="">
        <FormInput
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <FormInput
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
          <Button
            appearance={ButtonAppearance.Secondary}
            onClick={() => {
              onSubmitClass?.({
                _id: schoolClass?._id,
                name,
                year: +year,
              });
              resetForm();
            }}
          >
            {schoolClass ? 'Edit' : 'Create'}
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default ClassFormModal;

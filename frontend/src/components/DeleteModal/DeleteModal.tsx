import Button from '../Button';
import { ButtonAppearance } from '../Button/Button';
import Modal from '../Modal';
import { Props as ModalProps } from '../Modal/Modal';

type Props = ModalProps & {
  onConfirm?: () => void;
};

const DeleteModal = ({ onConfirm, ...modalProps }: Props) => {
  return (
    <Modal {...modalProps} className="w-full max-w-[380px]">
      <div className="flex justify-end gap-2">
        <Button
          appearance={ButtonAppearance.Secondary}
          onClick={() => onConfirm?.()}
        >
          Yes
        </Button>
        <Button
          appearance={ButtonAppearance.Secondary}
          onClick={() => modalProps.onClose?.()}
        >
          No
        </Button>
      </div>
    </Modal>
  );
};

export default DeleteModal;

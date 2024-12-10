import { SchoolClass } from '../../types/Class';
import Button from '../Button';
import { ButtonAppearance } from '../Button/Button';
import ClickableIcon from '../ClickableIcon';
import { IconSize, IconType } from '../ClickableIcon/ClickableIcon';
import Modal from '../Modal';
import { Props as ModalProps } from '../Modal/Modal';

type Props = ModalProps & {
  classes: SchoolClass[];
  onEditClick: (schoolClass: SchoolClass) => void;
  onRemoveClick: (schoolClass: SchoolClass) => void;
};

const ManageClassModal = ({
  classes,
  onEditClick,
  onRemoveClick,
  ...modalProps
}: Props): React.JSX.Element => {
  return (
    <Modal {...modalProps} className="w-full max-w-[284px]">
      <table className="w-full  mb-8">
        <thead>
          <tr>
            <th className="py-5 px-4 text-left text-sm leading-4 text-[#00000050]">
              Class name
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {classes.map((schoolClass) => {
            return (
              <tr className="odd:bg-[#00000010]" key={`tr-${schoolClass._id}`}>
                <td className="w-full p-4 text-sm">
                  {schoolClass.year}-{schoolClass.name}
                </td>
                <td>
                  {/* Buttons */}
                  <div className="flex gap-[15px] mr-8">
                    <ClickableIcon
                      size={IconSize.Small}
                      className="h-[19px]"
                      iconType={IconType.Pencil}
                      onClick={() => onEditClick?.(schoolClass)}
                    />
                    <ClickableIcon
                      size={IconSize.Small}
                      iconType={IconType.Bin}
                      onClick={() => onRemoveClick?.(schoolClass)}
                    />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex justify-end gap-2">
        <Button
          appearance={ButtonAppearance.Secondary}
          onClick={() => modalProps.onClose?.()}
        >
          Close
        </Button>
      </div>
    </Modal>
  );
};

export default ManageClassModal;

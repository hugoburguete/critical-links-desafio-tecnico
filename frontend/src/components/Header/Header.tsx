import { useState } from 'react';
import H1 from '../../typography/H1';
import Button from '../Button';
import ClickableIcon from '../ClickableIcon';
import { IconSize, IconType } from '../ClickableIcon/ClickableIcon';
import cx from 'classnames';

type Props = {
  onCreateStudentClick: () => void;
  onCreateClassClick: () => void;
  onManageClassClick: () => void;
};

const Header = ({
  onCreateStudentClick,
  onCreateClassClick,
  onManageClassClick,
}: Props): React.JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex justify-between items-center w-full mb-[34px]">
      <H1>Student Manager</H1>

      <ClickableIcon
        className="lg:hidden"
        iconType={IconType.HamburgerMenu}
        size={IconSize.Small}
        onClick={() => setIsMenuOpen(true)}
      />
      <div
        className={cx(
          'fixed top-0 bottom-0 transition-all duration-500 bg-white flex flex-col justify-center items-center gap-[30px] lg:relative lg:inset-auto lg:flex-row lg:gap-[14px]',
          {
            'left-full -right-full': !isMenuOpen,
            'inset-0': isMenuOpen,
          },
        )}
      >
        <ClickableIcon
          iconType={IconType.CloseMenu}
          size={IconSize.Small}
          className={cx('fixed top-7 right-7 lg:hidden', {
            hidden: !isMenuOpen,
          })}
          onClick={() => setIsMenuOpen(false)}
        />
        <Button
          onClick={() => {
            setIsMenuOpen(false);
            onCreateStudentClick();
          }}
        >
          Create student
        </Button>

        {/* Divider */}
        <div className="border-transparent border-b-[#E6E6E6] border-solid border-b-[1px] w-[230px] lg:hidden" />

        <Button
          onClick={() => {
            setIsMenuOpen(false);
            onCreateClassClick();
          }}
        >
          Create class
        </Button>

        {/* Divider */}
        <div className="border-transparent border-b-[#E6E6E6] border-solid border-b-[1px] w-[230px] lg:hidden" />

        <Button
          onClick={() => {
            setIsMenuOpen(false);
            onManageClassClick();
          }}
        >
          Manage classes
        </Button>
      </div>
    </div>
  );
};

export default Header;

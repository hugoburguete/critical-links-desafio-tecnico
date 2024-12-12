import cx from 'classnames';
import { useState } from 'react';
import { SchoolClass } from '../../types/Class';
import H1 from '../../typography/H1';
import ClickableIcon from '../ClickableIcon';
import { IconSize, IconType } from '../ClickableIcon/ClickableIcon';

type Props = {
  schoolClasses: SchoolClass[];
  onCreateStudentClick: () => void;
  onCreateClassClick: () => void;
};

const Header = ({
  onCreateStudentClick,
  onCreateClassClick,
  schoolClasses,
}: Props): React.JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed inset-0 bottom-auto shadow-md border border-transparent border-b-gray-300 bg-white z-10">
      <div className="max-w-screen-xl w-full h-14 m-auto px-4 lg:px-10 flex justify-between items-center">
        <H1>Student Manager</H1>

        <ClickableIcon
          className="lg:hidden"
          iconType={IconType.HamburgerMenu}
          size={IconSize.Small}
          onClick={() => setIsMenuOpen(true)}
        />
        <div
          className={cx(
            'fixed top-0 bottom-0 transition-all duration-500 bg-white lg:bg-transparent flex flex-col justify-center items-center gap-[30px] lg:relative lg:inset-auto lg:flex-row lg:gap-6 lg:h-full',
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
          <button
            className="text-black bg-none outline-none hover:opacity-80 lg:border-black lg:border-b-4 lg:h-full"
            disabled={!schoolClasses.length}
            onClick={(e) => e.preventDefault()}
          >
            Home
          </button>

          {/* Divider */}
          <div className="border-transparent border-b-[#E6E6E6] border-solid border-b-[1px] w-[230px] lg:hidden" />

          <button
            className="text-black bg-none outline-none hover:opacity-80 lg:h-full"
            disabled={!schoolClasses.length}
            onClick={() => {
              setIsMenuOpen(false);
              onCreateStudentClick();
            }}
          >
            Create student
          </button>

          {/* Divider */}
          <div className="border-transparent border-b-[#E6E6E6] border-solid border-b-[1px] w-[230px] lg:hidden" />

          <button
            className="text-black bg-none outline-none hover:opacity-80 lg:h-full"
            onClick={() => {
              setIsMenuOpen(false);
              onCreateClassClick();
            }}
          >
            Create class
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

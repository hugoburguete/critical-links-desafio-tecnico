import cx from 'classnames';
import { useRef, useState } from 'react';
import useOutsideClick from '../../hooks/useOutsideAlerter';

type DropdownButton = {
  label: string;
  onClick: () => void;
};

type Props = {
  dropdownButtons: DropdownButton[];
};

const ThreeDotsMenu = ({ dropdownButtons }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  useOutsideClick(wrapperRef, () => setIsOpen(false));

  return (
    <div className="relative" ref={wrapperRef}>
      <div
        className="flex flex-col items-center gap-0.5 w-4 hover:cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <div className="h-1 w-1 bg-gray-500 rounded-full"></div>
        <div className="h-1 w-1 bg-gray-500 rounded-full"></div>
        <div className="h-1 w-1 bg-gray-500 rounded-full"></div>
      </div>
      <ul
        className={cx('absolute top-0 right-5 shadow-lg', {
          hidden: !isOpen,
        })}
      >
        {dropdownButtons.map((btn) => {
          return (
            <li
              className="text-nowrap bg-white px-5 py-2 hover:bg-light-blue hover:cursor-pointer"
              onClick={() => {
                btn.onClick();
                setIsOpen(false);
              }}
            >
              {btn.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ThreeDotsMenu;

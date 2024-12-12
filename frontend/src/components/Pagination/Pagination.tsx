import cx from 'classnames';
import { useState } from 'react';

type Props = {
  onPageClick: (page: number) => void;
  maxPages: number;
};

const Pagination = ({ maxPages, onPageClick }: Props): React.JSX.Element => {
  const [selectedPage, setSelectedPage] = useState(1);

  const arr = [];
  for (let i = 1; i <= maxPages; i++) {
    arr.push(i);
  }

  return (
    <ul className="flex items-center gap-2">
      <li
        className={cx('text-black hover:cursor-pointer', {
          'opacity-20 hover:cursor-not-allowed': selectedPage === 1,
        })}
        onClick={(e) => {
          if (selectedPage === 1) {
            e.preventDefault();
            return;
          }
          setSelectedPage(selectedPage - 1);
          onPageClick(selectedPage - 1);
        }}
      >
        Previous
      </li>

      {arr.map((page) => {
        return (
          <li
            className={cx('hover:cursor-pointer text-black', {
              'text-primary': selectedPage === page,
            })}
            onClick={() => {
              setSelectedPage(page);
              onPageClick(page);
            }}
          >
            {page}
          </li>
        );
      })}

      <li
        className={cx('text-black hover:cursor-pointer', {
          'opacity-20 hover:cursor-not-allowed': selectedPage === maxPages,
        })}
        onClick={(e) => {
          if (selectedPage === maxPages) {
            e.preventDefault();
            return;
          }
          setSelectedPage(selectedPage + 1);
          onPageClick(selectedPage + 1);
        }}
      >
        Next
      </li>
    </ul>
  );
};

export default Pagination;

import { useState } from 'react';
import { SchoolClass } from '../../types/Class';
import P from '../../typography/P';
import Pagination from '../Pagination';
import Panel from '../Panel';
import ThreeDotsMenu from '../ThreeDotsMenu';
import paginate from '../../helpers/paginate';

type Props = {
  classes: SchoolClass[];
  onEditClick: (schoolClass: SchoolClass) => void;
  onRemoveClick: (schoolClass: SchoolClass) => void;
};
const classesNumToShow = 6;

const SchoolClassesList = ({
  classes,
  onEditClick,
  onRemoveClick,
}: Props): React.JSX.Element => {
  const [page, setPage] = useState(1);
  const filteredClasses = paginate(classes, classesNumToShow, page);

  return (
    <Panel title="Manage classes">
      <div className="bg-white rounded-lg overflow-hidden">
        <div>
          <p className="py-5 px-4 font-bold text-left text-sm leading-4 text-primary">
            Class name
          </p>
        </div>
        {filteredClasses.map((schoolClass) => {
          return (
            <div
              className="flex flex-nowrap justify-between items-center odd:bg-[#00000010] hover:bg-[#00000030] transition-all"
              key={`tr-${schoolClass._id}`}
            >
              <div className="p-4 text-sm overflow-hidden">
                <P className="overflow-hidden text-ellipsis whitespace-nowrap">
                  {schoolClass.year}-{schoolClass.name}
                </P>
              </div>
              <div className="px-3">
                <ThreeDotsMenu
                  dropdownButtons={[
                    {
                      label: 'Edit',
                      onClick: () => {
                        onEditClick?.(schoolClass);
                      },
                    },
                    {
                      label: 'Remove',
                      onClick: () => {
                        onRemoveClick?.(schoolClass);
                      },
                    },
                  ]}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-3 flex justify-end">
        <Pagination
          onPageClick={(p) => setPage(p)}
          maxPages={Math.ceil(classes.length / classesNumToShow)}
        />
      </div>
    </Panel>
  );
};

export default SchoolClassesList;

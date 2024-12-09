import { SchoolClass } from '../../types/Class';

type Props = {
  classes: SchoolClass[];
};

const ClassTable = ({ classes }: Props): React.JSX.Element => {
  return (
    <table>
      <thead>
        <tr>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {classes.map((schoolClass) => {
          return (
            <tr>
              <td>{schoolClass.name}</td>
              <td></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ClassTable;

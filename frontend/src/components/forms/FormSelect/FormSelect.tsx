import Select, { SingleValue } from 'react-select';

type Props = {
  label: string;
  options: Option[];
  value: string | undefined;
  id?: string;
  required?: boolean;
  onChange: (val: SingleValue<Option>) => void;
};

export type Option = {
  label: string;
  value: string;
};

const FormSelect = ({
  label,
  options,
  id,
  value,
  required,
  onChange,
}: Props): React.JSX.Element => {
  return (
    <div>
      <label
        className="text-xs text-[#00000061] tracking-[0.15px]"
        htmlFor={id}
      >
        {label}
      </label>
      <Select
        value={options.find((opt) => opt.value === value)}
        styles={{
          control: (styles) => ({
            ...styles,
            border: 'none',
            boxShadow: 'none',
            borderRadius: 'none',
            outline: 'none',
            borderBottom: '1px solid black',
            marginBottom: '16px',
          }),
          indicatorSeparator: (styles) => ({}),
        }}
        required={required}
        onChange={onChange}
        id={id}
        options={options}
        placeholder={label}
      />
    </div>
  );
};

export default FormSelect;

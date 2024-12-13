import Select from 'react-select';

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> & {
  label: string;
  options: Option[];
};

export type Option = {
  label: string;
  value: string;
};

const FormSelect = ({
  className,
  label,
  options,
  ...rest
}: Props): React.JSX.Element => {
  return (
    <div>
      <label
        className="text-xs text-[#00000061] tracking-[0.15px]"
        htmlFor={rest.id}
      >
        {label}
      </label>
      <Select
        value={options.find((opt) => opt.value === rest.value)}
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
        id={rest.id}
        options={options}
        placeholder={label}
      />
    </div>
  );
};

export default FormSelect;

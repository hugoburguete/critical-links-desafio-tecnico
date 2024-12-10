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
      <select
        placeholder={label}
        className={`w-full mb-4 px-0 py-2 bg-white border-transparent border-b-black border-solid border-b-[1px] ${className}`}
        {...rest}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormSelect;

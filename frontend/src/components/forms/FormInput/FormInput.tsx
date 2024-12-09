type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label: string;
};

const FormInput = ({ className, label, ...rest }: Props): React.JSX.Element => {
  return (
    <div className="h-[73px]">
      <label className="hidden" htmlFor={rest.id}>
        {label}
      </label>
      <input
        placeholder={label}
        className={`w-full mb-4 border-transparent border-b-[1px] border-b-black border-b-solid px-0 py-1 ${className}`}
        {...rest}
      />
    </div>
  );
};

export default FormInput;

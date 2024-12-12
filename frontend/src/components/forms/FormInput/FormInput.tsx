type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label: string;
};

const FormInput = ({ className, label, ...rest }: Props): React.JSX.Element => {
  return (
    <div>
      <label className="hidden" htmlFor={rest.id}>
        {label}
      </label>
      <input
        placeholder={label}
        className={`w-full mb-8 border-transparent border-b-[1px] border-b-black border-b-solid focus:outline-none focus:border-transparent focus:border-b-primary px-0 py-1 ${className}`}
        {...rest}
      />
    </div>
  );
};

export default FormInput;

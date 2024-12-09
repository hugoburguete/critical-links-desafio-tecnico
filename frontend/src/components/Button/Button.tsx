type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {};

const Button = ({ children, className, ...rest }: Props): React.JSX.Element => {
  return (
    <button
      className={`rounded-lg p-[14px] bg-blue text-white w-[170px] text-center text-lg  leading-6 ${className}`}
      type="button"
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;

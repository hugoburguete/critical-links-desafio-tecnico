import cx from 'classnames';

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  appearance?: ButtonAppearance;
};

export enum ButtonAppearance {
  Primary,
  Secondary,
}

const Button = ({
  children,
  className,
  appearance = ButtonAppearance.Primary,
  ...rest
}: Props): React.JSX.Element => {
  return (
    <button
      className={cx(
        {
          'rounded-lg p-[14px] bg-blue text-white w-[170px] text-center text-lg  leading-6':
            appearance === ButtonAppearance.Primary,
          'px-2 py-[6px] text-blue bg-none outline-none uppercase font-medium font-roboto tracking-[0.4px]':
            appearance === ButtonAppearance.Secondary,
          'opacity-50 cursor-not-allowed': rest.disabled,
        },
        className,
      )}
      type="button"
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;

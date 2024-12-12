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
  Link,
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
          'rounded-3xl py-2 px-5 bg-primary text-white text-center text-lg leading-6':
            appearance === ButtonAppearance.Primary,
          'px-2 py-[6px] text-primary bg-none outline-none uppercase font-medium font-roboto tracking-[0.4px]':
            appearance === ButtonAppearance.Secondary,
          'text-primary bg-none outline-none hover:opacity-80':
            appearance === ButtonAppearance.Link,
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

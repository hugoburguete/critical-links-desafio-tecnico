type Props = React.PropsWithChildren &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >;

const H1 = (props: Props): React.JSX.Element => {
  const { children, className } = props;
  return (
    <h1
      className={`text-2xl sm:text-3xl leading-[25px] font-sans font-semibold text-grey ${className}`}
    >
      {children}
    </h1>
  );
};

export default H1;

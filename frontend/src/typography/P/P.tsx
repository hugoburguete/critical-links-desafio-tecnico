type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;

const P = ({ className, ...rest }: Props): React.JSX.Element => {
  return <p {...rest} className={`${className}`} />;
};

export default P;

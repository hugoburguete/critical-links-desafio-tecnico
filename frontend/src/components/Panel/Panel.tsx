import { PropsWithChildren } from 'react';

type Props = PropsWithChildren & {
  title: string;
};

const Panel = ({ title, children }: Props): React.JSX.Element => {
  return (
    <div className="rounded-lg mb-4">
      <p className="font-semibold mb-3 text-xl tracking-tight text-black">
        {title}
      </p>
      <div>{children}</div>
    </div>
  );
};

export default Panel;

import { PropsWithChildren } from 'react';

type Props = PropsWithChildren & {
  title: string;
  panelButtons: React.ReactElement;
};

const Panel = ({ title, children, panelButtons }: Props): React.JSX.Element => {
  return (
    <div className="rounded-lg mb-4">
      <div className="flex justify-between">
        <p className="font-semibold mb-3 text-xl tracking-tight text-black">
          {title}
        </p>
        {panelButtons}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Panel;

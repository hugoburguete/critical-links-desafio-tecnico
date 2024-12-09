import { ReactComponent as BinIcon } from './icons/bin.svg';
import { ReactComponent as CloseIcon } from './icons/close.svg';
import { ReactComponent as PencilIcon } from './icons/pencil.svg';

export enum IconType {
  Pencil,
  Bin,
  Close,
}

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  iconType: IconType;
};

const ClickableIcon = ({ iconType, ...rest }: Props): React.JSX.Element => {
  const renderIcon = () => {
    switch (iconType) {
      case IconType.Bin:
        return <BinIcon />;
      case IconType.Pencil:
        return <PencilIcon />;
      case IconType.Close:
        return <CloseIcon />;
      default:
        return null;
    }
  };

  return (
    <button type="button" {...rest}>
      {renderIcon()}
    </button>
  );
};

export default ClickableIcon;

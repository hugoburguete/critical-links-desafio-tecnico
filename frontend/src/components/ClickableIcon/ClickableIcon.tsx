import { ReactComponent as BinIcon } from './icons/bin.svg';
import { ReactComponent as CloseIcon } from './icons/close.svg';
import { ReactComponent as PencilIcon } from './icons/pencil.svg';

export enum IconType {
  Pencil,
  Bin,
  Close,
}

export enum IconSize {
  Small,
  Medium,
}

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  iconType: IconType;
  size?: IconSize;
};

const ClickableIcon = ({
  iconType,
  size = IconSize.Medium,
  ...rest
}: Props): React.JSX.Element => {
  const renderIcon = () => {
    let props: React.SVGProps<SVGSVGElement> = {
      width: size === IconSize.Medium ? 27 : 19,
      height: size === IconSize.Medium ? 27 : 19,
    };

    switch (iconType) {
      case IconType.Bin:
        return <BinIcon {...props} />;
      case IconType.Pencil:
        return <PencilIcon {...props} />;
      case IconType.Close:
        props = {
          width: size === IconSize.Medium ? 14 : 14,
          height: size === IconSize.Medium ? 14 : 14,
        };

        return <CloseIcon {...props} />;
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

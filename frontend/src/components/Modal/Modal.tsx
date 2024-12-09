import ClickableIcon from '../ClickableIcon';
import { IconType } from '../ClickableIcon/ClickableIcon';
import cx from 'classnames';

export type Props = React.PropsWithChildren &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > & {
    title: string;
    isOpen?: boolean;
    onClose?: () => void;
  };

const Modal = ({
  children,
  title,
  isOpen = false,
  onClose,
  className,
  ...rest
}: Props): React.JSX.Element => {
  return (
    <div
      className={cx(
        'fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center',
        {
          hidden: !isOpen,
        },
      )}
    >
      <div
        className={`shadow-md bg-white rounded-md px-6 py-4 ${className}`}
        {...rest}
      >
        {/* Modal header */}
        <div className="flex justify-between mb-6">
          <h2 className="text-xl leading-8 font-medium font-roboto tracking-[0.15px]">
            {title}
          </h2>

          <div>
            <ClickableIcon
              iconType={IconType.Close}
              onClick={() => onClose?.()}
            />
          </div>
        </div>

        {/* Modal body */}
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default Modal;

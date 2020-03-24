import React from 'react';
import classNames from 'classnames/bind';
import Icon from '~core/Icon/Icon';
import styles from './button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
  disabled?: boolean;
  isActive?: boolean;
  prefixIcon?: AppLib.IconString;
  suffixIcon?: AppLib.IconString;
}
console.log('BUTTON STYLES: ', styles);
const cx = classNames.bind(styles);

const Button = (props: ButtonProps) => {
  const {
    children,
    onClick,
    className = '',
    disabled,
    prefixIcon,
    suffixIcon,
    isActive = false,
  } = props;

  const cxOutput = cx('btn', { btnActive: isActive }, className);

  return (
    <button
      data-testid="button"
      disabled={disabled}
      onClick={onClick}
      className={cxOutput}
      type="button"
    >
      {prefixIcon ? <Icon icon={prefixIcon} /> : null}
      <span className={cx('btn-children')}>{children}</span>
      {suffixIcon ? <Icon icon={suffixIcon} /> : null}
    </button>
  );
};

export default Button;

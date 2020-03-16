import React from 'react';
import Icon from '~core/Icon/Icon';
import style from './button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
  disabled?: boolean;
  prefixIcon?: AppLib.IconString;
  suffixIcon?: AppLib.IconString;
}

const Button = (props: ButtonProps) => {
  const {
    children,
    onClick,
    className = '',
    disabled,
    prefixIcon,
    suffixIcon,
  } = props;

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${style.btn} ${className}`}
      type="button"
    >
      {prefixIcon ? <Icon icon={prefixIcon} /> : null}
      {children}
      {suffixIcon ? <Icon icon={suffixIcon} /> : null}
    </button>
  );
};

export default Button;

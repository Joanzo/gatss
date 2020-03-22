import React from 'react';
import { iconsMap } from '~utils/icons';

interface IconProps {
  icon: AppLib.IconString;
  className?: string;
  color?: string;
  size?: string;
}

export const getIconsNames = () => {
  const objectIcons: { [key: string]: string } = {};

  Object.keys(iconsMap).forEach(key => {
    objectIcons[key] = key;
  });

  return objectIcons;
};

const Icon = (props: IconProps) => {
  const { icon, color, className = '', size } = props;
  const IconSVG = iconsMap[icon];
  return (
    <IconSVG
      data-testid="icon"
      className={`icon ${className}`}
      style={{
        ...(color && { fill: color }),
        ...(size && { fontSize: size }),
      }}
    />
  );
};

export default Icon;

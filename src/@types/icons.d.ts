import React = require('react');

export type IconString =
  | 'arrow-thin-down'
  | 'arrow-thin-left'
  | 'arrow-thin-right'
  | 'arrow-thin-up'
  | 'attachment'
  | 'checkmark'
  | 'close';

export interface IconSVG extends React.SFC<React.SVGProps<SVGSVGElement>> {}

export type IconsMap = {
  [key in IconString]: IconSVG;
};

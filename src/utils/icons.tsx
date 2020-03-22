// Get through the icons in folder using svgr plugin
// const reqSvgs = require.context('!@svgr/webpack?icon=true!~static/icons/', true, /\.svg$/);

// const iconsMap: AppLib.IconsMap = reqSvgs.keys().reduce((images: any, path) => {
//   const key = path.substring(path.lastIndexOf('/') + 1, path.lastIndexOf('.'));
//   // eslint-disable-next-line no-param-reassign
//   images[key] = reqSvgs(path).default;
//   return images;
// }, {});

// ACTUALLY THE ABOVE WAY to import dynamically icons in a folder is a nice way
// BUT starting to cause more and more trouble as it is webpack only syntax (require.context)
// With the JEST testing therefore will implement manually for now until find a better way

import { ReactComponent as ArrowThinDownSVG } from '~static/icons/arrow-thin-down.svg';
import { ReactComponent as ArrowThinLeftSVG } from '~static/icons/arrow-thin-left.svg';
import { ReactComponent as ArrowThinRightSVG } from '~static/icons/arrow-thin-right.svg';
import { ReactComponent as ArrowThinUpSVG } from '~static/icons/arrow-thin-up.svg';
import { ReactComponent as AttachmentSVG } from '~static/icons/attachment.svg';
import { ReactComponent as CheckmarkSVG } from '~static/icons/checkmark.svg';
import { ReactComponent as CloseSVG } from '~static/icons/close.svg';

export const iconsMap: AppLib.IconsMap = {
  'arrow-thin-down': ArrowThinDownSVG,
  'arrow-thin-left': ArrowThinLeftSVG,
  'arrow-thin-right': ArrowThinRightSVG,
  'arrow-thin-up': ArrowThinUpSVG,
  attachment: AttachmentSVG,
  checkmark: CheckmarkSVG,
  close: CloseSVG,
};

export const getIconsNames = () => {
  const objectIcons: { [key: string]: string } = {};

  Object.keys(iconsMap).forEach(key => {
    objectIcons[key] = key;
  });

  return objectIcons;
};

export default {
  iconsMap,
  getIconsNames,
};

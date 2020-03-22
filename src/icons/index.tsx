// Get through the icons in folder using svgr plugin
// const reqSvgs = require.context('!@svgr/webpack?icon=true!./', true, /\.svg$/);

// const iconsMap: AppLib.IconsMap = reqSvgs.keys().reduce((images: any, path) => {
//   const key = path.substring(path.lastIndexOf('/') + 1, path.lastIndexOf('.'));
//   // eslint-disable-next-line no-param-reassign
//   images[key] = reqSvgs(path).default;
//   return images;
// }, {});

// ACTUALLY THE ABOVE WAY to import dynamically icons in a folder is a nice way
// BUT starting to cause more and more trouble as it is webpack only syntax (require.context)
// With the JEST testing therefore will implement manually for now until find a better way

import { ReactComponent as ArrowThinDownSVG } from './arrow-thin-down.svg';
import { ReactComponent as ArrowThinLeftSVG } from './arrow-thin-left.svg';
import { ReactComponent as ArrowThinRightSVG } from './arrow-thin-right.svg';
import { ReactComponent as ArrowThinUpSVG } from './arrow-thin-up.svg';
import { ReactComponent as AttachmentSVG } from './attachment.svg';
import { ReactComponent as CheckmarkSVG } from './checkmark.svg';
import { ReactComponent as CloseSVG } from './close.svg';

const iconsMap: AppLib.IconsMap = {
  'arrow-thin-down': ArrowThinDownSVG,
  'arrow-thin-left': ArrowThinLeftSVG,
  'arrow-thin-right': ArrowThinRightSVG,
  'arrow-thin-up': ArrowThinUpSVG,
  attachment: AttachmentSVG,
  checkmark: CheckmarkSVG,
  close: CloseSVG,
};

export default iconsMap;

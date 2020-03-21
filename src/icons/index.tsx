// Get through the icons in folder using svgr plugin
const reqSvgs = require.context('!@svgr/webpack?icon=true!./', true, /\.svg$/);

const iconsMap: AppLib.IconsMap = reqSvgs.keys().reduce((images: any, path) => {
  const key = path.substring(path.lastIndexOf('/') + 1, path.lastIndexOf('.'));
  // eslint-disable-next-line no-param-reassign
  images[key] = reqSvgs(path).default;
  return images;
}, {});

export default iconsMap;

// https://storybook.js.org/docs/configurations/typescript-config/
import React from 'react';
import { addDecorator } from '@storybook/react';
// import { withOptions } from '@storybook/addon-options';
// import { withInfo } from '@storybook/addon-info';

// https://www.gatsbyjs.org/docs/visual-testing-with-storybook/
import { configure } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { checkA11y } from '@storybook/addon-a11y';

const req = require.context('../src', true, /\.stories.tsx$/);

const loadStories = () => req.keys().forEach(filename => req(filename));

// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};
// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = '';
// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = pathname => {
  action('NavigateTo:')(pathname);
};

// Storybook Decorators
// ============================================
// Global Styles ==============================
addDecorator(story => (
  <>
    <div style={{ padding: '3rem' }}>{story()}</div>
  </>
));

addDecorator(withKnobs);
addDecorator(checkA11y);

// automatically import all files ending in *.stories.js
configure(loadStories, module);

// // If you'd like to add global styles to all stories, modify this component.
// // addDecorator(GlobalStyleDecorator);

// // If you'd like to customize your storybook instance. See: https://github.com/storybooks/storybook/tree/next/addons/options
// addDecorator(
//   withOptions({
//     name: 'gatsby-ts-sb-starter',
//     url: 'https://testing.om',
//     hierarchySeparator: /\/|\./,
//     hierarchyRootSeparator: /\|/,
//   }),
// );

// addDecorator(
//   withInfo({
//     styles: {
//       header: {
//         h1: {
//           marginRight: '20px',
//           fontSize: '25px',
//           display: 'inline',
//         },
//         body: {
//           paddingTop: 0,
//           paddingBottom: 0,
//         },
//         h2: {
//           display: 'inline',
//           color: '#999',
//         },
//       },
//       infoBody: {
//         backgroundColor: '#eee',
//         padding: '0px 5px',
//         lineHeight: '2',
//       },
//     },
//     inline: true,
//     source: false,
//   }),
// );

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { select, optionsKnob, withKnobs } from '@storybook/addon-knobs';

import { documentationConfig } from '~storybook/constants';

import styles from './background-svg.module.scss';
import BackgroundSVG from './BackgroundSVG';

// const colorValues = {
//   red: '#ff0000',
//   green: 'green',
//   blue: 'blue',
// };

// const colorSelect = () => {
//   return select('Colors', colorValues, 'red');
// };

const story = storiesOf('Core|BackgroundSVG', module);

story.add(
  'Background SVG',
  () => (
    <>
      <h2>Custom Color Background Image SVG</h2>
      <div style={{ display: 'flex' }}>
        <BackgroundSVG className={styles.bgIconExample} />
        <BackgroundSVG className={styles.bgIconExampleGreen} />
        <BackgroundSVG className={styles.bgIconExampleBlue} />
      </div>
    </>
  ),
  {
    decorators: [withA11y, withInfo, withKnobs],
    parameters: documentationConfig,
  },
);

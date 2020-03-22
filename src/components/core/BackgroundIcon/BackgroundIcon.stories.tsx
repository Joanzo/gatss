import React from 'react';
import { storiesOf } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { optionsKnob, withKnobs } from '@storybook/addon-knobs';

import { documentationConfig } from '~storybook/constants';

import styles from './background-icon.module.scss';

const story = storiesOf('Core|BackgroundIcon', module);

story.add(
  'Background Icon',
  () => (
    <>
      <h2>Using Background Image</h2>
      <div className={styles['bg-icon']} style={{ width: 100, height: 100 }} />
      <br />
      <h2>Using Mask Image (no IE support)</h2>
      <div
        className={styles['bg-icon-mask']}
        style={{ width: 100, height: 100 }}
      />
    </>
  ),
  {
    decorators: [withA11y, withInfo, withKnobs],
    parameters: documentationConfig,
  },
);

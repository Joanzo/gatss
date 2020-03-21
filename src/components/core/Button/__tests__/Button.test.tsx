import React from 'react';
import {
  render,
  cleanup,
  fireEvent,
  waitForElement,
} from '@testing-library/react';
import Button from '../Button';

afterEach(cleanup);

describe('<Button />', () => {
  test('should render button', () => {
    const { getByTestId } = render(<Button>Click Me</Button>);
    const button = getByTestId('button');
    // const button = getByText('Click Me');
    expect(button.children.length).toBe(1);
    // expect(button).toHaveLength(1);
    // fireEvent.click(button);
  });
});

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
  test('should render button text correctly', () => {
    const { getByTestId } = render(<Button>Click Me</Button>);
    const button = getByTestId('button');
    expect(button.textContent).toEqual('Click Me');
  });

  test('should render prefixIcon as First Child', async () => {
    // prettier-ignore
    const { getByTestId } = render(<Button prefixIcon="arrow-thin-down">Click Me</Button>);
    const button = getByTestId('button');
    const icon = button.querySelectorAll('svg:first-child');
    expect(icon.length).toBe(1);
  });

  test('should render suffixIcon as Last Child', async () => {
    // prettier-ignore
    const { getByTestId } = render(<Button suffixIcon="arrow-thin-down">Click Me</Button>);
    const button = getByTestId('button');
    const icon = button.querySelectorAll('svg:last-child');
    expect(icon.length).toBe(1);
  });
});

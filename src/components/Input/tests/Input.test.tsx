import { render, screen } from '@testing-library/react';
import React from 'react';
import { Input } from '../Input';
import { INPUT_THEME, INPUT_TYPE } from '../InputConstants';

describe('Input', () => {
  const iconName = 'TEST_SVG';
  const Icon = () => (
    <svg role="img">
      <title>{iconName}</title>
    </svg>
  );

  it('should have text type  by default', () => {
    render(
      <Input
        ariaLabel="ariaLabel"
        label="Label"
        placeholder="placeholder"
        type={INPUT_TYPE.Text}
      />,
    );

    const input = screen.getByRole('textbox');

    expect(input).toHaveAttribute('type', 'text');
  });

  it('should have number type ', () => {
    render(
      <Input
        id="test_id"
        ariaLabel="ariaLabel"
        label="Label"
        placeholder="placeholder"
        type={INPUT_TYPE.Number}
      />,
    );

    const input = screen.getByLabelText('Label');

    expect(input).toHaveAttribute('type', 'number');
  });

  it('should have password type', () => {
    render(
      <Input
        id="test_id"
        ariaLabel="ariaLabel"
        label="Label"
        placeholder="placeholder"
        type={INPUT_TYPE.Password}
      />,
    );

    const input = screen.getByLabelText('Label');

    expect(input).toHaveAttribute('type', 'password');
  });

  it('should have id props', () => {
    render(
      <Input
        ariaLabel="ariaLabel"
        id="test_id"
        label="Label"
        placeholder="placeholder"
        type={INPUT_TYPE.Text}
      />,
    );

    const input = screen.getByLabelText('Label');

    expect(input).toHaveAttribute('id', 'test_id');
  });

  it('should have label props', () => {
    render(
      <Input
        id="test_id"
        ariaLabel="ariaLabel"
        name="phone"
        label="Label"
        placeholder="placeholder"
        type={INPUT_TYPE.Text}
      />,
    );

    const input = screen.getByLabelText('Label');

    expect(input).toBeInTheDocument();
  });

  it('should have  disabled props ', () => {
    render(
      <Input
        ariaLabel="ariaLabel"
        label="Label"
        placeholder="placeholder"
        type={INPUT_TYPE.Text}
        disabled
      />,
    );

    const input = screen.getByRole('textbox');

    expect(input).toBeDisabled();
  });

  it('should have an icon at the beginning', () => {
    const { getByRole } = render(
      <Input
        ariaLabel="ariaLabel"
        label="Label"
        placeholder="placeholder"
        type={INPUT_TYPE.Text}
        startIcon={<Icon />}
      />,
    );

    expect(getByRole('img', { name: iconName })).toBeInTheDocument();
  });

  it('should have an icon at the end', () => {
    const { getByRole } = render(
      <Input
        ariaLabel="ariaLabel"
        label="Label"
        placeholder="placeholder"
        type={INPUT_TYPE.Text}
        endIcon={<Icon />}
      />,
    );
    expect(getByRole('img', { name: iconName })).toBeInTheDocument();
  });

  it('should have helper text', () => {
    const { container } = render(
      <Input
        ariaLabel="ariaLabel"
        label="Label"
        placeholder="placeholder"
        type={INPUT_TYPE.Text}
        helperText={'test helper text'}
      />,
    );

    expect(container.getElementsByClassName('Input-helper-text').length).toBe(1);
  });

  it('should have dark mode', () => {
    const { container } = render(
      <Input
        ariaLabel="ariaLabel"
        label="Label"
        placeholder="placeholder"
        type={INPUT_TYPE.Text}
        theme={INPUT_THEME.Dark}
        helperText="test helper text"
      />,
    );

    expect(container.getElementsByClassName('InputBase-root-dark').length).toBe(1);
    expect(container.getElementsByClassName('InputBase-input-dark').length).toBe(1);
    expect(container.getElementsByClassName('Input-helper-text-dark').length).toBe(1);
  });
});

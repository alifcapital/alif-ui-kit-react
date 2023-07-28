import { render, screen } from '@testing-library/react';
import React from 'react';
import { Input } from '../Input';
import { InputTheme, InputType } from '../InputConstants';

describe('Input', () => {
  const iconName = 'TEST_SVG';
  const Icon = () => (
    <svg role="img">
      <title>{iconName}</title>
    </svg>
  );

  it('should have text type  by default', () => {
    render(<Input label="Label" placeholder="placeholder" type={InputType.Text} />);

    const input = screen.getByRole('textbox');

    expect(input).toHaveAttribute('type', 'text');
  });

  it('should have number type ', () => {
    render(<Input label="Label" placeholder="placeholder" type={InputType.Number} />);

    const input = screen.getByLabelText('Label');

    expect(input).toHaveAttribute('type', 'number');
  });

  it('should have password type', () => {
    render(<Input label="Label" placeholder="placeholder" type={InputType.Password} />);

    const input = screen.getByLabelText('Label');

    expect(input).toHaveAttribute('type', 'password');
  });

  it('should have id props', () => {
    render(<Input id="test_id" label="Label" placeholder="placeholder" type={InputType.Text} />);

    const input = screen.getByLabelText('Label');

    expect(input).toHaveAttribute('id', 'test_id');
  });

  it('should have placeholder', () => {
    render(<Input label="Label" placeholder="placeholder" type={InputType.Text} />);

    const input = screen.getByPlaceholderText('placeholder');

    expect(input).toBeInTheDocument();
  });

  it('should have label props', () => {
    render(<Input name="phone" label="Label" placeholder="placeholder" type={InputType.Text} />);

    const input = screen.getByLabelText('Label');

    expect(input).toBeInTheDocument();
  });

  it('should have  disabled props ', () => {
    render(<Input label="Label" placeholder="placeholder" type={InputType.Text} disabled />);

    const input = screen.getByRole('textbox');

    expect(input).toBeDisabled();
  });

  it('should have an icon at the beginning', () => {
    const { getByRole } = render(
      <Input label="Label" placeholder="placeholder" type={InputType.Text} startAddon={<Icon />} />,
    );

    expect(getByRole('img', { name: iconName })).toBeInTheDocument();
  });

  it('should have an icon at the end', () => {
    const { getByRole } = render(
      <Input label="Label" placeholder="placeholder" type={InputType.Text} endAddon={<Icon />} />,
    );
    expect(getByRole('img', { name: iconName })).toBeInTheDocument();
  });

  it('should have helper text', () => {
    const { container } = render(
      <Input
        label="Label"
        placeholder="placeholder"
        type={InputType.Text}
        helperText={'test helper text'}
      />,
    );

    expect(container.getElementsByClassName('Input-helper-text').length).toBe(1);
  });

  it('should have dark mode', () => {
    const { container } = render(
      <Input
        label="Label"
        placeholder="placeholder"
        type={InputType.Text}
        theme={InputTheme.Dark}
        helperText="test helper text"
      />,
    );

    expect(container.getElementsByClassName('InputBase-root-dark').length).toBe(1);
    expect(container.getElementsByClassName('InputBase-input-dark').length).toBe(1);
    expect(container.getElementsByClassName('Input-helper-text-dark').length).toBe(1);
  });
});

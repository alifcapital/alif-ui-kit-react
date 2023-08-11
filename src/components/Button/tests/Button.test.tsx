import { render, screen } from '@testing-library/react';
import React from 'react';
import { Button } from '../Button';
import { BUTTON_COLOR, BUTTON_VARIANT } from '../ButtonConstants';

describe('Button', () => {
  const iconName = 'TEST_SVG';
  const Icon = () => (
    <svg role="img">
      <title>{iconName}</title>
    </svg>
  );

  it('should have primary class by default', () => {
    render(<Button ariaLabel="Button" />);

    const primaryButton = screen.getByRole('button');

    expect(primaryButton).toHaveClass('Button-primary');
  });

  it('should have secondary class', () => {
    render(<Button ariaLabel="Button" color={BUTTON_COLOR.Secondary} />);

    const primaryButton = screen.getByRole('button');

    expect(primaryButton).toHaveClass('Button-secondary');
  });

  it('should have green class', () => {
    render(<Button ariaLabel="Button" color={BUTTON_COLOR.Green} />);

    const primaryButton = screen.getByRole('button');

    expect(primaryButton).toHaveClass('Button-green');
  });

  it('should have outlined class', () => {
    render(
      <Button ariaLabel="Button" color={BUTTON_COLOR.Green} variant={BUTTON_VARIANT.Outlined} />,
    );

    const primaryButton = screen.getByRole('button');

    expect(primaryButton).toHaveClass('Button-outlined');
  });

  it('should have text class', () => {
    render(<Button ariaLabel="Button" color={BUTTON_COLOR.Green} variant={BUTTON_VARIANT.Text} />);

    const primaryButton = screen.getByRole('button');

    expect(primaryButton).toHaveClass('Button-text');
  });

  it('should have text', () => {
    const text = 'Кнопка';
    const { getByText } = render(<Button ariaLabel="Button">{text}</Button>);

    expect(getByText(text).innerHTML).toBe(text);
  });

  it('should have pass custom classname', () => {
    const customClassName = 'customClassName';

    const { container } = render(<Button ariaLabel="Button" className={customClassName} />);

    expect(container.getElementsByClassName(customClassName).length).toBe(1);
  });

  it('should render a disabled button ', () => {
    render(<Button ariaLabel="Button" disabled />);

    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
  });

  it('should have round class', () => {
    render(
      <Button ariaLabel="Button" rounded>
        <svg></svg>
      </Button>,
    );

    const primaryButton = screen.getByRole('button');

    expect(primaryButton).toHaveClass('Button-round');
  });

  it('should have icon', () => {
    const { getByRole } = render(
      <Button ariaLabel="Button" withIcon>
        <Icon />
      </Button>,
    );

    expect(getByRole('img', { name: iconName })).toBeInTheDocument();
  });

  it('should render icon before text ', () => {
    const { getByRole } = render(
      <Button ariaLabel="Button" startIcon={<Icon />}>
        Кнопка
      </Button>,
    );

    expect(getByRole('img', { name: iconName })).toBeInTheDocument();
  });

  it('should render icon after text ', () => {
    const { getByRole } = render(
      <Button ariaLabel="Button" endIcon={<Icon />}>
        Кнопка
      </Button>,
    );

    expect(getByRole('img', { name: iconName })).toBeInTheDocument();
  });
});

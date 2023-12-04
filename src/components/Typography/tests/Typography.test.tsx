import React from 'react';
import { render } from '@testing-library/react';
import { Typography } from '../Typography';

describe('Typography', () => {
  test('display_1 style is applied correctly', () => {
    const { container } = render(<Typography variant="display-1">display-1</Typography>);
    expect(container.firstChild).toHaveClass('Typography-display_1');
  });

  test('display_2 style is applied correctly', () => {
    const { container } = render(<Typography variant="display-2">display-2</Typography>);
    expect(container.firstChild).toHaveClass('Typography-display_2');
  });

  test('heading_1 style is applied correctly', () => {
    const { container } = render(<Typography variant="heading-1">heading-1</Typography>);
    expect(container.firstChild).toHaveClass('Typography-heading_1');
  });

  test('heading_2 style is applied correctly', () => {
    const { container } = render(<Typography variant="heading-2">heading-2</Typography>);
    expect(container.firstChild).toHaveClass('Typography-heading_2');
  });

  test('heading_2-medium style is applied correctly', () => {
    const { container } = render(
      <Typography variant="heading-2-medium">heading-2-medium</Typography>,
    );
    expect(container.firstChild).toHaveClass('Typography-heading_2-medium');
  });

  test('heading_3 style is applied correctly', () => {
    const { container } = render(<Typography variant="heading-3">heading-3</Typography>);
    expect(container.firstChild).toHaveClass('Typography-heading_3');
  });

  test('heading_3-medium style is applied correctly', () => {
    const { container } = render(
      <Typography variant="heading-3-medium">heading-3-medium</Typography>,
    );
    expect(container.firstChild).toHaveClass('Typography-heading_3-medium');
  });

  test('heading-regular style is applied correctly', () => {
    const { container } = render(
      <Typography variant="heading-regular">heading-regular</Typography>,
    );
    expect(container.firstChild).toHaveClass('Typography-heading-regular');
  });

  test('heading-subtitle style is applied correctly', () => {
    const { container } = render(
      <Typography variant="heading-subtitle">heading-subtitle</Typography>,
    );
    expect(container.firstChild).toHaveClass('Typography-heading-subtitle');
  });

  test('heading-subtitle-medium style is applied correctly', () => {
    const { container } = render(
      <Typography variant="heading-subtitle-medium">heading-subtitle-medium</Typography>,
    );
    expect(container.firstChild).toHaveClass('Typography-heading-subtitle-medium');
  });

  test('heading-small style is applied correctly', () => {
    const { container } = render(<Typography variant="heading-small">heading-small</Typography>);
    expect(container.firstChild).toHaveClass('Typography-heading-small');
  });

  test('body-big style is applied correctly', () => {
    const { container } = render(<Typography variant="body-big">body-big</Typography>);
    expect(container.firstChild).toHaveClass('Typography-body-big');
  });

  test('body-normal style is applied correctly', () => {
    const { container } = render(<Typography variant="body-normal">body-normal</Typography>);
    expect(container.firstChild).toHaveClass('Typography-body-normal');
  });

  test('body-small style is applied correctly', () => {
    const { container } = render(<Typography variant="body-small">body-small</Typography>);
    expect(container.firstChild).toHaveClass('Typography-body-small');
  });

  test('body-paragraph style is applied correctly', () => {
    const { container } = render(<Typography variant="body-paragraph">body-paragraph</Typography>);
    expect(container.firstChild).toHaveClass('Typography-body-paragraph');
  });

  test('caption style is applied correctly', () => {
    const { container } = render(<Typography variant="caption">caption</Typography>);
    expect(container.firstChild).toHaveClass('Typography-caption');
  });

  test('all-captions style is applied correctly', () => {
    const { container } = render(<Typography variant="all-captions">all-captions</Typography>);
    expect(container.firstChild).toHaveClass('Typography-all-captions');
  });
});

import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import { Accordion } from '../Accordion';

describe('Accordion', () => {
  const header = 'Карты';
  const content =
    'What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting';

  it('should render heading', () => {
    const { container } = render(
      <Accordion ariaLabel="acorrdion label" content={content} header={header} />,
    );

    expect(container.getElementsByClassName('Accordion-heading-label')[0].textContent).toBe(header);
  });

  it('should render arrow icon', () => {
    const { container } = render(
      <Accordion ariaLabel="acorrdion label" content={content} header={header} />,
    );

    expect(container.getElementsByClassName('Accordion-heading-arrow')[0].children[0].tagName).toBe(
      'svg',
    );
  });

  it('should render content', async () => {
    const { container } = render(
      <Accordion color="red" ariaLabel="acorrdion label" content={content} header={header} />,
    );

    const element = container.getElementsByClassName('Accordion-details')[0];

    fireEvent.click(screen.getByRole('button'));

    await waitFor(() =>
      expect(container.getElementsByClassName('Accordion-details-open').length).toBe(1),
    );

    expect(element.textContent).toBe(content);
  });
});

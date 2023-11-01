import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import { Dropdown } from '..';
import { IDropdownListItem } from '../DropdownTypes';

describe('Dropdown', () => {
  const label = 'Dropdown label';
  const items: IDropdownListItem[] = [
    {
      id: 1,
      label: 'TJS',
      value: 'tjs',
    },
    {
      id: 2,
      label: 'USD',
      value: 'usd',
    },
    {
      id: 3,
      label: 'RUB',
      value: 'rub',
    },
  ];

  it('should have label', () => {
    const { getByText } = render(
      <Dropdown ariaLabel={label} label={label} items={items} type="default" />,
    );

    expect(getByText(label).innerHTML).toBe(label);
  });

  it('should not have label', () => {
    const { container } = render(<Dropdown ariaLabel={label} items={items} type="default" />);

    expect(container.getElementsByClassName('Dropdown-label')[0]?.textContent).toBe(undefined);
  });

  it('should have selected value by default', () => {
    const { container } = render(
      <Dropdown
        ariaLabel={label}
        items={items}
        selected={{ id: 1, label: 'USD', value: 'usd' }}
        type="default"
      />,
    );

    expect(container.getElementsByClassName('Dropdown-base')[0]?.textContent).toBe('USD');
  });

  it('should have empty value by default', () => {
    const { container } = render(<Dropdown ariaLabel={label} items={items} type="default" />);

    expect(container.getElementsByClassName('Dropdown-base')[0]?.textContent).toBe('');
  });

  it('should have arrow icon', () => {
    const { container } = render(<Dropdown ariaLabel={label} items={items} type="default" />);

    expect(container.getElementsByClassName('Dropdown-input-icon')[0].children[0].nodeName).toBe(
      'svg',
    );
  });

  it('should open list', async () => {
    const { container } = render(<Dropdown ariaLabel={label} items={items} type="default" />);

    fireEvent.click(screen.getByRole('trigger'));

    await waitFor(() => {
      expect(container.getElementsByClassName('Dropdown-list-item').length).toBe(items.length);
    });
  });

  it('should close list', async () => {
    const { container } = render(<Dropdown ariaLabel={label} items={items} type="default" />);

    fireEvent.dblClick(screen.getByRole('trigger'));

    await waitFor(() => {
      expect(container.getElementsByClassName('Dropdown-list').length).toBe(0);
    });
  });
});

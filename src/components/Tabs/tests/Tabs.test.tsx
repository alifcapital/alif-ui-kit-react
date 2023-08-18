import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Tabs } from '../Tabs';
import { TABS_SIZE } from '../TabsConstants';

describe('Tabs', () => {
  const tabList = [
    { id: 'one', label: 'Label 1' },
    {
      id: 'two',
      label: 'Label 2',
    },
  ];

  it('should render 2 tabs', () => {
    render(<Tabs tabs={tabList} />);

    const tabs = screen.getAllByRole('button');

    tabs.forEach((tab) => {
      expect(tab).toHaveClass('Tab-root');
    });

    expect(tabs.length).toBe(2);
  });

  it('should have small size', () => {
    render(<Tabs size={TABS_SIZE.Small} tabs={tabList} />);

    const tabs = screen.getAllByRole('button');

    tabs.forEach((tab) => {
      expect(tab).toHaveClass('Tab-root');
      expect(tab).toHaveClass('Tab-root-small');
    });
  });

  it('should render fisrt tab as active', () => {
    render(<Tabs tabs={tabList} />);

    const tabs = screen.getAllByRole('button');

    expect(tabs[0]).toHaveClass('Tab-root-active');
  });

  it('should active  tab after click', async () => {
    const user = userEvent.setup();

    render(<Tabs tabs={tabList} />);

    const tabs = screen.getAllByRole('button');

    await user.click(tabs[1]);

    expect(tabs[1]).toHaveClass('Tab-root-active');
  });
});

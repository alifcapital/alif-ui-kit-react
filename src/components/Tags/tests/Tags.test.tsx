import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Tags } from '../Tags';
import { TAGS_SIZE } from '../TagsConstants';

describe('Tags', () => {
  const tabList = [
    { id: 'one', label: 'Label 1' },
    {
      id: 'two',
      label: 'Label 2',
    },
  ];

  it('should render 2 tags', () => {
    render(<Tags tags={tabList} />);

    const tags = screen.getAllByRole('button');

    tags.forEach((tab) => {
      expect(tab).toHaveClass('Tag');
    });

    expect(tags.length).toBe(2);
  });

  it('should have medium size', () => {
    render(<Tags size={TAGS_SIZE.Medium} tags={tabList} />);

    const tags = screen.getAllByRole('button');

    tags.forEach((tab) => {
      expect(tab).toHaveClass('Tag');
      expect(tab).toHaveClass('Tag-medium');
    });
  });

  it('should have large size', () => {
    render(<Tags size={TAGS_SIZE.large} tags={tabList} />);

    const tags = screen.getAllByRole('button');

    tags.forEach((tab) => {
      expect(tab).toHaveClass('Tag');
      expect(tab).toHaveClass('Tag-large');
    });
  });

  it('should render fisrt tag as active', () => {
    render(<Tags tags={tabList} />);

    const tags = screen.getAllByRole('button');

    expect(tags[0]).toHaveClass('Tag-active');
  });

  it('should render active tab', () => {
    render(<Tags activeTab="two" tags={tabList} />);

    const tags = screen.getAllByRole('button');

    expect(tags[1]).toHaveClass('Tag-active');
  });

  it('should change active tab color', () => {
    render(<Tags activeTab="two" activeColor="#000" tags={tabList} />);

    const tags = screen.getAllByRole('button');

    expect(tags[1].style.backgroundColor).toEqual('rgb(0, 0, 0)');
  });

  it('should active  tab after click', async () => {
    const user = userEvent.setup();

    render(<Tags tags={tabList} />);

    const tags = screen.getAllByRole('button');

    await user.click(tags[1]);

    expect(tags[1]).toHaveClass('Tag-active');
  });
});

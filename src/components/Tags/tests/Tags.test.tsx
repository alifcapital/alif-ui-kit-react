import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Tags } from '../Tags';
import { TAGS_SIZE } from '../TagsConstants';

describe('Tags', () => {
  const tagList = [
    { id: 'one', label: 'Label 1' },
    {
      id: 'two',
      label: 'Label 2',
    },
  ];

  it('should render 2 tags', () => {
    render(<Tags tags={tagList} />);

    const tags = screen.getAllByRole('button');

    tags.forEach((tag) => {
      expect(tag).toHaveClass('Tag');
    });

    expect(tags.length).toBe(2);
  });

  it('should have medium size', () => {
    render(<Tags size={TAGS_SIZE.Medium} tags={tagList} />);

    const tags = screen.getAllByRole('button');

    tags.forEach((tag) => {
      expect(tag).toHaveClass('Tag');
      expect(tag).toHaveClass('Tag-medium');
    });
  });

  it('should have large size', () => {
    render(<Tags size={TAGS_SIZE.Large} tags={tagList} />);

    const tags = screen.getAllByRole('button');

    tags.forEach((tag) => {
      expect(tag).toHaveClass('Tag');
      expect(tag).toHaveClass('Tag-large');
    });
  });

  it('should render fisrt tag as active', () => {
    render(<Tags tags={tagList} />);

    const tags = screen.getAllByRole('button');

    expect(tags[0]).toHaveClass('Tag-active');
  });

  it('should render active tag', () => {
    render(<Tags activeTag="two" tags={tagList} />);

    const tags = screen.getAllByRole('button');

    expect(tags[1]).toHaveClass('Tag-active');
  });

  it('should change active tag color', () => {
    render(<Tags activeTag="two" activeColor="#000" tags={tagList} />);

    const tags = screen.getAllByRole('button');

    expect(tags[1].style.backgroundColor).toEqual('rgb(0, 0, 0)');
  });

  it('should active  tag after click', async () => {
    const user = userEvent.setup();

    render(<Tags tags={tagList} />);

    const tags = screen.getAllByRole('button');

    await user.click(tags[1]);

    expect(tags[1]).toHaveClass('Tag-active');
  });
});

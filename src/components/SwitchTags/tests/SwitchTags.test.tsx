import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { SwitchTags } from '../SwitchTags';
import { SWITCH_TAGS_SIZE } from '../SwitchTagsConstants';

describe('SwitchTags', () => {
  const tagList = [
    { id: 'one', label: 'Label 1' },
    {
      id: 'two',
      label: 'Label 2',
    },
  ];

  it('should render 2 tags', () => {
    render(<SwitchTags tags={tagList} />);

    const tags = screen.getAllByRole('button');

    tags.forEach((tag) => {
      expect(tag).toHaveClass('SwitchTag');
    });

    expect(tags.length).toBe(2);
  });

  it('should have medium size', () => {
    render(<SwitchTags size={SWITCH_TAGS_SIZE.Medium} tags={tagList} />);

    const tags = screen.getAllByRole('button');

    tags.forEach((tag) => {
      expect(tag).toHaveClass('SwitchTag');
      expect(tag).toHaveClass('SwitchTag-medium');
    });
  });

  it('should have large size', () => {
    render(<SwitchTags size={SWITCH_TAGS_SIZE.Large} tags={tagList} />);

    const tags = screen.getAllByRole('button');

    tags.forEach((tag) => {
      expect(tag).toHaveClass('SwitchTag');
      expect(tag).toHaveClass('SwitchTag-large');
    });
  });

  it('should render fisrt tag as active', () => {
    render(<SwitchTags tags={tagList} />);

    const tags = screen.getAllByRole('button');

    expect(tags[0]).toHaveClass('SwitchTag-active');
  });

  it('should render active tag', () => {
    render(<SwitchTags activeTag="two" tags={tagList} />);

    const tags = screen.getAllByRole('button');

    expect(tags[1]).toHaveClass('SwitchTag-active');
  });

  it('should change active tag color', () => {
    const { container } = render(<SwitchTags activeColor="#000" tags={tagList} />);

    const tag = getComputedStyle(container.getElementsByClassName('ActiveTab')[0]);

    expect(tag.backgroundColor).toEqual('rgb(0, 0, 0)');
  });

  it('should active  tag after click', async () => {
    const user = userEvent.setup();

    render(<SwitchTags tags={tagList} />);

    const tags = screen.getAllByRole('button');

    await user.click(tags[1]);

    expect(tags[1]).toHaveClass('SwitchTag-active');
  });
});

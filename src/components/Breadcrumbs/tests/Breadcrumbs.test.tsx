import React from 'react';
import { render } from '@testing-library/react';
import { Breadcrumbs } from '../Breadcrumbs';
import { IBreadcrumbsItem } from '../BreadcrumbsTypes';

const breadcrumbs = [
  {
    key: 1,
    href: '/',
    label: <a href="https://alifshop.tj">Home</a>,
  },
  {
    key: 2,
    href: '/react/components',
    label: 'Components',
  },
  {
    key: 3,
    href: '/test',
    label: 'Breadcrumbs',
  },
];

describe('Breadcrumbs', () => {
  const handleClick = (item: IBreadcrumbsItem) => {
    window.location.href = item.href;
  };

  it('should render', () => {
    const { container } = render(<Breadcrumbs onLabelClick={handleClick} items={breadcrumbs} />);

    expect(container).toBeInTheDocument();
  });

  it('renders the proper accessibility attributes for nav tag', () => {
    const { container } = render(<Breadcrumbs onLabelClick={handleClick} items={breadcrumbs} />);
    const breadcrumbsElement = container.querySelector('.Breadcrumbs');

    expect(breadcrumbsElement).toHaveAttribute('aria-label', 'Breadcrumb');
  });

  it('should apply proper aria attributes to separators', () => {
    const { container } = render(<Breadcrumbs onLabelClick={handleClick} items={breadcrumbs} />);
    const separatorElement = container.querySelector('.Breadcrumbs-separator');

    expect(separatorElement).toHaveAttribute('aria-hidden', 'true');
  });

  it('should apply proper aria attributes to current link', () => {
    const { container } = render(
      <Breadcrumbs
        onLabelClick={handleClick}
        items={[
          {
            key: 1,
            href: '/test',
            label: 'Breadcrumbs',
          },
        ]}
      />,
    );
    const itemElement = container.querySelector('.Breadcrumbs-item');

    expect(itemElement).toHaveAttribute('aria-current', 'page');
  });
});

import React from 'react';
import { render } from '@testing-library/react';
import { Breadcrumbs } from '../Breadcrumbs';
import { IBreadcrumbsItem } from '../BreadcrumbsTypes';

const breadcrumbs = [
  {
    href: '/',
    label: <a href="https://alifshop.tj">Home</a>,
  },
  {
    href: '/react/components',
    label: 'Components',
  },
  {
    href: '/test',
    label: 'Breadcrumbs',
  },
];

describe('Breadcrumbs', () => {
  const handleClick = (item: IBreadcrumbsItem) => {
    window.location.href = item.href;
  };

  it('should match snapshot', () => {
    const { container } = render(<Breadcrumbs onLabelClick={handleClick} items={breadcrumbs} />);

    expect(container).toMatchSnapshot();
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
            href: '/test',
            label: 'Breadcrumbs',
          },
        ]}
      />,
    );
    const labelElement = container.querySelector('.Breadcrumbs-label');

    expect(labelElement).toHaveAttribute('aria-current', 'page');
  });
});

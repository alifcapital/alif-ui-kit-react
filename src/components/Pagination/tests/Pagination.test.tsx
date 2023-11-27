import { render } from '@testing-library/react';
import React from 'react';
import { Pagination } from '../Pagination';

describe('Pagination', () => {
  it('should render correctly', () => {
    const { getAllByRole } = render(
      <Pagination
        currentPage={1}
        onPageChange={() => {
          console.log('Pagination works!');
        }}
        pageCount={10}
        boundaryCount={1}
        siblingCount={1}
      />,
    );
    expect(getAllByRole('pagination')[0].childNodes).toHaveLength(9);
  });

  it('prev should be disabled when current page is 1', () => {
    const { getAllByRole } = render(
      <Pagination
        currentPage={1}
        onPageChange={() => {
          console.log('Pagination works!');
        }}
        pageCount={10}
        boundaryCount={1}
        siblingCount={1}
      />,
    );
    expect(getAllByRole('pagination')[0].firstChild).toBeDisabled();
  });
  it('next should be disabled when current page is last page', () => {
    const { getAllByRole } = render(
      <Pagination
        currentPage={10}
        onPageChange={() => {
          console.log('Pagination works!');
        }}
        pageCount={10}
        boundaryCount={1}
        siblingCount={1}
      />,
    );
    expect(getAllByRole('pagination')[0].lastChild).toBeDisabled();
  });
});

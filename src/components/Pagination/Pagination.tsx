import React from 'react';
import { RightNext, LeftPrev } from 'alif-icon-kit-react';

import { IPaginationProps } from './PaginationTypes';

import './PaginationStyles.scss';

const DOTS = '...';

export const Pagination = (props: IPaginationProps) => {
  const { currentPage, onPageChange, pageCount, boundaryCount = 1, siblingCount = 1 } = props;

  const range = (start: number, end: number) => {
    const length = end - start + 1;
    return Array.from({ length }, (_, i) => start + i);
  };

  const startPages = range(1, Math.min(boundaryCount, pageCount));
  const endPages = range(Math.max(pageCount - boundaryCount + 1, boundaryCount + 1), pageCount);

  const siblingsStart = Math.max(
    Math.min(currentPage - siblingCount, pageCount - boundaryCount - siblingCount * 2 - 1),
    boundaryCount + 2,
  );

  const siblingsEnd = Math.min(
    Math.max(currentPage + siblingCount, boundaryCount + siblingCount * 2 + 2),
    endPages.length > 0 ? endPages[0] - 2 : pageCount - 1,
  );
  const itemList = [
    ...startPages,
    ...(siblingsStart > boundaryCount + 2
      ? [DOTS]
      : boundaryCount + 1 < pageCount - boundaryCount
      ? [boundaryCount + 1]
      : []),
    ...range(siblingsStart, siblingsEnd),
    ...(siblingsEnd < pageCount - boundaryCount - 1
      ? [DOTS]
      : pageCount - boundaryCount > boundaryCount
      ? [pageCount - boundaryCount]
      : []),

    ...endPages,
  ];

  return (
    <div className="Pagination" role="pagination">
      <button
        className="Arrow-button"
        aria-label="Go to previous page"
        aria-controls="prev"
        disabled={currentPage === 1}
        aria-disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <LeftPrev />
      </button>

      {itemList.map((item, index) => {
        return (
          <button
            className="Number-button"
            key={index}
            {...(item !== DOTS
              ? {
                  ['aria-current']: currentPage === item,
                  ['aria-label']: `Go to page ${item}`,
                  onClick: () => onPageChange(item as number),
                }
              : {})}
          >
            {item}
          </button>
        );
      })}
      <button
        aria-label="Go to next page"
        className="Arrow-button"
        aria-controls="next"
        disabled={currentPage === pageCount}
        aria-disabled={currentPage === pageCount}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <RightNext />
      </button>
    </div>
  );
};

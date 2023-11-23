import React from 'react';
import { RightNext, LeftPrev } from 'alif-icon-kit-react';

import { IPaginationProps } from './PaginationTypes';

import './PaginationStyles.scss';
import { DOTS, PAGINATION_VARIANTS } from './PaginationConstants';
import clsx from 'clsx';

export const Pagination = (props: IPaginationProps) => {
  const {
    currentPage,
    onPageChange,
    pageCount,
    boundaryCount = 1,
    siblingCount = 1,
    buttonAriaLabel = 'Go to page',
    nextButtonAriaLabel = 'Go to next page',
    prevButtonAriaLabel = 'Go to previous page',
    variant = PAGINATION_VARIANTS.SQUARED,
  } = props;

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

  const getBeforeRange = () => {
    if (siblingsStart > boundaryCount + 2) {
      return [DOTS];
    }
    if (boundaryCount + 1 < pageCount - boundaryCount) {
      return [boundaryCount + 1];
    }
    return [];
  };

  const getAfterRange = () => {
    if (siblingsEnd < pageCount - boundaryCount - 1) {
      return [DOTS];
    }
    if (pageCount - boundaryCount > boundaryCount) {
      return [pageCount - boundaryCount];
    }
    return [];
  };

  const itemList = [
    ...startPages,
    ...getBeforeRange(),
    ...range(siblingsStart, siblingsEnd),
    ...getAfterRange(),
    ...endPages,
  ];

  return (
    <div className="Pagination" role="pagination">
      <button
        className="Pagination-arrow-button"
        aria-label={prevButtonAriaLabel}
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
            className={clsx({
              ['Pagination-number-button']: true,
              ['Pagination-number-button-squared']: variant === PAGINATION_VARIANTS.SQUARED,
              ['Pagination-number-button-rounded']: variant === PAGINATION_VARIANTS.ROUNDED,
            })}
            key={index}
            {...(item !== DOTS
              ? {
                  ['aria-current']: currentPage === item,
                  ['aria-label']: `${buttonAriaLabel} ${item}`,
                  onClick: () => onPageChange(item as number),
                }
              : {})}
          >
            {item}
          </button>
        );
      })}
      <button
        aria-label={nextButtonAriaLabel}
        className="Pagination-arrow-button"
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

import { PAGINATION_VARIANTS } from './PaginationConstants';
export interface IPaginationProps {
    pageCount: number;
    currentPage: number;
    onPageChange: (page: number) => void;
    boundaryCount?: number;
    siblingCount?: number;
    prevButtonAriaLabel?: string;
    nextButtonAriaLabel?: string;
    buttonAriaLabel?: string;
    variant?: `${PAGINATION_VARIANTS}`;
}

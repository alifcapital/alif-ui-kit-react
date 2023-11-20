export interface IPaginationProps {
  pageCount: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  boundaryCount?: number;
  siblingCount?: number;
}

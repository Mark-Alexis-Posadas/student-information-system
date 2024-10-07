export interface PaginationTypes {
  handleNext: () => void;
  handlePrev: () => void;
  totalPages: number;
  currentPage: number;
  setCurrentPage: (arg0: number) => void;
  itemsPerPage: number;
}

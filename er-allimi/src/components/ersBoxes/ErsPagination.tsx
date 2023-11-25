import { useRecoilValue, useRecoilState } from 'recoil';
import { Pagination } from '@components';
import { sortedErsWithRadiusState, ersPaginationState } from '@stores';
import { ERS_CNT_PER_PAGE } from '@constants';

interface ErsPaginationProps {
  className?: string;
}

function ErsPagination({ className }: ErsPaginationProps) {
  const sortedErsWithRadius = useRecoilValue(sortedErsWithRadiusState);
  const [currentPage, setCurrentPage] = useRecoilState(ersPaginationState);

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Pagination
      totCnt={sortedErsWithRadius.length}
      currentPage={currentPage}
      cntPerPage={ERS_CNT_PER_PAGE}
      handlePageClick={handlePageClick}
      className={className}
    />
  );
}

export default ErsPagination;

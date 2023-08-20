import PropTypes from 'prop-types';
import { useRecoilValue, useRecoilState } from 'recoil';
import { Pagination } from '@components';
import { sortedErsWithRadiusState, ersPaginationState } from '@stores';
import { ERS_CNT_PER_PAGE } from '@constants';

function ErsPagination({ className }) {
  const sortedErsWithRadius = useRecoilValue(sortedErsWithRadiusState);
  const [currentPage, setCurrentPage] = useRecoilState(ersPaginationState);

  const handlePageClick = (page) => {
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

ErsPagination.propTypes = {
  className: PropTypes.string,
};

export default ErsPagination;

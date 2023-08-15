import PropTypes from 'prop-types';
import { useState } from 'react';
import { Pagination } from '@components';

function ErsPagination({ className }) {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <Pagination
      totCnt={15}
      currentPage={currentPage}
      handlePageClick={handlePageClick}
      className={className}
    />
  );
}

ErsPagination.propTypes = {
  className: PropTypes.string,
};

export default ErsPagination;

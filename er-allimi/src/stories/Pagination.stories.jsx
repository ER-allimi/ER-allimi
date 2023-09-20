import { useState } from 'react';
import { Pagination } from '@components';

export default {
  title: 'Pagination',
  component: Pagination,
  args: {
    totCnt: 23,
  },
};

const Template = (args) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (newPage) => setCurrentPage(newPage);

  return (
    <Pagination
      {...args}
      currentPage={currentPage}
      handlePageClick={handlePageClick}
    />
  );
};

export const Default = Template.bind();

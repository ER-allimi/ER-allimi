import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

function Pagination({
  totCnt,
  cntPerPage,
  currentPage,
  handlePageClick,
  className,
}) {
  const numOfPages = Math.ceil(totCnt / cntPerPage);

  const renderPages = Array(numOfPages)
    .fill(0)
    .map((_, idx) => {
      return (
        <PageNum
          key={idx + 1}
          active={currentPage === idx + 1}
          onClick={() => handlePageClick(idx + 1)}
        >
          {idx + 1}
        </PageNum>
      );
    });

  return (
    <StyledPagination className={className}>{renderPages}</StyledPagination>
  );
}

const StyledPagination = styled.div`
  display: flex;
  justify-content: center;
  font-size: 13px;
`;

const activePageNum = ({ theme, active }) =>
  active &&
  css`
    border: 1px solid ${theme.colors.gray};
    background-color: ${theme.colors.gray};
    font-weight: 700;
    color: white;
  `;

const PageNum = styled.span`
  display: inline-block;
  margin-right: 0.5rem;
  padding: 0rem 0.35rem;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.gray};
  font-size: inherit;
  cursor: pointer;

  &:nth-last-of-type(1) {
    margin-right: none;
  }

  ${activePageNum}
`;

Pagination.propTypes = {
  totCnt: PropTypes.number.isRequired,
  cntPerPage: PropTypes.number,
  currentPage: PropTypes.number.isRequired,
  handlePageClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

Pagination.defaultProps = {
  cntPerPage: 5,
};

export default Pagination;

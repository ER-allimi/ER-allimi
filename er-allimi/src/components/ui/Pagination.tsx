import styled from '@emotion/styled';
import { css, Theme } from '@emotion/react';

interface PaginationProps {
  totCnt: number;
  cntPerPage?: number;
  currentPage: number;
  handlePageClick: (page: number) => void;
  className?: string;
}

function Pagination({
  totCnt,
  cntPerPage = 5,
  currentPage,
  handlePageClick,
  className,
}: PaginationProps) {
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

interface ActivePageNumProps {
  theme: Theme;
  active: boolean;
}

const activePageNum = ({ theme, active }: ActivePageNumProps) =>
  active &&
  css`
    border: 1px solid ${theme.colors.gray};
    background-color: ${theme.colors.gray};
    font-weight: 700;
    color: white;
  `;

interface PageNumProps {
  theme?: Theme;
  active: boolean;
}

const PageNum = styled.span<PageNumProps>`
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

export default Pagination;

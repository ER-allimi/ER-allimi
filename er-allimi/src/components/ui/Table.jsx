import { css } from '@emotion/react';
import styled from '@emotion/styled';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { theme } from '@styles';

function Table({ columns, defaultData }) {
  const [data, setData] = useState(() => [...defaultData]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <TableContainer>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <StyledTh key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
              </StyledTh>
            ))}
          </tr>
        ))}
      </thead>
      <StyledBody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <StyledTd key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </StyledTd>
            ))}
          </tr>
        ))}
      </StyledBody>
    </TableContainer>
  );
}

const TableContainer = styled.table`
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-collapse: collapse;
`;
const StyledBody = styled.tbody`
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  tr:last-child th,
  tr:last-child td {
    border-bottom: 0;
  }
`;

const textBox = () => css`
  padding: .3rem .5rem;
  min-width: 7rem;
  text-align: center;
  margin: 0;
  border-bottom: 1px solid ${theme.colors.gray};
  border-right: 1px solid ${theme.colors.gray};
`;

const StyledTh = styled.th`
  background-color: #ddd;
  color: ${({ theme }) => theme.colors.grayDark};
  position: sticky;
  top: 0;
  border-top: 0;
  background-clip: padding-box;
  ${textBox}
  /* white-space: pre-line; */
  line-height: 0.7rem;

  font-size: 12px;
  @media (max-width: ${({ theme }) => theme.breakPoints.md}) {
    font-size: 11px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.sm}) {
    font-size: 10px;
  }
`;

const StyledTd = styled.td`
  ${textBox}
  font-size: 11px;
  @media (max-width: ${({ theme }) => theme.breakPoints.md}) {
    font-size: 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.sm}) {
    font-size: 9px;
  }
`;


Table.propTypes = {
  columns: PropTypes.array,
  defaultData: PropTypes.array,
};
export default Table;

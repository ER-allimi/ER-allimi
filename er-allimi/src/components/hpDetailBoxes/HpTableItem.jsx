import { Table } from '@components';
import { createColumnHelper } from '@tanstack/react-table';
import PropTypes from 'prop-types';

function HpTableItem({ title, data }) {
  const indexTitle = `가용 병상 수(초과 병상 수) /\n
전체 병상수`;

  const columnHelper = createColumnHelper();
  const columns = [
    columnHelper.accessor('type', {
      header: title,
    }),
    columnHelper.accessor('availableBeds', {
      header: indexTitle,
      cell: (info) => {
        const rowData = info.row.original;
        return rowData.availableBeds >= 0 ||
          typeof rowData.availableBeds === 'string'
          ? `${rowData.availableBeds}/${rowData.totalBeds}`
          : `0(${-1 * rowData.availableBeds})/${rowData.totalBeds}`;
      },
    }),
  ];
  return <Table columns={columns} defaultData={data}></Table>;
}

HpTableItem.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
};

export default HpTableItem;

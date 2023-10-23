import { Table } from '@components';
const columns = [
  {
    header: '번호',
    accessorKey: 'type',
  },
  {
    header: '이름',
    accessorKey: 'name',
  },
];
const defaultData = [
  {
    type: 1,
    name: '홍길동',
  },
  {
    type: 2,
    name: '로미오',
  },
];
export default {
  title: 'Table',
  component: Table,
  args: {
    columns,
    defaultData,
  },
};

export const Default = {};

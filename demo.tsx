import React from 'react';
import './index.css';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  key: string;
  name: string;
  age: number;
  tel: string;
  phone: number;
  address: string;
}

// In the fifth row, other columns are merged into first column
// by setting it's colSpan to be 0
const sharedOnCell = (_: DataType, index: number) => {
  if (index === 1) {
    return { colSpan: 0 };
  }

  return {};
};

const columns: ColumnsType<DataType> = [
  {
    title: 'col1',
    dataIndex: 'name',
    onCell: (_, index) => {
      //
      if (index === 0) {
        return { rowSpan: 4 };
      }
      if (index > 0 && index < 4) {
        return { rowSpan: 0 };
      }

      // 干扰可控
      if (index === 4) {
        return { rowSpan: 3 };
      }
      if (index > 4 && index < 7) {
        return { rowSpan: 0 };
      }

      // 集群可控
      if (index === 7) {
        return { rowSpan: 3 };
      }
      if (index > 7 && index <= 9) {
        return { rowSpan: 0 };
      }
    },
  },
  {
    title: 'col2',
    key: 'index',
    dataIndex: 'index',
  },
  {
    title: 'col3',
    key: 'result',
    dataIndex: 'result',
  },
  {
    title: 'col4',
    key: 'requirement',
    dataIndex: 'requirement',
  },
];

const data = [
  {
    name: '第一条',
    index: '指令1',
    result: '100%',
    requirement: '指令1＞80%',
  },
  {
    name: '第一条',
    index: '指令2',
    result: '0.75s',
    requirement: '指令2＜1s',
  },
  {
    name: '第一条',
    index: '指令3',
    result: '100%',
    requirement: '指令3＞85%',
  },
  {
    name: '第一条',
    index: '指令4',
    result: '95%',
    requirement: '指令4＞80%',
  },
  {
    name: '第二条',
    index: '指令1',
    result: '100%',
    requirement: '指令1＞80%',
  },
  {
    name: '第二条',
    index: '指令2',
    result: '0.75s',
    requirement: '指令2＜1s',
  },
  {
    name: '第二条',
    index: '指令3',
    result: '100%',
    requirement: '指令3＞85%',
  },
  {
    name: '第三条',
    index: '指令1',
    result: '10%',
    requirement: '指令1＞80%',
  },
  {
    name: '第三条',
    index: '指令2',
    result: '92%',
    requirement: '指令1＞90%',
  },
  {
    name: '第三条',
    index: '指令3',
    result: '87%',
    requirement: '指令3＞85%',
  },
];

const App: React.FC = () => (
  <Table columns={columns} dataSource={data} bordered />
);

export default App;

import { Button, Popconfirm, Space, Table, Tag } from 'antd';
import { history } from '../../.umi/core/history';

const columns = [
  {
    title: '员工id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '员工姓名',
    dataIndex: 'nickname',
    key: 'nickname',
  },
  {
    title: '部门',
    dataIndex: 'department',
    key: 'department',
  },
  {
    title: '操作时间',
    dataIndex: 'action_time',
    key: 'action_time',
    render: (text) => (new Date(text)).toLocaleString(),
    sorter: (a, b) => new Date(a.create_time) - new Date(b.create_time),
  },
  {
    title: '备注',
    dataIndex: 'notes',
    key: 'notes',
  },

];

export default function({ process }) {

  return <Table columns={columns} dataSource={process} />;

}
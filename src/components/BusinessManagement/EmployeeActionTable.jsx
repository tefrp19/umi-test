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
    dataIndex: 'EmployeeName',
    key: 'EmployeeName',
  },
  {
    title: '部门',
    dataIndex: 'role',
    key: 'role',
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
const data = [
  {
    id: 1,
    key: 1,
    EmployeeId: 1,
    EmployeeName: '张三',
    role: '客户部',
    action_time: '2023-04-21T13:27:20.000Z',
    notes: '客户主动进厂维修',
  },
  {
    id: 2,
    key: 2,
    EmployeeId: 2,
    EmployeeName: '李四',
    role: '售后部',
    action_time: '2023-04-22T07:27:20.000Z',
    notes: '汽车维修，消耗宝马X5 2.0T气门室盖1个',
  },
  {
    id: 3,
    key: 3,
    EmployeeId: 3,
    EmployeeName: '王五',
    role: '配件部',
    action_time: '2023-04-22T09:27:20.000Z',
    notes: '配件出库，出库宝马X5 2.0T气门室盖1个',
  },
];
export default function() {

  return <Table columns={columns} dataSource={data} />;

}
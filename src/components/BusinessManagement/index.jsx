import { PageContainer } from '@ant-design/pro-components';
import { Button, Card, Input, Popconfirm, Space, Switch, Table, DatePicker } from 'antd';
import { history } from '@umijs/max';

const { RangePicker } = DatePicker;

function onChange() {

}

const columns = [
  {
    title: '工单编号',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '客户编号',
    dataIndex: 'clientId',
    key: 'clientId',
  },
  {
    title: '客户姓名',
    dataIndex: 'clientName',
    key: 'clientName',
  },
  {
    title: '车牌号',
    dataIndex: 'carNumber',
    key: 'carNumber',
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    filters: [
      {
        text: '联系客户',
        value: '联系客户',
      },
      {
        text: '进行中',
        value: '进行中',
      },
      {
        text: '完成业务',
        value: '完成业务',
      },
      {
        text: '回访中',
        value: '回访中',
      },
      {
        text: '已结束',
        value: '已结束',
      },
    ],
    onFilter: (value, record) => record.status === value,
  },
  {
    title: '创建时间',
    dataIndex: 'create_time',
    key: 'create_time',
    render: (text) => text ? (new Date(text)).toLocaleString() : null,
    sorter: (a, b) => new Date(a.create_time) - new Date(b.create_time),
  },
  {
    title: '完成时间',
    dataIndex: 'finish_time',
    key: 'finish_time',
    render: (text) => text ? (new Date(text)).toLocaleString() : null,
    sorter: (a, b) => new Date(a.create_time) - new Date(b.create_time),
  },
  {
    title: '操作',
    key: 'action',
    render: (_, record) => (
      <Space size='middle'>
        <Button onClick={() => {
          history.push(`/business/businessDetail/${record.id}`);
        }}>查看详情</Button>
        <Popconfirm title='确认删除？' onConfirm={() => {
        }}>
          <Button type='text' danger>
            删除
          </Button>
        </Popconfirm>
      </Space>
    ),
  },

];
const data = [
  {
    id: 1,
    key: 1,
    clientId: 1,
    clientName: '张三',
    carNumber: '川B123456',
    event: '',
    status: '联系客户',
    create_time: '2023-04-21T15:27:20.000Z',
    finish_time: null,
    total: null,
  },
  {
    id: 2,
    key: 2,
    clientId: 2,
    clientName: '李四',
    carNumber: '川B666666',
    status: '回访中',
    create_time: '2023-04-21T15:27:20.000Z',
    finish_time: '2023-04-29T15:27:20.000Z',
    total: 200,
  },
  {
    id: 3,
    key: 3,
    clientId: 3,
    clientName: '张三',
    carNumber: '川B123456',
    status: '完成业务',
    create_time: '2023-04-21T15:27:20.000Z',
    finish_time: '2023-04-28T15:27:20.000Z',
    total: 0,
  },
  {
    id: 4,
    key: 4,
    clientId: 4,
    clientName: '张三',
    carNumber: '川B123456',
    status: '已结束',
    create_time: '2023-04-21T15:27:20.000Z',
    finish_time: '2023-04-28T15:27:20.000Z',
    total: 300,
  },
];
export default function() {

  return (
    <>
      <PageContainer>
        <Card style={{ marginBottom: '30px' }}>
          <Space>
            <Input placeholder='搜索工单编号' />
            <Input placeholder='客户编号' />
            <Input placeholder='客户姓名' />
            <RangePicker />
            <Button type='primary'>查询</Button>
            <Button type='primary'>添加工单</Button>
          </Space>
        </Card>

        <Card>
          <Table columns={columns} dataSource={data} />
        </Card>

      </PageContainer>
    </>
  );
}
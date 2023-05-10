import { PageContainer } from '@ant-design/pro-components';
import { Button, Card, Input, Popconfirm, Space, Switch, Table } from 'antd';

function onChange() {

}

const columns = [
  {
    title: '事件名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '是否为定期事件',
    dataIndex: 'isRegular',
    key: 'isRegular',
    render: (isRegular) => isRegular ? '是' : '否',
    filters: [
      {
        text: '是',
        value: 1,
      },
      {
        text: '否',
        value: 0,
      },

    ],
    onFilter: (value, record) => record.isRegular===value,
  },
  {
    title: '事件触发时间（天）',
    dataIndex: 'trigger',
    key: 'trigger',
    sorter: (a, b) => a.trigger - b.trigger,
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    render: (status) => <Switch checked={!!status} onChange={onChange} />,
  },
  {
    title: '操作',
    key: 'action',
    render: () => (
      <Space size='middle'>
        <a>修改信息</a>
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
    name: '保养到期',
    isRegular: 1,
    trigger: 30,
    status: 1,
  },
  {
    id: 2,
    key: 2,
    name: '保修到期',
    isRegular: 1,
    trigger: 30,
    status: 0,
  },
  {
    id: 3,
    key: 3,
    name: '保险到期',
    isRegular: 1,
    trigger: 60,
    status: 1,
  },
  {
    id: 4,
    key: 4,
    name: '保养',
    isRegular: 0,
    trigger: null,
    status: 1,
  },
  {
    id: 5,
    key: 5,
    name: '维修',
    isRegular: 0,
    trigger: null,
    status: 1,
  },
  {
    id: 6,
    key: 6,
    name: '购买新保险',
    isRegular: 0,
    trigger: null,
    status: 1,
  },
];
export default function() {

  return (
    <>
      <PageContainer>
        <Card>
          <Table columns={columns} dataSource={data} />
        </Card>

      </PageContainer>
    </>
  );
}
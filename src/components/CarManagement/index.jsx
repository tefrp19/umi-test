import { getEmployees } from '@/services/employee';
import { Space, Table, Tag, Switch, Input, Button, Popconfirm, Card } from 'antd';
import { useEffect, useState } from 'react';
import { PageContainer } from '@ant-design/pro-components';

const onChange = (checked) => {
  console.log(`switch to ${checked}`);
};
const columns = [
  {
    title: '汽车编号',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '车牌号',
    dataIndex: 'number',
    key: 'number',
  },
  {
    title: '车主姓名',
    dataIndex: 'clientName',
    key: 'clientName',
  },
  {
    title: '车主id',
    dataIndex: 'clientId',
    key: 'clientId',
  },
  {
    title: '车型',
    dataIndex: 'model',
    key: 'model',
  },
  {
    title: '购买时间',
    dataIndex: 'purchase_time',
    key: 'purchase_time',
    render: (text) => {
      if (!text) return null;
      return (new Date(text)).toLocaleString();
    },
    sorter: (a, b) => new Date(a.purchase_time) - new Date(b.purchase_time),
  },
  {
    title: '保修到期时间',
    dataIndex: 'warranty_time',
    key: 'warranty_time',
    render: (text) => {
      // 临期提示
      if (!text) return null;
      return (new Date(text)).toLocaleString();
    },
    sorter: (a, b) => new Date(a.warranty_time) - new Date(b.warranty_time),
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
    number: '川B12345',
    clientName: '张三',
    clientId: '1',
    model: 'xxxxx不能是特斯拉，特斯拉没有4s店',
    purchase_time: '2023-04-22T13:27:20.000Z',
    warranty_time: '2024-04-23T13:27:20.000Z',
  },
  {
    id: 2,
    key: 2,
    number: '川B66666',
    clientName: '李四',
    clientId: '2',
    model: 'xxx',
    purchase_time: '2023-04-23T13:27:20.000Z',
    warranty_time: '2024-04-25T13:27:20.000Z',
  },

];

export default function EmployeeManagement() {
  const [dataSource, useDataSource] = useState([]);

  useEffect(() => {
    (async () => {
      // const data = await getEmployees()
      // console.log(data);
    })();
  }, []);

  return (
    <>
      <PageContainer>
        <Card style={{ marginBottom: '30px' }}>
          <Space>
            <Input placeholder='搜索汽车编号' />
            <Input placeholder='搜索车牌号' />
            <Input placeholder='搜索车主姓名' />
            <Input placeholder='搜索车主编号' />
            <Button type='primary'>添加汽车</Button>
          </Space>
        </Card>
        <Card>
          <Table columns={columns} dataSource={data} />
        </Card>

      </PageContainer>

    </>
  );
}


import { getEmployees } from '@/services/employee';
import { Space, Table, Tag, Switch, Input, Button, Popconfirm, Card } from 'antd';
import { useEffect, useState } from 'react';
import { PageContainer } from '@ant-design/pro-components';

const onChange = (checked) => {
  console.log(`switch to ${checked}`);
};
const columns = [
  {
    title: '客户编号',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '性别',
    dataIndex: 'gender',
    key: 'gender',
    render: (gender) => gender ? '男' : '女',
    filters: [
      {
        text: '男',
        value: '男',
      },
      {
        text: '女',
        value: '女',
      },
    ],
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: '手机号',
    dataIndex: 'phone_number',
    key: 'phone_number',
  },
  {
    title: '地址',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '创建时间',
    dataIndex: 'create_time',
    key: 'create_time',
    render: (text) => {
      if (!text) return null;
      return (new Date(text)).toLocaleString();
    },
    sorter: (a, b) => new Date(a.create_time) - new Date(b.create_time),
  },
  {
    title: '更新时间',
    dataIndex: 'update_time',
    key: 'update_time',
    render: (text) => {
      if (!text) return null;
      return (new Date(text)).toLocaleString();
    },
    sorter: (a, b) => new Date(a.update_time) - new Date(b.update_time),
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
    name: 'JohnBrown',
    gender: 0,
    age: 24,
    phone_number: '15881999863',
    address: '四川省绵阳市涪城区xxx小区',
    create_time: '2023-04-22T13:27:20.000Z',
    update_time: '2023-04-22T13:27:20.000Z',
  },
  {
    id: 2,
    key: 2,
    name: 'JimGreen',
    gender: 1,
    age: 34,
    phone_number: '15881999863',
    address: '四川省绵阳市江油区xxxx小区',
    create_time: '2023-04-23T13:27:20.000Z',
    update_time: '2023-04-22T13:27:20.000Z',
  },

];
for (let i = 3; i < 100; i++) {
  data.push({
    id: i,
    key: i,
    name: 'JimGreen',
    gender: 1,
    age: 30+Math.floor(Math.random()*10),
    phone_number: '15881999863',
    address: '四川省绵阳市江油区xxxx小区',
    create_time: '2023-04-23T13:27:20.000Z',
    update_time: '2023-04-22T13:27:20.000Z',
  });
}

function EmployeeManagement() {
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
            <Input placeholder='搜索客户编号' />
            <Input placeholder='搜索姓名' />
            <Input placeholder='搜索手机号' />
            <Input placeholder='搜索客户地址' />
            <Button>查询</Button>
            <Button type='primary'>添加客户</Button>
          </Space>
        </Card>
        <Card>
          <Table columns={columns} dataSource={data} />
        </Card>
      </PageContainer>

    </>
  );
}

export default EmployeeManagement;


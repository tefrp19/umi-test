import { getEmployees } from '@/services/employee';
import { Space, Table, Tag, Switch, Input, Button, Popconfirm } from 'antd';
import { useEffect, useState } from 'react';

const onChange = (checked) => {
  console.log(`switch to ${checked}`);
};
const columns = [
  {
    title: '客户id',
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
    create_time: '2023/5/6 15:38:16',
  },
  {
    id: 2,
    key: 2,
    name: 'JimGreen',
    gender: 1,
    age: 34,
    phone_number: '15881999863',
    address: '四川省绵阳市涪城区xxxxxx小区',
    create_time: '2023/5/7 15:38:16',
  },

];

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
      <Space style={{ marginBottom: '30px' }}>
        <Input placeholder='搜索客户id' />
        <Input placeholder='搜索姓名' />
        <Button type='primary'>添加客户</Button>
      </Space>
      <Table columns={columns} dataSource={data} />;
    </>
  );
}

export default EmployeeManagement;


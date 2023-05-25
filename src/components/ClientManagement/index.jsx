import { getEmployees } from '@/services/employee';
import { Space, Table, Tag, Switch, Input, Button, Popconfirm, Card } from 'antd';
import { useEffect, useState } from 'react';
import { PageContainer } from '@ant-design/pro-components';
import AddClient from "./AddClient";



function EmployeeManagement() {
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    const localData = localStorage.getItem('clients')

    setDataSource(JSON.parse(localData))

  }, []);
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
      filterMultiple: false,
      onFilter: (value, record) => record.gender === value,
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
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
      sorter: (a, b) => new Date(a.create_time) - new Date(b.create_time),
    },
    {
      title: '更新时间',
      dataIndex: 'update_time',
      key: 'update_time',
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
            <AddClient />
          </Space>
        </Card>
        <Card>
          <Table columns={columns} dataSource={dataSource} />
        </Card>
      </PageContainer>

    </>
  );
}

export default EmployeeManagement;


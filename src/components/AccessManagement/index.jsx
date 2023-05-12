import { getEmployees } from '@/services/employee';
import { Space, Table, Tag, Switch, Input, Button, Popconfirm, Card } from 'antd';
import { useEffect, useState } from 'react';
import { PageContainer } from '@ant-design/pro-components';

const onChange = (checked) => {
  console.log(`switch to ${checked}`);
};
const columns = [
  {
    title: '权限编号',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '菜单名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '菜单路由',
    dataIndex: 'url',
    key: 'url',
  },
  {
    title: '是否显示',
    dataIndex: 'status',
    key: 'status',
    render: (status) => <Switch checked={!!status} onChange={onChange} />,
  },
  {
    title: '操作',
    key: 'action',
    render: () => (
      <Space size='middle'>
        <a>编辑</a>
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
    name: '首页',
    url: '/home',
    status: 1,
  },
  {
    id: 2,
    key: 2,
    name: '系统管理',
    url: '/system',
    children: [
      {
        id: 21,
        key: 21,
        name: '权限管理',
        url: '/accessManagement',
        status: 0,
      },
      {
        id: 22,
        key: 22,
        name: '部门管理',
        url: '/departmentManagement',
        status: 1,
      },
    ],
    status: 1,
  },
  {
    id: 3,
    key: 3,
    name: '资料管理',
    url: '/client',
    children: [
      {
        id: 31,
        key: 31,
        name: '客户管理',
        url: '/clientManagement',
        status: 0,
      },
      {
        id: 22,
        key: 22,
        name: '汽车管理',
        url: '/carManagement',
        status: 1,
      },
    ],
    status: 1,
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
      <PageContainer>

        <Card>
          <Table columns={columns} dataSource={data} />
        </Card>
      </PageContainer>

    </>
  );
}

export default EmployeeManagement;


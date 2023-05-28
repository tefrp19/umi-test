import { getEmployees } from '@/services/employee';
import { Space, Table, Tag, Switch, Input, Button, Popconfirm, Card } from 'antd';
import { useEffect, useState } from 'react';
import AddDepartment from './AddDepartment';
import { PageContainer } from '@ant-design/pro-components';
import initialData from "./data";
const onChange = (checked) => {
  console.log(`switch to ${checked}`);
};
const columns = [
  {
    title: '部门编号',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name',
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
    title: '备注',
    dataIndex: 'notes',
    key: 'notes',
  },
  {
    title: '操作',
    key: 'action',
    render: () => (
      <Space size='middle'>
        <a>修改信息</a>
        <a>分配权限</a>
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


function EmployeeManagement() {
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setDataSource(()=>localStorage.getItem('department') ?? initialData)
    //  将数据保存到localStorage
    // localStorage.setItem('department')
  }, []);

  return (
    <>
      <PageContainer>
        <Card style={{ marginBottom: '30px' }}>
          <Space>
            <AddDepartment />
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


import { getEmployees } from '@/services/employee';
import { Space, Table, Tag, Switch, Input, Button, Popconfirm, Card } from 'antd';
import { useEffect, useState } from 'react';
import AddDepartment from './AddDepartment';
import { PageContainer } from '@ant-design/pro-components';

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
const data = [
  {
    id: 1,
    key: 1,
    name: 'admin',
    create_time: '2023/5/6 15:33:12',
    notes: '管理员',
  },
  {
    id: 2,
    key: 2,
    name: '人事部',
    create_time: '2023/5/6 15:33:12',
    notes: '负责xxxxx',
  },
  {
    id: 3,
    key: 3,
    name: '客户部',
    create_time: '2023/5/6 15:33:12',
    notes: '负责xxxxx',
  },
  {
    id: 4,
    key: 4,
    name: '配件部',
    create_time: '2023/5/6 15:33:12',
    notes: '负责xxxxx',
  },
  {
    id: 5,
    key: 5,
    name: '售后部',
    create_time: '2023/5/6 15:33:12',
    notes: '负责xxxxx',
  },
  {
    id: 6,
    key: 6,
    name: '财务部',
    create_time: '2023/5/6 15:33:12',
    notes: '负责xxxxx',
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
        <Card style={{ marginBottom: '30px' }}>
          <Space>
            <AddDepartment />
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


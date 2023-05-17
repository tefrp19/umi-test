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
const data = [
  {
    id: 1,
    key: 1,
    name: 'admin',
    create_time: '2023-04-23T15:27:20.000Z',
    update_time: '2023-04-23T15:27:20.000Z',
    notes: '管理员',
  },
  {
    id: 2,
    key: 2,
    name: '人事部',
    create_time: '2023-04-23T15:27:20.000Z',
    update_time: '2023-04-23T15:27:20.000Z',
    notes: '负责管理系统员工档案信息',
  },
  {
    id: 3,
    key: 3,
    name: '客户部',
    create_time: '2023-04-23T15:27:20.000Z',
    update_time: '2023-04-23T15:27:20.000Z',
    notes: '负责对接客户，联系客户开展业务和延长保险',
  },
  {
    id: 4,
    key: 4,
    name: '配件部',
    create_time: '2023-04-23T15:27:20.000Z',
    update_time: '2023-04-23T15:27:20.000Z',
    notes: '负责仓库内汽车配件的出入库管理',
  },
  {
    id: 5,
    key: 5,
    name: '售后部',
    create_time: '2023-04-23T15:27:20.000Z',
    update_time: '2023-04-23T15:27:20.000Z',
    notes: '负责维修保养客户汽车和回访记录管理',
  },
  {
    id: 6,
    key: 6,
    name: '财务部',
    create_time: '2023-04-23T15:27:20.000Z',
    update_time: '2023-04-23T15:27:20.000Z',
    notes: '负责审核系统收入支出',
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


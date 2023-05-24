import { getEmployees } from '@/services/employee';
import { Space, Table, Tag, Switch, Input, Button, Popconfirm, Card } from 'antd';
import { useEffect, useRef, useState } from 'react';
import AddEmployee from './AddEmployee';
import { PageContainer } from '@ant-design/pro-components';
import initialEmployess from '@/data/employees'
const onChange = (checked) => {
  console.log(`switch to ${checked}`);
};
const columns = [
  {
    title: '员工编号',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '账号',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: '姓名',
    dataIndex: 'nickname',
    key: 'nickname',
  },
  {
    title: '性别',
    dataIndex: 'gender',
    key: 'gender',
    render: (gender) => gender ? '男' : '女',
  },
  {
    title: '手机号',
    dataIndex: 'phone_number',
    key: 'phone_number',
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
    title: '部门',
    dataIndex: 'department',
    key: 'department',
    filters: [
      {
        text: '人事部',
        value: '人事部',
      },
      {
        text: '客户部',
        value: '客户部',
      },
      {
        text: '配件部',
        value: '配件部',
      },
      {
        text: '售后部',
        value: '售后部',
      },
      {
        text: '财务部',
        value: '财务部',
      },
    ],
    onFilter: (value, record) => {
      // console.log(value);
      // console.log(record);
      // record.name.indexOf(value) === 0
    },
  },
  {
    title: '是否启用账号',
    dataIndex: 'status',
    key: 'status',
    render: (status) => <Switch checked={!!status} onChange={onChange} />,
  },
  {
    title: '操作',
    key: 'action',
    render: () => (
      <Space size='middle'>
        <a>重置密码</a>
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

function EmployeeManagement() {
  const [dataSource, setDataSource] = useState([]);
  const [searchUsername, setSearchUsername] = useState('')
  const [searchNickname, setSearchNickname] = useState('')


  useEffect(() => {

    setDataSource(initialEmployess)
  }, []);


  function search() {
    const filter = employee => employee.username.includes(searchUsername) && employee.nickname.includes(searchNickname)
    setDataSource(initialEmployess.filter(filter))
  }

  function reset() {
    setSearchUsername('')
    setSearchNickname('')
    setDataSource(initialEmployess)
  }

  return (
    <>
      <PageContainer>
        <Card style={{ marginBottom: '30px' }}>
          <Space>
            <Input placeholder='搜索账号' value={searchUsername} onChange={(e) => setSearchUsername(e.target.value)} />
            <Input placeholder='搜索姓名' value={searchNickname} onChange={(e) => setSearchNickname(e.target.value)} />
            <Button onClick={search}>查询</Button>
            <Button onClick={reset}>重置</Button>
            <AddEmployee />
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


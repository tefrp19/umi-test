import { Space, Table, Tag, Switch, Input, Button, Popconfirm, Card, message } from 'antd';
import { useEffect, useRef, useState } from 'react';
import AddEmployee from './AddEmployee';
import { PageContainer } from '@ant-design/pro-components';
import UpdateEmployee from './UpdateEmployee';

function EmployeeManagement() {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [dataSource, setDataSource] = useState([]);
  const [searchUsername, setSearchUsername] = useState('')
  const [searchNickname, setSearchNickname] = useState('')


  useEffect(() => {
    const localData = localStorage.getItem('employees')

    setDataSource(JSON.parse(localData))

  }, []);

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
      title: '手机号',
      dataIndex: 'phone_number',
      key: 'phone_number',
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
      onFilter: (value, record) => record.department === value,
      filterMultiple: false,
    },
    {
      title: '是否启用账号',
      dataIndex: 'status',
      key: 'status',
      render: (status, record) => <Switch defaultChecked={status} onChange={
        (checked) => {
          const newData = dataSource.map(data => {
            if (data.id === record.id) {
              return {
                ...data,
                status: checked,
                update_time: new Date().toLocaleString()
              }
            }
            else return data
          })
          localStorage.setItem('employees', JSON.stringify(newData))
          setDataSource(newData)
        }
      } />,
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size='middle'>
          <UpdateEmployee employee={record} setDataSource={setDataSource} />
          <Popconfirm title='确认删除？' onConfirm={() => {
            const newData = JSON.parse(localStorage.getItem('employees')).filter(employee => employee.id !== record.id)
            localStorage.setItem('employees', JSON.stringify(newData))
            setDataSource(newData)
            message.success('删除成功')
          }}>
            <Button type='text' danger>
              删除
            </Button>
          </Popconfirm>
        </Space>
      ),
    },

  ];

  function search() {
    const filter = employee => employee.username.includes(searchUsername) && employee.nickname.includes(searchNickname)
    setDataSource(JSON.parse(localStorage.getItem('employees')).filter(filter))
  }

  function reset() {
    setSearchUsername('')
    setSearchNickname('')
    setDataSource(JSON.parse(localStorage.getItem('employees')))
  }

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  return (
    <>
      <PageContainer>
        <Card style={{ marginBottom: '30px' }}>
          <Space>
            <Input placeholder='搜索账号' value={searchUsername} onChange={(e) => setSearchUsername(e.target.value)} />
            <Input placeholder='搜索姓名' value={searchNickname} onChange={(e) => setSearchNickname(e.target.value)} />
            <Button onClick={search}>查询</Button>
            <Button onClick={reset}>重置</Button>
            <AddEmployee setDataSource={setDataSource} />
            <Popconfirm title='确认删除？' open={open} disabled={!selectedRowKeys.length} okButtonProps={{
              loading: confirmLoading,
            }} onConfirm={() => {
              setConfirmLoading(true);
              let newData = JSON.parse(localStorage.getItem('employees'))
              for (const selectedRowKey of selectedRowKeys) {
                newData = newData.filter(employee => employee.id !== selectedRowKey)
              }
              setTimeout(() => {
                setOpen(false);
                setConfirmLoading(false);
                localStorage.setItem('employees', JSON.stringify(newData))
                setDataSource(newData)
                setSelectedRowKeys([])
                message.success('删除成功')
              }, 1000);
            }}>
              <Button type='primary' danger disabled={!selectedRowKeys.length} onClick={()=>{
                setOpen(true);
              }}>
                多选删除
              </Button>
            </Popconfirm>
          </Space>
        </Card>
        <Card>
          <Table rowSelection={rowSelection} columns={columns} dataSource={dataSource} />
        </Card>
      </PageContainer>

    </>
  );
}

export default EmployeeManagement;


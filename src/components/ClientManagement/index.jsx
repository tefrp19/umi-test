import { getEmployees } from '@/services/employee';
import { Space, Table, Tag, Switch, Input, Button, Popconfirm, Card, message } from 'antd';
import { useEffect, useState } from 'react';
import { PageContainer } from '@ant-design/pro-components';
import AddClient from "./AddClient";
import UpdateClient from "./UpdateClient";

export default function () {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [dataSource, setDataSource] = useState([]);
  const [searchId, setSearchId] = useState('')
  const [searchName, setSearchName] = useState('')
  const [searchPhoneNumber, setSearchPhoneNumber] = useState('')
  const [searchAddress, setSearchAddress] = useState('')

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
      render: (_, record) => (
        <Space size='middle'>
          <UpdateClient client={record} setDataSource={setDataSource} />
          <Popconfirm title='确认删除？' onConfirm={() => {
            const newData = JSON.parse(localStorage.getItem('clients')).filter(client => client.id !== record.id)
            localStorage.setItem('clients', JSON.stringify(newData))
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
    const filter = client => String(client.id).includes(searchId) && client.name.includes(searchName) && client.phone_number.includes(searchPhoneNumber) && client.address.includes(searchAddress)
    setDataSource(JSON.parse(localStorage.getItem('clients')).filter(filter))
  }

  function reset() {
    setSearchId('')
    setSearchName('')
    setSearchPhoneNumber('')
    setSearchAddress('')
    setDataSource(JSON.parse(localStorage.getItem('clients')))
  }

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <>
      <PageContainer>
        <Card style={{ marginBottom: '30px' }}>
          <Space>
            <Input placeholder='搜索客户编号' value={searchId} onChange={e => setSearchId(e.target.value)} />
            <Input placeholder='搜索姓名' value={searchName} onChange={e => setSearchName(e.target.value)} />
            <Input placeholder='搜索手机号' value={searchPhoneNumber} onChange={e => setSearchPhoneNumber(e.target.value)} />
            <Input placeholder='搜索客户地址' value={searchAddress} onChange={e => setSearchAddress(e.target.value)} />
            <Button onClick={search}>查询</Button>
            <Button onClick={reset}>重置</Button>
            <AddClient setDataSource={setDataSource} />
            <Popconfirm title='确认删除？' disabled={!selectedRowKeys.length} onConfirm={() => {
              console.log(selectedRowKeys);
              let newData = JSON.parse(localStorage.getItem('clients'))
              for (const selectedRowKey of selectedRowKeys) {
                newData = newData.filter(clients => clients.id !== selectedRowKey)
              }
              localStorage.setItem('clients', JSON.stringify(newData))
              setDataSource(newData)
              selectedRowKeys([])
              message.success('删除成功')
            }}>
              <Button type='primary' danger disabled={!selectedRowKeys.length}>
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

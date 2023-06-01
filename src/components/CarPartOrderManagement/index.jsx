import { getEmployees } from '@/services/employee';
import { Space, Table, Tag, Switch, Input, Button, Popconfirm, Card } from 'antd';
import { useEffect, useState } from 'react';
import { history, useSearchParams } from '@umijs/max';
import { PageContainer, PageHeader } from '@ant-design/pro-components';

const onChange = (checked) => {
  console.log(`switch to ${checked}`);
};
const columns = [
  {
    title: '配件订单号',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    render: (text) => {
      const map = new Map([
        ['审核中', 'processing'],
        ['审核成功', 'success'],
        ['审核失败', 'error'],
        ['已完成', 'default'],
      ]);
      return <Tag color={map.get(text)}>{text}</Tag>;
    },
    filters: [
      {
        text: '审核中',
        value: '审核中',
      },
      {
        text: '审核成功',
        value: '审核成功',
      },
      {
        text: '审核失败',
        value: '审核失败',
      },
      {
        text: '已完成',
        value: '已完成',
      },
    ],
    onFilter: (value, record) => record.status.indexOf(value) === 0,
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
    sorter: (a, b) => new Date(a.create_time) - new Date(b.create_time),
  },
  {
    title: '完成时间',
    dataIndex: 'finish_time',
    key: 'finish_time',
    sorter: (a, b) => new Date(a.create_time) - new Date(b.create_time),
  },
  {
    title: '总费用',
    dataIndex: 'total',
    key: 'total',
    sorter: (a, b) => new Date(a.total) - new Date(b.total),
  },
  {
    title: '备注',
    dataIndex: 'notes',
    key: 'notes',
  },
  {
    title: '操作',
    key: 'action',
    render: (_, record) => (
      <Space size='middle'>
        <Button onClick={() => {
          history.push(`/store/carPartOrderDetail/${record.id}`);
        }}>查看订单</Button>
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
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.get('carPartId'));  // b
  // console.log(searchParams.toString()); // a=b

  useEffect(() => {
    const localData = localStorage.getItem('carPartOrders')

    setDataSource(JSON.parse(localData))
  }, []);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

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
            <Input placeholder='搜索订单id' />
            <Input placeholder='搜索订单备注' />
            <Button >查询</Button>
            <Button >重置</Button>
            <Button type='primary'>新增订单</Button>
            <Popconfirm title='确认删除？' disabled={!selectedRowKeys.length} >
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

export default EmployeeManagement;


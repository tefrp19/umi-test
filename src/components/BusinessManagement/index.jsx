import { useState,useEffect } from "react";
import { PageContainer } from '@ant-design/pro-components';
import { Button, Card, Input, Popconfirm, Space, Switch, Table, DatePicker } from 'antd';
import { history } from '@umijs/max';

const { RangePicker } = DatePicker;

function onChange() {

}

const columns = [
  {
    title: '工单编号',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '客户编号',
    dataIndex: 'clientId',
    key: 'clientId',
  },
  {
    title: '客户姓名',
    dataIndex: 'clientName',
    key: 'clientName',
  },
  {
    title: '车牌号',
    dataIndex: 'carNumber',
    key: 'carNumber',
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    filters: [
      {
        text: '联系客户',
        value: '联系客户',
      },
      {
        text: '进行中',
        value: '进行中',
      },
      {
        text: '完成业务',
        value: '完成业务',
      },
      {
        text: '回访中',
        value: '回访中',
      },
      {
        text: '已结束',
        value: '已结束',
      },
    ],
    onFilter: (value, record) => record.status === value,
  },
  {
    title: '创建时间',
    dataIndex: 'create_time',
    key: 'create_time',
    render: (text) => text ? (new Date(text)).toLocaleString() : null,
    sorter: (a, b) => new Date(a.create_time) - new Date(b.create_time),
  },
  {
    title: '完成时间',
    dataIndex: 'finish_time',
    key: 'finish_time',
    render: (text) => text ? (new Date(text)).toLocaleString() : null,
    sorter: (a, b) => new Date(a.create_time) - new Date(b.create_time),
  },
  {
    title: '总金额',
    dataIndex: 'total',
    key: 'total',
    sorter: (a, b) => a.total - b.total,
  },
  {
    title: '操作',
    key: 'action',
    render: (_, record) => (
      <Space size='middle'>
        <Button onClick={() => {
          history.push(`/business/businessDetail/${record.id}`);
        }}>查看详情</Button>
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

export default function () {
  const [dataSource, setDataSource] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  useEffect(() => {
    const localData = localStorage.getItem('clientOrders')

    setDataSource(JSON.parse(localData))
  }, []);
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
            <Input placeholder='搜索工单编号' />
            <Input placeholder='客户编号' />
            <Input placeholder='客户姓名' />
            <RangePicker />
            <Button >查询</Button>
            <Button >重置</Button>
            <Button type='primary'>添加工单</Button>
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
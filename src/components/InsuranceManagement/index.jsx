import { Space, Table, Tag, Switch, Input, Button, Popconfirm, Card } from 'antd';
import { useEffect, useState } from 'react';
import { PageContainer } from '@ant-design/pro-components';

const columns = [
  {
    title: '保险编号',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '保险名称',
    dataIndex: 'name',
    key: 'name',
    filters: [
      {
        text: '第三者责任险',
        value: '第三者责任险',
      },
      {
        text: '车辆损失险',
        value: '车辆损失险',
      },
    ],
    onFilter: (value, record) => {
      // console.log(value);
      // console.log(record);
      // record.name.indexOf(value) === 0
    },
  },
  {
    title: '车主编号',
    dataIndex: 'clientId',
    key: 'clientId',
  },
  {
    title: '车主姓名',
    dataIndex: 'clientName',
    key: 'clientName',
  },
  {
    title: '车牌号',
    dataIndex: 'car_number',
    key: 'car_number',
  },

  {
    title: '开始日期',
    dataIndex: 'start_date',
    key: 'start_date',
    render: (text) => {
      if (!text) return null;
      return (new Date(text)).toLocaleDateString();
    },
    sorter: (a, b) => new Date(a.start_date) - new Date(b.start_date),
  },
  {
    title: '到期日期',
    dataIndex: 'end_date',
    key: 'end_date',
    render: (text) => {
      // 临期提示
      if (!text) return null;
      return (new Date(text)).toLocaleDateString();
    },
    sorter: (a, b) => new Date(a.end_date) - new Date(b.end_date),
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
export default function () {
  const [dataSource, useDataSource] = useState([]);

  useEffect(() => {
    let data = []
    JSON.parse(localStorage.getItem('clients')).forEach(client => {
      data = data.concat(client.insurances)
    })
    console.log(data);
    useDataSource(data)
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
            <Input placeholder='搜索保险编号' />
            <Input placeholder='搜索车主编号' />
            <Input placeholder='搜索车主姓名' />
            <Input placeholder='搜索车牌号' />
            <Button>查询</Button>
            <Button >重置</Button>
            <Button type='primary'>新增保险</Button>
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


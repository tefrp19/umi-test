import { Button, Popconfirm, Space, Table, Tag } from 'antd';
import { history, useParams } from '@umijs/max';
import { useEffect, useState } from 'react';

const columns = [
  {
    title: '配件号',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '配件名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '供应商',
    dataIndex: 'firm',
    key: 'firm',
  },
  {
    title: '采购数量',
    dataIndex: 'number',
    key: 'number',
    sorter: (a, b) => a.number - b.number,
  },
  {
    title: '采购单价',
    dataIndex: 'price',
    key: 'price',
    sorter: (a, b) => a.price - b.price,
  },
  {
    title: '总价',
    dataIndex: 'total',
    key: 'total',
    sorter: (a, b) => a.total - b.total,
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
        <a type='text'>修改信息</a>
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

export default function ({ carParts, setCarParts }) {

  useEffect(() => {
    // setDataSource(carParts)



  }, [])

  return <Table columns={columns} dataSource={carParts} />;

}
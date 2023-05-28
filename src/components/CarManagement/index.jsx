import { getEmployees } from '@/services/employee';
import { Space, Table, Tag, Switch, Input, Button, Popconfirm, Card } from 'antd';
import { useEffect, useState } from 'react';
import { PageContainer } from '@ant-design/pro-components';

export default function () {
  const [dataSource, setDataSource] = useState([]);

  const columns = [
    {
      title: '汽车编号',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '车牌号',
      dataIndex: 'number',
      key: 'number',
    },
    {
      title: '车主姓名',
      dataIndex: 'clientName',
      key: 'clientName',
    },
    {
      title: '车主id',
      dataIndex: 'clientId',
      key: 'clientId',
    },
    {
      title: '车型',
      dataIndex: 'model',
      key: 'model',
    },
    {
      title: '购买时间',
      dataIndex: 'purchase_time',
      key: 'purchase_time',
      render: (text) => {
        if (!text) return null;
        return (new Date(text)).toLocaleString();
      },
      sorter: (a, b) => new Date(a.purchase_time) - new Date(b.purchase_time),
    },
    {
      title: '保修到期时间',
      dataIndex: 'warranty_time',
      key: 'warranty_time',
      render: (text) => {
        // 临期提示
        if (!text) return null;
        return (new Date(text)).toLocaleString();
      },
      sorter: (a, b) => new Date(a.warranty_time) - new Date(b.warranty_time),
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
  useEffect(() => {
    // 将所有用户的cars合并成一个新数组
    const clients = JSON.parse(localStorage.getItem('clients'))
    const cars = []
    for (const client of clients) {
      for (const car of client.cars) {
        const carInfo = {
          ...car,
          clientName: client.name,
          clientId: client.id,
        }
        cars.push(carInfo)
      }
    }
    setDataSource(cars)


  }, []);

  return (
    <>
      <PageContainer>
        <Card style={{ marginBottom: '30px' }}>
          <Space>
            <Input placeholder='搜索车牌号' />
            <Input placeholder='搜索车主姓名' />
            <Input placeholder='搜索汽车型号' />
            <Button type='primary'>添加汽车</Button>
          </Space>
        </Card>
        <Card>
          <Table columns={columns} dataSource={dataSource} />
        </Card>

      </PageContainer>

    </>
  );
}


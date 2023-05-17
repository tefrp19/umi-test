import { getEmployees } from '@/services/employee';
import { Space, Table, Tag, Switch, Input, Button, Popconfirm, Card } from 'antd';
import { useEffect, useState } from 'react';
import { PageContainer } from '@ant-design/pro-components';

const onChange = (checked) => {
  console.log(`switch to ${checked}`);
};
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
    filters:[
      {
        text:'第三者责任险',
        value:'第三者责任险',
      },
      {
        text:'车辆损失险',
        value:'车辆损失险',
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
const data = [
  {
    id: 1,
    key: 1,
    name: '第三者责任险',
    clientId: 1,
    clientName: '张三',
    car_number:'川B123456',
    start_date: '2023-5-06',
    end_date: '2024-5-06',
  },
  {
    id: 2,
    key: 2,
    name: '车辆损失险',
    clientId: 2,
    clientName: '李四',
    car_number:'川B666666',
    start_date: '2023-5-07',
    end_date: '2024-5-08',
  },
  {
    id: 3,
    key: 3,
    name: '第三者责任险',
    clientId: 2,
    clientName: '李四',
    car_number:'川B666666',
    start_date: '2023-5-07',
    end_date: '2024-5-08',
  },
  {
    id: 4,
    key: 4,
    name: '交强险',
    clientId: 2,
    clientName: '李四',
    car_number:'川B666666',
    start_date: '2023-5-07',
    end_date: '2024-5-08',
  },
  {
    id: 5,
    key: 5,
    name: '全车盗抢险',
    clientId: 2,
    clientName: '李四',
    car_number:'川B666666',
    start_date: '2023-5-07',
    end_date: '2024-5-08',
  },
  {
    id: 6,
    key: 6,
    name: '车上责任险',
    clientId: 2,
    clientName: '李四',
    car_number:'川B666666',
    start_date: '2023-5-07',
    end_date: '2024-5-08',
  },
  {
    id: 7,
    key: 7,
    name: '无过失责任险',
    clientId: 2,
    clientName: '李四',
    car_number:'川B666666',
    start_date: '2023-5-07',
    end_date: '2024-5-08',
  },

];

export default function() {
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
            <Input placeholder='搜索保险编号' />
            <Input placeholder='搜索车主编号' />
            <Input placeholder='搜索车主姓名' />
            <Input placeholder='搜索车牌号' />
            <Button>查询</Button>
            <Button type='primary'>新增保险</Button>
          </Space>
        </Card>

        <Card>
          <Table columns={columns} dataSource={data} />
        </Card>
      </PageContainer>

    </>
  );
}


import { getEmployees } from '@/services/employee';
import { Space, Table, Tag, Switch, Input, Button, Popconfirm } from 'antd';
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
    title: '配件名',
    dataIndex: 'carPart',
    key: 'carPart',
  },
  {
    title: '供应商',
    dataIndex: 'firm',
    key: 'firm',
  },
  {
    title: '入库数量',
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
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    render: (text) => {
      const map = new Map([
        ['申请中', 'processing'],
        ['申请成功', 'success'],
        ['申请失败', 'error'],
        ['已完成', 'default'],
      ]);
      return <Tag color={map.get(text)}>{text}</Tag>;
    },
    filters: [
      {
        text: '申请中',
        value: '申请中',
      },
      {
        text: '申请成功',
        value: '申请成功',
      },
      {
        text: '申请失败',
        value: '申请失败',
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
    render: (text) => (new Date(text)).toLocaleString(),
    sorter: (a, b) => new Date(a.create_time) - new Date(b.create_time),
  },
  {
    title: '完成时间',
    dataIndex: 'finish_time',
    key: 'finish_time',
    render: (text) => {
      if (!text) return null;
      return (new Date(text)).toLocaleString();
    },
    sorter: (a, b) => new Date(a.create_time) - new Date(b.create_time),
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
    carPart: '奔驰A级空气滤清器（2.0T 2.7L 3.5L）',
    firm: '绵阳市斯普润市政工程建设有限公司',
    number: 10,
    price: 200,
    total: 2000,
    status: '申请中',
    create_time: '2023-04-22T13:27:20.000Z',
    finish_time: null,
    notes: 'xxxxxxxxxxxxx',
  },
  {
    id: 2,
    key: 2,
    carPart: '奔驰S300发动机油底壳',
    firm: '绵阳市燊达机械加工有限公司',
    number: 20,
    price: 100,
    total: 2000,
    status: '已完成',
    create_time: '2023-04-21T13:27:20.000Z',
    finish_time: '2023-04-21T13:27:20.000Z',
    notes: 'xxxxxxxxxxxxx',
  },
  {
    id: 3,
    key: 3,
    carPart: '奔驰A级空气滤清器（2.0T 2.7L 3.5L）',
    firm: '绵阳市斯普润市政工程建设有限公司',
    number: 10,
    price: 200,
    total: 2000,
    status: '申请成功',
    create_time: '2023-04-21T15:27:20.000Z',
    finish_time: null,
    notes: 'xxxxxxxxxxxxx',
  },

];

function EmployeeManagement() {
  const [dataSource, useDataSource] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.get('carPartId'));  // b
  // console.log(searchParams.toString()); // a=b

  useEffect(() => {
    (async () => {
      // const data = await getEmployees()
      // console.log(data);
    })();
  }, []);

  return (
    <>
      <PageContainer>

        <Space style={{ marginBottom: '30px' }}>
          <Input placeholder='搜索配件名称' />
          <Input placeholder='搜索配件备注' />
          <Button type='primary'>新增配件</Button>
        </Space>
        <Table columns={columns} dataSource={data} />

      </PageContainer>
    </>
  );
}

export default EmployeeManagement;


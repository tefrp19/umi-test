import { getEmployees } from '@/services/employee';
import { Space, Table, Tag, Switch, Input, Button, Popconfirm, Card } from 'antd';
import { useEffect, useState } from 'react';
import { history } from '@umijs/max';
import { PageContainer } from '@ant-design/pro-components';

const onChange = (checked) => {
  console.log(`switch to ${checked}`);
};
const columns = [
  {
    title: '配件编号',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '配件名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '分类',
    dataIndex: 'category',
    key: 'category',
    filters: [
      {
        text: '发动机配件',
        value: '发动机配件',
      },
      {
        text: '进排气配件',
        value: '进排气配件',
      },
      {
        text: '制动系统配件',
        value: '制动系统配件',
      },
      {
        text: '外观内饰配件',
        value: '外观内饰配件',
      },
    ],
    onFilter: (value, record) => record.category.indexOf(value) === 0,
  },
  {
    title: '库存数',
    dataIndex: 'number',
    key: 'number',
    sorter: (a, b) => a.number - b.number,
    render: (text) => {

      return <span style={{ color: text <= 10 ? 'red' : null }}>{text}</span>;
    },
  },
  {
    title: '单位',
    dataIndex: 'unit',
    key: 'unit',
  },
  {
    title: '备注',
    dataIndex: 'notes',
    key: 'notes',
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
    name: '宝马X5 2.0T气门室盖',
    category: '发动机配件',
    number: 10,
    unit: '个',
    notes: '宝马X5气门室盖',
  },
  {
    id: 2,
    key: 2,
    name: '宝马X5 3.0L发动机皮带',
    category: '发动机配件',
    number: 20,
    unit: '个',
    notes: '宝马X5发动机皮带',
  },
  {
    id: 3,
    key: 3,
    name: '宝马5系3.0L正时链条',
    category: '发动机配件',
    number: 20,
    unit: '个',
    notes: null,
  },
  {
    id: 4,
    key: 4,
    name: '宝马X3 2.0T进气管',
    category: '进气排气配件',
    number: 40,
    unit: '个',
    notes: null,
  },
  {
    id: 5,
    key: 5,
    name: '宝马X5 3.0L进气管',
    category: '进气排气配件',
    number: 50,
    unit: '个',
    notes: '宝马X5发动机皮带',
  },

];

function EmployeeManagement() {
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
            <Input placeholder='搜索配件名称' />
            <Input placeholder='搜索配件备注' />
            <Button type='primary'>新增配件</Button>
          </Space>
        </Card>
        <Card>
          <Table columns={columns} dataSource={data} />
        </Card>
      </PageContainer>

    </>
  );
}

export default EmployeeManagement;


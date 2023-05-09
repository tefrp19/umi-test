import { getEmployees } from '@/services/employee';
import { Space, Table, Tag, Switch, Input, Button, Popconfirm } from 'antd';
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
    name: '奔驰S级油底壳',
    category: '发动机配件',
    number: 10,
    unit: '个',
    notes: '奔驰S300 S320 S400 S500发动机油底壳',
  },
  {
    id: 2,
    key: 2,
    name: '奔驰A级空气滤清器（2.0T 2.7L 3.5L）',
    category: '进排气配件',
    number: 20,
    unit: '个',
    notes: '空气滤清器',
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


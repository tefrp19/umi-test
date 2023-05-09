import { getEmployees } from '@/services/employee';
import { Space, Table, Tag, Switch, Input, Button, Popconfirm } from 'antd';
import { useEffect, useState } from 'react';
import { PageContainer } from '@ant-design/pro-components';

const onChange = (checked) => {
  console.log(`switch to ${checked}`);
};
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
    title: '车主名',
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
    number: '川B12345',
    clientName: '张三',
    clientId: '1',
    model: 'xxxxx不能是特斯拉，特斯拉没有4s店',
    purchase_time: '2023/5/6 15:38:16',
  },
  {
    id: 2,
    key: 2,
    number: '川B66666',
    clientName: '李四',
    clientId: '2',
    model: 'xxx',
    purchase_time: '2023/5/6 15:38:16',
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
          <Input placeholder='搜索客户id' />
          <Input placeholder='搜索姓名' />
          <Button type='primary'>添加客户</Button>
        </Space>
        <Table columns={columns} dataSource={data} />
      </PageContainer>

    </>
  );
}

export default EmployeeManagement;


import { Space, Table, Tag, Switch, Input, Button, Popconfirm, Card } from 'antd';
import { useEffect, useState } from 'react';
import {
  PageContainer, ModalForm,
  ProForm,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
  ProFormDigit
} from '@ant-design/pro-components';
import { Form, message } from 'antd';
const data = [
  {
    id: 1,
    key: 1,
    name: '首页',
    url: '/home',
    status: 1,
    update_time: '2023-04-23T15:27:20.000Z',
    notes: '系统首页，门店数据概览',
  },
  {
    id: 2,
    key: 2,
    name: '系统管理',
    url: '/system',
    children: [
      {
        id: 21,
        key: 21,
        name: '权限管理',
        url: '/accessManagement',
        status: 1,
        update_time: '2023-04-23T15:27:20.000Z',
        notes: null,
      },
      {
        id: 22,
        key: 22,
        name: '部门管理',
        url: '/departmentManagement',
        status: 1,
        update_time: '2023-04-23T15:27:20.000Z',
        notes: null,
      },
      {
        id: 23,
        key: 23,
        name: '员工管理',
        url: '/employeeManagement',
        status: 1,
        update_time: '2023-04-23T15:27:20.000Z',
        notes: null,
      },
    ],
    status: 1,
    update_time: '2023-04-23T15:27:20.000Z',
    notes: null,
  },
  {
    id: 3,
    key: 3,
    name: '资料管理',
    url: '/client',
    children: [
      {
        id: 31,
        key: 31,
        name: '客户管理',
        url: '/clientManagement',
        status: 1,
        update_time: '2023-04-23T15:27:20.000Z',
        notes: null,
      },
      {
        id: 32,
        key: 32,
        name: '汽车管理',
        url: '/carManagement',
        status: 0,
        update_time: '2023-04-23T15:27:20.000Z',
        notes: null,
      },
      {
        id: 33,
        key: 33,
        name: '汽车管理',
        url: '/insuranceManagement',
        status: 1,
        update_time: '2023-04-23T15:27:20.000Z',
        notes: null,
      },
    ],
    status: 1,
    update_time: '2023-04-23T15:27:20.000Z',
    notes: null,
  },
  {
    id: 4,
    key: 4,
    name: '仓库管理',
    url: '/store',
    children: [
      {
        id: 41,
        key: 41,
        name: '配件管理',
        url: '/carPartManagement',
        status: 1,
        update_time: '2023-04-23T15:27:20.000Z',
        notes: null,
      },
      {
        id: 42,
        key: 42,
        name: '配件订单管理',
        url: '/carPartOrderManagement',
        status: 0,
        update_time: '2023-04-23T15:27:20.000Z',
        notes: null,
      },
    ],
    status: 1,
    update_time: '2023-04-23T15:27:20.000Z',
    notes: null,
  },
  {
    id: 5,
    key: 5,
    name: '业务流程管理',
    url: '/business',
    children: [
      {
        id: 51,
        key: 51,
        name: '客户工单管理',
        url: '/businessManagement',
        status: 1,
        update_time: '2023-04-23T15:27:20.000Z',
        notes: null,
      },
      {
        id: 52,
        key: 52,
        name: '事件参数管理',
        url: '/eventManagement',
        status: 1,
        update_time: '2023-04-23T15:27:20.000Z',
        notes: null,
      },
    ],
    status: 1,
    update_time: '2023-04-23T15:27:20.000Z',
    notes: null,
  },
  {
    id: 6,
    key: 6,
    name: '数据分析',
    url: '/analysis',
    children: [
      {
        id: 61,
        key: 61,
        name: '员工数据分析',
        url: '/employee',
        status: 1,
        update_time: '2023-04-23T15:27:20.000Z',
        notes: null,
      },
      {
        id: 62,
        key: 62,
        name: '客户数据分析',
        url: '/client',
        status: 1,
        update_time: '2023-04-23T15:27:20.000Z',
        notes: null,
      },
      {
        id: 63,
        key: 63,
        name: '财务收入支出分析',
        url: '/finance',
        status: 1,
        update_time: '2023-04-23T15:27:20.000Z',
        notes: null,
      },
    ],
    status: 1,
    update_time: '2023-04-23T15:27:20.000Z',
    notes: null,
  },

];

export default function () {
  const [dataSource, setDataSource] = useState([]);
  const [form] = Form.useForm();
  const onChange = (checked) => {
    // checked=!checked
    console.log(`switch to ${checked}`);

  };
  const columns = [
    {
      title: '权限编号',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '菜单名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '菜单路由',
      dataIndex: 'url',
      key: 'url',
    },
    {
      title: '是否显示',
      dataIndex: 'status',
      key: 'status',
      render: (status) => <Switch defaultChecked={true} onChange={onChange} />,
    },
    {
      title: '更新时间',
      dataIndex: 'update_time',
      key: 'update_time',
      render: (text) => {
        if (!text) return null;
        return (new Date(text)).toLocaleString();
      },
      sorter: (a, b) => new Date(a.update_time) - new Date(b.update_time),
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size='middle'>
          <ModalForm
            title="修改权限信息"
            form={form}
            trigger={
              <a>
                修改信息
              </a>
            }
            autoFocusFirstInput
            modalProps={{
              destroyOnClose: true,
            }}
            initialValues={record}
            onFinish={() => {
              throw new Error('can not read "data" of undefined')
            }}
          >
            <ProForm.Group>
              <ProFormText
                width="md"
                name="name"
                label="菜单名称"
                rules={[{ required: true }]}
              />
              <ProFormText
                width="md"
                name="url"
                label="菜单路由"
                rules={[{ required: true }]}
              />
            </ProForm.Group>
          </ModalForm>
        </Space>
      ),
    },

  ];

  useEffect(() => {
    (async () => {
      setDataSource(data)
    })();

  }, []);

  return (
    <>
      <PageContainer>

        <Card>
          <Table columns={columns} dataSource={dataSource} />
        </Card>
      </PageContainer>

    </>
  );
}



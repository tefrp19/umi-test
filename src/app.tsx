// 运行时配置
import { history } from '@umijs/max';
import { message, Popconfirm } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import logo from './assets/logo.svg';
import employees from '@/data/employees'
import clients from '@/data/clients'
import carParts from '@/data/carParts'
import carPartOrders from '@/data/carPartOrders'
import clientOrders from '@/data/clientOrders'
import "./app.css";
// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState() {
  // 将data文件夹中的所有数据存到localStorage
  localStorage.setItem('employees', JSON.stringify(employees))
  localStorage.setItem('clients', JSON.stringify(clients))
  localStorage.setItem('carParts', JSON.stringify(carParts))
  localStorage.setItem('carPartOrders', JSON.stringify(carPartOrders))
  localStorage.setItem('clientOrders', JSON.stringify(clientOrders))

  console.log('getInitialState');
  const user = localStorage.getItem('user');

  if (!user) history.push('/login')

  return { user: user ? JSON.parse(user) : null };
}

export const layout = ({ initialState }) => {
  return {
    title: '4s店维修保养全流程综合管理系统',
    logo,
    favicon: logo,
    siderWidth: 310,
    menu: {
      locale: false,
    },

    logout: () => {

    },
    rightRender: () => {

      return (
        <div className='logout' style={{
          marginLeft: 'calc(100% - 50px)',
        }}>
          <Popconfirm
            title="退出登录"
            description="确定退出登录吗"
            onConfirm={() => {
              localStorage.removeItem('user');
              history.push('/login');
            }}
            okText="Yes"
            cancelText="No"
          >
            <UserOutlined style={{
              fontSize: '40px',
              color: '#1677ff',
            }} />
          </Popconfirm>
        </div>
      )
    }
  };
};

export const request = {
  timeout: 1000,
  responseInterceptors: [
    (response: any) => {
      // 不再需要异步处理读取返回体内容，可直接在data中读出，部分字段可在 config 中找到
      const { data } = response;
      const { status, message: responseMessage } = data;
      if (status !== 200) message.error(responseMessage);
      return response;
    },

  ],
};

// 运行时配置
import { history } from '@umijs/max';
import { message } from 'antd';
import logo from './assets/logo.svg';
// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState() {
  // const initialData = await fetchInitialData();
  console.log('getInitialState');
  const user = localStorage.getItem('user');
  // history.push('/login')

  return { user: user ? JSON.parse(user) : null };
}

export const layout = ({ initialState }) => {
  return {
    title: '4s店维修保养全流程综合管理系统',
    logo,
    favicon:logo,
    siderWidth:310,
    menu: {
      locale: false,
      // 每当 initialState?.currentUser?.userid 发生修改时重新执行 request
      // params: {
      //   userId: initialState?.currentUser?.userid,
      // },
      // request: async () => {
      //   // initialState.currentUser 中包含了所有用户信息
      //   // const menuData = await fetchMenuData();
      //   const menuData = [
      //     {
      //       name: '首页',
      //       path: '/home',
      //     }, {
      //       name: '系统管理',
      //       path: '/system',
      //       icon: <SettingTwoTone />,
      //       routes: [
      //         {
      //           name: '部门管理',
      //           path: 'departmentManagement',
      //         },
      //         {
      //           name: '员工管理',
      //           path: 'employeeManagement',
      //         },
      //       ],
      //     },
      //   ];
      //   return menuData;
      // },
    },

    logout: () => {
      localStorage.removeItem('user');
      history.push('/login');
    },
  };
};


export const request = {
  timeout: 1000,
  responseInterceptors: [
    (response) => {
      // 不再需要异步处理读取返回体内容，可直接在data中读出，部分字段可在 config 中找到
      const { data } = response;
      const { status, message: responseMessage } = data;
      if (status !== 200) message.error(responseMessage);
      return response;
    },

  ],
};

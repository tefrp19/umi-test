import { defineConfig } from '@umijs/max';

export default defineConfig({
  alias: {},
  antd: {
    style: 'css',
  },
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '4s维修保养全流程管理系统',
  },
  routes: [
    {
      path: '/login',
      component: './Login',
      layout: false,
    },
    {
      path: '/',
      redirect: '/home',
      // access: 'canReadEmployeeManagement',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '系统管理',
      path: '/system',
      icon: 'SettingTwoTone',
      // icon: 'HomeOutlined',

      routes: [
        {
          name: '权限管理',
          path: 'accessManagement',
          icon: 'SecurityScanTwoTone',
          // component: './EmployeeManagement',
          // access: 'canReadEmployeeManagement',
        },
        {
          name: '部门管理',
          path: 'departmentManagement',
          icon: 'HomeOutlined',
          // component: './EmployeeManagement',
          // access: 'canReadEmployeeManagement',
        },
        {
          name: '员工管理',
          path: 'employeeManagement',
          component: './EmployeeManagement',
          // access: 'canReadEmployeeManagement',
        },
      ],
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    // {
    //   name: ' CRUD 示例',
    //   path: '/table',
    //   component: './Table',
    // },
    {
      name: '资料管理',
      path: '/client',
      icon: 'ContactsTwoTone',
      routes: [
        {
          name: '客户管理',
          path: 'clientManagement',
          component: './ClientManagement',
        },
        {
          name: '汽车管理',
          path: 'carManagement',
          // component: './ClientManagement',
        },
      ],
    },
  ],
  proxy: {
    '/api': {
      'target': 'http://localhost:8080/',
      'changeOrigin': true,
      'pathRewrite': { '^/api': '' },
    },
  },
  npmClient: 'pnpm',
});


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
  layout: {},
  favicons: ['/logo.ico'],
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
      path: '/system',
      redirect: '/system/accessManagement',
    },
    {
      name: '系统管理',
      path: '/system',
      icon: 'SettingTwoTone',
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
      path: '/client',
      redirect: '/client/clientManagement',
    },
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
          component: './CarManagement',
        },
      ],
    },
    {
      path: '/store',
      redirect: '/store/carPartManagement',
    },
    {
      name: '仓库管理',
      path: '/store',
      icon: 'ProjectTwoTone',
      routes: [
        {
          // path: '/',
          // redirect:'carPartManagement'
        },
        {
          name: '配件管理',
          path: 'carPartManagement',
          component: './CarPartManagement',
        },
        {
          name: '配件订单管理',
          path: 'carPartOrderManagement',
          component: './CarPartOrderManagement',
        },
        {
          path: 'carPartOrderDetail/:id',
          component: '@/components/CarPartOrderManagement/CarPartOrderDetail',
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


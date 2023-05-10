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
        {
          name: '保险管理',
          path: 'insuranceManagement',
          component: './InsuranceManagement',
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
    {
      name: '业务流程管理',
      path: '/business',
      icon: 'ScheduleTwoTone',
      routes: [
        {
          name: '客户工单管理',
          path: 'businessManagement',
          component: './BusinessManagement',
        },
        {
          name: '事件参数管理',
          path: 'eventManagement',
          component: './EventManagement',
        },
      ],
    },
    {
      name: '数据分析',
      path: '/analysis',
      icon: 'PieChartTwoTone',
      // routes: [
      //   {
      //     path: 'businessManagement',
      //     component: './BusinessManagement',
      //   },
      // ],
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


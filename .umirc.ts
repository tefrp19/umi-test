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
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
      icon: 'HomeTwoTone',
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
          component: './AccessManagement',
          access: 'adminAccess',
        },
        {
          name: '部门管理',
          path: 'departmentManagement',
          icon: 'HomeOutlined',
          component: './DepartmentManagement',
          access: 'adminAccess',
        },
        {
          name: '员工管理',
          path: 'employeeManagement',
          component: './EmployeeManagement',
          access: 'personnelDepartmentAccess',
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
          access: 'clientDepartmentAccess',
        },
        {
          name: '汽车管理',
          path: 'carManagement',
          component: './CarManagement',
          access: 'clientDepartmentAccess',
        },
        {
          name: '保险管理',
          path: 'insuranceManagement',
          component: './InsuranceManagement',
          access: 'clientDepartmentAccess',
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
          name: '配件管理',
          path: 'carPartManagement',
          component: './CarPartManagement',
          access: 'carPartDepartmentAccess',
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
      path: '/business',
      redirect: '/business/businessManagement',
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
          path: 'businessDetail/:id',
          component: '@/components/BusinessManagement/BusinessDetail',
        },
        {
          name: '事件参数管理',
          path: 'eventManagement',
          component: './EventManagement',
        },
      ],
    },
    {
      path: '/analysis',
      redirect: '/analysis/employee',
    },
    {
      name: '数据分析',
      path: '/analysis',
      icon: 'PieChartTwoTone',
      routes: [
        {
          name: '员工数据分析',
          path: 'employee',
          component: './EmployeeAnalysis',
        },
        {
          // 1.客户数据分析：客户流失分析、客户回访分析（评价星级、词云图）、客户保养数据分析（x轴时间，y轴次数，次数多或少的月份考虑做活动）
          name: '客户数据分析',
          path: 'client',
          component: './ClientAnalysis',
        },
        // {
        //   name: '财务收入支出分析',
        //   path: 'finance',
        //   component: './FinanceAnalysis',
        // },
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


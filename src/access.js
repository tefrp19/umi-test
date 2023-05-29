// export default (initialState: API.UserInfo) => {
//   // 在这里按照初始化数据定义项目中的权限，统一管理
//   // 参考文档 https://umijs.org/docs/max/access
//   const canSeeAdmin = !!(
//     initialState && initialState.name !== 'dontHaveAccess'
//   );
//   return {
//     canSeeAdmin,
//   };
// };

export default function (initialState) {
  const { user } = initialState;
  // console.log('initialState',initialState);
  const department = user?.department
  // console.log(department);
  return {
    accessManagement: department === 'admin',
    departmentManagement: department === 'admin',
    employeeManagement: ['admin', '人事部'].includes(department),
    // 人事部部权限
    personnelDepartmentAccess: ['admin', '人事部'].includes(department),
    // 配件部权限
    carPartDepartmentAccess: ['admin', '配件部'].includes(department),
    // 财务部权限
    financeDepartmentAccess: ['admin', '财务部'].includes(department),
    //  
    canReadEmployeeManagement: ['admin', '人事部'].includes(department)
  };
}

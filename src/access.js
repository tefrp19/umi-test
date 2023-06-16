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
    adminAccess: department === 'admin',
    // 人事部权限
    personnelDepartmentAccess: ['admin', '人事部'].includes(department),
    // 客户部权限
    clientDepartmentAccess: ['admin', '客户部'].includes(department),
    // 配件部权限
    carPartDepartmentAccess: ['admin', '配件部'].includes(department),
    // 售后部权限
    serviceDepartmentAccess: ['admin', '售后部'].includes(department),
    // 财务部权限
    financeDepartmentAccess: ['admin', '财务部'].includes(department),
  };
}

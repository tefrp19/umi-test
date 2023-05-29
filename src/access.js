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
  console.log('access user:',user);
  // console.log('initialState',initialState);
  // TODO 登录权限
  const department = user?.department
  // console.log(department);
  return {
    accessManagement: department === 'admin',
    departmentManagement: department === 'admin',
    employeeManagement: ['admin', '人事部'].includes(department),
    carPartDepartmentAccess: ['admin', '配件部'].includes(department),
    canReadEmployeeManagement: ['admin', '人事部'].includes(department)
  };
}

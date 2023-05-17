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
  const { userId, role,user } = initialState;
  console.log('initialState',initialState);
  // TODO 登录权限
  const department=user?.department
  return {
    accessTest:false,
    canReadFoo: true,
    canUpdateFoo: role === 'admin',
    canDeleteFoo: (foo) => {
      return foo.ownerId === userId;
    },
    canReadEmployeeManagement:['admin','人事部'].includes(department)
  };
}

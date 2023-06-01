const data = [
    {
        id: 1,
        key: 1,
        name: 'admin',
        create_time: '2023-04-23T15:27:20.000Z',
        update_time: '2023-04-23T15:27:20.000Z',
        notes: '管理员',
        access: ['/home', '/system', '/accessManagement', '/departmentManagement', '/employeeManagement', '/client', '/clientManagement', '/carManagement', '/insuranceManagement', '/store', '/carPartManagement', '/carPartOrderManagement', '/business', '/businessManagement', '/eventManagement', '/analysis', '/employee', '/clientData', '/finance']
    },
    {
        id: 2,
        key: 2,
        name: '人事部',
        create_time: '2023-04-23T15:27:20.000Z',
        update_time: '2023-04-23T15:27:20.000Z',
        notes: '负责管理系统员工档案信息',
        access: ['/home', '/system', '/employeeManagement', '/analysis', '/employee', '/clientData', '/finance']
    },
    {
        id: 3,
        key: 3,
        name: '客户部',
        create_time: '2023-04-23T15:27:20.000Z',
        update_time: '2023-04-23T15:27:20.000Z',
        notes: '负责对接客户，联系客户开展业务和延长保险',
        access: ['/home', '/client', '/clientManagement', '/carManagement', '/insuranceManagement', '/business', '/businessManagement', '/analysis', '/employee', '/clientData', '/finance']
    },
    {
        id: 4,
        key: 4,
        name: '配件部',
        create_time: '2023-04-23T15:27:20.000Z',
        update_time: '2023-04-23T15:27:20.000Z',
        notes: '负责仓库内汽车配件的出入库管理',
        access: ['/home', '/store', '/carPartManagement', '/carPartOrderManagement', '/business', '/businessManagement', '/analysis', '/employee', '/clientData', '/finance']
    },
    {
        id: 5,
        key: 5,
        name: '售后部',
        create_time: '2023-04-23T15:27:20.000Z',
        update_time: '2023-04-23T15:27:20.000Z',
        notes: '负责维修保养客户汽车和回访记录管理',
        access: ['/home', '/client', '/clientManagement', '/carManagement', '/insuranceManagement', '/store', '/carPartManagement', '/carPartOrderManagement', '/business', '/businessManagement', '/eventManagement', '/analysis', '/employee', '/clientData', '/finance']
    },
    {
        id: 6,
        key: 6,
        name: '财务部',
        create_time: '2023-04-23T15:27:20.000Z',
        update_time: '2023-04-23T15:27:20.000Z',
        notes: '负责审核系统收入支出',
        access: ['/home', '/store', '/carPartOrderManagement', '/business', '/businessManagement', '/analysis', '/employee', '/clientData', '/finance']
    },


];

export default data

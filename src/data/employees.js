const data = [
    {
        id: 1,
        key: 1,
        username: 'admin',
        nickname: '管理员',
        gender: 0,
        phone_number: '15881999863',
        create_time: '2023-04-23T15:27:20.000Z',
        update_time: '2023-04-23T15:27:20.000Z',
        department: '人事部',
        status: 1,
    },
    {
        id: 2,
        key: 2,
        username: 'employee1',
        nickname: 'JohnBrown',
        gender: 0,
        phone_number: '15881999863',
        create_time: '2023-04-23T15:27:20.000Z',
        update_time: '2023-04-23T15:27:20.000Z',
        department: '人事部',
        status: 1,
    },
    {
        id: 3,
        key: 3,
        username: 'employee2',
        nickname: 'JimGreen',
        gender: 0,
        phone_number: '19114031807',
        create_time: '2023-04-23T15:27:20.000Z',
        update_time: '2023-04-23T15:27:20.000Z',
        department: '客户部',
        status: 0,
    },
    {
        id: 4,
        key: 4,
        username: 'employee3',
        nickname: 'JimGreen',
        gender: 0,
        phone_number: '19114031807',
        create_time: '2023-04-23T15:27:20.000Z',
        update_time: '2023-04-23T15:27:20.000Z',
        department: '配件部',
        status: 0,
    },
    {
        id: 5,
        key: 5,
        username: 'employee4',
        nickname: 'JimGreen',
        gender: 0,
        phone_number: '19114031807',
        create_time: '2023-04-23T15:27:20.000Z',
        update_time: '2023-04-23T15:27:20.000Z',
        department: '售后部',
        status: 0,
    },
    {
        id: 6,
        key: 6,
        username: 'employee5',
        nickname: 'JimGreen',
        gender: 0,
        phone_number: '19114031807',
        create_time: '2023-04-23T15:27:20.000Z',
        update_time: '2023-04-23T15:27:20.000Z',
        department: '财务部',
        status: 0,
    },

];
for (let i = 7; i < 100; i++) {
    data.push({
        id: i,
        key: i,
        username: `employee${i}`,
        nickname: 'JimGreen',
        gender: 1,
        phone_number: '19114031807',
        create_time: '2023-04-23T15:27:20.000Z',
        update_time: '2023-04-23T15:27:20.000Z',
        department: '客户部',
        status: 1,
    });
}

export default data
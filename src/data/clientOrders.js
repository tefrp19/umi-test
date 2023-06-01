const data = [
    {
        id: 1685636535761,
        key: 1685636535761,
        clientId: 1684982129830,
        clientName: '林雅南',
        carNumber: '川B12345',
        status: '未开始',
        create_time: '2023-05-21T15:27:20.000Z',
        finish_time: null,
        total: null,
        process: []
    },
    {
        id: 1685636535762,
        key: 1685636535762,
        clientId: 1684982129830,
        clientName: '林雅南',
        carNumber: '川B12345',
        status: '业务流程中',
        create_time: '2023-04-21T15:27:20.000Z',
        finish_time: null,
        total: null,
        process: [
            {
                id: 1684982129822,
                key: 1684982129822,
                username: 'employee2',
                password: 'employee2',
                nickname: '林国瑞',
                gender: '男',
                phone_number: '19114031807',
                action_time: '2023/4/24 23:27:20',
                department: '客户部',
                notes: '客户主动进厂维修'
            },
        ]
    },
    {
        id: 1685636535763,
        key: 1685636535763,
        clientId: 1684982129830,
        clientName: '林雅南',
        carNumber: '川B12345',
        status: '回访中',
        create_time: '2023-04-21T15:27:20.000Z',
        finish_time: '2023-04-28T15:27:20.000Z',
        total: 500,
        process: [
            {
                id: 1684982129822,
                key: 1684982129822,
                username: 'employee2',
                password: 'employee2',
                nickname: '林国瑞',
                gender: '男',
                phone_number: '19114031807',
                action_time: '2023/4/24 23:27:20',
                department: '客户部',
                notes: '客户主动进厂维修'
            },
            {
                id: 1684982129824,
                key: 1684982129824,
                username: 'employee4',
                password: 'employee4',
                nickname: '阮建安',
                gender: '男',
                phone_number: '19114031807',
                action_time: '2023/4/25 08:27:20',
                department: '售后部',
                status: false,
                notes: '汽车维修，消耗宝马X5 2.0T气门室盖1个'
            },
            {
                id: 1684982129823,
                key: 1684982129823,
                username: 'employee3',
                password: 'employee3',
                nickname: '林子帆',
                gender: '男',
                phone_number: '19114031807',
                action_time: '2023/4/25 23:27:20',
                department: '配件部',
                status: false,
                notes: '配件出库，出库宝马X5 2.0T气门室盖1个'
            },
        ]
    },
    {
        id: 1685636535764,
        key: 1685636535764,
        clientId: 1684982129830,
        clientName: '林雅南',
        carNumber: '川B12345',
        status: '已结束',
        create_time: '2023-04-21T15:27:20.000Z',
        finish_time: '2023-04-28T15:27:20.000Z',
        total: 300,
        process: [
            {
                id: 1684982129822,
                key: 1684982129822,
                username: 'employee2',
                password: 'employee2',
                nickname: '林国瑞',
                gender: '男',
                phone_number: '19114031807',
                action_time: '2023/4/24 23:27:20',
                department: '客户部',
                notes: '客户主动进厂维修'
            },
            {
                id: 1684982129824,
                key: 1684982129824,
                username: 'employee4',
                password: 'employee4',
                nickname: '阮建安',
                gender: '男',
                phone_number: '19114031807',
                action_time: '2023/4/24 09:27:20',
                department: '售后部',
                status: false,
                notes: '汽车维修，消耗宝马X5 2.0T气门室盖1个'
            },
            {
                id: 1684982129823,
                key: 1684982129823,
                username: 'employee3',
                password: 'employee3',
                nickname: '林子帆',
                gender: '男',
                phone_number: '19114031807',
                action_time: '2023/4/26 23:27:20',
                department: '配件部',
                status: false,
                notes: '配件出库，出库宝马X5 2.0T气门室盖1个'
            },
            {
                id: 1684982129824,
                key: 1684982129825,
                username: 'employee4',
                password: 'employee4',
                nickname: '阮建安',
                gender: '男',
                phone_number: '19114031807',
                action_time: '2023/4/28 23:27:20',
                department: '售后部',
                status: false,
                notes: '回访客户'
            },
        ]
    },
];

export default data
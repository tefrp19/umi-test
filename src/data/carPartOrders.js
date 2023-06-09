const data = [
    {
        id: 1685276308930,
        key: 1685276308930,
        status: '未提交订单',
        create_time: '2023/5/22 23:27:20',
        update_time: null,
        finish_time: null,
        notes: '宝马x5发动机配件（气门室盖）和供油冷却配件（液压传感器）库存不足',
        carParts: [
            {
                id: 1685277486631,
                key: 1685277486631,
                name: '宝马X5 2.0T气门室盖',
                firm: '绵阳市斯普润市政工程建设有限公司',
                number: 10,
                notes: '宝马X5气门室盖',
            },
        ],
        process: []
    },
    {
        id: 1685276308931,
        key: 1685276308931,
        status: '审核中',
        create_time: '2023/5/22 23:27:20',
        update_time: null,
        finish_time: null,
        notes: 'xxxxxxxxxxxxx',
        carParts: [
            {
                id: 1685277486631,
                key: 1685277486631,
                name: '宝马X5 2.0T气门室盖',
                firm: '绵阳市斯普润市政工程建设有限公司',
                number: 10,
                notes: '宝马X5气门室盖',
            },
            {
                id: 1685277486632,
                key: 1685277486632,
                name: '宝马X5 3.0L发动机皮带',
                firm: '绵阳市燊达机械加工有限公司',
                number: 20,
                unit: '个',
                notes: '宝马X5发动机皮带',
            },
            {
                id: 1685277486633,
                key: 1685277486633,
                name: '宝马5系3.0L正时链条',
                firm: '绵阳市斯普润市政工程建设有限公司',
                number: 20,
                unit: '个',
                notes: null,
            },
        ],
        process: [
            {
                id: 1684982129823,
                key: 1684982129823,
                nickname: '林子帆',
                gender: '男',
                department: '配件部',
                action_time: '2023/5/22 23:27:20',
                notes: '申请采购',
            }
        ]
    },
    {
        id: 1685276308932,
        key: 1685276308932,
        status: '审核成功',
        create_time: '2023/5/13 23:27:20',
        update_time: '2023/5/15 23:27:20',
        finish_time: null,
        notes: 'xxxxxxxxxxxxx',
        carParts: [
            {
                id: 1685277486631,
                key: 1685277486631,
                name: '宝马X5 2.0T气门室盖',
                firm: '绵阳市斯普润市政工程建设有限公司',
                number: 10,
                notes: '宝马X5气门室盖',
            },
            {
                id: 1685277486632,
                key: 1685277486632,
                name: '宝马X5 3.0L发动机皮带',
                firm: '绵阳市燊达机械加工有限公司',
                number: 20,
                unit: '个',
                notes: '宝马X5发动机皮带',
            },
            {
                id: 1685277486633,
                key: 1685277486633,
                name: '宝马5系3.0L正时链条',
                firm: '绵阳市斯普润市政工程建设有限公司',
                number: 20,
                unit: '个',
                notes: null,
            },
        ],
        process: [
            {
                id: 1684982129823,
                key: 1684982129823,
                nickname: '林子帆',
                gender: '男',
                department: '配件部',
                action_time: '2023/5/22 23:27:20',
                notes: '申请采购',
            },
            {
                id: 1684982129825,
                key: 1684982129825,
                nickname: '夏志豪',
                gender: '男',
                department: '财务部',
                action_time: '2023/5/26 23:27:20',
                notes: '同意采购，审核通过',
            },
        ]
    },
    {
        id: 1685276308933,
        key: 1685276308933,
        status: '已完成',
        create_time: '2023/4/22 23:27:20',
        update_time: '2023/4/25 23:27:20',
        finish_time: '2023/5/02 23:27:20',
        total: 2000,
        notes: 'xxxxxxxxxxxxx',
        carParts: [
            {
                id: 1685277486631,
                key: 1685277486631,
                name: '宝马X5 2.0T气门室盖',
                firm: '绵阳市斯普润市政工程建设有限公司',
                number: 10,
                price: 100,
                total: 1000,
                notes: '宝马X5气门室盖',
            },
            {
                id: 1685277486632,
                key: 1685277486632,
                name: '宝马X5 3.0L发动机皮带',
                firm: '绵阳市燊达机械加工有限公司',
                number: 20,
                price: 100,
                total: 2000,
                notes: '宝马X5发动机皮带',
            },
            {
                id: 1685277486633,
                key: 1685277486633,
                name: '宝马5系3.0L正时链条',
                firm: '绵阳市斯普润市政工程建设有限公司',
                number: 20,
                price: 100,
                total: 2000,
                notes: null,
            },
        ],
        process: [
            {
                id: 1684982129823,
                key: 1684982129823,
                nickname: '林子帆',
                gender: '男',
                department: '配件部',
                action_time: '2023/5/22 23:27:20',
                notes: '申请采购',
            },
            {
                id: 1684982129825,
                key: 1684982129825,
                nickname: '夏志豪',
                gender: '男',
                department: '财务部',
                action_time: '2023/5/26 23:27:20',
                notes: '同意采购，审核通过',
            },
            {
                id: 1684982129823,
                key: 1684982129824,
                nickname: '林子帆',
                gender: '男',
                department: '配件部',
                action_time: '2023/5/28 23:27:20',
                notes: '采购完成，配件已入库',
            },
        ]
    },


];

for (let i = 4; i <= 100; i++) {
    data.push({
        ...data[i-1],
        id: data[i-1].id+1,
        key: data[i-1].key+1,
    });
}

export default data
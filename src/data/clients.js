const data = [{
    id: 1684982129830,
    key: 1684982129830,
    name: '林雅南',
    gender: '女',
    age: 27,
    phone_number: '19114031807',
    address: '四川省绵阳市涪城区xxx小区',
    create_time: `2023/5/12 23:27:20`,
    update_time: `2023/5/12 23:27:20`,
    cars: [
        {
            id: 1685982129830,
            key: 1685982129830,
            number: '川B12345',
            model: '宝马X3',
            purchase_time: '2023/5/10 23:27:20',
            warranty_time: '2026/5/10 23:27:20',
            insurances: [
                {
                    name: '第三者责任险',
                    start_date: '2023-5-10',
                    end_date: '2024-5-10',
                },
                {
                    name: '车辆损失险',
                    start_date: '2023-5-10',
                    end_date: '2024-5-10',
                },
                {
                    name: '交强险',
                    start_date: '2023-5-10',
                    end_date: '2024-5-10',
                },
                {
                    name: '全车盗抢险',
                    start_date: '2023-5-10',
                    end_date: '2024-5-10',
                },
                {
                    name: '车上责任险',
                    start_date: '2023-5-10',
                    end_date: '2024-5-10',
                },
                {
                    name: '无过失责任险',
                    start_date: '2023-5-10',
                    end_date: '2024-5-10',
                },
            ]
        },
        {
            id: 1685982130830,
            key: 1685982130830,
            number: '川B22345',
            model: '宝马X5',
            purchase_time: '2023/5/10 23:27:20',
            warranty_time: '2026/5/10 23:27:20',
            insurances: [
                {
                    name: '第三者责任险',
                    start_date: '2023-5-10',
                    end_date: '2024-5-10',
                },
                {
                    name: '车辆损失险',
                    start_date: '2023-5-10',
                    end_date: '2024-5-10',
                },
                {
                    name: '交强险',
                    start_date: '2023-5-10',
                    end_date: '2024-5-10',
                },
                {
                    name: '全车盗抢险',
                    start_date: '2023-5-10',
                    end_date: '2024-5-10',
                },
                {
                    name: '车上责任险',
                    start_date: '2023-5-10',
                    end_date: '2024-5-10',
                },
                {
                    name: '无过失责任险',
                    start_date: '2023-5-10',
                    end_date: '2024-5-10',
                },
            ]
        }
    ]
}]

const nicknames = ['张吉惟', '林国瑞', '林玟书', '林雅南', '江奕云', '刘柏宏', '阮建安', '林子帆', '夏志豪', '吉茹定']
for (let i = 1; i < 100; i++) {
    data.push({
        id: 1684982129830 + i,
        key: 1684982129830 + i,
        name: nicknames[i % 10],
        gender: i % 2 ? '男' : '女',
        age: 25 + i % 20,
        phone_number: `1911403180${i % 10}`,
        address: `四川省绵阳市涪城区xxx${i % 10}小区`,
        create_time: `2023/5/1${i % 10} 23:27:20`,
        update_time: `2023/5/1${i % 10} 23:27:20`,
        cars: [
            {
                id: 1685982129830 + i,
                key: 1685982129830 + i,
                number: `川B${12310 + i}`,
                model: '宝马X3',
                purchase_time: `2023/${i % 10}/10 23:27:20`,
                warranty_time: `2026/${i % 10}/10 23:27:20`,
                insurances: [
                    {
                        name: '第三者责任险',
                        start_date: `2023-${i}-10`,
                        end_date: `2024-${i}-10`,
                    },
                    {
                        name: '车辆损失险',
                        start_date: `2023-${i}-10`,
                        end_date: `2024-${i}-10`,
                    },
                    {
                        name: '交强险',
                        start_date: `2023-${i}-10`,
                        end_date: `2024-${i}-10`,
                    },
                    {
                        name: '全车盗抢险',
                        start_date: `2023-${i}-10`,
                        end_date: `2024-${i}-10`,
                    },
                    {
                        name: '车上责任险',
                        start_date: `2023-${i}-10`,
                        end_date: `2024-${i}-10`,
                    },
                    {
                        name: '无过失责任险',
                        start_date: `2023-${i}-10`,
                        end_date: `2024-${i}-10`,
                    },
                ]
            }
        ]
    });
}

export default data
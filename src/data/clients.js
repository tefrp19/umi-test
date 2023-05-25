const data=[]

const nicknames = ['张吉惟', '林国瑞', '林玟书', '林雅南', '江奕云', '刘柏宏', '阮建安', '林子帆', '夏志豪', '吉茹定']
for (let i = 0; i < 100; i++) {
    data.push({
        id: 1684982129830 + i,
        key: 1684982129830 + i,
        name: nicknames[i%10],
        gender: i%2?'男':'女',
        age:25+i%20,
        phone_number: '19114031807',
        address:'四川省绵阳市涪城区xxx小区',
        create_time: `2023/5/1${i%10} 23:27:20`,
        update_time: `2023/5/1${i%10} 23:27:20`,
    });
}

export default data
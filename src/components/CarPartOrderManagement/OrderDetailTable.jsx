import { Button, Popconfirm, Space, Table, Tag } from 'antd';
import { history } from '@umijs/max';

const columns = [
  {
    title: '配件号',
    dataIndex: 'carPartId',
    key: 'carPartId',
  },
  {
    title: '配件名',
    dataIndex: 'carPart',
    key: 'carPart',
  },
  {
    title: '供应商',
    dataIndex: 'firm',
    key: 'firm',
  },
  {
    title: '入库数量',
    dataIndex: 'number',
    key: 'number',
    sorter: (a, b) => a.number - b.number,
  },
  {
    title: '采购单价',
    dataIndex: 'price',
    key: 'price',
    sorter: (a, b) => a.price - b.price,
  },
  {
    title: '总价',
    dataIndex: 'total',
    key: 'total',
    sorter: (a, b) => a.total - b.total,
  },
  {
    title: '备注',
    dataIndex: 'notes',
    key: 'notes',
  },


];
const data = [
  {
    carPartId: 1,
    key: 1,
    carPart: '宝马X3 2.0T进气管',
    firm: '绵阳市斯普润市政工程建设有限公司',
    number: 10,
    price: 200,
    total: 2000,
    notes: 'xxxxxxxxxxxxx',
  },
  {
    carPartId: 2,
    key: 2,
    carPart: '宝马X5 3.0L进气管',
    firm: '绵阳市燊达机械加工有限公司',
    number: 20,
    price: 100,
    total: 2000,
    notes: 'xxxxxxxxxxxxx',
  },
  {
    carPartId: 3,
    key: 3,
    carPart: '宝马5系3.0L正时链条',
    firm: '绵阳市斯普润市政工程建设有限公司',
    number: 10,
    price: 200,
    total: 2000,
    notes: 'xxxxxxxxxxxxx',
  },

];
export default function() {


  return <Table columns={columns} dataSource={data} />;

}
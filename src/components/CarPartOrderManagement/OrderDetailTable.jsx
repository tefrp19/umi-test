import { Button, Popconfirm, Space, Table, Tag } from 'antd';
import { history } from '../../.umi/core/history';

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
    carPart: '奔驰A级空气滤清器（2.0T 2.7L 3.5L）',
    firm: '绵阳市斯普润市政工程建设有限公司',
    number: 10,
    price: 200,
    total: 2000,
    notes: 'xxxxxxxxxxxxx',
  },
  {
    carPartId: 2,
    key: 2,
    carPart: '奔驰S300发动机油底壳',
    firm: '绵阳市燊达机械加工有限公司',
    number: 20,
    price: 100,
    total: 2000,
    notes: 'xxxxxxxxxxxxx',
  },
  {
    carPartId: 3,
    key: 3,
    carPart: '奔驰A级空气滤清器（2.0T 2.7L 3.5L）',
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
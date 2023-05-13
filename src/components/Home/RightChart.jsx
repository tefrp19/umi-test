import { Bar, Pie } from '@ant-design/plots';
import { Table } from 'antd';

export default function() {

  return <>
    <PieChart />
    <BarChart />
  </>;
}

function PieChart() {


  const data = [
    {
      department: '人事部',
      value: 6,
    },
    {
      department: '客户部',
      value: 20,
    },
    {
      department: '配件部',
      value: 10,
    },
    {
      department: '售后部',
      value: 20,
    },
    {
      department: '财务部',
      value: 10,
    },
    // {
    //   type: '其他',
    //   value: 5,
    // },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'department',
    radius: 0.75,
    label: {
      type: 'spider',
      labelHeight: 28,
      content: '{name}\n{percentage}',
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
  };
  return <Pie {...config} />;
}

function BarChart() {

  const data = [
    {
      department: '人事部',
      value: 6,
    },
    {
      department: '客户部',
      value: 20,
    },
    {
      department: '配件部',
      value: 10,
    },
    {
      department: '售后部',
      value: 20,
    },
    {
      department: '财务部',
      value: 10,
    },
  ];
  const config = {
    data,
    xField: 'value',
    yField: 'department',
    seriesField: 'department',
    legend: {
      position: 'top-left',
    },
  };
  return <Bar {...config} />;
}
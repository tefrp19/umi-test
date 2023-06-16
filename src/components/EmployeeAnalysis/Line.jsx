import { useState, useEffect } from 'react';
import { Line } from '@ant-design/plots';



export default function () {
  const [mock,setMock]=useState([])
  useEffect(() => {
    const mock = [
      {
        Date: '2023-05-01',
        number: 10,
      },
    ];
    for (let i = 2; i <= 31; i++) {
      mock.push({
        Date: `2023-05-${i < 10 ? `0${i}` : i}`,
        number: 10 + Math.floor(10 - Math.random() * 10),
      })
    }
    setMock(mock)
  }, [])
  const config = {
    data: mock,
    padding: 'auto',
    xField: 'Date',

    yField: 'number',
    xAxis: {
      // type: 'timeCat',
      tickCount: 30,
    },
  };

  return (

    <Line {...config} />
  );
};
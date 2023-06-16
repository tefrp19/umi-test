import { useState, useEffect } from 'react';
import { Line } from '@ant-design/plots';


export default function () {
  const [mock, setMock] = useState([])
  useEffect(() => {

    const mock = [
      {
        age: '22',
        times: 4,
      },
    ];
    for (let i = 1; i <= 30; i++) {
      mock.push({
        age: String( 22 + i),
        times: 1 + Math.floor(Math.random() * 10),
      })
    }
    console.log(mock);
    setMock(mock)

  }, [])


  const config = {
    data: mock,
    padding: 'auto',
    xField: 'age',

    yField: 'times',
    xAxis: {
      // type: 'timeCat',
      // tickCount: 30,
    },
  };

  return (

    <Line {...config} />
  );
};
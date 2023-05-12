import { useState, useEffect } from 'react';
import { Line } from '@ant-design/plots';

const mock = [
  {
    Date: '2023-05-01',
    total: 5000,
  },
];
for (let i=2;i<=31;i++) {
  mock.push({
    Date: `2023-05-${i<10?`0${i}`:i}`,
    total: 5000+Math.floor(500-Math.random()*2000),
  })
}
console.log(mock);

export default function() {
  // const [data, setData] = useState([]);
  //
  // useEffect(() => {
  //   asyncFetch();
  // }, []);
  //
  // const asyncFetch = () => {
  //   fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
  //     .then((response) => response.json())
  //     .then((json) => {
  //       console.log(json);
  //       setData(json);
  //     })
  //     .catch((error) => {
  //       console.log('fetch data failed', error);
  //     });
  // };
  const config = {
    data:mock,
    padding: 'auto',
    xField: 'Date',
    yField: 'total',
    xAxis: {
      // type: 'timeCat',
      tickCount: 5,
    },
  };

  return (

    <Line {...config} />
  );
};
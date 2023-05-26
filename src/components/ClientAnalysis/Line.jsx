import { useState, useEffect } from 'react';
import { Line } from '@ant-design/plots';

const mock = [
  {
    Date: '2023-05-01',
    number: 10,
  },
];
for (let i=2;i<=31;i++) {
  mock.push({
    Date: `2023-05-${i<10?`0${i}`:i}`,
    number: 10+Math.floor(10-Math.random()*10),
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
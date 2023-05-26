import { Card, Col, Row } from 'antd';
import { PageContainer, ProCard, StatisticCard, Statistic } from '@ant-design/pro-components';
import './index.css';
import Line from './Line';

export default function () {

  return (
    <>
      <PageContainer>
        <ProCard
          title="数据概览"
          extra="2019年9月28日 星期五"
          split='vertical'
          headerBordered
          bordered
        >
          <ProCard split="horizontal">
            <StatisticCard
              title="流量走势"
              chart={<Line />}
            />
            <StatisticCard
              title="流量走势"
              chart={<Line />}
            />
          </ProCard>
          <ProCard split="horizontal">
            <StatisticCard
              title="流量走势"
              chart={<Line />}
            />
            <StatisticCard
              title="流量走势"
              chart={<Line />}
            />
          </ProCard>
        </ProCard>
      </PageContainer>
    </>
  );
}
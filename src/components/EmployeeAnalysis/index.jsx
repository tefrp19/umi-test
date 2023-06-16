import { PageContainer, ProCard, StatisticCard, Statistic } from '@ant-design/pro-components';
import Line from './Line';
import Bar from './Bar';

export default function () {

  return (
    <>
      <PageContainer>
        <ProCard
          extra={new Date().toLocaleDateString()}
          split='vertical'
          headerBordered
          bordered
        >
          <ProCard split="horizontal">
            <StatisticCard style={{marginBottom:'50px'}}
              title="工单数量随时间的折线图"
              chart={<Line />}
            />
            <StatisticCard
              title="各员工工单数量和金额收入堆叠柱状图"
              chart={<Bar />}
            />
          </ProCard>
          
        </ProCard>
      </PageContainer>
    </>
  );
}
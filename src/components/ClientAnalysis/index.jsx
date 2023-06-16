import { PageContainer, ProCard, StatisticCard, Statistic } from '@ant-design/pro-components';
import Line from './Line';
import Bar from './Bar';
import Pie from './Pie';

export default function () {

  return (
    <>
      <PageContainer>
        <ProCard
          extra={new Date().toLocaleDateString()}
          split="horizontal"
          headerBordered
          bordered
        >
          <ProCard split="vertical">
            <StatisticCard
              title="客户回访评价堆叠柱状图"
              chart={<Bar />}
            />
             <StatisticCard
              title="回访评价星级占比图"
              chart={<Pie />}
            />
          </ProCard>
            <StatisticCard style={{marginBottom:'50px'}}
              title="客户年龄与本年消费行为折线图"
              chart={<Line />}
            />
          
        </ProCard>
      </PageContainer>
    </>
  );
}
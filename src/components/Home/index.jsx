import { Card, Col, Row } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined, ContainerTwoTone, MoneyCollectTwoTone } from '@ant-design/icons';
import { Statistic } from '@ant-design/pro-components';
import { ProCard, StatisticCard } from '@ant-design/pro-components';
import { useState } from 'react';
import Line from './Line';
import RightChart from './RightChart';

export default function () {

  return (
    <>
      <ProCard
        title='数据概览'
        extra={new Date().toLocaleDateString()}
        headerBordered
        bordered
      >
        <ProCard split='horizontal'>
          <ProCard split='horizontal'>
            <ProCard split='vertical'>
              <StatisticCard
                statistic={{
                  title: '今日客户工单数量',
                  value: 123,
                  description: (
                    <Statistic
                      title='较昨日工单数量'
                      value={23}
                      trend='down'
                    />
                  ),
                }}
              />
              <StatisticCard
                statistic={{
                  title: '今日总收入',
                  value: 6000.00,
                  description: (
                    <Statistic title='较昨日总收入' value={500.00} trend='up' />
                  ),
                }}
              />
            </ProCard>
            <ProCard split='vertical'>
              <StatisticCard
                statistic={{
                  title: '客户数量',
                  value: '431',
                  suffix: '名',
                }}
              />
              <StatisticCard
                statistic={{
                  title: '员工数量',
                  value: '66',
                  suffix: '名',
                }}
              />
            </ProCard>
          </ProCard>
          <StatisticCard
            title='总收入走势'
            chart={
              // <img
              //   src='https://gw.alipayobjects.com/zos/alicdn/_dZIob2NB/zhuzhuangtu.svg'
              //   width='100%'
              // />
              <Line />
            }
          />
        </ProCard>
        <StatisticCard
          title='员工分布情况'
          chart={
            // <img
            //   src='https://gw.alipayobjects.com/zos/alicdn/qoYmFMxWY/jieping2021-03-29%252520xiawu4.32.34.png'
            //   alt='大盘'
            //   width='100%'
            // />
            <RightChart />
          }
        />
      </ProCard>
    </>
  );
}
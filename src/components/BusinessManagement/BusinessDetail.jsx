import { history, useParams } from '@umijs/max';
import { PageContainer } from '@ant-design/pro-components';
import { Button, Card, Space, Steps } from 'antd';
import EmployeeActionTable from './EmployeeActionTable';
import DelegateEmployee from './DelegateEmployee';
import { useState, useEffect } from 'react';

export default function() {
  const params = useParams();
  const [clientOrderDetail, setClientOrderDetail] = useState({});

  console.log(params);
  useEffect(() => {
    const clientOrders = JSON.parse(localStorage.getItem('clientOrders'));
    const clientOrderDetail = clientOrders.find(c => c.id === Number(params.id));
    setClientOrderDetail(clientOrderDetail);

  }, []);
  return (
    <>
      <PageContainer>
        <Card title='客户工单流程'
              style={{ padding: '0 20px', marginBottom: '50px' }}>
          <Steps
            current={clientOrderDetail?.process?.length}
            items={[
              {
                title: '联系客户',
                description: clientOrderDetail?.process?.at(0)?.action_time,
              },
              {
                title: '完成业务',
                description: clientOrderDetail?.process?.at(1)?.action_time,
              },
              {
                title: '完成回访',
                description: clientOrderDetail?.process?.at(2)?.action_time,
              },
              {
                title: '已结束',
                description: clientOrderDetail?.process?.at(3)?.action_time,
              },
            ]}
          />
        </Card>

        <Card title={
          <>
            <div style={{
              display: 'flex',
            }}>
              <div style={{
                height: '32px',
                lineHeight: '32px',
              }}>
                工单详情
              </div>
              <div style={{ flex: '1' }} />
              <Space>
                {/*
                  1.客户部联系客户
                  2.售后部进行维修、领料出库
                  3.客户部负责回访
                  */}
                <DelegateEmployee clientOrderDetail={clientOrderDetail} setClientOrderDetail={setClientOrderDetail} />
                {/*datePicker*/}
                <Button>延长保修/保险</Button>
                <Button type='primary' danger>
                  删除订单
                </Button>
                <Button onClick={() => {
                  history.push('/business/businessManagement');
                }}>
                  返回
                </Button>

              </Space>
            </div>
          </>
        }>

          <Card title='员工操作信息'>
            {/*员工操作信息表格*/}
            <EmployeeActionTable process={clientOrderDetail?.process} />
          </Card>
        </Card>


      </PageContainer>
    </>
  );
}
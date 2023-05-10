import { useParams } from '@umijs/max';
import { PageContainer } from '@ant-design/pro-components';
import { Button, Card, Space, Steps } from 'antd';
import OrderDetailTable from './OrderDetailTable';
import EmployeeActionTable from './EmployeeActionTable';

export default function() {
  const params = useParams();
  console.log(params);
  return (
    <>
      <PageContainer>

        <Steps
          style={{ padding: '0 20px', marginBottom: '50px' }}
          current={1}
          items={[
            {
              title: '提交订单',
              description: '2018-09-15 12:24:27',
            },
            {
              title: '申请中',
              description: '2018-09-15 12:24:27',
            },
            {
              title: '已完成',
              // description:'2018-09-15 12:24:27',
            },
          ]}
        />
        <Card title={
          <>
            <div style={{
              display: 'flex',
            }}>
              <div style={{
                height: '32px',
                lineHeight: '32px',
              }}>
                订单详情
              </div>
              <div style={{ flex: '1' }} />
              <Space>
                <Button type='primary'>
                  审核订单
                </Button>
                <Button type='primary' danger>
                  删除订单
                </Button>
                <Button>
                  返回
                </Button>

              </Space>
            </div>
          </>
        }>

          {/*订单详情表格*/}
          <Card style={{marginBottom:'20px'}}>
            <OrderDetailTable />
          </Card>
          <Card>
            {/*员工操作信息表格*/}
            <EmployeeActionTable />
          </Card>
        </Card>


      </PageContainer>
    </>
  );
}
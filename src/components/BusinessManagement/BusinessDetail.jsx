import { useParams } from '@umijs/max';
import { PageContainer } from '@ant-design/pro-components';
import { Button, Card, Space, Steps } from 'antd';
import BusinessDetail from './BusinessDetail';
import BusinessDetailTable from './BusinessDetailTable';
import EmployeeActionTable from './EmployeeActionTable';

export default function() {
  const params = useParams();
  console.log(params);
  return (
    <>
      <PageContainer>
        <Card title='客户工单流程'
              style={{ padding: '0 20px', marginBottom: '50px' }}>
          <Steps
            current={1}
            items={[
              {
                title: '联系客户',
                description: '2018-09-15 12:24:27',
              },
              {
                title: '进行中',
                description: '2018-09-15 12:24:27',
              },
              {
                title: '完成业务',
                // description:'2018-09-15 12:24:27',
              },
              {
                title: '回访中',
                // description:'2018-09-15 12:24:27',
              },
              {
                title: '已结束',
                // description:'2018-09-15 12:24:27',
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
                <Button type='primary'>
                  {/*
                  1.客户部联系客户
                  2.售后部进行维修、领料出库
                  3.客户部负责回访
                  */}
                  委派员工
                </Button>
                <Button>
                  配件出库
                </Button>
                <Button disabled>
                  业务回访
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

          <Card title='员工操作信息'>
            {/*员工操作信息表格*/}
            <EmployeeActionTable />
          </Card>
        </Card>


      </PageContainer>
    </>
  );
}
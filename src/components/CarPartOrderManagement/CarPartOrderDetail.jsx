import { Access, useAccess, useParams } from '@umijs/max';
import { PageContainer } from '@ant-design/pro-components';
import { Button, Card, Space, Steps, Popconfirm } from 'antd';
import OrderDetailTable from './OrderDetailTable';
import EmployeeActionTable from './EmployeeActionTable';
import { useState, useEffect } from "react";
export default function () {
  const params = useParams();
  const [carPartOrderDetail, setCarPartOrderDetail] = useState({})
  const { carPartDepartmentAccess } = useAccess()
  console.log(carPartDepartmentAccess);
  useEffect(() => {
    const carPartOrders = JSON.parse(localStorage.getItem('carPartOrders'))
    const carPartOrderDetail = carPartOrders.find(c => c.id === Number(params.id))
    console.log(carPartOrderDetail);
    setCarPartOrderDetail(carPartOrderDetail)

  }, [])
  return (
    <>
      <PageContainer>
        <Card style={{ padding: '0 20px', marginBottom: '50px' }}>
          <Steps
            current={carPartOrderDetail?.process?.length}
            items={[
              {
                title: '提交订单',
                description: carPartOrderDetail?.process?.at(0)?.action_time,
              },
              {
                title: '审核通过',
                description: carPartOrderDetail?.process?.at(1)?.action_time,
              },
              {
                title: '已完成',
                description: carPartOrderDetail?.process?.at(2)?.action_time,
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
                订单详情
              </div>
              <div style={{ flex: '1' }} />
              <Space>
                <Access accessible={carPartDepartmentAccess}>
                  <Popconfirm title='确认提交？' onConfirm={() => {
                  }}>
                    <Button>
                      提交审核
                    </Button>
                  </Popconfirm>
                </Access>
                <Button type='primary' disabled>
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
          <Card style={{ marginBottom: '20px' }}>
            <Space>
              <Button type='primary'>添加采购配件</Button>
            </Space>
          </Card>
          <Card style={{ marginBottom: '20px' }}>
            <OrderDetailTable carParts={carPartOrderDetail.carParts} setCarPartOrderDetail={setCarPartOrderDetail} />
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
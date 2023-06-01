import { Access, history, useAccess, useParams, useModel } from '@umijs/max';
import { PageContainer } from '@ant-design/pro-components';
import { Button, Card, Space, Steps, Popconfirm } from 'antd';
import OrderDetailTable from './OrderDetailTable';
import EmployeeActionTable from './EmployeeActionTable';
import AddCarPart from './AddCarPart';
import { useState, useEffect } from "react";
export default function () {
  const params = useParams();
  const [carPartOrderDetail, setCarPartOrderDetail] = useState({})
  const { carPartDepartmentAccess, financeDepartmentAccess } = useAccess()
  const { initialState } = useModel('@@initialState');
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
                  <Popconfirm title='确认提交？' disabled={carPartOrderDetail?.process?.length !== 0} onConfirm={() => {
                    setCarPartOrderDetail(data => {
                      const { user } = initialState
                      const { id, nickname, department } = user

                      const newOrder = {
                        ...data,
                        process: [...data.process, {
                          id,
                          key: new Date().toLocaleString(),
                          nickname,
                          department,
                          action_time: new Date().toLocaleString(),
                          notes: '申请采购'
                        }]
                      }

                      const newOrders = JSON.parse(localStorage.getItem('carPartOrders')).map(order => {
                        if (order.id !== data.id) {
                          return order
                        }
                        return newOrder
                      })
                      localStorage.setItem('carPartOrders', JSON.stringify(newOrders))

                      return newOrder
                    })

                  }}>
                    <Button disabled={carPartOrderDetail?.process?.length !== 0}>
                      提交审核
                    </Button>
                  </Popconfirm>
                </Access>
                <Access accessible={financeDepartmentAccess}>
                  <Popconfirm title='审核是否通过？' onText='通过' cancelText='拒绝' disabled={carPartOrderDetail?.process?.length !== 1} onConfirm={() => {
                    setCarPartOrderDetail(data => {
                      const { user } = initialState
                      const { id, nickname, department } = user
                      const newOrder = {
                        ...data,
                        process: [...data.process, {
                          id,
                          key: new Date().toLocaleString(),
                          nickname,
                          department,
                          action_time: new Date().toLocaleString(),
                          notes: '同意采购，审核通过'
                        }]
                      }

                      const newOrders = JSON.parse(localStorage.getItem('carPartOrders')).map(order => {
                        if (order.id !== data.id) {
                          return order
                        }
                        return newOrder
                      })
                      localStorage.setItem('carPartOrders', JSON.stringify(newOrders))

                      return newOrder
                    })
                  }}>
                    <Button type='primary' disabled={carPartOrderDetail?.process?.length !== 1} >
                      审核订单
                    </Button>
                  </Popconfirm>
                </Access>
                <Access accessible={carPartDepartmentAccess}>
                  <Popconfirm title='是否已完成采购工作？' disabled={carPartOrderDetail?.process?.length !== 2} onConfirm={() => {
                    setCarPartOrderDetail(data => {
                      const { user } = initialState
                      const { id, nickname, department } = user
                      const newOrder = {
                        ...data,
                        process: [...data.process, {
                          id,
                          key: new Date().toLocaleString(),
                          nickname,
                          department,
                          action_time: new Date().toLocaleString(),
                          notes: '采购完成，配件已入库'
                        }]
                      }

                      const newOrders = JSON.parse(localStorage.getItem('carPartOrders')).map(order => {
                        if (order.id !== data.id) {
                          return order
                        }
                        return newOrder
                      })
                      localStorage.setItem('carPartOrders', JSON.stringify(newOrders))

                      return newOrder
                    })
                  }}>
                    <Button type='primary' disabled={carPartOrderDetail?.process?.length !== 2} >
                      完成订单
                    </Button>
                  </Popconfirm>
                </Access>

                <Popconfirm title='是否删除订单？' disabled={carPartOrderDetail?.process?.length !== 2} onConfirm={() => {
                  throw new Error('can not read "data" of undefined')
                }}>
                  <Button type='primary' danger  >
                    删除订单
                  </Button>
                </Popconfirm>
                <Button onClick={() => {
                  history.push('/store/carPartOrderManagement')
                }}>
                  返回
                </Button>

              </Space>
            </div>
          </>
        }>

          {/*订单详情表格*/}
          <Card style={{ marginBottom: '20px' }}>
            <Space>
              <AddCarPart setCarPartOrderDetail={setCarPartOrderDetail} />
            </Space>
          </Card>
          <Card style={{ marginBottom: '20px' }}>
            <OrderDetailTable carParts={carPartOrderDetail?.carParts} setCarPartOrderDetail={setCarPartOrderDetail} />
          </Card>
          <Card>
            {/*员工操作信息表格*/}
            <EmployeeActionTable process={carPartOrderDetail?.process} />
          </Card>
        </Card>


      </PageContainer>
    </>
  );
}
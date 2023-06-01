import {
    ModalForm,
    ProForm,
    ProFormTreeSelect,
    ProFormText,
    ProFormTextArea
} from '@ant-design/pro-components';
import { Form, message } from 'antd';

const waitTime = (time = 100) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, time);
    });
};

export default ({ department }) => {
    const [form] = Form.useForm();

    async function handleFinish(values) {
        await waitTime(500);
        console.log(values);
        //   setDataSource(data => {
        //     const newData = data.map(item => {
        //       if (item.id === employee.id) {
        //         // 将旧数据和新数据合并
        //         return {
        //           ...employee,
        //           ...values,
        //           update_time:new Date().toLocaleString()
        //         }
        //       } else {
        //         return item
        //       }
        //     })
        //     localStorage.setItem('employees', JSON.stringify(newData))

        //     return newData
        //   })

        message.success('添加成功');
        return true;
    }

    return (
        <ModalForm
            title="修改员工信息"
            form={form}
            trigger={
                <a>
                    修改信息
                </a>
            }
            autoFocusFirstInput
            modalProps={{
                destroyOnClose: true,
            }}
            initialValues={department}
            onFinish={handleFinish}
        >
            <ProForm.Group>
                <ProFormText
                    width="md"
                    name="name"
                    label="部门名称"
                    rules={[{ required: true }]}
                />
                <ProFormTreeSelect
                    width="md"
                    name="access"
                    label="权限"
                    fieldProps={{
                        multiple: true,
                        treeDefaultExpandAll: true,
                        allowClear: true,
                    }}
                    request={async () => {
                        return [
                            {
                                title: '首页',
                                value: '/home',
                            },
                            {
                                title: '系统管理',
                                value: '/system',
                                children: [
                                    {
                                        title: '权限管理',
                                        value: '/accessManagement',
                                    },
                                    {
                                        title: '部门管理',
                                        value: '/departmentManagement',
                                    },
                                    {
                                        title: '员工管理',
                                        value: '/employeeManagement',
                                    },
                                ],
                            },
                            {
                                title: '资料管理',
                                value: '/client',
                                children: [
                                    {
                                        title: '客户管理',
                                        value: '/clientManagement',
                                    },
                                    {
                                        title: '汽车管理',
                                        value: '/carManagement',
                                    },
                                    {
                                        title: '汽车管理',
                                        value: '/insuranceManagement',
                                    },
                                ],
                            },
                            {
                                title: '仓库管理',
                                value: '/store',
                                children: [
                                    {
                                        title: '配件管理',
                                        value: '/carPartManagement',
                                    },
                                    {
                                        title: '配件订单管理',
                                        value: '/carPartOrderManagement',
                                    },
                                ],
                            },
                            {
                                title: '业务流程管理',
                                value: '/business',
                                children: [
                                    {
                                        title: '客户工单管理',
                                        value: '/businessManagement',
                                    },
                                    {
                                        title: '事件参数管理',
                                        value: '/eventManagement',
                                    },
                                ],
                            },
                            {
                                title: '数据分析',
                                value: '/analysis',
                                children: [
                                    {
                                        title: '员工数据分析',
                                        value: '/employee',
                                    },
                                    {
                                        title: '客户数据分析',
                                        value: '/clientData',
                                    },
                                    {
                                        title: '财务收入支出分析',
                                        value: '/finance',
                                    },
                                ],
                            }
                        ];
                    }}
                    rules={[{ required: true }]}
                />
                <ProFormTextArea
                    width="md"
                    name="notes"
                    label="备注"
                />
            </ProForm.Group>

        </ModalForm>
    );
};
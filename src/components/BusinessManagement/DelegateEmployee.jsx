import { PlusOutlined } from '@ant-design/icons';
import {
    DrawerForm,
    ModalForm,
    ProFormTextArea,
    ProForm,
    ProFormSelect,
    ProFormText,
    ProFormDigit,

} from '@ant-design/pro-components';
import { Button, Form, message, Select } from 'antd';


const waitTime = (time = 500) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, time);
    });
};


export default ({ clientOrderDetail,setClientOrderDetail }) => {
    const [form] = Form.useForm();
    const employees = JSON.parse(localStorage.getItem('employees'))

    function getEmployeeIds() {
        const valueEnum = {}
        for (const employee of employees) {
            valueEnum[employee.id] = employee.id
        }
        return valueEnum
    }

    async function handleFinish(values) {
        await waitTime(500);
        values.id = Number(values.id)
        values.key = Number(new Date())
        values.action_time = new Date().toLocaleString()

        setClientOrderDetail(order => {
            const newOrder = {
                ...order,
                process: [...order.process, values]
            }
            return newOrder
        })
        message.success('添加成功');
        return true;
    }

    return (
        <DrawerForm
            title="添加采购配件"
            trigger={
                <Button type="primary" disabled={clientOrderDetail?.process?.length>=4}>
                    <PlusOutlined />
                    委派员工
                </Button>
            }
            form={form}
            autoFocusFirstInput
            drawerProps={{
                destroyOnClose: true,
            }}
            onFinish={handleFinish}
        >
            <ProForm.Group>
                <ProFormSelect
                    name="id"
                    width="sm"
                    label="采购配件编号"
                    valueEnum={getEmployeeIds()}
                    rules={[{ required: true }]}
                    onChange={(value) => {
                        if (value) {
                            const { nickname, department } = employees.find(employee => employee.id === Number(value))
                            form.setFieldsValue({
                                nickname,
                                department
                            })
                        }
                    }}
                />
                <ProFormText
                    width="sm"
                    name="nickname"
                    label="员工姓名"
                    rules={[{ required: true }]}
                />
                <ProFormText
                    width="sm"
                    name="department"
                    label="部门"
                    rules={[{ required: true }]}
                />
                <ProFormTextArea
                    width="md"
                    name="notes"
                    label="备注"
                />
            </ProForm.Group>

        </DrawerForm>
    );
};
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
import { Access, useAccess } from "@umijs/max";

const waitTime = (time = 500) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, time);
    });
};


export default ({ carPartOrderDetail, setCarPartOrderDetail }) => {
    const [form] = Form.useForm();
    const carParts = JSON.parse(localStorage.getItem('carParts'))
    const { carPartDepartmentAccess, financeDepartmentAccess } = useAccess()

    function getPartIds() {
        const valueEnum = {}
        for (const carPart of carParts) {
            valueEnum[carPart.id] = carPart.id
        }
        return valueEnum
    }

    async function handleFinish(values) {
        await waitTime(500);
        console.log(values);
        values.id = Number(values.id)
        values.key = Number(new Date())

        setCarPartOrderDetail(data => {
            const newOrder = {
                ...data,
                carParts: [...data.carParts, values]
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
        message.success('添加成功');
        return true;
    }

    return (
        <DrawerForm
            title="添加采购配件"
            trigger={
                <Access accessible={carPartDepartmentAccess}>
                    <Button type="primary" disabled={carPartOrderDetail?.process?.length !== 0}>
                        <PlusOutlined />
                        添加采购配件
                    </Button>
                </Access>

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
                    valueEnum={getPartIds()}
                    rules={[{ required: true }]}
                    onChange={(value) => {
                        if (value) {
                            const partName = carParts.find(part => part.id === Number(value)).name
                            form.setFieldsValue({
                                name: partName
                            })
                        }
                    }}
                />
                <ProFormText
                    width="sm"
                    name="name"
                    label="配件名称"
                    rules={[{ required: true }]}
                />
                <ProFormText
                    width="sm"
                    name="firm"
                    label="供应商"
                    rules={[{ required: true }]}
                />
                <ProFormDigit
                    width="xs"
                    name="number"
                    label="数量"
                    rules={[{ required: true }]}
                />
                <ProFormDigit
                    width="xs"
                    name="price"
                    label="单价"
                    rules={[{ required: true }]}
                />
                <ProFormDigit
                    width="xs"
                    name="total"
                    label="总价"
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
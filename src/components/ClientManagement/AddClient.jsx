import { PlusOutlined } from '@ant-design/icons';
import {
    DrawerForm,
    ModalForm,
    ProFormTextArea,
    ProForm,
    ProFormSelect,
    ProFormText,
} from '@ant-design/pro-components';
import { Button, Form, message } from 'antd';


const waitTime = (time = 500) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, time);
    });
};


export default ({ setDataSource }) => {
    const [form] = Form.useForm();

    async function handleFinish(values) {
        await waitTime(1000);
        // console.log(values);
        values.create_time = (new Date).toLocaleString()
        values.status = true
        values.id = +new Date()
        values.key = values.id
        setDataSource(data => {
            const newData = [
                ...data,
                values
            ]
            localStorage.setItem('employees', JSON.stringify(newData))
            return newData
        })
        message.success('添加成功');
        return true;
    }

    return (
        <DrawerForm
            title="添加客户"
            trigger={
                <Button type="primary">
                    <PlusOutlined />
                    添加客户
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
                <ProFormText
                    width="md"
                    name="123"
                    label="客户姓名"
                    rules={[{ required: true }]}
                />
                <ProFormSelect
                    valueEnum={{
                        '男': '男',
                        '女': '女',
                    }}
                    width="xs"
                    name="gender"
                    label="性别"
                    rules={[{ required: true }]}
                />
                <ProFormText
                   width="xs"
                    name="age"
                    label="年龄"
                />
                <ProFormText
                    width="md"
                    name="phone_number"
                    label="客户手机号"
                />
                <ProFormTextArea
                    width="md"
                    name="address"
                    label="客户地址"
                />
            </ProForm.Group>



        </DrawerForm>
    );
};
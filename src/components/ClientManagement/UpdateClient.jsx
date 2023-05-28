import {
    ModalForm,
    ProForm,
    ProFormSelect,
    ProFormText,
    ProFormTextArea,
    ProFormDigit
} from '@ant-design/pro-components';
import { Form, message } from 'antd';

const waitTime = (time = 100) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, time);
    });
};

export default ({ client, setDataSource }) => {
    const [form] = Form.useForm();

    async function handleFinish(values) {
        await waitTime(500);
        console.log(values);
        setDataSource(data => {
            const newData = data.map(item => {
                if (item.id === client.id) {
                    // 将旧数据和新数据合并
                    return {
                        ...client,
                        ...values,
                        update_time: new Date().toLocaleString()
                    }
                } else {
                    return item
                }
            })
            localStorage.setItem('clients', JSON.stringify(newData))

            return newData
        })

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
            initialValues={client}
            onFinish={handleFinish}
        >
            <ProForm.Group>
                <ProFormText
                    width="md"
                    name="name"
                    label="客户姓名"
                    placeholder="请输入姓名"
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
                <ProFormDigit
                    width="xs"
                    name="age"
                    label="客户年龄"
                    placeholder="请输入年龄"
                />
                <ProFormText
                    width="md"
                    name="phone_number"
                    label="客户手机号"
                    placeholder="请输入手机号"
                    rules={[{ required: true }]}
                />
                <ProFormTextArea
                    width="xl"
                    name="address"
                    label="客户地址"
                    placeholder="请输入地址"
                />
            </ProForm.Group>

        </ModalForm>
    );
};
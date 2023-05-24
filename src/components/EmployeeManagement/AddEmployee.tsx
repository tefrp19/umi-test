import { PlusOutlined } from '@ant-design/icons';
import {
    ModalForm,
    ProForm,
    ProFormDateRangePicker,
    ProFormSelect,
    ProFormText,
} from '@ant-design/pro-components';
import { Button, Form, message } from 'antd';

const waitTime = (time: number = 100) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, time);
    });
};

export default () => {
    const [form] = Form.useForm<{ name: string; company: string }>();
    return (
        <ModalForm<{
            name: string;
            company: string;
        }>
            title="添加员工"
            trigger={
                <Button type="primary">
                    <PlusOutlined />
                    添加员工
                </Button>
            }
            form={form}
            autoFocusFirstInput
            modalProps={{
                destroyOnClose: true,
                onCancel: () => console.log('run'),
            }}
            submitTimeout={2000}
            onFinish={async (values) => {
                await waitTime(100);
                console.log(values.name);
                console.log(values);

                message.success('提交成功');
                return true;
            }}
        >
            <ProForm.Group>
                <ProFormText
                    width="md"
                    name="username"
                    label="员工账号"
                    placeholder="请输入账号"
                    rules={[{ required: true, message: '输入员工账号' }]}
                />
                <ProFormText
                    width="md"
                    name="password"
                    label="员工密码"
                    placeholder="请输入密码"
                    rules={[{ required: true, message: '输入员工密码' }]}
                />
                <ProFormText
                    width="sm"
                    name="nickname"
                    label="员工姓名"
                    placeholder="请输入姓名"
                    rules={[{ required: true }]}
                />
                <ProFormSelect
                    valueEnum={{
                        open: '未解决',
                        closed: '已解决',
                    }}
                    width="xs"
                    name="useMode"
                    label="性别"
                    rules={[{ required: true }]}
                />
                <ProFormText
                    width="md"
                    name="company"
                    label="员工手机号"
                    placeholder="请输入手机号"
                />
                <ProFormSelect
                    valueEnum={{
                        人事部: '人事部',
                        客户部: '客户部',
                        配件部: '配件部',
                        售后部: '售后部',
                        财务部: '财务部',
                    }}
                    width="xs"
                    name="xx"
                    label="员工部门"
                    rules={[{ required: true }]}
                />
            </ProForm.Group>
            <ProForm.Group>
                <ProFormText
                    width="md"
                    name="contract"
                    label="合同名称"
                    placeholder="请输入名称"
                />
                <ProFormDateRangePicker name="contractTime" label="合同生效时间" />
            </ProForm.Group>
            <ProForm.Group>

                <ProFormSelect
                    width="xs"
                    options={[
                        {
                            value: 'time',
                            label: '履行完终止',
                        },
                    ]}
                    name="unusedMode"
                    label="合同约定失效效方式"
                />
            </ProForm.Group>
            <ProFormText width="sm" name="id" label="主合同编号" />
            <ProFormText
                name="project"
                disabled
                label="项目名称"
                initialValue="xxxx项目"
            />
            <ProFormText
                width="xs"
                name="mangerName"
                disabled
                label="商务经理"
                initialValue="启途"
            />
        </ModalForm>
    );
};
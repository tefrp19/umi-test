import {
  ModalForm,
  ProForm,
  ProFormSelect,
  ProFormText,
} from '@ant-design/pro-components';
import { Form, message } from 'antd';

const waitTime = (time = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export default ({ employee, setDataSource }) => {
  const [form] = Form.useForm();

  delete employee.password

  async function handleFinish(values) {
    await waitTime(500);
    console.log(values);
    setDataSource(data => {
      console.log(employee);
      console.log(values);
      const newData = data.map(item => {
        if (item.id === employee.id) {
          // 将旧数据和新数据合并
          return {
            ...employee,
            ...values,
            update_time:new Date().toLocaleString()
          }
        } else {
          return item
        }
      })
      localStorage.setItem('employees', JSON.stringify(newData))

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
      initialValues={employee}
      onFinish={handleFinish}
    >
      <ProForm.Group>
        <ProFormText
          width="md"
          name="username"
          label="员工账号"
          placeholder="请输入账号"
          rules={[{ required: true, message: '输入员工账号' }]}
        />
        <ProFormText.Password
          width="md"
          name="password"
          label="员工密码"
          placeholder="请输入密码"
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
            '男': '男',
            '女': '女',
          }}
          width="xs"
          name="gender"
          label="性别"
          rules={[{ required: true }]}
        />
        <ProFormText
          width="md"
          name="phone_number"
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
          name="department"
          label="员工部门"
          rules={[{ required: true }]}
        />
      </ProForm.Group>

    </ModalForm>
  );
};
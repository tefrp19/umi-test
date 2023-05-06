import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, message } from 'antd';
import loginBg from "./login-bg.jpg";
import { history, useRequest } from '@umijs/max';
import { login } from "@/services/employee";
import { useEffect } from 'react';

function Login() {

  useEffect(() => {
    document.title = '登录'
  }, [])

  const onFinish = async (values) => {

    const { status, data } = await login(values)
    console.log(data);
    if (status === 200) {
    message.success('登录成功')
    const user = {
      department: data.department
    }
    localStorage.setItem('user', JSON.stringify(user))
    history.push('/')
    }

  };


  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundImage: `url('${loginBg}')`
    }}>
      <Form
        name="normal_login"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        style={{
          width: '350px',
          padding: '20px',
          borderRadius: '5px',
          backgroundColor: '#FFFFFF',
          opacity: '0.8',
        }}
        size='large'
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: '请输入用户名！',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: '请输入密码！',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Login

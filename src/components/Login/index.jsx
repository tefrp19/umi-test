import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, message } from 'antd';
import loginBg from './login-bg.jpg';
import { history, useRequest ,useModel} from '@umijs/max';
import { login } from '@/services/employee';
import { useEffect } from 'react';
import employees from "@/data/employees";
function Login() {
  const { setInitialState } =useModel('@@initialState');

  useEffect(() => {
    document.title = '登录';
  }, []);

  const onFinish = (values) => {
    console.log(values);
    const { username, password } = values
   
    // 1.判断用户名是否存在
    const user = employees.find(employee => employee.username === username)
    if (!user) {
      message.error('用户名不存在！')
      return
    }
    // 2.判断密码是否正确
    if (user.password !== password) {
      message.error('密码错误请重试！')
      return
    }
    // 3.登录成功 
    delete user.password
    setInitialState({user})
    localStorage.setItem('user', JSON.stringify(user));
    history.push('/');

  };


  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundImage: `url('${loginBg}')`,
    }}>

      <div style={{
        width: '600px',
        height: '50px',
        textAlign: 'center',
        fontSize: '40px',
        marginBottom: '60px',
      }}>4S维修保养全流程综合管理系统
      </div>

      <Form
        name='normal_login'
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
          name='username'
          rules={[
            {
              required: true,
              message: '请输入用户名！',
            },
          ]}
        >
          <Input prefix={<UserOutlined className='site-form-item-icon' />} placeholder='Username' />
        </Form.Item>
        <Form.Item
          name='password'
          rules={[
            {
              required: true,
              message: '请输入密码！',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className='site-form-item-icon' />}
            type='password'
            placeholder='Password'
          />
        </Form.Item>

        <Form.Item style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Button type='primary' htmlType='submit' className='login-form-button'>
            登录
          </Button>
        </Form.Item>
      </Form>


    </div>
  );
};
export default Login;

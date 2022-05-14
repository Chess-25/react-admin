import React, { memo, useState } from "react";

import { LoginWrapper, LoginPanelWrapper} from "./style";
// import loginDog from "@/assets/img/login-dog.jpg";

import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, UnlockOutlined, QrcodeOutlined } from '@ant-design/icons';

import { useHistory } from "react-router-dom";
import {rules} from './config'
import localCache from "@/utils/cache.js";

const Login = memo(() => {
  const history = useHistory()
  let [remember,setRemember] = useState(false)
  const isRemember = (e)=>{
    setRemember(e.target.checked)
  }
  const onFinish = (values)=>{
    if (values.username ==='chess'&&values.password==='123456') {
      localCache.setCache("token","123456");
      history.push('/main/home')
    }
  }
  const onFinishFailed = (errorInfo) =>{
    console.log(errorInfo);
  }
  const getCode = ()=>{
    console.log(111);
  }
  return (
    <LoginWrapper>
      <LoginPanelWrapper>
        {/* <img src={loginDog} alt="" /> */}
        <h1 className="title">基于REACT+JS的</h1>
        <h1>后台管理系统</h1>
        <Form name="basic" labelCol={{ span: 6 }} onFinish={onFinish} onFinishFailed={onFinishFailed} initialValues={{remember: remember}}>
          <div className="login-form">
            <div className="title">欢迎登录</div>
            <Form.Item name="username" rules={rules.username}>
              <Input size="large" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入用户名"/>
            </Form.Item>
            <Form.Item name="password" rules={rules.password}>
              <Input.Password size="large" prefix={<UnlockOutlined />} placeholder="请输入密码"/>
            </Form.Item>
            <Form.Item name="code" rules={rules.code}>
              <Input placeholder="请输入验证码"  prefix={<QrcodeOutlined />} suffix={<Button onClick={e=>getCode()} type="primary">验证码</Button>}/>
            </Form.Item>
          </div>
          <Form.Item name="remember" valuePropName="checked">
            <div className='checkbox'>
              <Checkbox onChange={isRemember}><span>记住密码</span></Checkbox>
              <span>忘记密码</span>
            </div>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block size="large">立即登录</Button>
          </Form.Item>
        </Form>
      </LoginPanelWrapper>
    </LoginWrapper>
  );
});

export default Login;

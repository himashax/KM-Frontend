import React, { Component } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import 'antd/dist/antd.css';

class Login extends Component {


    state = {  } 

     onFinish = (values) => {
        console.log('Success:', values);
      };
       onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    render() { 
        return (
            <div>
              
            <Form
                name="basic"
                labelCol={{ span: 8,}}
                wrapperCol={{ span: 8,}}
                initialValues={{ remember: true,}}
                autoComplete="off">
                
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                        required: true,
                        message: 'Please input your username!',
                        },
                    ]}
                    >
                    <Input />
                </Form.Item>
        
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                        required: true,
                        message: 'Please input your password!',
                        },
                    ]}
                    >
                    <Input.Password />
                </Form.Item>
        
                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                    >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>
        
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                    >
                    <Button type="primary" htmlType="submit">
                        Submit
                </Button>
                </Form.Item>
          </Form>
        </div>
                
           
        );
    }
}
 
export default Login;
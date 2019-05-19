import React, {Component} from 'react';
import './Login.css'
import {Input,Button, Icon, Form, Checkbox} from 'antd/lib/index';
import axios from 'axios';
class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInputChange = (e) =>{
        this.setState({
            [e.target.name] : [e.target.value]
        });
        console.log(this.state.email);
        console.log(this.state.password);
    };
    handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:7000/api/login", this.state)
            .then(res=>console.log(res))
            .catch(err=>console.log(err));
    };
    render() {
        return (
            <div className='Login'>
                <Form method='post' className='form-input' layout="inline" onSubmit={this.handleSubmit}>
                    <label className='title'>Member Login</label>
                    <Form.Item>
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                            onChange={this.handleInputChange}
                            name='email'
                        />
                    </Form.Item>
                    <Form.Item>
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                            onChange={this.handleInputChange}
                            name = 'password'
                        />
                    </Form.Item>
                    <Form.Item>
                        <Checkbox>Remember me</Checkbox>
                        <a className="login-form-forgot" href="">
                            Forgot password
                        </a>
                        <br/>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                        <br/>
                        Or <a href="./register">register now!</a>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
export default Login;
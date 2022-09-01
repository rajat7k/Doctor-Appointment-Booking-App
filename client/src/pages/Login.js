import React from 'react'
import { Button, Form, Input } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { hideLoading, showLoading } from '../redux/alertSlice';
function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onfinish = async (values) => {
        try {
            // console.log(loading);
            dispatch(showLoading());
            // console.log(loading);
            const response = await axios.post('/api/user/login', values);
            dispatch(hideLoading());
            if (response.data.success) {
                toast.success(response.data.message);
                localStorage.setItem("token", response.data.data);
                toast("Redirecting To Home Page");
                navigate("/");
            }
            else {
                dispatch(hideLoading);
                toast.error(response.data.message);
            }
        }
        catch (error) {
            toast.error("Something went wrong");
        }
    }
    return (
        <div className="authentication">
            <div className="authentication-form  card p-3">
                <h1 className='card-title'> Welcome Back !</h1>
                <Form layout='vertical' onFinish={onfinish}>
                    <Form.Item label='Email' name='email'>
                        <Input placeholder='Email' />
                    </Form.Item>
                    <Form.Item label='Password' name='password'>
                        <Input placeholder='Password' type='password' />
                    </Form.Item>
                    <div className="d-flex  flex-column">
                        <Button className='primary-button my-2 full-width-button' htmlType='submit'>Login</Button>
                    </div>
                    <Link to='/register' className='anchor mt-2'>CLICK HERE TO REGISTER</Link>
                </Form>
            </div>
        </div>
    )
}

export default Login
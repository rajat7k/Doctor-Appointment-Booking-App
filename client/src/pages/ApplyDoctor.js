import React from 'react'
import Layout from '../components/Layout'
import { Row, Col, Form, Input, TimePicker, Button } from 'antd'
import {useSelector,useDispatch} from 'react-redux'
import {showLoading,hideLoading} from '../redux/alertSlice'
import {toast} from 'react-hot-toast'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import DoctorForm from '../components/DoctorForm'
function ApplyDoctor() {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const {user}=useSelector((state)=>state.user);
    const onFinish = async(values) => {
        try{
             dispatch(showLoading());
             const response=await axios.post('/api/user/apply-doctor-account',{
                ...values,
                userId:user._id,
             },
             {
                headers:{
                    Authorization:`Bearer ${localStorage.getItem("token")}`
                }
             }); 
             dispatch(hideLoading());
             if(response.data.success){
                 toast.success(response.data.message);
                 toast("Redirecting To Home Page");
                 navigate("/");
             }
             else{
                  toast.error(response.data.message);
             }
        }
        catch(error){
            dispatch(hideLoading());
             toast.error("Something went wrong");
        }
     }
    return (
        <Layout>
            <h1 className='page-title'>Apply Doctor</h1>
            <hr />
            <DoctorForm onFinish={onFinish}/>
        </Layout>
    )
}

export default ApplyDoctor



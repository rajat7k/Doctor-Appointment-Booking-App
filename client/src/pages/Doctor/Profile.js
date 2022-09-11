import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import { Row, Col, Form, Input, TimePicker, Button } from 'antd'
import {useSelector,useDispatch} from 'react-redux'
import {showLoading,hideLoading} from '../../redux/alertSlice'
import {toast} from 'react-hot-toast'
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'
import DoctorForm from '../../components/DoctorForm'
import moment from 'moment'
function Profile() {
    const { user } = useSelector((state) => state.user);
    const [doctor,setDoctor]=useState(null);
    const params=useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onFinish = async(values) => {
        try{
             dispatch(showLoading());
             const response=await axios.post("/api/doctor/update-doctor-profile",{
                ...values,
                userId:user._id,
                timings:[
                    moment(values.timings[0]).format("HH:MM"),
                    moment(values.timings[1]).format("HH:MM")
                ]
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

    const getDoctorData = async () => {
        try {
            dispatch(showLoading());
            const response = await axios.post(
                "/api/doctor/get-doctor-info-by-user-id",
                {
                    userId: params.userId,
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );

            dispatch(hideLoading());
            if (response.data.success) {
                setDoctor(response.data.data);
            }
        } catch (error) {
            console.log(error);
            dispatch(hideLoading());
        }
    };

    useEffect(() => {
        getDoctorData();
    }, []);
    return (
        <Layout>
            <h1 className="page-title">Doctor Profile</h1>
            <hr />
             {doctor && <DoctorForm onFinish={onFinish} initValues={doctor}/>}
        </Layout>
    );
}

export default Profile;
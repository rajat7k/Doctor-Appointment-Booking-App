import React from 'react'
import Layout from '../components/Layout'
import { Row, Col, Form, Input, TimePicker, Button } from 'antd'
import {useSelector,useDispatch} from 'react-redux'
import {showLoading,hideLoading} from '../redux/alertSlice'
import {toast} from 'react-hot-toast'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
function DoctorForm(onFinish) {

  

  return (
    <Form layout='vertical' onFinish={onFinish}>
                <h1 className="card-title mt-3">Personal Information</h1>
                <Row gutter={20}>
                    <Col span={8} xs={24} sm={24} lg={8}>
                        <Form.Item required label="First Name" name='firstName' rules={[{ required: true }]}  >
                            <Input placeholder="First Name" />
                        </Form.Item>
                    </Col>
                    <Col span={8} xs={24} sm={24} lg={8}>
                        <Form.Item required label="Last Name" name='lastName' rules={[{ required: true }]}  >
                            <Input placeholder="Last Name" />
                        </Form.Item>
                    </Col>
                    <Col span={8} xs={24} sm={24} lg={8}>
                        <Form.Item required label="Phone Number" name='phoneNumber' rules={[{ required: true }]}  >
                            <Input placeholder="Phone Number" />
                        </Form.Item>
                    </Col>
                    <Col span={8} xs={24} sm={24} lg={8}>
                        <Form.Item required label="Website" name='website' rules={[{ required: true }]}  >
                            <Input placeholder="Website" />
                        </Form.Item>
                    </Col>
                    <Col span={8} xs={24} sm={24} lg={8}>
                        <Form.Item required label="Address" name='address' rules={[{ required: true }]}  >
                            <Input placeholder="Address" />
                        </Form.Item>
                    </Col>
                </Row>
                <hr />
                <h1 className="card-title mt-3">Professional Information</h1>
                <Row gutter={20}>
                    <Col span={8} xs={24} sm={24} lg={8}>
                        <Form.Item required label="Specialization" name='specialization' rules={[{ required: true }]}  >
                            <Input placeholder="Specialization" />
                        </Form.Item>
                    </Col>
                    <Col span={8} xs={24} sm={24} lg={8}>
                        <Form.Item required label="Experience" name='experience' rules={[{ required: true }]}  >
                            <Input placeholder="Experience" type='number' />
                        </Form.Item>
                    </Col>
                    <Col span={8} xs={24} sm={24} lg={8}>
                        <Form.Item required label="Fee Per Consultation" name='feePerConsultation' rules={[{ required: true }]}  >
                            <Input placeholder="ee Per Consultation" type='number' />
                        </Form.Item>
                    </Col>
                    <Col span={8} xs={24} sm={24} lg={8}>
                        <Form.Item required label="Timings" name='timings' rules={[{ required: true }]}  >
                            <TimePicker.RangePicker />
                        </Form.Item>
                    </Col>
                </Row>
                <div className="d-flex justify-content-end">
                    <Button className='primary-button' htmlType='submit'>Submit</Button>
                </div>
            </Form>
  )
}

export default DoctorForm
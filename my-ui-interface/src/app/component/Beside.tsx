'use client';

import React from 'react';
// import { useRouter } from 'next/router';
// import { useState } from 'react';
import { Card, Col, Row, Typography } from 'antd';
import { ExportOutlined, RollbackOutlined, StopOutlined, UserOutlined } from '@ant-design/icons';

const Beside = () => {

    return (
        <>
            <div style={{ margin: '2%' }}>

                <Row>
                    <Col span={14}>
                        <Typography.Title style={{ textAlign: 'left' }}>
                            วันที่ 30 ม.ค. 2564
                        </Typography.Title>

                    </Col>
                    <Col span={8} style={{ backgroundColor: '#ade6f0', color: '#eaa95f', marginBottom: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <span style={{ fontSize: '1.5em' }}>รายได้ทั้งหมด 0.00 บาท</span>
                    </Col>
                    <Col span={2} style={{ backgroundColor: '#ffffff', color: '#eaa95f', fontSize: '2em', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <RollbackOutlined />
                    </Col>
                </Row>


                <Row gutter={16} >
                    <Col span={8}>
                        <Card title="ห้องพิเศษ Present (0)" className='custom-card-content1' bordered={false}>

                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="แอดมิน (1)" className='custom-card-content2' bordered={false}>

                            <div className="space-align-container">
                                <div className="space-align-block" style={{ backgroundColor: 'white', boxShadow: '2px 2px #f9fafb', borderRadius: '5px' }}>

                                    <Row>
                                        <Col span={6}>
                                            <Row
                                                style={{
                                                    height: '40%',
                                                    width: '80%',
                                                    backgroundColor: '#6ad8b3',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    textAlign: 'center',
                                                    borderRadius: '0px 0px 35px 0px'
                                                }}

                                            >
                                                <span style={{ fontSize: '1.5em' }}>01</span>

                                            </Row>
                                            <Row style={{ textAlign: 'left' }}>
                                                <Col span={24} >
                                                    <UserOutlined style={{ fontSize: '3em', color: '#bbbbbb' }} />
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col span={14}>
                                            <Row style={{ height: '25%' }}>
                                                <span style={{ color: '#273e78', fontSize: '1.5em' }}>วรภัทร บารมี</span>

                                            </Row>
                                            <Row style={{ height: '25%' }}>
                                                <span style={{ color: '#273e78', fontSize: '1.5em' }}>6401023</span>
                                            </Row>

                                            <Row

                                                style={{
                                                    height: '30%',
                                                    width: '100%',
                                                    display: 'flex',
                                                    justifyContent: 'flex-end',
                                                    paddingRight: '10px',
                                                    fontSize: '1.5em',
                                                    color: '#ffffff'
                                                }}
                                            >
                                                <ExportOutlined />
                                            </Row>

                                            <Row
                                                style={{
                                                    height: '30%',
                                                    width: '100%',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    textAlign: 'center',
                                                }}
                                            >
                                                <span style={{ color: '#bbbbbb', fontSize: '1em' }}>9 วัน</span>
                                            </Row>
                                        </Col>
                                        <Col span={4}>
                                            <Row
                                                style={{
                                                    height: '40%',
                                                    width: '100%',
                                                    backgroundColor: '#273e78',
                                                    display: 'flex',
                                                    justifyContent: 'flex-end',
                                                    alignItems: 'center',
                                                    paddingRight: '10px',
                                                }}
                                            >
                                                <span style={{ fontSize: '1.5em' }}>05</span>
                                            </Row>
                                            <Row
                                                style={{
                                                    height: '40%',
                                                    width: '100%',
                                                    // backgroundColor: '#273e78',
                                                    display: 'flex',
                                                    justifyContent: 'flex-end',
                                                    alignItems: 'center',
                                                    paddingRight: '10px',
                                                    fontSize: '1.5em',
                                                    color: 'red'
                                                }}

                                            >

                                                <StopOutlined />
                                            </Row>

                                        </Col>
                                    </Row>
                                </div>
                            </div>


                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="จุดชำระเงิน (1)" className='custom-card-content3' bordered={false}>
                            <div className="space-align-container">
                                <div className="space-align-block" style={{ backgroundColor: 'white', boxShadow: '2px 2px #f9fafb', borderRadius: '5px' }}>

                                    <Row>
                                        <Col span={6}>
                                            <Row
                                                style={{
                                                    height: '40%',
                                                    width: '80%',
                                                    backgroundColor: '#6ad8b3',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    textAlign: 'center',
                                                    borderRadius: '0px 0px 35px 0px'
                                                }}

                                            >
                                                <span style={{ fontSize: '1.5em' }}>01</span>

                                            </Row>
                                            <Row style={{ textAlign: 'left' }}>
                                                <Col span={24} >
                                                    <UserOutlined style={{ fontSize: '3em', color: '#bbbbbb' }} />
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col span={14}>
                                            <Row style={{ height: '25%' }}>
                                                <span style={{ color: '#273e78', fontSize: '1.5em' }}>วรภัทร บารมี</span>

                                            </Row>
                                            <Row style={{ height: '25%' }}>
                                                <span style={{ color: '#273e78', fontSize: '1.5em' }}>6401023</span>
                                            </Row>

                                            <Row

                                                style={{
                                                    height: '30%',
                                                    width: '100%',
                                                    display: 'flex',
                                                    justifyContent: 'flex-end',
                                                    paddingRight: '10px',
                                                    fontSize: '1.5em',
                                                    color: '#bbbbbb'
                                                }}
                                            >
                                                <ExportOutlined />
                                            </Row>

                                            <Row
                                                style={{
                                                    height: '30%',
                                                    width: '100%',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    textAlign: 'center',
                                                }}
                                            >
                                                <span style={{ color: '#bbbbbb', fontSize: '1em' }}>5 วัน</span>
                                            </Row>
                                        </Col>
                                        <Col span={4}>
                                            <Row
                                                style={{
                                                    height: '40%',
                                                    width: '100%',
                                                    backgroundColor: '#273e78',
                                                    display: 'flex',
                                                    justifyContent: 'flex-end',
                                                    alignItems: 'center',
                                                    paddingRight: '10px',
                                                }}
                                            >
                                                <span style={{ fontSize: '1.5em' }}>03</span>
                                            </Row>
                                            <Row
                                                style={{
                                                    height: '40%',
                                                    width: '100%',
                                                    // backgroundColor: '#273e78',
                                                    display: 'flex',
                                                    justifyContent: 'flex-end',
                                                    alignItems: 'center',
                                                    paddingRight: '10px',
                                                    fontSize: '1.5em',
                                                    color: 'red'
                                                }}

                                            >

                                                <StopOutlined />
                                            </Row>

                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
       
        </>


    )

}



export default Beside
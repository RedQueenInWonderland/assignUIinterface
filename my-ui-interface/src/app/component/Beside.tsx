'use client';

import React from 'react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Card, Col, Divider, Row, Space } from 'antd';

const Beside = () => {

    return (
        <>
            <div>
                <Divider orientation="left">sub-element align full</Divider>
                <Row justify="space-around" gutter={[3, 3]} >

                    <Col span={4} style={{ backgroundColor: '#f4bc7d' }}>

                        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                            <Card title="ห้องพิเศษ Present (0)" size="small">
                                <p>Card content</p>
                                <p>Card content</p>
                            </Card>
                        </Space>
                    </Col>
                    <Col span={6} style={{ backgroundColor: '#f4e77d' }}>

                        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                            <Card title="แอดมิน (1)" size="small">
                                <p>Card content</p>
                                <p>Card content</p>
                            </Card>
                        </Space>

                    </Col>
                    <Col span={6} style={{ backgroundColor: '#f4e77d' }}>
                        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                            <Card title="จุดชำระเงิน (1)" size="small">
                                <p>Card content</p>
                                <p>Card content</p>
                            </Card>
                        </Space>
                    </Col>
                </Row>
            </div>
        </>


    )

}



export default Beside
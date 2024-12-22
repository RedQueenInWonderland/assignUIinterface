'use client';

import React from 'react';
// import { useRouter } from 'next/router';
import { useState } from 'react';
import { Card, Flex, Select, Typography } from 'antd';
import { dataDent } from '../data/dentistname';
import { ClockCircleOutlined } from '@ant-design/icons';
import AppointmentModal from './AppointmentModal';



const imgStyle: React.CSSProperties = {
    borderRadius: '50%',
    width: '7%',
    height: '10%'
};

const Mainpage = () => {

    const [name, setName] = useState<string>('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    // const { Sider, Content } = Layout;

    // const router = useRouter()

    // const { id } = router.query; // Access the dynamic route parameter

    // return <div>Page ID: {id}</div>;


    const handleChange = (value: string, option: any) => {
        setName(option.label);
        setIsModalOpen(true);
    };

    const handleModalCancel = () => {
        setIsModalOpen(false);
    };


    return (
        <>
            <Select
                showSearch
                placeholder="Select a person"
                filterOption={(input, option) =>
                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                }
                style={{ width: '100%' }}
                options={dataDent}
                onChange={handleChange}
            />

            <Card hoverable styles={{ body: { padding: 0, overflow: 'hidden' } }}>

                <Flex justify="space-between" style={{ backgroundColor: '#212b5e', borderRadius: '2%' }}>
                    <Flex vertical align="flex-end" justify="space-between" style={{ padding: 10 }}>
                        <Typography style={{ fontSize: '1.5em', color: 'white' }}>
                            ทันตแพทย์
                        </Typography>
                    </Flex >
                    <img
                        alt="avatar"
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        style={imgStyle}

                    />
                </Flex>
            </Card>

            <AppointmentModal
                visible={isModalOpen}
                onCancel={handleModalCancel}
                appointmentDetails={`${name} | นัดทำผม | เวลา 11.00-11.30 น.`}
            />

            <Flex justify="center" align="center" style={{ padding: 10, backgroundColor: '#6ad8b3', borderRadius: '0.7em' }}>
                <ClockCircleOutlined /> <span>เวลาเข้างาน 09.00 -19.00 น.</span>
            </Flex>

        </>
    )
}

export default Mainpage;
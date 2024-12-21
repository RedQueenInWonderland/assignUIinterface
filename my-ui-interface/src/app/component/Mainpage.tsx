'use client';

import React from 'react';
import { useRouter } from 'next/router';
import { useState } from 'react';


import { Button, Card, Flex, Layout,Row, Select, Typography } from 'antd';
import { dataDent } from '../data/dentistname';
import { ClockCircleOutlined } from '@ant-design/icons';


// import { Button, Card, Flex, Typography } from 'antd';

const cardStyle: React.CSSProperties = {
//   width: '80%',
};

const imgStyle: React.CSSProperties = {
//   display: 'block',
  width: '15%',
};


// const headerStyle: React.CSSProperties = {
//     textAlign: 'center',
//     color: '#fff',
//     height: 64,
//     paddingInline: 48,
//     lineHeight: '64px',
// };

// const contentStyle: React.CSSProperties = {
//     textAlign: 'center',
//     backgroundColor: '#4096ff',
//     minHeight: 120,
//     lineHeight: '120px',
//     color: '#fff',
// };

// const siderStyle: React.CSSProperties = {
//     textAlign: 'center',
//     lineHeight: '120px',
//     color: '#fff',
//     backgroundColor: '#1677ff',
// };

// const footerStyle: React.CSSProperties = {
//     textAlign: 'center',
//     color: '#fff',
//     backgroundColor: '#4096ff',
// };

// const layoutStyle = {
//     borderRadius: 8,
//     overflow: 'hidden',
//     width: 'calc(50% - 8px)',
//     maxWidth: 'calc(50% - 8px)',
// };

// export default function Mainpage(){
const Mainpage = () => {

    const [name,setName] = useState<string>('');

    const { Sider, Content } = Layout;

    // const router = useRouter()

    // const { id } = router.query; // Access the dynamic route parameter

    // return <div>Page ID: {id}</div>;


    const handleChange = (value: string) => {
        // Navigate to the page corresponding to the selected option
        // navigate(`/page/${value}`);
        console.log(value)
        setName(value)
        // router.push(value)
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

             {/* <Flex vertical align="flex" justify="space-between" style={{ padding: 10 }}>
                <Typography.Title level={1}>
                    “antd is an enterprise-class UI design language and React UI library.”
                    ทันตแพทย์
                    {name}
                </Typography.Title>        

                <Flex justify="space-between">

                <img
                    alt="avatar"
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    style={imgStyle}
                />
            </Flex>
            </Flex>  */}

            <Flex justify="space-between">
                <Flex vertical align="flex-end" justify="space-between" style={{ padding: 10 }}>
                    <Typography.Title level={1}>
                        {/* “antd is an enterprise-class UI design language and React UI library.” */}
                        ทันตแพทย์
                    </Typography.Title>
                </Flex >          
                <img
                    alt="avatar"
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    style={imgStyle}
                />
            </Flex>

    
        </Card>

        {/* <Flex style={{width:'100%'}}> */}
            <Flex justify="center" align="center"  style={{ padding: 10 }}>
                <ClockCircleOutlined /> <span>เวลาเข้างาน 09.00 -19.00 น.</span>
            </Flex>
        {/* </Flex> */}


        {/* <div>Page ID: {id}</div> */}

    </>
)
}

export default Mainpage;
'use client';

import React from 'react';
import { Layout} from 'antd';
const { Sider, Content } = Layout;
import Mainpage from './component/Mainpage';
import Beside from './component/Beside';
import AppointmentTable from './component/AppointmentTable';

const contentStyle: React.CSSProperties = {
    textAlign: 'center',

    color: '#fff',
};

const siderStyle: React.CSSProperties = {
    color: '#fff',
};

const layoutStyle = {
    // borderRadius: 8,
    overflow: 'hidden',
    padding:'1%',
    width: '100%',  
    height: '100%', 
    maxWidth: '100%', 
    maxHeight: '100%'
};


export default function Home() {
  return (
    <>
            <Layout style={layoutStyle}>
                <Layout>
                    <Sider width="40%" style={siderStyle}>
                        <Mainpage/>
                        <AppointmentTable/>

                    </Sider>
                    <Content style={contentStyle}>
                        <Beside/>
                    </Content>
                </Layout>
            </Layout>

    </>
)

}

'use client';

import React from 'react';
import { Flex, Layout,Row, Select } from 'antd';

import { dataDent } from '../data/dentistname';



const { Sider, Content } = Layout;

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

export default function Mainpage(){



return (
    <>


<Select
    showSearch
    placeholder="Select a person"
    filterOption={(input, option) =>
      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
    options={dataDent
        
    //     [
    //   { value: '1', label: 'Jack' },
    //   { value: '2', label: 'Lucy' },
    //   { value: '3', label: 'Tom' },
    // ]
}
  />

    </>
)
}
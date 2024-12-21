// import Image from "next/image";
// import styles from "./page.module.css";

// const { Sider, Content } = Layout;

'use client';

import React from 'react';
import { Flex, Layout,Row, Select } from 'antd';
const { Sider, Content } = Layout;

// import Mainpage from './mainpage/page';
import Mainpage from './component/Mainpage';
// import Beside from './component/beside';
import Beside from './component/Beside';
import ModalJa from './component/ModalJa';

const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    // height: 64,
    paddingInline: 48,
    // lineHeight: '64px',
};

const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    // backgroundColor: '#f4e77d',
    // minHeight: 120,
    // lineHeight: '120px',
    color: '#fff',
};

const siderStyle: React.CSSProperties = {
    // textAlign: 'center',
    // lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#1677ff',
};

const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#4096ff',
};

const layoutStyle = {
    // borderRadius: 8,
    overflow: 'hidden',
    margin:'2%',
    // width: 'calc(50% - 8px)',
    // maxWidth: 'calc(50% - 8px)',
    padding:'2%',

    width: '100%',  // Full width
    height: '100%', // Full height
    maxWidth: '100%', // Max width 100%
    maxHeight: '100%', // Max height 100%

};


export default function Home() {
  // return (
  //   <div className={styles.page}>
  //     <main className={styles.main}>
  //       <Image
  //         className={styles.logo}
  //         src="/next.svg"
  //         alt="Next.js logo"
  //         width={180}
  //         height={38}
  //         priority
  //       />
  //       <ol>
  //         <li>
  //           Get started by editing <code>src/app/page.tsx</code>.
  //         </li>
  //         <li>Save and see your changes instantly.</li>
  //       </ol>

  //       <div className={styles.ctas}>
  //         <a
  //           className={styles.primary}
  //           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           <Image
  //             className={styles.logo}
  //             src="/vercel.svg"
  //             alt="Vercel logomark"
  //             width={20}
  //             height={20}
  //           />
  //           Deploy nowrrww
  //         </a>
  //         <a
  //           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //           className={styles.secondary}
  //         >
  //           Read our docs
  //         </a>
  //       </div>
  //     </main>
  //     <footer className={styles.footer}>
  //       <a
  //         href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <Image
  //           aria-hidden
  //           src="/file.svg"
  //           alt="File icon"
  //           width={16}
  //           height={16}
  //         />
  //         Learn
  //       </a>
  //       <a
  //         href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <Image
  //           aria-hidden
  //           src="/window.svg"
  //           alt="Window icon"
  //           width={16}
  //           height={16}
  //         />
  //         Examples
  //       </a>
  //       <a
  //         href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <Image
  //           aria-hidden
  //           src="/globe.svg"
  //           alt="Globe icon"
  //           width={16}
  //           height={16}
  //         />
  //         Go to nextjs.org →
  //       </a>
  //     </footer>
  //   </div>
  // );
  return (
    <>
        {/* <Flex gap="middle" wrap> */}
            <Layout style={layoutStyle}>
                {/* <Header style={headerStyle}>Header</Header> */}
                <Layout>
                    <Sider width="40%" style={siderStyle}>
                        {/* <Mainpage width="100%"/> */}
                        <Mainpage/>
                    </Sider>
                    <Content style={contentStyle}>Content
                        <Beside/>
                        <ModalJa/>


                    </Content>
                </Layout>
                {/* <Footer style={footerStyle}>Footer</Footer> */}
            </Layout>

        {/* </Flex> */}

{/* <Select
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
  /> */}

    </>
)

}

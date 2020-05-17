import React from 'react';
import { Layout } from 'antd';
import Menu from './components/Menu';
import CodeBox from './components/CodeBox';
import styles from './index.module.scss';


export default function Code() {
   

    return (
        <>
            <Layout.Sider width={200}>
                <Menu/>
            </Layout.Sider>
            <Layout>
                <Layout.Content style={{background:'#fff',marginLeft:1,display:'flex'}}>
                   <CodeBox/>
                    <div className={styles.codeWindow}></div>
                </Layout.Content>
            </Layout>
        </>
    )
}

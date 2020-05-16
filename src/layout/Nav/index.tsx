import React, { useState, useEffect } from 'react';
import { Menu } from 'antd';
import styles from './index.module.scss';
import { useLocation } from 'react-router-dom';

const Nav: React.FC = () =>{
    const pathname = useLocation().pathname;
    const [selectedKeys,setSelectedKeys] = useState(
        pathname.indexOf('api')>-1?['api']:
        pathname.indexOf('doc')>-1?['doc']:
        pathname.indexOf('code')>-1?['code']:[]
        );
    

    

    return(
        <div className={styles.menuCont}>
            <Menu theme="dark" mode="horizontal" selectedKeys={selectedKeys} onClick={(_,key)=>{  }}>
                <Menu.Item key="api">api</Menu.Item>
                <Menu.Item key="doc">文档</Menu.Item>
                <Menu.Item key="code">代码示例</Menu.Item>
            </Menu>
        </div>
    )
}
export default Nav;

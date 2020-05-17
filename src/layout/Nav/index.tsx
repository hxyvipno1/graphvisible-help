import React, {memo, useState, useEffect } from 'react';
import { Menu } from 'antd';
import styles from './index.module.scss';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'

const Nav: React.FC = () =>{
    const pathname = useLocation().pathname;
    const [selectedKeys,setSelectedKeys] = useState(
        pathname.indexOf('api')>-1?['api']:
        pathname.indexOf('doc')>-1?['doc']:
        pathname.indexOf('code')>-1?['code']:[]
        );
    
    return(
        <div className={styles.menuCont}>
            <Menu theme="dark" mode="horizontal" selectedKeys={selectedKeys} onClick={({item,key})=>{setSelectedKeys([key])}}>
                <Menu.Item key="api" disabled><Link to="/api">api</Link></Menu.Item>
                <Menu.Item key="doc" disabled><Link to="/doc">文档</Link></Menu.Item>
                <Menu.Item key="code"><Link to="/code">代码示例</Link></Menu.Item>
            </Menu>
        </div>
    )
}
export default memo(Nav);

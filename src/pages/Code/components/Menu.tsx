import React from 'react'
import { Menu } from 'antd';
const { SubMenu } = Menu;
export default function SideMenu() {
    return (
        <Menu
            mode="inline"
            defaultSelectedKeys={['node']}
            defaultOpenKeys={['shape']}
            style={{ height: '100%', borderRight: 0 }}
        >
            <SubMenu key="shape"  title="元素">
                <Menu.Item key="node">点</Menu.Item>
                <Menu.Item key="edge">边</Menu.Item>
            </SubMenu>
            <SubMenu key="behavior" title="交互">
                <Menu.Item key="heighlight">高亮相邻点</Menu.Item>
            </SubMenu>
        </Menu>
    )
}

import React from 'react';
// import logo from './logo.svg';
import styles from './App.module.scss';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import Nav from './Nav';
import Router from 'router'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

interface appProp{
  children?:React.ReactNode
}

function App(props:appProp) {
  return (
    <Layout style={{ height: '100%' }}>
      <Header>
        <h1 className={styles.logo}>Graph Visible</h1>
        <Nav />
      </Header>
      <Layout>
        { props.children }
      </Layout>
    </Layout>
  );
}

export default App;

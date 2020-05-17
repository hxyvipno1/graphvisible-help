import React from 'react';
// import logo from './logo.svg';
import styles from './App.module.scss';
import { Layout} from 'antd';
import Nav from './Nav';

const { Header} = Layout;

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

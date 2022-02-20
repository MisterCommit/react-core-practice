import React from 'react';
import { Layout } from 'antd';
import Sidebar from './SideBar';
import Content from './Content';



function App() {
    return ( 
  <Layout>
  <Sidebar/>
  <Content/>   
</Layout>

    );

}

export default App;

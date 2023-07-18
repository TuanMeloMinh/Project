import React from "react";
import '../header/header.css'
import { Layout, Space } from 'antd';
import { FaQq ,FaBagShopping,FaMagnifyingGlass} from "react-icons/fa6";
const { Sider, Content  } = Layout;
const contentStyle = {
    textAlign: 'center',
    minHeight: 100,
    lineHeight: '80px',
    color: '#fff',
    backgroundColor: '#f7f7f7', 
  };
  const siderStyle = {
    textAlign: 'center',
    lineHeight: '100px',
    color: '#fff',
    backgroundColor: '#f7f7f7',
  };
    const Header = () => {
        return(
            <div>
                <Layout>
                        <Layout hasSider>
                            <Sider style={siderStyle} id="parent"><img className="headerLogo" src="https://phono-demo.myshopify.com/cdn/shop/files/logo.png?v=1620470788&"/></Sider>
                            <Content style={contentStyle} id="parentBar">
                                <ul>
                                    <li>Home</li>
                                    <li>Collection</li>
                                    <li>Shop</li>
                                    <li>Android</li>
                                    <li>Accessorues</li>
                                    <li>Memory&Storage</li>
                                    <li>Page</li>
                                    <li><FaQq/></li>
                                    <li><FaBagShopping/></li>
                                    <li><FaMagnifyingGlass/></li>
                                </ul>
                            </Content>
                        </Layout>
                </Layout>
            </div>
        )
    }
    export default Header

   
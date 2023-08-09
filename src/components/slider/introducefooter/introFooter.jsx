import React from "react";
import '../introducefooter/introFooter.css'
import { Layout, Space } from 'antd';

import { AiOutlineCustomerService , AiOutlineTags } from "react-icons/ai";
import { FaTruckFast} from "react-icons/fa6";
const {   Sider, Content } = Layout;
  const siderStyle = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#f5f5f5ef',
  };
  const contentStyle = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '30px',
    color: '#fff',
    backgroundColor: '#f5f5f5ef',
  };
    const IntroFooter = () => {
        return(
            <div>
                <Layout id="containerIntro" >
                        <Layout hasSider>
                            <Sider style={siderStyle}>Sider</Sider>
                            <Content style={contentStyle} >
                                <div>
                                    <div id="introIcons">
                                        <FaTruckFast id="introIcons-ai"/>
                                    </div>
                                    <div id="introType">
                                        <p>FREE SHIPPING</p>
                                        <p>For orders over $50</p>
                                    </div>
                                </div>
                            </Content>
                            <Content style={contentStyle}>
                                <div>
                                    <div id="introIcons">
                                        <AiOutlineTags id="introIcons-ai"/>
                                    </div>
                                    <div id="introType">
                                        <p>OFFICIAL DISCOUNTS</p>
                                        <p>Save Big on next product</p>
                                    </div>
                                </div>
                            </Content>
                            <Content style={contentStyle}>
                                <div>
                                    <div id="introIcons">
                                        <AiOutlineCustomerService id="introIcons-ai"/>
                                    </div>
                                    <div id="introType">
                                        <p>24/7 HELPLINE</p>
                                        <p>Care till the end</p>
                                    </div>
                                </div>
                            </Content>
                            <Sider style={siderStyle}>Sider</Sider>
                        </Layout>       
                </Layout>
            </div>
        )
    }
    export default IntroFooter
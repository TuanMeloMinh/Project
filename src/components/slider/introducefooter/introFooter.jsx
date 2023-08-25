import React from "react";
import '../introducefooter/introFooter.css'
import { Layout } from 'antd';

import { AiOutlineCustomerService , AiOutlineTags } from "react-icons/ai";
import { FaTruckFast} from "react-icons/fa6";
const {   Content } = Layout;
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
                            <Content style={contentStyle} id="introContent1" >
                                <div id="introBoxContainer">
                                    <div id="introIcons">
                                        <FaTruckFast id="introIcons-ai"/>
                                    </div>
                                    <div id="introType">
                                        <p>FREE SHIPPING</p>
                                        <p>For orders over $50</p>
                                    </div>
                                </div>
                            </Content>
                            <Content style={contentStyle} id="introContent1"  >
                                <div id="introBoxContainer">
                                    <div id="introIcons">
                                        <AiOutlineTags id="introIcons-ai"/>
                                    </div>
                                    <div id="introType">
                                        <p>OFFICIAL DISCOUNTS</p>
                                        <p>Save Big on next product</p>
                                    </div>
                                </div>
                            </Content>
                            <Content style={contentStyle} id="introContent1" >
                                <div id="introBoxContainer">
                                    <div id="introIcons">
                                        <AiOutlineCustomerService id="introIcons-ai"/>
                                    </div>
                                    <div id="introType">
                                        <p>24/7 HELPLINE</p>
                                        <p>Care till the end</p>
                                    </div>
                                </div>
                            </Content>
                        </Layout>       
                </Layout>
            </div>
        )
    }
    export default IntroFooter
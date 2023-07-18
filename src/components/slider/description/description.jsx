import React from "react";
import '../description/desctoption.css'
import { Layout, Space } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    lineHeight: '10px',
  };
  
  const contentStyle= {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '20px',
    color: '#fff',
    backgroundColor: '#fff',
  };
  
  const siderStyle = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#fff',
  };
  
  const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#fff',
    lineHeight: '20px',
  };
    const Description = () => {
        return(
            <div>
                <Layout>
                    <Header style={headerStyle} id="descHea">
                        <p>WHAT MAKES THE ESSENTIAL DIFFERENT?</p>
                        <strong>EXPERIENCE HIGH PERFORMANCE AND SECURE</strong>
                    </Header>
                        <Layout hasSider id="descLayout">
                            <Sider style={siderStyle}></Sider>
                            <Content style={contentStyle}>
                              <div>
                                      <div  className="introDesc">
                                          <img src="https://phono-demo.myshopify.com/cdn/shop/files/ic12.png?v=1613704474&width=275"/>
                                      </div>
                                      <div id="desc" className="descType">
                                          <p>PERFECT CUT <br/> DUAL CAMERA</p>
                                          <strong>Tristique senectus et netus et malesuada ant reiet  <br/> fames.</strong>
                                      </div>
                              </div>
                            </Content>
                            <Content style={contentStyle}>
                              <div>
                                      <div className="introDesc">
                                          <img src="https://phono-demo.myshopify.com/cdn/shop/files/ic13.png?v=1613704474&width=275"/>
                                      </div>
                                      <div id="desc"className="descType">
                                          <p>PRETTY <br/>INTELLIGENT PROCESSING</p>
                                          <strong>Consequat ac habit amet asse felis donec et odio  <br/> pellentesque diam.</strong>
                                      </div>
                              </div>
                            </Content>
                            <Content style={contentStyle}>
                              <div>
                                      <div className="introDesc">
                                          <img src="https://phono-demo.myshopify.com/cdn/shop/files/ic11.png?v=1613704474&width=275"/>
                                      </div>
                                      <div id="desc"className="descType">
                                          <p>MOST POPULAR <br/>8GB DDR5 RAM</p>
                                          <strong>Dictum varius duis at consectetur lorem donec <br/>  massa sap faucibus.</strong>
                                      </div>
                              </div>
                            </Content>
                            <Sider style={siderStyle}></Sider>
                            </Layout>
                        <Footer style={footerStyle} id="descFoo">
                          <p>FIND YOUR PERFECT MATCH</p>
                          <strong>EXPLORE AND FIND RIGHT ONE</strong>
                        </Footer>
                </Layout>
            </div>
        )
    }
    export default Description
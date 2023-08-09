
import { Layout, Space } from 'antd';
import '../infomation/information.css'
import { Button } from 'antd';
import React from 'react'
const { Footer,  Content } = Layout;
const contentStyle= {
    textAlign: 'center',
    color: '#fff',
  };
  const footerStyle = {
    textAlign: 'center',
  };
    const Information = () => {
        return (
            <Layout>
                <Content style={contentStyle}>
                      <div id='informationChildren' >
                        <strong>JENNIFER F., CASPER CUSTOME</strong>
                        <p>"Unbeatable price, and it’s super <br/> comfortable"</p>
                        <Button type="primary" shape="round" id='infoBtn' >View More </Button>
                      </div>
                </Content>
                <Footer style={footerStyle} id='inforMai' className='informationMai'>
                  <strong >RAISE YOUR EXPECTATIONS</strong>
                  <p>REFINED VIEWING EXPERIENCE</p>
                </Footer>
          </Layout>
        )
    }
    export default Information

import { Layout, Space } from 'antd';
import React from 'react'
import '../descfooter/descfooter.css'
    const { Header, Footer, Content } = Layout;
    const headerStyle = {
        textAlign: 'center',
        color: '#fff',
        height: 530,
        paddingInline: 50,
        lineHeight: '64px',
        backgroundColor: '#fff',
      };
      
      const contentStyle = {
        textAlign: 'center',
        minHeight: 120,
        lineHeight:'20px',
        color: '#fff',
        backgroundColor: '#fff',
      };

      const footerStyle = {
        textAlign: 'center',
        color: '#fff',
        backgroundColor: '#000',
      };
        const DescriptionMai = () => {
            return (
                <Layout>
                <Header style={headerStyle} id='maiPng'><img src='https://phono-demo.myshopify.com/cdn/shop/files/img-1_73f531ca-ace8-42e4-88b0-7a8de5d93d7e.jpg?v=1613702254&width=1500'/></Header>
                <Content style={contentStyle} id='maiContent' className='maiDesc'>
                    <p>POSSIBILITIES. PERFORMANCE. POWER</p>
                    <strong>FASTER PROCESSING WITH LESS POWER</strong>
                </Content>
                <Footer style={footerStyle} id='descTmei'>Footer</Footer>
            </Layout>
            )
        }
        export default DescriptionMai
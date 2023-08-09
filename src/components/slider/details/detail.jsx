import '../details/detail.css'
import React from 'react'
import { Layout } from 'antd';
import { Card } from 'antd';
import { Col, Row } from 'antd';
const { Header, Footer,  Content } = Layout;
const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor : '#fff',
    lineHeight: '15px',
  };
  
const contentStyle = {
    textAlign: 'center',
    minHeight: 120,
  };
const footerStyle= {
    textAlign: 'center',
    color: '#fff',
  };
    const Detail = () => {
        return(
            <Layout>
                <Header style={headerStyle} id='page1'>
                    <div id='page1Header'>
                        <strong>LOSE YOURSELF IN ENTERTAINMENT</strong>
                        <p>SPEND LESS ENJOY MORE</p>
                    </div>
                    <div id='page1Banner'>
                        <div id='bannerChild'>
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<p>a</p>}
                            >
                                <p title="Europe Street beat" description="www.instagram.com" />
                            </Card>
                        </div>
                        <div id='bannerChild'>
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<p>a</p>}
                            >
                                <p title="Europe Street beat" description="www.instagram.com" />
                            </Card>
                        </div>
                        <div id='bannerChild'>
                             <Row>
                                <Col span={8}>
                                <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<p>a</p>}
                                id='bannerChildCard'
                            >
                                <p title="Europe Street beat" description="www.instagram.com" />
                            </Card>
                                </Col>
                                <Col span={8}>
                                <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<p>a</p>}
                                id='bannerChildCard'
                            >
                                <p title="Europe Street beat" description="www.instagram.com" />
                            </Card>
                                </Col>
                                <Col span={8}>
                                <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<p>a</p>}
                                id='bannerChildCard'
                            >
                                <p title="Europe Street beat" description="www.instagram.com" />
                            </Card>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Header>
                <Content style={contentStyle}>
                    <div id='detailContent'>
                        <strong> INNOVATIVE QUALITIES & FEATURES</strong>
                        <p>SHOW YOURS TO THE WORLD</p>
                    </div>
                </Content>
                <Footer style={footerStyle} id='contentDeFooter'>
                <Row>
                    <Col span={8}>
                        <div id='contentDe'>
                            <div id='contentDeBox1'> 
                                <div id='contentDeBox1Img'>
                                    <img src="https://phono-demo.myshopify.com/cdn/shop/files/ic5.png?v=1613704466&width=1420" alt="" />
                                </div>
                                <div id='contentDeBox1Text'>
                                    <strong>INTELLIGENT PROCESSOR</strong>
                                    <p>Tellus in hac habitasse platea dictumst <br /> vestibulum rhoncus srd mana erti qeueri</p>
                                </div>
                            </div>
                            <div id='contentDeBox1'> 
                                <div>
                                    <img src="https://phono-demo.myshopify.com/cdn/shop/files/ic6.png?v=1613704466&width=1420" alt="" />
                                </div>
                                <div>
                                    <strong>HD SURROUND AUDIO</strong>
                                    <p>Sagittis eu volutpat odio ante ut diam quam <br /> metus dictfacilisis mauris sit am.</p>
                                </div>
                            </div>
                            <div id='contentDeBox1'> 
                                <div>
                                    <img src="https://phono-demo.myshopify.com/cdn/shop/files/ic3.png?v=1613704466&width=1420" alt="" />
                                </div>
                                <div>
                                    <strong>STYLISH BEVEL EDGES</strong>
                                    <p>Dolor sit amet, consectetur adipiscing elit, <br /> sed do eiusmod tempor incidid</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col span={8}>
                        <img src="https://phono-demo.myshopify.com/cdn/shop/files/center-img_eb064c43-efaf-4d56-90df-f89acfdf85fe.png?v=1613704453" alt="" />
                    </Col>
                    <Col span={8}>
                        <div className="contentDe">
                            <div className="contentDeBox2">
                                <div>
                                    <strong>4.0 WIFI SPECS</strong>
                                    <p>Commodo nulla facilisi nullam vehicula <br /> ipsum a arcu sagitis ipsum sed iacus.</p>
                                </div>
                                <div>
                                    <img src="https://phono-demo.myshopify.com/cdn/shop/files/ic1.png?v=1613704466&width=1420" alt="" />
                                </div>
                            </div>
                            <div className="contentDeBox2">
                                <div>
                                    <strong>MULIT TASKING & THREADING</strong>
                                    <p>Amet consectetur adipiscing velit laoreet <br /> nega id elit pellentesque habitant morbi .</p>
                                </div>
                                <div>
                                    <img src="https://phono-demo.myshopify.com/cdn/shop/files/ic4.png?v=1613704466&width=1420" alt="" />
                                </div>
                            </div>
                            <div className="contentDeBox2">
                                <div>
                                    <strong>CLOUD STORAGE</strong>
                                    <p>Dolor sit amet, consectetur adipiscing elit, <br /> sed do eiusmod tempor incididun</p>
                                </div>
                                <div>
                                    <img src="https://phono-demo.myshopify.com/cdn/shop/files/ic2.png?v=1613704466&width=1420" alt="" />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                </Footer>
            </Layout>
        )
    }
    export default Detail
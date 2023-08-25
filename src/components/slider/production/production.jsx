    import '../production/production.css'
    import React from 'react'
    import { Layout } from 'antd';
    import { Col, Row } from 'antd';
    import { Card } from 'antd';
    import { AiOutlineCrown} from "react-icons/ai";
    const { Header, Footer, Content } = Layout;
    const { Meta } = Card;
    const headerStyle = {
        textAlign: 'center',
        color: '#fff',
        height :'200px',
        backgroundColor :'#fff',
        lineHeight: '30px',
      };
      const contentStyle = {
        textAlign: 'center',
        color: '#fff',
      };
      const footerStyle= {
        textAlign: 'center',
        color: '#fff',
      };
    const Production = () => {
        return(
            <Layout>
                <Header style={headerStyle}>
                    <div className="prodHeader">
                            <strong>NEW ARRIVALS</strong>
                            <p>FIND THE PERFECT PHONE FOR YOU</p>
                    </div>
                    <div className="proHeaderCard">
                        <Row>
                            <Col span={4}>
                                <Card
                                    id='proHeaderCard1'
                                    hoverable
                                    style={{ width: 240 }}
                                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                >
                                    <div id='proHeaderCard1DE'> 
                                        <ul>
                                            <li>SPECTRONIC</li>
                                            <li><AiOutlineCrown/><AiOutlineCrown/><AiOutlineCrown/></li>
                                            <li>$1000</li>
                                        </ul>
                                    </div>
                                </Card>
                            </Col>
                            <Col span={4}>
                                <Card
                                    id='proHeaderCard1'
                                    hoverable
                                    style={{ width: 240 }}
                                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                >
                                     <div id='proHeaderCard1DE'> 
                                        <ul>
                                            <li>SPECTRONIC</li>
                                            <li><AiOutlineCrown/><AiOutlineCrown/><AiOutlineCrown/></li>
                                            <li>$1000</li>
                                        </ul>
                                    </div>
                                </Card>
                            </Col>
                            <Col span={4}>
                                <Card
                                    id='proHeaderCard1'
                                    hoverable
                                    style={{ width: 240 }}
                                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                >
                                     <div id='proHeaderCard1DE'> 
                                        <ul>
                                            <li>SPECTRONIC</li>
                                            <li><AiOutlineCrown/><AiOutlineCrown/><AiOutlineCrown/></li>
                                            <li>$1000</li>
                                        </ul>
                                    </div>
                                </Card>
                            </Col>
                            <Col span={4}>
                                <Card
                                    id='proHeaderCard1'
                                    hoverable
                                    style={{ width: 240 }}
                                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                >
                                     <div id='proHeaderCard1DE'> 
                                        <ul>
                                            <li>SPECTRONIC</li>
                                            <li><AiOutlineCrown/><AiOutlineCrown/><AiOutlineCrown/></li>
                                            <li>$1000</li>
                                        </ul>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </Header>
                <Content style={contentStyle}id='produContent'>
                    <div>
                        <div id='produContentText'>
                            <strong>SEE WHY CUSTOMERS LOVE THE OUR MOBILES</strong>
                            <p>DESIGNED TO PERFECTION</p>
                        </div>
                        <div id='produContentDe'>
                            <Row>
                                <Col span={12}>
                                    <img src="https://phono-demo.myshopify.com/cdn/shop/files/bg-1.png?v=1613702304&width=750" alt="" id='produContentDeImg' />
                                </Col>
                                <Col span={12}>
                                    <div className="produContentDetail">
                                        <div>
                                            <p>NEW GRADIENT COLOR FINISHES</p>
                                        </div>
                                        <div>
                                            <p>FOUR-SIDED CURVED CERAMIC BODY</p>
                                        </div>
                                        <div>
                                            <p>4000MAH HIGH-CAPACITY BATTERY</p>
                                        </div>
                                        <div>
                                            <p>FULLY HIDDEN CAMERA LENS</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Content>
                <Footer style={footerStyle} id='hieuthu2'>
                    <div className="produFooter">
                        <div id='produFooterText'>
                            <strong>WELCOME TO PHONO SUPPORT. WE'RE HERE TO HELP.</strong>
                            <p>ALWAYS ON YOUR SIDE WHEN YOU NEED HELP</p>
                        </div>
                        <div id='closeContainer'>
                            <div id='closeContainerBox1'>
                                <div>
                                    <img src="https://phono-demo.myshopify.com/cdn/shop/files/phone-icn.png?v=1613704485&width=275" alt="" />
                                </div>
                                <div>
                                    <p>HAVE ANY DOUBTS?</p><br />
                                    <strong>CALL US NOW</strong>
                                    <p>This Number is Toll Free <br />
                                        0000 - 123 - 456789</p>
                                        <button>View more </button>
                                </div>
                            </div>
                            <div id='closeContainerBox2'>
                                <div>
                                    <img src="https://phono-demo.myshopify.com/cdn/shop/files/chat-icn.png?v=1613704484&width=275" alt="" />
                                </div>
                                <div>
                                    <p>WANNA TALK TO US?</p><br />
                                    <strong>LIVE CHAT NOW</strong>
                                    <p>Nullam quis ante. Etiam sit amet orci eget eros faucibus <br />
                                    tincidunt. Duis leo.Lorem ipsum dolor</p>
                                        <button>View more </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Footer>
            </Layout>
        )
    }
    export default Production

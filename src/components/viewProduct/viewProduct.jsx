import Ads from "../ads/ads"
import Header from "../header/header"
import Ending from "../slider/ending/ending"
import React from 'react';
import { Col,  Row } from 'antd';
import { Input} from 'antd';
import { BiGridVertical ,BiListUl } from "react-icons/bi";
import { Card } from 'antd';
import {FaPlus } from "react-icons/fa6";
const { Meta } = Card;
const { Search } = Input;
import '../viewProduct/viewProduct.css'

const onSearch = (e) => console.log(value);

   const ViewProduct = ( ) => {
        return(
            <div className="viewProductContainer">
                <div>
                    <Ads/>
                    <Header/>
                </div>
                    <p id="kissBisou">Upcoming Products</p>
                    <div className="viewPro">
                        <Row>
                            <Col flex={2}>
                                <div className="sideBarContainer">
                                    <div className="sideBar1">
                                        <div className="sideBarFliter">
                                            <p>Filter:</p>
                                            <hr  color="#e7e0e0" size="10px"/>
                                        </div>
                                        <div className="sideBarAva">
                                            <p>Availability</p>
                                            <hr  color="#e7e0e0"size="10px"/>
                                        </div>
                                        <div className="sideBarPrice">
                                            <p>Price</p>
                                        </div>
                                    </div>
                                    <div className="sideBarMenu">
                                        <p>Custom Menu</p>
                                            <div className="sideBarMenuStuff">
                                                <ul>
                                                    <div id="ryDer">
                                                        <li>Touch Display</li>
                                                        <FaPlus id="ryDerPlus"/>
                                                    </div>
                                                    <div id="ryDer">
                                                        <li>Scratch Guard</li>
                                                        <FaPlus id="ryDerPlus"/>
                                                    </div>
                                                    <div id="ryDer">
                                                        <li>Tempard Glass</li>
                                                        <FaPlus id="ryDerPlus"/>
                                                    </div>
                                                    <div id="ryDer">
                                                        <li>USB Cable</li>
                                                        <FaPlus id="ryDerPlus"/>
                                                    </div>
                                                    <div id="ryDer">
                                                        <li>Ear Phone</li>
                                                        <FaPlus id="ryDerPlus"/>
                                                    </div>
                                                    <div id="ryDer">
                                                        <li>SSD Card</li>
                                                        <FaPlus id="ryDerPlus"/>
                                                    </div>
                                                    <div id="ryDer">
                                                        <li>Pen Drive</li>
                                                        <FaPlus id="ryDerPlus"/>
                                                    </div>
                                                </ul>
                                            </div>
                                    </div>
                                    <div className="sideBarDlow">
                                        <p>Best Seller</p>
                                            <div className="sideBarBest">
                                                <Card
                                                    hoverable
                                                    style={{ width: 240 }}
                                                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                                    id="bestCard"
                                                >
                                                    <Meta title="Europe Street beat" description="www.instagram.com" />
                                                </Card>
                                            </div>
                                    </div>
                                </div>
                            </Col>
                            <Col flex={3}>
                                <div className="viewProStart">
                                    <div className="fliterStyle">
                                            <div className="filterBtn">
                                                <div>
                                                    <BiGridVertical id="biGridVertical"/>
                                                </div>
                                                <div>
                                                    <BiListUl id="biListUl"/>
                                                </div>
                                            </div>
                                            <div className="fliterNumber">
                                                <ul>
                                                    <li>I</li>
                                                    <li>II</li>
                                                    <li>III</li>
                                                    <li>IIII</li>
                                                </ul>
                                            </div>
                                            <div className="fliterSearch">
                                                <p>Sort by: <Search placeholder="Featured" onSearch={onSearch} style={{ width: 200 }} /></p>
                                            </div>
                                    </div>
                                </div>
                                <div className="viewProEnd">
                                    <ul>
                                        <li>
                                            <Card
                                                hoverable
                                                style={{ width: 240 }}
                                                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                            >
                                                <Meta title="Europe Street beat" description="www.instagram.com" />
                                            </Card>
                                        </li>
                                        <li>
                                            <Card
                                                hoverable
                                                style={{ width: 240 }}
                                                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                            >
                                                <Meta title="Europe Street beat" description="www.instagram.com" />
                                            </Card>
                                        </li>
                                        <li>
                                            <Card
                                                hoverable
                                                style={{ width: 240 }}
                                                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                            >
                                                <Meta title="Europe Street beat" description="www.instagram.com" />
                                            </Card>
                                        </li>
                                        <li>
                                            <Card
                                                hoverable
                                                style={{ width: 240 }}
                                                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                            >
                                                <Meta title="Europe Street beat" description="www.instagram.com" />
                                            </Card>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <Card
                                                hoverable
                                                style={{ width: 240 }}
                                                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                            >
                                                <Meta title="Europe Street beat" description="www.instagram.com" />
                                            </Card>
                                        </li>
                                        <li>
                                            <Card
                                                hoverable
                                                style={{ width: 240 }}
                                                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                            >
                                                <Meta title="Europe Street beat" description="www.instagram.com" />
                                            </Card>
                                        </li>
                                        <li>
                                            <Card
                                                hoverable
                                                style={{ width: 240 }}
                                                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                            >
                                                <Meta title="Europe Street beat" description="www.instagram.com" />
                                            </Card>
                                        </li>
                                        <li>
                                            <Card
                                                hoverable
                                                style={{ width: 240 }}
                                                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                            >
                                                <Meta title="Europe Street beat" description="www.instagram.com" />
                                            </Card>
                                        </li>
                                    </ul>
                                </div>
                                    <div className="hieuThu2">
                                        <p>You're viewing 8 of 8 products</p>
                                        <hr  color="#000" size="10px" width="300px"/>
                                    </div>
                            </Col>
                        </Row>
                    </div>
                <div id="viewProEnding">
                    <Ending/>
                </div>
            </div>
        )
    }
    export default ViewProduct
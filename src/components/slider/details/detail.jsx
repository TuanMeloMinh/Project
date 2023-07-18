import '../details/detail.css'
import { Layout, Space } from 'antd';
import { Card } from 'antd';
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
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#108ee9',
  };
const footerStyle= {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#7dbcea',
  };
    const Detail = () => {
        return(
            <Layout>
                <Header style={headerStyle} id='page1'>
                    <div>
                        <p>LOSE YOURSELF IN ENTERTAINMENT</p>
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
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<p>a</p>}
                            >
                                <p title="Europe Street beat" description="www.instagram.com" />
                            </Card>
                        </div>
                    </div>
                </Header>
                <Content style={contentStyle}>Content</Content>
                <Footer style={footerStyle}>Footer</Footer>
            </Layout>
        )
    }
    export default Detail
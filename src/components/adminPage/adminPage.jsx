import '../adminPage/adminPage.css'
import React, { useState } from 'react'
import Ads from '../ads/ads';
import Header from '../header/header';
import data from '../data/data.json'
import { Layout, Space } from 'antd';
import Ending from '../slider/ending/ending';
const {  Sider, Content } = Layout;
    const contentStyle = {
    textAlign: 'center',
    lineHeight: '100px',
    color: '#fff',
  };
    const siderStyle = {
    textAlign: 'center',
    lineHeight: '100px',
    color: '#fff',
  };
const AdminPage = () => {
    const [ item , setItem] = useState (data)
        return(
            <div id='adminContainer'>
                <div>
                    <Ads/>
                    <Header/>
                </div>
                    <Layout hasSider>
                        <Sider style={siderStyle}>
                           
                        </Sider>
                            <Content style={contentStyle}>
                            <div id='tableContainer'>
                                <table>
                                        <thead>
                                            <th>STT</th>
                                            <th>Sản Phẩm </th>
                                            <th> Giá </th>
                                            <th>Thêm Sản Phẩm</th>
                                            <th> Xóa Sản Phẩm </th>
                                        </thead>
                                        <tbody>
                                        {
                                                data.map((current) => (
                                                    <tr>
                                                        <td>{current.id}</td>
                                                        <td>{current.name}</td>
                                                        <td>{current.price}</td>
                                                        <td><button>Add</button></td>
                                                        <td><button>Delete</button></td>
                                                    </tr>
                                                ))
                                        }
                                        </tbody>
                                </table>
                            </div>
                            </Content>
                    </Layout>
                    <Ending/>
            </div>
        )
    }
    export default AdminPage
import '../adminPage/adminPage.css'
import React, { useState } from 'react'
import Ads from '../ads/ads';
import Header from '../header/header';
import { Layout } from 'antd';
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
    const [title, setTitle] =useState(['IDD','stt','name','cost','Thêm','Xóa','Fix']);
    const [details , setDetails] = useState([
        {
            "idd" : 11,
            "stt" : 1,
            "name": "Iphone 11 promax ",
            "cost" : "15.0000.000",
            "phone" :"0975878558"
        },
        {
            "idd" : 12,
            "stt" : 2,
            "name": "Iphone 12 promax ",
            "cost" : "19.0000.000",
            "phone" :"0975878558"
        },
        {
            "idd" : 13,
            "stt" : 3,
            "name": "Iphone 13 promax ",
            "cost" : "22.0000.000",
            "phone" :"0975878558"
        },
        {
            "idd" : 14,
            "stt" : 4,
            "name": "Iphone 14 promax ",
            "cost" : "25.0000.000",
            "phone" :"0975878558"
        },
        {
            "idd" : 15,
            "stt" : 5,
            "name": "Iphone XS max  ",
            "cost" : "10.0000.000",
            "phone" :"0975878558"
        }
    ])
    const [newIdd ,setNewIdd] = useState('');
    const [newStt ,setNewProduct] = useState ('') ;
    const [newName ,setNewName] = useState ('') ;
    const [newCost ,setNewCost] = useState ('') ;
    const [editingRow ,setEditingRow] = useState ('') ;

    const onClickAddProduct =( ) => {
        let detailsCopy =[...details];
        detailsCopy.push({
            idd : newIdd ,
            stt: newStt ,
            name: newName ,
            price: newCost ,
        })
        setDetails(detailsCopy);
        setNewIdd ('');
        setNewName ('')
        setNewCost ('')
        console.log ( newStt , newName , newCost)

    }
    const onClickUpdateProduct = (e) => {
        let index = details.findIndex( s => s.idd === editingRow)
        // cái i >= 0
        let detailsCopy =[...details];
        detailsCopy [index] = {
            idd : newIdd ,
            stt: newStt ,
            name: newName ,
            price: newCost ,
        }
        // thay data mới và clear data cũ đi 
        setDetails(detailsCopy);
        setNewIdd ('');
        setNewName ('')
        setNewCost ('');
        setEditingRow ('');
    }
    const onChangeNewIdd = (e) => {
        setNewIdd(e.currentTarget.value)
    }
    const onChageNewName = (e) =>{
        setNewName (e.currentTarget.value)
    }
    const onChageNewProduct = (e) =>{
        setNewProduct (e.currentTarget.value)
    }
    const onChageNewCost = (e) =>{
        setNewCost (e.currentTarget.value)
    }
    const onPressEditingRow = (detail) => {
        setNewIdd (detail.idd)
        setNewName (detail.name)
        setNewCost (detail.cost)
        setEditingRow (detail.idd)
    }
    const onPressDeleteRow = (idd) => {
        let detailsCopy =[...details];
        let index  = details.findIndex(d => d.idd === idd)
        //  xóa dùng thuộc tính splice 
        detailsCopy.splice(index ,1)
        setDetails(detailsCopy);
    }
    
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
                                <input 
                                    onChange={ onChangeNewIdd }  
                                    name='iddFix'
                                    placeholder='IddFix' 
                                    value={newIdd}
                                    disabled ={editingRow}
                                /> 
                                <input 
                                    onChange={ onChageNewProduct }  
                                    name='stt'
                                    placeholder='STT' 
                                    value={newStt}
                                    /> 
                                <input 
                                    onChange={ onChageNewName}  
                                    name='tên sản phẩm'
                                    placeholder='Tên Sản Phẩm' 
                                    value={newName}
                                    /> 
                                <input 
                                    placeholder='Giá Bán'
                                    name='giá bán'
                                    onChange={ onChageNewCost} 
                                    value={newCost}
                                    /> 
                                    {
                                        editingRow
                                        ?
                                        <button onClick={onClickUpdateProduct}> Cập Nhật </button>
                                        :
                                        <button onClick={onClickAddProduct}> ADD</button>
                                    }
                              {/* <button onClick={onClickAddProduct}> ADD</button> */}
                            <div id='tableContainer'>
                                <table>
                                        <thead>
                                            {
                                                title.map(t => {
                                                    return <th key={t.idd}>{t}</th>
                                                })
                                            }
                                        </thead>
                                        <tbody>
                                        {
                                                details.map( d =>{
                                                    return <tr key={d.idd}>
                                                        <td key={d.idd}>{d.idd}</td>
                                                        <td key={d.stt}>{d.stt}</td>
                                                        <td key={d.name}>{d.name}</td>
                                                        <td key={d.cost}>{d.cost }</td>
                                                        <td><button>Add</button></td>
                                                        <td><button  onClick={e => onPressDeleteRow (d.idd)}>Delete</button></td>
                                                        <td><button onClick={e => onPressEditingRow (d)}>Fix</button></td>
                                                    </tr>
                                                })
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
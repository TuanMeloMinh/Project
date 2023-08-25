import '../loginPage/loginPage.css'
import { Layout } from 'antd';
import Ads from '../ads/ads';
import Header from '../header/header';
import Ending from '../slider/ending/ending';
import React from "react";
import { useState ,useEffect } from "react";
import { Navigate, useNavigate } from 'react-router-dom';
        const LoginPage = () => {
            const [email,setEmail] =useState("")
            const [password,setPassword] =useState("")
            const history = useNavigate();
            useEffect(() => {
                if (localStorage.getItem('user-info')){
                    history.push("/add")
                }
            })
            
            const handleLogin =  async () => {
                console.log (email,password)
                let item = {email,password}
                let result = await fetch("https://reqres.in/api/login",{
                    method :'POST',
                    headers:{
                        "Content-Type":" application/json",
                        "Accept" : 'application/json'
                    },
                    body :JSON.stringify(item)
                });
                result = await result.json();
                localStorage.getItem("user-info",JSON.stringify(result))
                Navigate.push("/add")
            } 
            return (
                <div>
                        <Layout>
                            <div>
                                <Ads/>
                                <Header/>
                            </div>
                                <div className="containerlogin">
                                    <div className='form-box'>
                                        <div className='form-value'>
                                            <form action=''>
                                                <strong>Login</strong>
                                                <div className='inputbox'>
                                                    <input 
                                                        type="email"
                                                        onChange={(e)=>setEmail(e.target.value)} 
                                                        required />
                                                    <label htmlFor="">Email </label>                                   
                                                </div>
                                                <div className='inputbox'>
                                                    <input 
                                                        type="password"
                                                        onChange={(e)=>setPassword(e.target.value)} 
                                                        required />
                                                    <label htmlFor="">Password </label> 
                                                </div>
                                                <div className="forget">
                                                    <label htmlFor=""><input type="checkbox" />Remember me </label>
                                                    <a href="#">Forget Password</a>
                                                </div>
                                                <button 
                                                id='loginBtn'
                                                onClick={ () => handleLogin()}
                                                >Login </button>
                                                <div className="register">
                                                    <p> Don't have a account<a href="#">Register</a></p>
                                                </div>
                                            </form>
                                        </div>
                                </div>
                                </div>
                                
                                <Ending/>
                        </Layout>
                </div>
            )
        }
    export default LoginPage
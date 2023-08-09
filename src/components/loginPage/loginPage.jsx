import '../loginPage/loginPage.css'
import { Layout, } from 'antd';
import Ads from '../ads/ads';
import Header from '../header/header';
import Ending from '../slider/ending/ending';
import React, { Component } from "react";
        const LoginPage = () => {
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
                                                    <input type="email" required />
                                                    <label htmlFor="">Email </label>                                   
                                                </div>
                                                <div className='inputbox'>
                                                    <input type="password" required />
                                                    <label htmlFor="">Password </label> 
                                                </div>
                                                <div className="forget">
                                                    <label htmlFor=""><input type="checkbox" />Remember me </label>
                                                    <a href="#">Forget Password</a>
                                                </div>
                                                <button id='loginBtn'>Login </button>
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
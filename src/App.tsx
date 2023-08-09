import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from './components/homePage/homePape';
import LoginPage from './components/loginPage/loginPage';
import AdminPage from './components/adminPage/adminPage';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path='/home' element={<HomePage/>}></Route>
                <Route path='/login' element={<LoginPage/>}></Route>
                <Route path='/admin' element={<AdminPage/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

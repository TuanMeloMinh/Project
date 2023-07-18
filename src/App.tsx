import React from 'react';
import './App.css';
import Ads from './components/ads/ads';
import Header from './components/header/header';
import Introduce from './components/slider/introduce/introduce';
import IntroFooter from './components/slider/introducefooter/introFooter';
import Description from './components/slider/description/description';
import DescriptionMai from './components/slider/descfooter/descfooter';
import Information from './components/slider/infomation/information';
import Rate from './components/slider/rate/rate';
import Detail from './components/slider/details/detail';
function App() {
  return (
    <div className="App">
        <Ads/>
        <Header/>
        <Introduce/>
        <IntroFooter/>
        <Description/>
        <DescriptionMai/>
        <Information/>
        <Rate/>
        <Detail/>
    </div>
  );
}

export default App;

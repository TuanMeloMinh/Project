    import '../homePage/homePage.css'
    import Ads from '../ads/ads';
    import Header from '../header/header';
    import Introduce from '../slider/introduce/introduce';
    import IntroFooter from '../slider/introducefooter/introFooter';
    import Description from '../slider/description/description';
    import DescriptionMai from '../slider/descfooter/descfooter';
    import Information from '../slider/infomation/information';
    import Rate from '../slider/rate/rate';
    import Detail from '../slider/details/detail';
    import React from 'react'
    import Production from '../slider/production/production';
    import Ending from '../slider/ending/ending';
const HomePage = () => {
            return(
                <div>
                    <Ads/>
                    <Header/>
                    <Introduce/>
                    <IntroFooter/>
                    <Description/>
                    <DescriptionMai/>
                    <Information/>
                    <Rate/>
                    <Detail/>
                    <Production/>
                    <Ending/>
                </div>
            )
        }
        export default HomePage
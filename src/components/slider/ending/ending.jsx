    import '../ending/ending.css'
    import { AudioOutlined } from '@ant-design/icons'
    import { Input} from 'antd';
    import React from 'react';
    const { Search } = Input;
        const suffix = (
        <AudioOutlined
            style={{
            fontSize: 16,
            color: '#1677ff',
            }}
            
        />
        );
        const onSearch = () => console.log();
        const Ending = () => {
            return (
                <div id='endContainer'> 
                    <div id='endBox'>
                        <div id='endBox1'>
                            <p>SUBSCRIBE NOW</p>
                            <strong> GET OUR UPDATES ALWAYS FAST</strong>
                            <p >YOUR PERSONAL DATA WILL ALWAYS BE SAFE</p>
                                <div id='box1Btn'>
                                    <Search
                                            placeholder="input search text"
                                            enterButton="Search"
                                            size="large"
                                            suffix={suffix}
                                            onSearch={onSearch}
                                        />
                                </div> 
                        </div>
                        <div id='endBox2'>
                            <ul id='endBox2Nav'>
                                <li><a href="">SEARCH</a></li>
                                <li><a href="">HELP</a></li>
                                <li><a href="">INFORMATION</a></li>
                                <li><a href="">PRIVACY POLICY</a></li>
                                <li><a href="">SHIPPING DETAILS</a></li>
                            </ul>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            )
        }
        export default Ending
import React, {useEffect} from 'react';
import MainPage from './components/MainPage/MainPage';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import TimeTable from "./components/TimeTable/TimeTable";
import ReactFullpage from '@fullpage/react-fullpage';
const App = () => {
    return (
        <ReactFullpage
            //fullpage options
            licenseKey = {'YOUR_KEY'}
            scrollingSpeed = {1000} /* Options here */
            render={({ state, fullpageApi }) => {
                return (
                    <ReactFullpage.Wrapper>
                        <div className='section'>
                            <MainPage/>
                        </div>
                        <div className='section'>
                           <TimeTable/>
                        </div>
                    </ReactFullpage.Wrapper>
                );
            }}
        />
    )
};

export default App;

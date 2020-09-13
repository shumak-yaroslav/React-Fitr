import React, {useEffect} from 'react';
import MainPage from './components/MainPage/MainPage';
import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import axios from 'axios';
import TimeTable from "./components/TimeTable/TimeTable";
import Menu from "./components/Menu/Menu";
import GroupTimeTable from "./components/GroupTimeTable/GroupTimeTable";
import ReactFullpage from '@fullpage/react-fullpage';
const App = () => {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Route exact path='/'>
                <ReactFullpage
                    licenseKey = {'YOUR_KEY'}
                    scrollingSpeed = {1000}
                    render={({ state, fullpageApi }) => {
                        return (
                            <ReactFullpage.Wrapper>
                                <div className='section'>
                                    <MainPage/>
                                </div>
                                <div className='section'>
                                    <Menu/>
                                </div>
                            </ReactFullpage.Wrapper>
                        );
                    }}
                />
            </Route>
            <Route exact path={'/timetable'}>
                <TimeTable/>
            </Route>
            <Route exact path="/timetable/group/:id" render={(props) => <GroupTimeTable {...props}/>}/>
        </Router>

    )
};

export default App;

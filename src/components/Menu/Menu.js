import React, {useState, useEffect} from "react";
import logo from "../../img/img_logo.png";
import './Menu.css';
import {Link} from 'react-router-dom';

const Menu = () => {
    const [currentWeek, setCurrentWeek] = useState(1);

    useEffect(() => {
        const now = new Date().getDay();
        const week = now === 1 && currentWeek === 1 ? 2 : 1;
        setCurrentWeek(week);
        localStorage.setItem('week', week);
    }, [])

    return (
        <React.Fragment>
            <div className="wrapper">
                <span className={'current-week'}>{currentWeek} неделя</span>
                <div className="page-header">
                    <img src={logo} alt={logo}/>
                </div>
                <div className="page-title">
                    <Link to={'/timetable'}>
                        <button className="col-sm-12"><span>Расписание <br/> занятий</span></button>
                    </Link>

                    <button className="col-sm-2">Расписание <br/> экзаменов</button>
                    <button className="col-sm-2">заселение в <br/> общежитие</button>
                    <button className="col-sm-2">оплата</button>
                    <button className="col-sm-2">Проходные <br/> баллы</button>
                </div>
            </div>
        </React.Fragment>
    )
};

export default Menu;
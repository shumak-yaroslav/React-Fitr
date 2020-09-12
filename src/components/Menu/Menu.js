import React from "react";
import logo from "../../img/img_logo.png";
import './Menu.css';
import {Link} from 'react-router-dom';

const Menu = () => {
    return (
        <React.Fragment>
            <div className="wrapper">
                <div className="page-header">
                    <img src={logo} alt={logo}/>
                </div>
                <div className="page-title">
                    <Link to={'/timetable'}>
                        <button className="col-sm-2 test">Расписание <br/> занятий</button>
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
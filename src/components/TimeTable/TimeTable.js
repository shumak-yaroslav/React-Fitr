import React, {useState} from "react";
import logo from "../../img/img_logo.png";
import style from './TimeTable.module.css';
import {Link} from 'react-router-dom';

const TimeTable = () => {

    const [groups, setGroups] = useState([
        '10703216', '10703217', '10703218', '10703219', '10703220',
    ]);

    return (
        <React.Fragment>
           <h4 className={style.headerTitle}>Выберите группу</h4>
            <div className={style.buttonsWrapper}>
                {groups.map((item,index) => {
                    return (
                        <Link to={`/timetable/group/${item}`}>
                            <button key={index} className={style.buttons}>{item}</button>
                        </Link>
                    )
                })}
                {/*<button className={style.buttons}>10703216</button>
                <button className={style.buttons}>10703217</button>
                <button className={style.buttons}>10703218</button>
                <button className={style.buttons}>10703219</button>*/}
            </div>
        </React.Fragment>
    )
};

export default TimeTable;
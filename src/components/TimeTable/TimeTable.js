import React, {useState} from "react";
import logo from "../../img/img_logo.png";
import {Card, Button} from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion'
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
                        <React.Fragment>
                            <Accordion defaultActiveKey="0">
                                <Card>
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                            {item}
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="1">
                                        <React.Fragment>
                                            <Link to={`/timetable/group/1/${item}`}>
                                                <Card.Body onClick={() => {localStorage.setItem('group', '1')}}>1 подгруппа</Card.Body>
                                            </Link>
                                            <Link to={`/timetable/group/2/${item}`}>
                                                <Card.Body onClick={() => {localStorage.setItem('group', '2')}}>2 подгруппа</Card.Body>
                                            </Link>
                                        </React.Fragment>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                            {/* <button key={index} className={style.buttons}>{item}</button>*/}
                        </React.Fragment>


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
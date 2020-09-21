import React, {useEffect, useState} from "react";
import axios from 'axios';
import {unstable_batchedUpdates} from "react-dom";

const GroupTimeTable = (props) => {
    const [data, setData] = useState([]);
    const id = props.match.params.id;
    useEffect(() => {
        axios.get(`/groupsData/${id}.json`)
            .then(res => {
                debugger
                setData(res.data);
                console.log(res.data)
            });
    }, []);
    return(
        <table>
            {data.map((item, index) => {
                const lessons = item.subjects[0].firstWeak.firstGroup.map((sub, idx) =>  {
                    return (
                        <React.Fragment>
                            <tr>
                                {item.subjects[0].firstWeak.secondGroup[idx].name === sub.name ? <td rowSpan={2}>{sub.name} {sub.teacher}</td> :
                                    <React.Fragment>
                                        <td>{sub.time}</td>
                                        <td>{sub.name} {sub.teacher}</td>
                                    </React.Fragment>
                                }
                                <td>{sub.time}</td>
                                <td>{sub.name} {sub.teacher}</td>
                            </tr>

                        </React.Fragment>
                    )

                })
                const week = localStorage.getItem('week');
                const group = localStorage.getItem('group');
                if (week === '1' && group === '1') {
                    const lesson = item.subjects[0].firstWeak.firstGroup.map((subb, idxx) =>  {
                        return (
                            <React.Fragment>
                                <tr>
                                    <td>{subb.time}</td>
                                    <td>{subb.name} {subb.teacher}</td>


                                </tr>

                            </React.Fragment>
                        )

                    })
                    return (
                        <React.Fragment>

                            <tr>
                                <td>{item.day}</td>
                                <td>{lesson.time}</td>
                                {/*<td>{lessons}</td>*/}
                                <td>{lesson}</td>
                            </tr>

                        </React.Fragment>
                    )
                } else if (week === '1' && group === '2'){
                    const lesson = item.subjects[0].firstWeak.secondGroup.map((subb, idxx) =>  {
                        return (
                            <React.Fragment>
                                <tr>
                                    <td>{subb.time}</td>
                                    <td>{subb.name} {subb.teacher}</td>



                                </tr>

                            </React.Fragment>
                        )

                    })
                    return (
                        <React.Fragment>

                            <tr>
                                <td>{item.day}</td>
                                {/*<td>{lessons}</td>*/}
                                <td>{lesson}</td>
                            </tr>

                        </React.Fragment>
                    )
                } else if (week === '2' && group === '1'){
                    const lesson = item.subjects[0].secondWeak.firstGroup.map((subb, idxx) =>  {
                        return (
                            <React.Fragment>
                                <tr>
                                    <td>{subb.time}</td>
                                    <td>{subb.name} {subb.teacher}</td>


                                </tr>

                            </React.Fragment>
                        )

                    })
                    return (
                        <React.Fragment>

                            <tr>
                                <td>{item.day}</td>
                                {/*<td>{lessons}</td>*/}
                                <td>{lesson}</td>
                            </tr>

                        </React.Fragment>
                    )
                } else if (week === '2' && group === '2'){
                    const lesson = item.subjects[0].secondWeak.secondGroup.map((subb, idxx) =>  {
                        return (
                            <React.Fragment>
                                <tr>
                                    <td>{subb.time}</td>
                                    <td>{subb.name} {subb.teacher}</td>

                                </tr>

                            </React.Fragment>
                        )

                    })
                    return (
                        <React.Fragment>

                            <tr>
                                <td>{item.day}</td>
                                {/*<td>{lessons}</td>*/}
                                <td>{lesson}</td>
                            </tr>

                        </React.Fragment>
                    )
                }

            })}
        </table>
    )
};

export default GroupTimeTable;
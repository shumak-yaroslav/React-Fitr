import React, {useEffect} from "react";
import axios from 'axios';

const GroupTimeTable = (props) => {
    const id = props.match.params.id;
    useEffect(() => {
        axios.get(`/groupsData/${id}.json`)
            .then(res => {
                console.log(res)
            });
    }, []);
    return(
        <h1>
            hello
        </h1>
    )
};

export default GroupTimeTable;
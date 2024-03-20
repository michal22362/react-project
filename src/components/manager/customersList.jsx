import React, { useEffect, useState } from "react";
import { getMeetings } from "../../api/meeting.api"; 
import "../../css/manager.css";

export const CustomersList = ()=>{

    // const namesAllCustomers = dataMeetings.filter(meeting => display === null ? true : work.name === display);

    const [dataMeetings,setDataMeetings]=useState(null);
    const getAllMeetings = async () => {
        const meetings = await getMeetings();
        const { data } = meetings;
        setDataMeetings(data);
        console.log(data);
    }
    useEffect(() =>{
        getAllMeetings();
    },[]);

    return <div className="customerList">
        <h2>לקוחות האתר</h2>
        {dataMeetings ? <ul> {dataMeetings.filter(meeting => dataMeetings === null? true : meeting.name).map(meeting => <li key={meeting.id}>{meeting.name}</li> )} </ul> :''}
    </div>

}
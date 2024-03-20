import React, { useEffect, useState } from 'react';
import '../../css/topNav.css';
import '../../css/contact.css';
import { createMeeting } from '../../api/meeting.api';
import { getServices } from '../../api/service.api';
import { UserAlert } from './alert';
// import 'bootstrap/dist/css/bootstrap.min.css';


export const Contact = () => {

    const [dataServices, setDataServices] = useState(null);

    const addAppointment = (event) => {
        event.preventDefault();
        const form = event.target;
        const newAppointment = Object.fromEntries([...(new FormData(form)).entries()]);
        console.log(newAppointment);
        createMeeting(newAppointment.optionServiice, newAppointment.date, newAppointment.time, newAppointment.note, newAppointment.name, newAppointment.phone);
        form.reset();
    };

    const getAllServices = async () => {
        const services = await getServices();
        console.log(services);
        const { data } = services;
        setDataServices(data);
        console.log(data);
    }

    useEffect(() => {
        getAllServices();
        console.log("jerhf");
    }, []);


    // פונקציה להצגת alert
    const showAlert = () => {
        //     return (
        //         <div className={`alert alert-${type}`} role='alert'>
        //             {message}
        //         </div>
        //     )
        // return <div className='alert alert-success' role='alert'>
        //     YOUR MASSAGE HAS BEEN SUCCESSFULLY RECEIVED 👍🏼👍🏼👍🏼
        // </div>

        alert('YOUR MASSAGE HAS BEEN SUCCESSFULLY RECEIVED 👍🏼👍🏼👍🏼')
    }

    return <div id='divForm'>
        <div id='divContact'>
            <h3 id='h3Contact'>LET'S TALK ABOUT YOU</h3>
        </div>

        <form id='form' onSubmit={e => addAppointment(e)}>
            <select id="optionServiice" name="optionServiice" placeholder='סוג השירות'>
                {dataServices && dataServices.map(service => <option key={service.name}>{service.name}</option>)}
            </select>

            <input type="text" name='name' placeholder='שם מלא' id='i1' />
            <br />
            <br />
            <input type="date" name='date' placeholder='תאריך' id='i2' />
            <input type="time" name='time' placeholder='שעת פגישה הנוחה לך' id='i2' />
            <br />
            <br />
            <input type="text" name='phone' placeholder='טלפון' id='i3' />
            <br />
            <br />
            <input type="text" name='note' placeholder='הערה/הארה לבעל העסק' id='i4' />
            <br />
            <br />
            <input type="submit" placeholder='שליחה' onClick={showAlert} id='i5' />
            {/* <UserAlert type="success" message="hellow"/> */}
        </form>
    </div>
}
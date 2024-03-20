import React, { useState, useEffect } from "react";
import { createService, getServices } from "../../api/service.api.js";
import { Link } from "react-router-dom";
import "../../css/service.css";


export const Services = () => {

    //קבלת שירותי העסק
    const [dataService, setDataService] = useState(null);
    const getAllServices = async () => {
        const services = await getServices();
        const { data } = services;
        setDataService(data);
    }
    useEffect(() => {
        getAllServices();
    }, [,dataService]);

    

    //הוספת שירות חדש לעסק
    const addService = (event) => {
        console.log("kijnmui");
        event.preventDefault();
        const form = event.target;
        const newService = Object.fromEntries([...(new FormData(form)).entries()]);
        console.log(newService);
        createService(newService.name, newService.cost, newService.description);
        form.reset();
    }

    return <div className="services">
        <h2>שירותי העסק</h2>
        {dataService ? <ul>{dataService.map(service => <li key={service.name}>{service.name} <tt/> </li>)}</ul> : ''}
        <h2>הוספת שירות חדש לעסק</h2>
        <form onSubmit={e => addService(e)} className="form">
            <div>
                <input type="text" name="name" placeholder="שם שירות" ></input>
            </div>
            <div>
                <input type="text" name="cost" placeholder="עלות השירות" ></input>
            </div>
            <div>
                <input type="text" name="description" placeholder="תיאור שירות" ></input>
            </div>
            <input type="submit" placeholder='צור שירות' id='i5' />
        </form>

    </div>
}
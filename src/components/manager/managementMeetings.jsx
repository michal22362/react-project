import React from "react";
import { Outlet } from "react-router-dom"; 
import { ManagementMeetingsSideNav } from "./managementMeetings.sideNav"

export const ManagementMeetings = () => {

    return <div>
        
            <ManagementMeetingsSideNav/>
            <ul>
            <li>
                <Outlet/>
            </li>
        </ul>
    </div>
}
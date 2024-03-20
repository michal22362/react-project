import React from "react";
import { Link } from "react-router-dom";

export const SideNav = ()=> {

    return <header>
        <nav>
            <ul className="ul-manager">
                <li className="li-manager">
                    <Link to={'services'}> = שירותים</Link>
                </li>
                <li className="li-manager">
                    <Link to={'customersList'}> = רשימת לקוחות</Link>
                </li>
                <li className="li-manager">
                    <Link to={'orderList'}> = רשימת פגישות</Link>
                </li>
               
            </ul>
        </nav>
    </header>
}
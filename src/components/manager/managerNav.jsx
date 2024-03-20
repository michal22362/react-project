import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { SideNav } from "./sideNav";
import '../../css/manager.css';
import '../../css/home.css';
import { TopNav } from "../users/topNav";
export const ManangerNav = () => {

    const [displaySideNav, setDisplaySideNav] = useState(false);

    return <header className="header">
        <nav className="nav-manager">

            <TopNav />
            <div>
                {/* <h1 className='title1'>R<tt> </tt>e<tt> </tt>s<tt> </tt>i<tt> </tt>d<tt> </tt>e<tt> </tt>n<tt> </tt>c<tt> </tt>e</h1> */}
                <button onClick={() => setDisplaySideNav(!displaySideNav)} className="managerBtn">לניהול האתר</button>
            </div>

            {displaySideNav ? <SideNav /> : ''};

        </nav>
        <div>
            <Outlet />
        </div>
    </header>




}
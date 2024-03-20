import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import '../../css/topNav.css';

export const TopNav = () => {

    return <header>
        <nav className='topNav'>
            <ul>
                <li>
                    <Link to={''}><img src="/src/images/general/logo.png" className='imgLogo'/></Link>
                </li>
                
                <li className='home' >
                    <Link to={''} id='a-topNav'>דף הבית</Link>
                </li>

                <li className='history'>
                    <Link to={'about'} id='a-topNav'>אגדה שלי</Link>
                </li>
                <li className='projects'>
                    <Link to={'projects'} id='a-topNav'>פרויקטים</Link>
                </li>
                <li className='contact'>
                    <Link to={'contact'} id='a-topNav'>צור קשר</Link>
                </li>
                <li className='tips'>
                    <Link to={'tips'} id='a-topNav'>טיפים לעיצוב הבית</Link>
                </li>
            </ul>
        </nav>
    </header>

}
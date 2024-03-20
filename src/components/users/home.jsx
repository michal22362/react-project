import React from 'react';
import '../../css/topNav.css';
import '../../css/home.css';
import { TopNav } from './topNav';
import { SignIn } from '../manager/signIn';
import { PopupComponent } from './popUp';

export const Home = () => {
    return (
        <div className="background-image">
            <TopNav/>
            <h1 className='title1'>R<tt> </tt>e<tt> </tt>s<tt> </tt>i<tt> </tt>d<tt> </tt>e<tt> </tt>n<tt> </tt>c<tt> </tt>e</h1>
            <button className='learnMore'>Learn More</button>
            <PopupComponent/>
        </div>
    );
}

export default SignIn;
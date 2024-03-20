import React, { useState, useEffect } from 'react';
import '../../css/popUp.css';

export const PopupComponent = () => {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {showPopup && (
                <div className="popup">
                    <div><button onClick={() => setShowPopup(false)}>✖</button></div>
                    <br />
                    <h1>מעצבת פנים בנשמה?</h1>
                    <h1>חשבנו עליך!</h1>
                    <br />
                    <h3>קורס אדריכלות</h3>
                    <h3>ועיצוב פנים</h3>
                    <p>רק שנה וחצי לימודים עם מיקוד משתלם בדירות קבלן!</p>
                    <p id='p-down'>540 שעות לימוד אקדמאיות
                        <br />135 מפגשים
                        <br />2 מפגשים בכל שבוע</p>
                        <br />
                    <div className='background-img'><img src="/src/images/general/logo-2.png"/></div>
                </div>
            )}
        </div>
    );
};
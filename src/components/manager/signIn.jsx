import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Home } from '../users/home';
import { ManangerNav } from './managerNav';
import '../../css/signIn.css';

const nameUser = "admin"
const password = "1234"


console.log(nameUser);
console.log(password);
export const SignIn = () => {

  const [showBtn, setShowBtn] = useState(false);
  const [showForm, setShowForm] = useState(true);

  const checkSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const newSignIn = Object.fromEntries([...(new FormData(form)).entries()]);
    if (nameUser == newSignIn.nameUser && password == newSignIn.password) {
      console.log(newSignIn);
      setShowBtn(true);
      setShowForm(false);
    }
    else{
      alert("אופסססס!!! הסיסמה או השם שגויים נסה שוב 🙄")
    }

    form.reset();

  }

  return <div>
    
    {showForm ?
    
      <form name='formAdmin' onSubmit={e => checkSignIn(e)}>
        <h2 id='h3-admin'>מנהל יקר</h2>
        <br />
        <h2 className="namepass">הכנס שם משתמש וסיסמה</h2>
        <input type="text" name='nameUser' placeholder='שם משתמש' />
        <input type="password" name='password' placeholder='סיסמא' />
        <input type="submit" placeholder='שליחה' id='i5' />
      </form>
    : ''}
    {showBtn ? <ManangerNav /> : ''}
  </div >

}



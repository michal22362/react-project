import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TopNav } from './components/users/topNav';
import { Outlet } from 'react-router-dom';
// import { Appointment } from './components/users/appointment';
// import { DeleteAppointment } from './components/users/delete appointment';

function App() {


  return (
    <>
      <TopNav />
      {/* <Appointment/> */}
      {/* <DeleteAppointment/> */}
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default App

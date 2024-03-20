import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Home } from './components/users/home.jsx'
import { About } from './components/users/about.jsx'
import { Projects } from './components/users/projects.jsx'
import { Tips } from './components/users/tips.jsx'
import { Contact } from './components/users/contact.jsx'
import { SignIn } from './components/manager/signIn.jsx'
import { CustomersList } from './components/manager/customersList.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { TopNav } from './components/users/topNav.jsx'
import { ManangerNav } from './components/manager/managerNav.jsx'
import { OrderList } from './components/manager/orderList.jsx'
import { Services } from './components/manager/services.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [{
      path: '',
      Component: Home,
    }, {
      path: 'about',
      Component: About,
    }, {
      path: 'projects',
      Component: Projects,
    }, {
      path: 'tips',
      Component: Tips,
    }, {
      path: 'contact',
      Component: Contact,
    },
    {
      path: 'admin',
      Component: SignIn,
      children: [{
        path: 'customersList',
        Component: CustomersList,
      }, {
        path: 'orderList',
        Component: OrderList,
      }, {
        path: 'services',
        Component: Services,
      }, {
        path: 'about',
        Component: About,
      }, {
        path: 'projects',
        Component: Projects,
      }, {
        path: 'tips',
        Component: Tips,
      }, {
        path: 'contact',
        Component: Contact,
      },

      ]

    }]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

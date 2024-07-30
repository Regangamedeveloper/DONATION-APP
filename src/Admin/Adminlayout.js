import Adminnavbar from './components/Adminnavbar';
import { Outlet } from 'react-router-dom';
import Adminsidebar from './components/Adminsidebar';

import './secret.scss';

import React from 'react'
import Adminfooter from './components/Adminfooter';

const Adminlayout = () => {
  return (
       <div className='main'>
       <Adminnavbar/>
       <div className='container'>
       <div className='menucontainer'>
       <Adminsidebar/>
        </div> 
        <div className="contentcontent">
        <Outlet />
      </div>
      
    </div>
    <Adminfooter/>
    </div>
  )
}

export default Adminlayout

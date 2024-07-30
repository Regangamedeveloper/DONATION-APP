import React from 'react'
import './adminsidebar.scss'
import { Link } from 'react-router-dom'
import { menu } from './menudata'
const Adminsidebar = () => {
  return (
   <div className="menu">
    {menu.map((section) => (
    <div className="item"key={section.id}>
    <div className="title">{section.title}</div>
    {section.listItems.map((item) => (
    <Link to={item.url} key={item.id} className='listItem'>
    <div className="icon" style={{ color: '#017960' }}>
                  {item.icon}
                </div>
    <span className="listItemTitle">{item.title}</span>
    </Link>
))}
   </div>
   ))} 
   </div>

  )
}

export default Adminsidebar 
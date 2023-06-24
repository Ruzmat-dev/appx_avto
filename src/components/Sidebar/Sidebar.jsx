import React from 'react'
import "./Sidebar.css"
import { NavLink } from 'react-router-dom'
import navLinks from "../../assets/dummy-data/navLinks"

const Sidebar = () => {
  return <div className="sidebar">
    <div className="sidebar__top">
        <a href="/"><h2><span><i className="ri-taxi-line"></i></span>APPX <h4 className='Sidebar__avto'>AVTO</h4></h2></a>
    </div>
    <div className="sidebar__content">
        <div className="menu">
            <ul className="nav__list">
                {
                    navLinks.map((item , index) => (
                        <li className="nav__item" key={index}>
                            <NavLink to={item.path} className={(navClass) => navClass.isActive ? "nav__active nav__link" : "nav__link"}>
                                
                                    <i className={item.icon}></i>
                                
                                {item.display}
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
        </div>

        <div className="sidebar__bottom">
            <span><i className='ri-logout-circle-r-line'></i> Chiqish </span>
        </div>
    </div>
  </div>
}

export default Sidebar
import React from 'react'
import "./top-nav.css"
import { Link } from 'react-router-dom'
import profileImg from "../../assets/images/photo.jpg"

const TopNav = () => {
  return <div className="top__nav">
    <div className="top__nav-wrapper">
      <div className="search__box">
        <input type="text" placeholder='qidiring yoki yozing'/>
        <span>
          <i className='ri-search-line'></i>
        </span>
      </div>
      <div className="top__nav-right">
        <span className='notification'>
            <i className='ri-notification-3-line'></i>
        </span>
        <span className='badge'>1</span>
        <div className="profile">
          <Link to="/settings">
            <img src={profileImg} alt="" />
          </Link>
        </div>
      </div>
    </div>
  </div>
}

export default TopNav
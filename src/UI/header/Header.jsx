import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import "./Header.css"


export default function Header() {

  return (
    <div className="header">
        <div className="left">
          <div className="Name_logo">
            <p className="logo">
              CAMPONY
            </p>
          </div>
          
        </div>
        <div clasNname="center">
            <p className="Content">
              <ul className="list">
                <li className="listcont">Blog</li>
              <li className="listcont">Genre</li>
                <li className="listcont">About</li>
                <li className="listcont">Contact</li>
              </ul>
            </p>
        </div>
        <div className="right">
          <div className="Search">
            {/* <input type="text" className="Input" placeholder="Search"/> */}
            <div className="IconBckg">
            <SearchIcon className="icon"/> 
            </div>
        </div>
        <div className="Blackone">
          <p className="Stuff"> 
          Request Git</p>
        </div>
        </div>
    </div>
  )
}

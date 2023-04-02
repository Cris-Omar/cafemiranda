import React, { useState } from 'react';
import {Link} from "react-router-dom";
import Xmark from "../assets/icons/Xmark"
import Bars from "../assets/icons/Bars"

export default function Navbar() {
  //Mobile Open & close menuIcon
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  //Mobile dropdown handle Open
  const [mobOpen, setMobOpen] = useState(false)
  const handleMobOpen = () => {setMobOpen(!mobOpen)}

  return(
    <div className='navbar'>
      <div className='logo'>
        <img src="/logo.png" alt="Logo"/>
      </div>

      <div className='menu'>
        <div className='menuItem'><Link to="/">Home</Link></div>
        <div className='menuItem'><Link to="/location" >locacion</Link></div>
        <div className='menuItem'><Link to="/contact">contacto</Link></div>

        <div className='menuIcon' onClick= {() => {handleClick(); handleMobOpen();}}>
          {click ? <Xmark /> : <Bars />}
          {mobOpen && (
          <div className='subMenu'>
            <li><div className='menuItem'><Link to="/">Home</Link></div></li>
            <li><div className='menuItem'><Link to="/location" >locacion</Link></div></li>
            <li><div className='menuItem'><Link to="/contact">contacto</Link></div></li>
          </div>
          )}
        </div>
      </div>
    </div>
  )
}
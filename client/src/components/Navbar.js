import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import Xmark from "../assets/icons/Xmark"
import Bars from "../assets/icons/Bars"

export default function Navbar() {
  //Mobile Open & close menuIcon
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  //Mobile dropdown handle Open
  const [mobOpen, setMobOpen] = useState(false)
  const handleMobOpen = () => { setMobOpen(!mobOpen) }

  // Ref for the menu icon to check if click occurred inside the menu or submenu
  const menuIconRef = useRef(null);

  //if click on Document close submenu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobOpen && !menuIconRef.current.contains(event.target)) {
        menuIconRef.current.releasePointerCapture(event.pointerId);
        setMobOpen(false);
        setClick(false);
      }
    };
    document.addEventListener("pointerdown", handleClickOutside);

    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
    };
  }, [mobOpen]);

  return (
    <div className='navbar'>
      <div className='logo'>
        <img src="/logo.png" alt="Logo" />
      </div>

      <div className='menu'>
        <div className='menuItem'><Link to="/">Home</Link></div>
        <div className='menuItem'><Link to="/location" >locacion</Link></div>
        <div className='menuItem'><Link to="/contact">contacto</Link></div>

        <div className='menuIcon clicked' onClick={() => { handleClick(); handleMobOpen(); }} ref={menuIconRef}>
          {click ? <Xmark /> : <Bars />}
          {mobOpen && (
            <div className='subMenu'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/location" >locacion</Link></li>
              <li><Link to="/contact">contacto</Link></li>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
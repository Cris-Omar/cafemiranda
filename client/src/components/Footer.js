import React from 'react'
import "../style/styles.css"
import { Link } from 'react-router-dom'

//footer Icons:
import InstaIcon from "../assets/icons/InstaIcon"
import FacebookIcon from "../assets/icons/FacebookIcon"
import LinkedInIcon from "../assets/icons/LinkedInIcon"

export default function Footer() {

  return (

    <div className="footer">
      <div className='socialMedia'>
      <li><Link to="https://www.instagram.com/" target="_blank"><InstaIcon /></Link></li>
       <li><Link to='https://www.facebook.com/restessbar' target="_blank"><FacebookIcon /></Link></li>
       <li><Link to='https://www.linkedin.com/' target="_blank"><LinkedInIcon /></Link></li>
     </div>

     <div className='otherLinks'>
      <li><Link to="/delivery">envios</Link></li>
      <li><Link to="/jobs">trabajo</Link></li>
      <li><Link to="/team">equipo</Link></li>
     </div>

      <p>
        Café Miranda &copy; 2023
      </p>
    </div>
  )
}
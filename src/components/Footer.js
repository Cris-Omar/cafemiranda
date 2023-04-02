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
      <li><Link to="_blank" rel="noreferrer" href='https://www.instagram.com/' ><InstaIcon /></Link></li>
       <li><Link to="_blank" rel="noreferrer" href='https://www.facebook.com/restessbar' ><FacebookIcon /></Link></li>
       <li><Link to="_blank" rel="noreferrer" href='https://www.linkedin.com/' ><LinkedInIcon /></Link></li>
     </div>

      <p>
        Cafe Miranda &copy; 2023
      </p>
    </div>
  )
}
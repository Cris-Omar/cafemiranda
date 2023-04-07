import React from "react";

export default function Location() {
  return(
    <div className="location">
      <p>Nuestro café es producido en el estado Portugesa</p>
      <div className="frame">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31498.987179877528!2d-69.45462230000001!3d9.3001439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e7db2b9b8bbac77%3A0x337c50733d2dfe82!2sOspino%203352%2C%20Portuguesa%2C%20Venezuela!5e0!3m2!1sde!2sch!4v1680471845869!5m2!1sde!2sch" 
          title="location"
          width="100%" 
          height="100%" 
          style={{ border: 0 }}
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>
  )
}
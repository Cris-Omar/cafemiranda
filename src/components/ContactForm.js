import React from 'react'
import { useState } from 'react';
import "../style/styles.css"
import FileUploadIcon from '../assets/icons/FileUploadIcon'

export default function ContactFrom() {

  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  return (

    <div className='contactForm'>
      <h3>Tienes una pregunta o quieres contactarnos para una compra?</h3>
      <p>contactanos atravez de este formulario.</p>
      <form>
        <div className='object'>
          <label>nombre</label>
          <input type="text"></input>
        </div>
        <div className='object'>
          <label>email</label>
          <input type="text"></input>
        </div>
        <div className='object'>
        <label>mensaje</label>
          <textarea rows={7} ></textarea>
        </div>
        <button type="submit">enviar</button>
      </form>
    </div>
  )
}
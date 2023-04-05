import React from 'react'
import "../style/styles.css"
import { useState } from 'react';

export default function ContactFrom() {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      let res = await fetch("/post", {
        method:"POST",
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          subject: subject,
          message:message,
        }),
      });
      let data = await res.json();
      console.log(data);

      if (data.status === "success") {
        alert(
          "su mensaje a sido transferido, lo contactaremos en menos de 24 horas."
        )
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        alert(
          "A pasado un error en la transmision del mensaje, intetelo denuevo en algunos segundos."
          )
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (

    <div className='contactForm'>
      <h3>Tienes una pregunta o quieres contactarnos para una compra?</h3>
      <p>contactanos atravez de este formulario.</p>
      <form onSubmit={handleSubmit}>
        <div className='object'>
          <label>nombre</label>
          <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className='object'>
          <label>email</label>
          <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className='object'>
          <label>asunto</label>
          <input type="text" name="subjet" value={subject} onChange={(e) => setSubject(e.target.value)} required />
        </div>
        <div className='object'>
        <label>mensaje</label>
          <textarea rows={7} name="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
        </div>
        <button type="submit">enviar</button>
      </form>
    </div>
  )
}
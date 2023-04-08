import React from "react";

export default function Team(){

  return (
    <div className="team">
      <h2>miembros de Nuestro equipo:</h2>
      <div className="teamMember">
        <img src="pictures/luisanaAranguen.png" />
        <div className="memberInfo">
            <p>nombre: Luisana Aranguen </p>
            <p>Posicion: Marketing</p>
          </div>
      </div>

      <div className="teamMember">
        <img src="/pictures/cafe1-180x100.jpg" />
        <div className="memberInfo">
          <p>ejemplo</p>
          <p>Posicion: facturacion</p>
        </div>
      </div>

      <div className="teamMember">
        <img src="/pictures/cafe1-180x100.jpg" />
        <div className="memberInfo">
          <p>otro ejemplo</p>
          <p>Posicion: noce</p>
        </div>
      </div>
    </div>
  )
}
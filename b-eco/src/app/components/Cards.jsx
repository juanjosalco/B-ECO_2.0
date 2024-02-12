"use client";
import React from 'react';
import "../styles/Cards.css"

const Cards = ({image, text, referencia}) => {
  return (
    <a className='referencia-card' href={referencia} target='blank'>
        <div className='containerCards'>
            <div className="info-container">
                <div className="socialMedia">
                    <div className="logo">
                        <img src="https://firebasestorage.googleapis.com/v0/b/b-eco-18c09.appspot.com/o/Assets%2FProfile.png?alt=media&token=18f923fa-97fa-41ff-9d09-9b63a85807e0" className="logo" />
                    </div>
                    <div className='account-info'>
                        <div className='tittle'>
                            grupoestudiantil_b.eco
                        </div>
                        <div className='account-name'>
                            Tecnológico de Monterrey Campus Guadalajara
                        </div>
                    </div>
                </div>
                <div className="text-container">
                    {text}
                </div>
            </div>
            <div className="card-image" style={{backgroundImage: `url(${image})`, backgroundSize: 'cover'}}>
            </div>
        </div>
    </a>
  )
}

export default Cards
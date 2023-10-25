import React from 'react';
import './About.css'
import PurchasesImg from '../assets/purchases.png';

const About = () => {
    return (
      <><div className="centered-text">
        <p>Somos una pequeña empresa de inmobilarias,
          la cúal se dedica a enviar los productos a través de internert</p>
      </div><div className="image-container">
          <img src={PurchasesImg} alt="Purchases" />
        </div></>
    );
};

export default About;
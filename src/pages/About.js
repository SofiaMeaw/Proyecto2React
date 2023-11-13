import React from 'react';
import './About.css'
import PurchasesImg from '../assets/purchases.png';

const About = () => {
    return (
      <><div className="centered-text">
        <p>Somos una pequeña empresa de inmobilarias,
          la cúal se dedica a enviar los productos a través de internert a nivel local y nacional.
          Nuestra red logística abarca todo el país, lo que nos permite manejar los envíos de manera eficiente. 
          Aunque seamos una empresa pequeña, nos comprometemos a dar un buen servicio tanto a clientes como a vendedores.</p>
      </div><div className="image-container">
          <img src={PurchasesImg} alt="Purchases" />
        </div></>
    );
};

export default About;
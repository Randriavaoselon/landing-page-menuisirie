import React from 'react'
import AboutBackgroundImage from "../Assets/fond2.gif";

const About = () => {
  return (
    <div className="about-section-container" id="about">
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">

        <h1 className="primary-heading">
          Pourquoi vous devez acheter nos produits ?
        </h1>
        <p className="primary-text">
          Choisir nos produits, c'est opter pour l'excellence à chaque étape. De la conception minutieuse à la réalisation artisanale,
          nous nous engageons à offrir une qualité inégalée.
        </p>
        <p className="primary-text">
          Avec une fusion parfaite de design innovant, de durabilité exceptionnelle et de fonctionnalité optimale,
          nos produits de menuiserie dépassent les attentes.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Savoir plus</button>

        </div>
      </div>
    </div>
  )
}

export default About
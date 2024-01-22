import React from 'react'
import NavbarDetail from '../components/NavbarDetail';
import AboutBackgroundImage from "../Assets/fond2.gif";
import { Link } from 'react-router-dom';

const AboutPages = () => {
  return (
    <div >
      <div className="back-color">
        <NavbarDetail/>
      </div>
      <div className="about-section-container plus-about">
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
          <p className="primary-text">
          Nos artisans talentueux façonnent avec passion chaque pièce, alliant expertise traditionnelle et technologies de pointe pour créer des solutions sur mesure qui dépassent toutes les attentes.
          Que vous recherchiez des portes élégantes, des fenêtres innovantes ou des meubles sur mesure, notre entreprise s'engage à offrir des produits qui conjuguent esthétique raffinée et performances durables, rehaussant ainsi le caractère unique de votre habitat.  
          </p>
          <p className="primary-text">
          Nos matériaux de première qualité garantissent une résistance exceptionnelle face aux éléments extérieurs, assurant une longévité qui se traduit par des années de satisfaction. De plus, notre engagement envers l'innovation se reflète dans des designs modernes et fonctionnels, offrant des solutions intelligentes pour répondre aux besoins contemporains. Transformez votre espace avec des créations qui marient l'élégance à la fonctionnalité, et faites de votre intérieur un lieu où le confort et le style se rencontrent harmonieusement grâce à nos produits de menuiserie d'exception.
          </p>
          <div className="about-buttons-container">
            <Link to="/" className="link-about">
              <button className="secondary-button">Revenir</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPages
import React from 'react'
import ProfilePic from "../Assets/arnolde.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper" id="temoin">
      <div className="work-section-top">
        <h1 className="primary-heading">Témoingage  de notre produits</h1>
        <p className="primary-text">
          Nous sommes ravis de partager que notre produit a reçu un flot abondant d'avis positifs.
          La satisfaction de nos clients est la meilleure validation de notre engagement envers la qualité, le design et la performance
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          HM Renov 26 a surpassé toutes mes attentes en matière de menuiserie.Leur travail méticuleux,
          associé à des matériaux de haute qualité, a transformé mon espace de vie de manière exceptionnelle.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Arnolde</h2>
      </div>
    </div>
  )
}

export default Testimonial
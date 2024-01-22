import React from 'react'
import BannerImage from "../Assets/fond.png";
import { FiArrowRight } from "react-icons/fi";
import { Link } from 'react-router-dom';

import Navbar from './Navbar'
import Job from './Job'
import Testimonial from './Testimonial'
import Contact from './Contact'
import About from './About'
import Footer from './Footer';

const Home = () => {
  return (
    <div className="home-container">
      <div className="back-color">
        <Navbar />
      </div>
      <div className="home-banner-container">
        <div className="home-text-section">
          <h1 className="primary-heading">
            Notre Menuiserie Redéfinit le Style et la Durabilité pour Votre Intérieur et Extérieur.
          </h1>
          <p className="primary-text">
            Découvrez l'art de l'excellence avec nos produits de menuiserie qui allient savoir-faire artisanal,
            design innovant et qualité inégalée.
          </p>
          <Link to="/search_produit" className="secondary-button">
            Voir tous les produits <FiArrowRight />{" "}
          </Link>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
      <div className='App'>
        <About />
        <Job />
        <Testimonial />
        <Contact />
        <Footer />
      </div>

    </div>
  )
}

export default Home
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import NavbarListeImage from '../components/NavbarListeImage';


const ListeProduit = () => {

  const [produitListe, setProduitListe] = useState([]);

  useEffect(() => {
    const fetchproduitListe = async () => {
      try {
        const response = await fetch('api/produits/');
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des données');
        }
        const data = await response.json();
        setProduitListe(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
      }
    };

    fetchproduitListe();
  }, []);

  return (
    <div className="back-color">
      <NavbarListeImage />
      <div className='body-page-Liste-produit'>
        <div className="image-container">
          {produitListe.map((image, index) => (
            <div key={index.id} className="image-background">
              <Link to={`/liste_produit/${image.id}`} className="link-textImage">
                <img src={image.image} alt="" />
                <p>{image.titre_prod} en {image.prix_prod} €</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ListeProduit
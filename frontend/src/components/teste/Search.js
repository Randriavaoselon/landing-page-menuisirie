import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Search = () => {

    const [recherche, setRecherche] = useState('');
    const [resultats, setResultats] = useState([]);

    const effectuerRecherche = async () => {
        try {
            const response = await axios.get(`api/recherche/?q=${recherche}`);
            setResultats(response.data);
        } catch (error) {
            console.error('Erreur lors de la recherche d\'articles :', error);
        }
    };

    useEffect(() => {
        effectuerRecherche();
    }, [recherche]);

  return (
    <div>
        <input
                type="text"
                value={recherche}
                onChange={(e) => setRecherche(e.target.value)}
                placeholder="Rechercher des articles"
            />

<div className='body-page-Liste-produit'>
       <div className="image-container">
           {resultats.map((resultat, index) => (
            <Link to={`/liste_produit/${resultat.id}`} className="link-textImage">
            <div key={index.id} className="image-background">
                <img src={resultat.image} alt="" />
                <p>{resultat.titre_prod} en {resultat.prix_prod} €</p>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Search
import React, { useState, useEffect } from 'react'
import ListeProduit from '../pages/ListeProduit';


const RechercheProduits = () => {

    const [recherche, setRecherche] = useState('');
    const [resultats, setResultats] = useState([]);

    useEffect(() => {
        const effectuerRecherche = async () => {
            try {
                const response = await fetch(`api/recherche/?q=${recherche}`);
                setResultats(response.data);
            } catch (error) {
                console.error('Erreur lors de la recherche :', error);
            }
        };

        // Effectuer la recherche lors du changement de la valeur de recherche
        effectuerRecherche();
    }, [recherche]);


    return (
        <div>
            <input type="search" placeholder="Recherches" className="primary-button" value={recherche} onChange={(e) => setRecherche(e.target.value)} />   
            <ul>
                {resultats?.map((resultat, index) => (
                    <li key={index}><img src={resultat.image} /></li>
                ))}
            </ul>
        </div>
    )
}

export default RechercheProduits
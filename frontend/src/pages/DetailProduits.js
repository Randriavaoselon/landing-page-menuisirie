import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import NavbarDetail from '../components/NavbarDetail';

const DetailProduits = () => {
    const { id_prod } = useParams();
    const [book, setBook] = useState({});

    useEffect(() => {
        fetch(`/api/produits/${id_prod}/`)
            .then(response => response.json())
            .then(data => setBook(data))
            .catch(error => console.error('Error fetching book details:', error));
    }, [id_prod]);

    return (
        <div>
            <div className="back-color">
                <NavbarDetail />
            </div>
            <div className="work-section-wrapper" id="temoin">
                <div className="work-section-top">
                    <h1 className="primary-heading">{book.titre_prod}</h1>
                    <p className="primary-text">
                        Profitez dès maintenant de nos offres exclusives et donnez vie à vos rêves d'intérieur avec notre menuiserie haut de gamme. L'excellence à chaque détail, c'est chez nous que votre chez-vous commence.
                    </p>
                </div>
                <div className="testimonial-section-bottom">
                    <p>{book.nom_prod} en {book.prix_prod} €</p>
                    <img src={book.image} alt="" className="imageDetail" />
                    <p>{book.description_prod}</p>
                    <Link to="/search_produit" className="link-textImage">
                        <h2 className="color-style" id="color-style">Revenir</h2>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default DetailProduits
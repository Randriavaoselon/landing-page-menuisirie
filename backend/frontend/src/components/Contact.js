import React, { useState, useEffect } from 'react'
//import axios from "axios";

const Contact = () => {

  const [text, setText] = useState('');

  const handleInputChange = (e) => {
     setText(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/produits/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: text }),
      });

      if (response.ok) {
        const data = await response.json();
        setText('');
        console.log('Comment created successfully');
      } else {
        console.error('Error creating comment', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
    setText('');
  };

  return (
    <div className="contact-page-wrapper" id="contact">
      <h1 className="primary-heading">Ecrivez votre commentaire</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="contact-form-container">
          <input type="text" value={text} onChange={handleInputChange} className="text-comment" placeholder="Ecrire votre commentaire..." />
          <button type="submit" className="secondary-button">Envoyer</button>
        </div>
      </form>
    </div>
  )
}

export default Contact
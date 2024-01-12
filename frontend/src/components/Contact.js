import React, { useState } from 'react'

const Contact = () => {

  return (
    <div className="contact-page-wrapper" id="contact">
      <h1 className="primary-heading">Ecrivez votre commentaire</h1>
      <div className="contact-form-container">
          <input type="text" className="text-comment" placeholder="Vous pouvez ecrire votre commentaire ici" />
          <button type="submit" className="secondary-button">Envoyer</button>
      </div>
    </div>
  )
}

export default Contact
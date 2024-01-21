import React from 'react'
import PickMeals from "../Assets/pro1.png";
import ChooseMeals from "../Assets/pro2.png";
import DeliveryMeals from "../Assets/pro3.png";

const Job = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Porte Fenêtre en bonne qualité",
      text: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      image: ChooseMeals,
      title: "Porte de service",
      text: "Lorem ipsum dolor sit amet consectetur. ",
    },
    {
      image: DeliveryMeals,
      title: "Porte de service",
      text: "Lorem ipsum dolor sit amet consectetur. ",
    },
  ];

  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">

        <h1 className="primary-heading">Produits de qualité</h1>
        <p className="primary-text">
          Nous garantissons la qualité exceptionnelle de nos produits de menuiserie, façonnés avec un souci méticuleux du détail,
          des matériaux soigneusement sélectionnés et une expertise artisanale inégalée.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Job
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React, { useState } from "react";
import "./Cities.css";
import ListRestaurants from "../ListRestaurants/ListRestaurants";

export default function ClickCollect({ restaurant, clickCollect }) {
  const restaurantsFiltred = [];

  // on map sur la liste de restaurants
  // on veut générer un nouveau tableau pour éviter les doublons de noms
  restaurant.map((rest) => {
    // on vérifie si le tableau contient la ville
    const isExist = restaurantsFiltred.includes(rest.ville);
    // si non, on ajoute la ville
    if (!isExist) restaurantsFiltred.push(rest.ville);
    return restaurantsFiltred;
  });

  // state clic sur bouton cities et set le nom de la ville choisie
  const [clickCities, setClickCities] = useState(false);

  // au click sur un bouton-ville, on récupère le nom de la ville
  const handleClickCities = (e) => {
    setClickCities(e.target.name);
  };

  return (
    // si le bouton Click and Collect a été cliqué
    // affiche / cache le composant
    <div className={clickCollect ? "show-cities" : "hide-cities"}>
      <h3 className="title-where">Tu veux manger où ?</h3>

      {/* On map sur la liste de villes,
          affiche un bouton par ville  */}
      <div className="cities">
        {restaurantsFiltred.map((res, i) => (
          <button
            className="btn-cities"
            key={i}
            type="button"
            name={res}
            onClick={handleClickCities}
          >
            {res}
          </button>
        ))}{" "}
      </div>
      {/* on passe en props le state clickCities (= si une ville a été choisie)
      et la liste des restaurants */}
      <ListRestaurants clickCities={clickCities} restaurant={restaurant} />
    </div>
  );
}

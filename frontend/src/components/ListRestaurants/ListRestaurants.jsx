/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import { useState } from "react";
import "./ListRestaurants.css";
import CestParti from "../Cest-parti/CestParti";

export default function ListRestaurants({ clickCities, restaurant }) {
  const restoFiltered = restaurant;

  // state pour afficher et cacher la liste
  const [isOpen, setOpen] = useState(false);

  // state des items de la liste
  const [items] = useState(restoFiltered);

  // state de choix de user
  const [selectedItem, setSelectedItem] = useState(null);

  // fonction afficher/cacher la liste
  const toggleDropdown = () => setOpen(!isOpen);

  // state user a fait un choix ou non
  // transmis en props à CestParti.jsx
  const [selected, setSelected] = useState(false);

  // fonction pour valider le choix de user
  const handleItemClick = (id) => {
    // si je clique sur un restaurant,
    setSelectedItem((prevSelectedItem) =>
      // si le resto était déjà cliqué,
      // remets la valeur à null = on revient à "Choisis ton restaurant"
      // sinon on garde id
      prevSelectedItem === id ? null : id
    );
    // masque la liste de restaurants
    setOpen(false);
    // met à jour le state de sélection (true / false)
    setSelected(!selected);
    // on stocke l'id du restaurant dans le local storage, on passe en string l'id
    localStorage.setItem("idRestaurant", JSON.stringify(id));
  };

  return (
    // Si une ville a été choisi, on rend visible le composant
    <div className={clickCities ? "showResto" : "hideResto"}>
      {/* On affiche la liste de restaurants dans la ville choisie */}
      <h1 className="listRestoTitle">Nos restaurants à {clickCities} :</h1>
      <div className="dropdown">
        {/* event OnClick exécutant la fonction toggleDropdown pour afficher / cacher la
        liste */}
        <div className="dropdown-header" onClick={toggleDropdown}>
          {selectedItem
            ? // eslint-disable-next-line radix
              items.find((item) => item.id === parseInt(selectedItem)).nom
            : "Choisis ton restaurant :"}
          <svg
            width="25px"
            height="25px"
            viewBox="0 0 24.00 24.00"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            strokeWidth="1.32"
            className={` icon ${isOpen && "open"}`}
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <rect width="24" height="24" fill="var(--light-color)"></rect>
              <path
                d="M9.5 7L14.5 12L9.5 17"
                stroke="var(--dark-color)"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </svg>
        </div>
        {/* si liste ouverte, change la classe  */}
        <div className={`dropdown-body ${isOpen && "open"}`}>
          {/* on filtre les restaurants selon la ville choisie
           on map pour créer une div par restaurant restant */}
          {items
            .filter((item) => item.ville === clickCities)
            .map((item) => (
              <div
                key={item.id}
                id={item.id}
                className="dropdown-item"
                onClick={(e) => handleItemClick(e.target.id)}
              >
                {item.nom}
              </div>
            ))}
        </div>
      </div>
      {/* on envoie en props le state selected (true / false) */}
      <CestParti selected={selected} />
    </div>
  );
}

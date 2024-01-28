import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <main className="container-contact">
      <section>
        <h2>Contexte de ce projet</h2>
        <p>
          Nous sommes en formation à la Wild Code School dans le bootcamp
          "Développeur Fullstack". Il s'agit du projet n°2 réalisé en groupe
          pour expérimenter un premier projet front-end en ReactJS.
        </p>
        <p>Nous sommmes une équipe de 4 développeurs/développeuses :</p>
        <ul>
          <li>Aleksandra Hamon</li>
          <li>Nadir Khouani</li>
          <li>Sylvain Moreau</li>
          <li>Arthur Vincent-Silvestrini</li>
        </ul>
        <h3>Objectifs</h3>
        <p>
          Créer une plateforme web responsive pour une chaîne de restaurants
          dans toute la France avec un restaurant par ville (ex : Paris, Lyon,
          Bordeaux, etc.). L'utilisateur a la possibilité de sélectionner une
          ville pour récupérer sa commande en click'n collect ou choisir de se
          faire livrer.
        </p>
      </section>
    </main>
  );
}

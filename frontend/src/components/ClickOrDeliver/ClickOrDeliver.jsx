/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "./ClickOrDeliver.css";
import Cities from "../Cities/Cities";

export default function ClickOrDeliver({ restaurant }) {
  // state bouton Click'n Collect
  const [clickCollect, setClickCollect] = useState(false);

  // state bouton Livraison
  const [deliver, setDeliver] = useState(false);

  // fonction onClick bouton Click and Collect
  const handleClickCollect = () => {
    setClickCollect(!clickCollect);
  };

  // foncton onClick bouton Livraison
  const handleDeliver = () => {
    setDeliver(!deliver);
  };

  return (
    <>
      <h2 className="deliverH2">Tu es plutôt...</h2>
      <section className="btnClickDeliver">
        <button type="button" className="btn-cod" onClick={handleClickCollect}>
          Click and Collect
        </button>
        <button type="button" className="btn-cod" onClick={handleDeliver}>
          Livraison
        </button>
      </section>
      <Cities
        restaurant={restaurant}
        clickCollect={clickCollect}
        deliver={deliver}
      />
    </>
  );
}

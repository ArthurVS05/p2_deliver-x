import { useState, useEffect } from "react";
import "./Livraison.css";


import { GeoapifyGeocoderAutocomplete, GeoapifyContext } from '@geoapify/react-geocoder-autocomplete'

export default function Livraison({ }) {
  // const [data, setData] = useState([]);
  // const [inputValue, setInputValue] = useState("");
  // const handleChange = (e) => {
  //   setInputValue(e.target.value);
  //   console.info("inputValue :>> ", inputValue);
  // };
  const handleClick = () => { };
  // console.info("accepted", accepted);

  // useEffect(() => {
  //   if (accepted && inputValue > 0) {
  //     fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${inputValue}&apiKey=61da4cbff54d4c8d9c92cba1462f7047`)
  //       .then((res) => res.json())
  //       .then((res) => setData(res))
  //       .catch((err) => console.info(err));
  //     // .then(response => response.json())
  //     // .then(result => console.log(result))
  //     // .catch(error => console.log('error', error));
  //   }
  // }, [accepted, inputValue]);
  // console.info("data.features :", data.features);
  // console.info("data 1 =>", data.features[0].properties.label);
  // console.info("data 2 =>", data.features[1].properties.label);
  // console.info("data 3 =>", data.features[2].properties.label);
  // console.info("data 4 =>", data.features[3].properties.label);
  // console.info("data 5 =>", data.features[4].properties.label);
  return (
    <>
      <GeoapifyContext apiKey="61da4cbff54d4c8d9c92cba1462f7047">
        <GeoapifyGeocoderAutocomplete />
        <div className="delivery">
          {/* <input
            className="inputdelivery"
            type="text"
            name="address"
            placeholder="Ecris ton adresse postale"
            value={inputValue}
            onChange={handleChange}
          /> */}
          <button className="btn-delivery" onClick={handleClick}>
            OK
          </button>
        </div>
      </GeoapifyContext>
    </>
  );
}

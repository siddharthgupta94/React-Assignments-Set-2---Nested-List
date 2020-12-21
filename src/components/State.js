import React, { useState } from "react";
import { City } from "./City";

const State = ({ state }) => {
  const [showCities, setShowCities] = useState(false);

  const toggleCity = () => {
    setShowCities((prev) => !prev);
  };

  const cityList = state.cities.map((city, i) => {
    return (
      <li key={i} id={`city${i + 1}`}>
        <City city={city} />
      </li>
    );
  });

  return (
    <>
      <h1 onClick={toggleCity}>{state.name}</h1>
      {showCities && <ul>{cityList}</ul>}
    </>
  );
};

export default State;

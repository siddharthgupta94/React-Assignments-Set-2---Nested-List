import React, { useState } from "react";
import { City } from "./City";

const State = ({ state }) => {
  const [showCities, setShowCities] = useState(false);

  const toggleCity = () => {
    setShowCities((prev) => !prev);
  };

  const cityList = state.cities.map((city, i) => {
    return (
      <li key={i}>
        <City id={`city${i + 1}`} city={city} />
      </li>
    );
  });

  return (
    <div>
      <h1 onClick={toggleCity}>{state.name}</h1>
      {showCities && <ul>{cityList}</ul>}
    </div>
  );
};

export default State;

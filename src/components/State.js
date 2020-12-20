import React, { useState } from "react";
import { City } from "./City";

const State = ({ state }) => {
  const [showCities, setShowCities] = useState(false);

  const toggleCity = () => {
    setShowCities((prev) => !prev);
  };

  const cityList = state.cities.map((city, i) => {
    return <City key={i} id={`city${i + 1}`} city={city} />;
  });

  return (
    <div>
      <h1 onClick={toggleCity}>{state.name}</h1>
      {showCities && cityList}
    </div>
  );
};

export default State;

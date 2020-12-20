import React, { useState } from "react";
import { Town } from "./Town";

export const City = ({ city }) => {
  const [showTowns, setShowTowns] = useState(false);

  const toggleTowns = () => {
    setShowTowns((prev) => !prev);
  };

  const townList = city.towns.map((town, i) => {
    return <Town key={i} id={`town${i + 1}`} town={town} />;
  });

  return (
    <div>
      <h2 onClick={toggleTowns}>{city.name}</h2>
      {showTowns && townList}
    </div>
  );
};

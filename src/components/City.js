import React, { useState } from "react";
import { Town } from "./Town";

export const City = ({ city }) => {
  const [showTowns, setShowTowns] = useState(false);

  const toggleTowns = () => {
    setShowTowns((prev) => !prev);
  };

  const townList = city.towns.map((town, i) => {
    return (
      <li key={i}>
        <Town id={`town${i + 1}`} town={town} />
      </li>
    );
  });

  return (
    <>
      <h2 onClick={toggleTowns}>{city.name}</h2>
      {showTowns && <ul>{townList}</ul>}
    </>
  );
};

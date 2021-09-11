import React from "react";
import Card from "../components/Card";
import { Characters } from "../models/Characters";

const WomenScreen = () => {
  const womens = Characters.filter((women) => women.type === "w");
  console.log(womens[0].name);

  return (
    <div className="container mt-3">
      <h1>Pantalla de mujeres</h1>
      <hr />
      <div className="row">
        {womens.map((women) => (
          <Card key={women.id} {...women} />
        ))}
      </div>
    </div>
  );
};

export default WomenScreen;

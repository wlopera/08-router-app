import React from "react";
import Card from "../components/Card";
import { Characters } from "../models/Characters";

const MenScreen = () => {
  const mens = Characters.filter((man) => man.type === "m");

  return (
    <div className="container mt-3">
      <h1>Pantalla de Hombres</h1>
      <hr />
      <div className="row">
        {mens.map((man) => (
          <Card key={man.id} {...man} />
        ))}
      </div>
    </div>
  );
};

export default MenScreen;

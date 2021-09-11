import React from "react";
import { Link } from "react-router-dom";

const Card = ({ id, name, description, type }) => {
  const path = `/assets/${type}-${id}.png`;

  console.log(path);

  return (
    <div className="card m-3 col-12 col-md-4" style={{ width: "200px" }}>
      <img className="card-img-top" src={path} alt={id} />
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <p className="card-text">
          <Link className="card-link" to="">
            Ver más...
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Card;

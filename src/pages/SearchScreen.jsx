import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import queryString from "query-string";
import { Characters } from "../models/Characters";
import Card from "../components/Card";

const SearchScreen = ({ history }) => {
  const location = useLocation();
  const { query = "" } = queryString.parse(location.search);

  const [inputValue, setInputValue] = useState(query);
  const [characters, setCharacters] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`?query=${inputValue}`);
  };

  const getCharacters = () => {
    if (inputValue.trim() !== "") {
      const value = inputValue.toLocaleLowerCase();

      const newValue = Characters.filter((character) =>
        character.name.toLocaleLowerCase().includes(value)
      );
      setCharacters(newValue);
    } else {
      setCharacters([]);
    }
  };

  useEffect(() => {
    getCharacters();
  }, [query]);

  return (
    <div className="container">
      <h1>Pantalla de búsqueda</h1>
      <hr />
      <div className="row">
        <div className="col-6">
          <h2>Búsqueda</h2>
          <form onSubmit={handleSubmit}>
            <label className="form-label w-100">
              Personaje
              <input
                type="text"
                placeholder="Nombre del personaje"
                className="form-control"
                autoComplete="off"
                value={inputValue}
                onChange={handleChange}
              />
            </label>
            <button type="submit" className="btn btn-info w-100">
              Buscar
            </button>
          </form>
        </div>
        <div className="col-6">
          <h2>Resultados: {characters.length}</h2>
          {characters.length === 0 && (
            <div className="alert alert-warning text-center">
              Por favor agrege un personaje valido
            </div>
          )}
          {characters.map((character) => {
            return <Card key={character.id} {...character} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;

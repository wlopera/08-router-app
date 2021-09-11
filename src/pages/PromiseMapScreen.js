import React, { useState } from "react";
import axios from "axios";

const PromiseMapScreen = () => {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchApi = async (data) => {
    return await Promise.all(
      data.map(async (item) => {
        return await axios
          .get(`https://reqres.in/api/users?delay=${item}`)
          .then((item) => {
            console.log("Respuesta del api:", item);
            return {
              status: item.status,
              message: "Éxito",
            };
          });
      })
    );
  };

  const search = async (type) => {
    const data = [1, 2, 3, 4, 5];
    console.log("Inicio del proceso");
    setResponse([]);
    setLoading(true);

    let res = null;

    if (type === 1) {
      res = await searchApi(data);
      setResponse(res);
      console.log("Respuesta del Servicio:", res);
      console.log("Fin del proceso");
      setLoading(false);
    } else {
      setTimeout(() => {
        res = searchApi(data);
        setResponse([
          {
            status: 200,
            message:
              "Éxito: Proceso sigue procesando las peticiones asíncronamente",
          },
        ]);
        console.log("Respuesta del Servicio:", res);
        console.log("Fin del proceso");
        setLoading(false);
      }, 3000);
    }
  };

  return (
    <>
      <h1>Uso de Promesa - Map async/await </h1>
      <hr />
      {loading && (
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-success" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
        </div>
      )}
      {!loading && (
        <div>
          <button
            className="btn btn-primary ms-3 mb-3"
            onClick={() => search(1)}
          >
            Consulta Sincrona
          </button>
          <button
            className="btn btn-success ms-3 mb-3"
            onClick={() => search(2)}
          >
            Consulta Asincrona
          </button>
          <ul>
            {response.length > 0 &&
              response.map((item, index) => {
                return (
                  <li key={index}>
                    Status: {item.status} / mensaje: {item.message}
                  </li>
                );
              })}
          </ul>
        </div>
      )}
    </>
  );
};

export default PromiseMapScreen;

import React, { useContext } from "react";
import { useHistory } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { authTypes } from "../types/authTypes";

const LoginScreen = () => {
  const { dispatch } = useContext(AuthContext);
  const history = useHistory();

  const hadleLogin = () => {
    dispatch({
      type: authTypes.login,
    });

    history.push("/");
  };

  return (
    <div className="container mt-5 text-center">
      <img src="/assets/animate.gif" alt="animate" />
      <h1 className="my-3">Pantalla de Login</h1>

      <button className="btn btn-primary" onClick={hadleLogin}>
        Login
      </button>
    </div>
  );
};

export default LoginScreen;

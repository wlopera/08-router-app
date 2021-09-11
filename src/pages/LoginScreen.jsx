import React from "react";

const LoginScreen = ({ history }) => {
  const hadleLogin = () => {
    history.push("/men");
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

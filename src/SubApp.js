import React, { useContext, lazy } from "react";

import { AuthProvider, AuthContext } from "MainApp/MainAppContext";

const SubApp = ({ message, functionMainCounter, subCounter }) => {
  const { loggedUser, setLoggedUser } = useContext(AuthContext);

  return (
    <>
        <div>SubApp1 Loaded!</div>
        <div>Logged in user: {loggedUser}</div>
        <div>{message}</div>

        <div>Sub Counter: {subCounter}</div>

        <button onClick={() => functionMainCounter()}>
          Increase Main Counter
        </button>
    </>
  );
};

export default SubApp;

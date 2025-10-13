import React, { useContext, lazy } from "react";

import { useStore } from "MainApp/MainAppStore";

const SubApp = ({ allowedActions }) => {
  const { loggedUser, setCart, productList } = useStore();

  console.log(productList);

  const handleClick = (item) => {
    setCart(item);
  };

  const isActionEnabled = (action) => {
    if (!allowedActions?.[action]) return false;
    return allowedActions?.[action] === "ENABLED";
  };

  return (
    <>
      <div>
        <strong>SubApp1 Loaded! with User: {loggedUser}</strong>
      </div>

      <div>---------------------------------</div>

      {productList.map((item) => {
        return (
          <div key={item.id}>
            <div>Name: {item.name}</div>
            <div>Cuisine: {item.cuisine}</div>
            <div>Rating: {item.rating}</div>
            <button onClick={() => handleClick(item)}>Add to main list</button>
          </div>
        );
      })}

      <button
        style={{
          margin: "16px 10px",
          padding: "8px 16px",
          cursor: isActionEnabled("Create") ? "pointer" : "not-allowed",
          borderRadius: 4,
          width: "50%",
          opacity: isActionEnabled("Create") ? 1 : 0.5,
        }}
        disabled={!isActionEnabled("Create")}
      >
        Create
      </button>
      <button
        style={{
          margin: "16px 10px",
          padding: "8px 16px",
          cursor: isActionEnabled("Update") ? "pointer" : "not-allowed",
          borderRadius: 4,
          width: "50%",
          opacity: isActionEnabled("Update") ? 1 : 0.5,
        }}
        disabled={!isActionEnabled("Update")}
      >
        Update
      </button>
    </>
  );
};

export default SubApp;

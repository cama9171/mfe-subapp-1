import React, { useContext, lazy } from "react";

import { useStore } from "MainApp/MainAppStore";

const SubApp = ({ functionMainCounter, subCounter, detailItems, callbackAddToMain }) => {
  const { loggedUser, setCart } = useStore();

  const handleClick = (item) => {
    setCart(item);
  }

  return (
    <>
      <div><strong>SubApp1 Loaded! with User: {loggedUser}</strong></div>

      <div>Sub Counter: {subCounter}</div>

      <button onClick={() => functionMainCounter()}>
        Increase Main Counter
      </button>
      <div>---------------------------------</div>

      {detailItems.map((item) => {
        return (
          <div key={item.id}>
            <div>Name: {item.name}</div>
            <div>Cuisine: {item.cuisine}</div>
            <div>Rating: {item.rating}</div>
            <button onClick={() => handleClick(item)}>Add to main list</button>
          </div>
        );
      })}
    </>
  );
};

export default SubApp;

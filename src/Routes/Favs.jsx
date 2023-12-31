import React, { useContext, useState, useEffect } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state} = useContext(ContextGlobal);

  function deleteAllDentistInStorage() {
    dispatch({ type: "deleteFavs" });
  }


  return (
    <>
      <h1> ⭐️ Fav Dentists ⭐️ </h1>
      <div className="card-grid">
        {state.favoriteDentist.length === 0 && <h2>You don't have any favorite dentists</h2>}
        {state.favoriteDentist.length > 0 && state.favoriteDentist.map((dentist) => {
          return <Card dentist={dentist} key={dentist.id} />
        })}
        
      </div>
    </>
  );
};

export default Favs;
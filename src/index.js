import React from "react";
import ReactDOM from "react-dom/client";

// meus componentes
import JogoDaVelha from "./Jogo_da_Velha/Jogo_da_Velha";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <JogoDaVelha />
  </React.StrictMode>
);

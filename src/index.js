import React from "react";
import ReactDOM from "react-dom/client";

// meus componentes
import EstadoComparacao from "./QS_Estado_Compartilhado/EstadoCompartilhado";
import AtualizadorTela from "./QS_UseState/Atualizador_Tela";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <EstadoComparacao />
    <AtualizadorTela />
  </React.StrictMode>
);

import { useState } from "react";
import Botao from "./Botao";

export default function MyApp() {
  const [contador, setContador] = useState(0);

  function adicionar() {
    setContador(contador + 1);
  }

  return (
    <div>
      {/* Esses elementos compartilham a mesma variável: contador */}
      <h1>Contadores que são atualizados juntos</h1>
      <Botao cont={contador} acao={adicionar} />
      <Botao cont={contador} acao={adicionar} />
      <button onClick={adicionar}>Clicado {contador} vezes</button>
    </div>
  );
}

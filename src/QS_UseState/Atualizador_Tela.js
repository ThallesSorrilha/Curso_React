import { useState } from "react";

function AtualizadorTela() {
  // variável, setVariável = valorInicial
  const [contador, setContador] = useState(0);

  function adicionar() {
    setContador(contador + 1);
  }

  return (
    <div>
      <h1>Estado separado</h1>
      <button onClick={adicionar}>Clicado {contador} vezes</button>
    </div>
  );
}

export default AtualizadorTela;

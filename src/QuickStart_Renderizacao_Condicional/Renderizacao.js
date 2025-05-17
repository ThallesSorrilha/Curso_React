import Introducao from "../aula_01_05/Introducao";
import Lista from "../QuickStart_Lista/Lista";

function Renderizacao() {
  let logado = false;

  // 1. comparar por função
  /*
  let render;
  if (logado) {
    render = <Introducao />;
  } else {
    logado = <Lista />;
  }
  */

  return (
    <div>
      {/*1.*/}
      {/*render*/}

      {/* 2. Comparar por comparador ternário */}
      {logado ? <Introducao /> : <Lista />}

      {/* 3. Comparação simples, só para uma consequência */}
      {/*logado && <Introducao />*/}
    </div>
  );
}

export default Renderizacao;

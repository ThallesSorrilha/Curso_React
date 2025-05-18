import { useState } from "react";

import "./estilo.css";
import Quadrado from "./Quadrado";

function JogoDaVelha() {
  {
    /* criação do vetor de estados */
  }
  const [quadrados, setQuadrados] = useState(Array(9).fill(null));

  function gerenciarClique(i) {
    /*
    É feita uma cópia de quadrados
    para ser atribuida diretamente copia[i] = "X"
    por fim, quadrados é atibuida com setQuadrados
    levando em conta o estado da cópia
    */
    const copiaQuadrados = quadrados.slice();
    copiaQuadrados[i] = "X";
    setQuadrados(copiaQuadrados);
  }

  return (
    <>
      <div className="linha">
        <Quadrado conteudo={quadrados[0]} noClique={() => gerenciarClique(0)} />
        <Quadrado conteudo={quadrados[1]} noClique={() => gerenciarClique(1)} />
        <Quadrado conteudo={quadrados[2]} noClique={() => gerenciarClique(2)} />
      </div>
      <div className="linha">
        <Quadrado conteudo={quadrados[3]} noClique={() => gerenciarClique(3)} />
        <Quadrado conteudo={quadrados[4]} noClique={() => gerenciarClique(4)} />
        <Quadrado conteudo={quadrados[5]} noClique={() => gerenciarClique(5)} />
      </div>
      <div className="linha">
        <Quadrado conteudo={quadrados[6]} noClique={() => gerenciarClique(6)} />
        <Quadrado conteudo={quadrados[7]} noClique={() => gerenciarClique(7)} />
        <Quadrado conteudo={quadrados[8]} noClique={() => gerenciarClique(8)} />
      </div>
    </>
  );
}

// export -> indica que essa função pode ser usada fora desse arquivo
// defaul -> indica que essa é a função principal desse arquivo
export default JogoDaVelha;

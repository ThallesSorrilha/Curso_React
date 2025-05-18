import { useState } from "react";

import "./estilo.css";
import Quadrado from "./Quadrado";

function JogoDaVelha() {
  const [quadrados, setQuadrados] = useState(Array(9).fill(null));
  const [x, setX] = useState(true);

  function gerenciarQuadrados(i) {
    if (quadrados[i]) return;
    const copiaQuadrados = quadrados.slice();
    if (x) {
      copiaQuadrados[i] = "X";
    } else {
      copiaQuadrados[i] = "O";
    }
    setQuadrados(copiaQuadrados);
    setX(!x);
  }

  return (
    <>
      <div className="linha">
        <Quadrado
          conteudo={quadrados[0]}
          noClique={() => gerenciarQuadrados(0)}
        />
        <Quadrado
          conteudo={quadrados[1]}
          noClique={() => gerenciarQuadrados(1)}
        />
        <Quadrado
          conteudo={quadrados[2]}
          noClique={() => gerenciarQuadrados(2)}
        />
      </div>
      <div className="linha">
        <Quadrado
          conteudo={quadrados[3]}
          noClique={() => gerenciarQuadrados(3)}
        />
        <Quadrado
          conteudo={quadrados[4]}
          noClique={() => gerenciarQuadrados(4)}
        />
        <Quadrado
          conteudo={quadrados[5]}
          noClique={() => gerenciarQuadrados(5)}
        />
      </div>
      <div className="linha">
        <Quadrado
          conteudo={quadrados[6]}
          noClique={() => gerenciarQuadrados(6)}
        />
        <Quadrado
          conteudo={quadrados[7]}
          noClique={() => gerenciarQuadrados(7)}
        />
        <Quadrado
          conteudo={quadrados[8]}
          noClique={() => gerenciarQuadrados(8)}
        />
      </div>
    </>
  );
}

export default JogoDaVelha;

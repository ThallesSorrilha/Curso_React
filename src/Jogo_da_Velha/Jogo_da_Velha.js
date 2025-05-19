import { useState } from "react";

import "./estilo.css";
import Quadrado from "./Quadrado";

function JogoDaVelha() {
  const [quadrados, setQuadrados] = useState(Array(9).fill(null));
  const [x, setX] = useState(true);

  function gerenciarQuadrados(i) {
    if (quadrados[i] || calcularVencedor(quadrados)) return;
    const copiaQuadrados = quadrados.slice();
    if (x) {
      copiaQuadrados[i] = "X";
    } else {
      copiaQuadrados[i] = "O";
    }
    setQuadrados(copiaQuadrados);
    setX(!x);
  }

  function calcularVencedor(quadrados) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        quadrados[a] &&
        quadrados[a] === quadrados[b] &&
        quadrados[a] === quadrados[c]
      ) {
        return quadrados[a];
      }
    }
    if (quadrados.every((quad) => quad !== null)) {
      return "Empate";
    }
    return null;
  }

  const resultado = calcularVencedor(quadrados);
  let estado;
  if (resultado) {
    if (resultado === "Empate") {
      estado = resultado;
    } else {
      estado = "Vencedor: " + resultado;
    }
  } else {
    estado = "Vez de: " + (x ? "X" : "O");
  }
  console.log(estado);

  return (
    <div className="aplicacao centralizador">
      <div className="estado centralizador">{estado}</div>
      <div className="tabuleiro centralizador">
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
      </div>
    </div>
  );
}

export default JogoDaVelha;

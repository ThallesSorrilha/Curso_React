import "./estilo.css";
import Quadrado from "./Quadrado";

function JogoDaVelha() {
  return (
    <>
      <div className="linha">
        <Quadrado />
        <Quadrado />
        <Quadrado />
      </div>
      <div className="linha">
        <Quadrado />
        <Quadrado />
        <Quadrado />
      </div>
      <div className="linha">
        <Quadrado />
        <Quadrado />
        <Quadrado />
      </div>
    </>
  );
}

// export -> indica que essa função pode ser usada fora desse arquivo
// defaul -> indica que essa é a função principal desse arquivo
export default JogoDaVelha;

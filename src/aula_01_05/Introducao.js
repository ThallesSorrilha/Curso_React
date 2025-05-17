import HelloWorld from "./components/HelloWorld";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";

function Introducao() {
  const nome = "Thalles";

  return (
    <div className="App">
      <h1>Título</h1>
      <p>Parágrafo</p>
      <p>Olá Mundo, {nome}</p>
      <HelloWorld />
      <SayMyName nome="Matheus" />
      <SayMyName nome={nome} />
      <Pessoa
        nome="Rodrigo"
        idade="28"
        profissao="Programador"
        foto="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg"
      />
    </div>
  );
}

export default Introducao;

import "./App.css";
import HelloWorld from "./components/HelloWorld";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";

function App() {
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
        foto="https://via.placeholder.com/150"
      />
    </div>
  );
}

export default App;

function Evento() {
  function responderClique() {
    alert("Resposta enviada");
  }

  return (
    <div>
      <button onClick={responderClique}>Não sou um robô</button>
    </div>
  );
}

export default Evento;

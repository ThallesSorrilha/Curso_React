function Evento() {
  function responderClique() {
    // Alerta envia uma notificação para marcar 'OK'
    alert("Resposta enviada");
  }

  return (
    <div>
      {/* Função passada por referência, não chamada() */}
      <button onClick={responderClique}>Não sou um robô</button>
    </div>
  );
}

export default Evento;

function Botao({ cont, acao }) {
  return (
    <button onClick={acao}>
      Clicado {cont} vezes
    </button>
  );
}

export default Botao;
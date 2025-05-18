function Quadrado({ conteudo, noClique }) {
  return (
    <button className="quadrado" onClick={noClique}>
      {conteudo}
    </button>
  );
}

export default Quadrado;

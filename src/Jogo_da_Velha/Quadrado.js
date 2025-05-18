import { useState } from 'react';

function Quadrado() {
  const [conteudo, setConteudo] = useState(null);

  function responderClique() {
    setConteudo('X');
  }
  return (
    <button className="quadrado" onClick={responderClique}>
      {conteudo}
    </button>
  );
}

export default Quadrado;

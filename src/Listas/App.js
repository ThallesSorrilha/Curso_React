
// Array de objetos
const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];

function Lista() {
  /* .map() -> percorre cada elemento de um array, com a
  possibilidade de tratá-los */
  const listItems = products.map((product) => (
    <li
      // identificando os itens a serem carregados
      key={product.id}
      style={{
        /* expressão ternária ? : que confere a validade de
        uma condição para aplicar um estilo */
        color: product.isFruit ? "magenta" : "darkgreen",
      }}
    >
      {product.title}
    </li>
  ));

  return <ul>{listItems}</ul>;
}

export default Lista;

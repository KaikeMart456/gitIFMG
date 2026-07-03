import { useState } from "react";

function App() {
  const [itens, setItens] = useState([]);
  const [novoItem, setNovoItem] = useState("");
  const [indiceEdicao, setIndiceEdicao] = useState(null);


  function adicionarItem() {
    if (novoItem === "") return;

    setItens([...itens, novoItem]);
    setNovoItem("");
  }

  function atualizarItem(index) {
    setNovoItem(itens[index]);
    setIndiceEdicao(index);
  }

  function salvarItem() {
    const novaLista = itens.map((item, index) =>
      index === indiceEdicao ? novoItem : item
    );

    setItens(novaLista);
    setNovoItem("");
    setIndiceEdicao(null);
  }

  function removerItem(index) {
    const novaLista = itens.filter((_, i) => i !== index);
    setItens(novaLista);
  }
  return (
    <>
      <h2>Controle de Itens</h2>
      <input
        value={novoItem}
        onChange={(e) => setNovoItem(e.target.value)}
      />
      {indiceEdicao === null ? (
        <button onClick={adicionarItem}>
          Adicionar
        </button>
      ) : (
        <button onClick={salvarItem}>
          Salvar
        </button>
      )}
      <ul>
        {itens.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => atualizarItem(index)}>
              Atualizar
            </button>
            <button onClick={() => removerItem(index)}>
              Remover
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}
export default App;
import React from "react";
import "./Produto.css";
import { useParams } from "react-router-dom";
import Head from "./Head";

const Produto = () => {
  const [produto, setProduto] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchProduto(url) {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setProduto(json);
      } catch {
        setError("Erro ao buscar produtos");
      } finally {
        setLoading(false);
      }
    }
    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  if (loading) return <div>Carregando...</div>;
  if (error) return <p>{error}</p>;
  if (produto === null) return null;
  return (
    <section className="produto animeLeft">
      <Head
        title={`Ranek | ${produto.nome} `}
        description={`Ranek | Esse é um produto: ${produto.nome}`}
      />
      {produto.fotos.map((foto) => (
        <img key={foto.src} src={foto.src} alt={foto.titulo} />
      ))}
      <h1>{produto.nome}</h1>
      <span className="preco">R$ {produto.preco}</span>
      <p className="descricao">{produto.descricao}</p>
    </section>
  );
};

export default Produto;

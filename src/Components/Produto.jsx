import React from "react";
import "./Produto.css";
import { useParams } from "react-router-dom";

const Produto = () => {
  const [produto, setProduto] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
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
        setLoading(true);
      }
    }
    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  if (loading) return <div>Carregando...</div>;
  if (error) return <p>{error}</p>;
  if (produto === null) return null;
  return (
    <section className="produto">
      <h1>{produto.nome}</h1>
      <span className="preco">R$ {produto.preco}</span>
    </section>
  );
};

export default Produto;

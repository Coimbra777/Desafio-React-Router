import Foto from "../img/92d5b4c8801403478d1c54dbac59c7d7.jpg";
import "./Contato.css";
import Head from "./Head";
const Contato = () => {
  return (
    <section className="contato animeLeft">
      <Head title="Ranek | Contato" description="Entre em Contato" />
      <img src={Foto} alt="contato" />
      <div>
        <h1>Contato</h1>
        <ul className="dados">
          <li>contato@gmail.com</li>
          <li>51651651-52525</li>
          <li>Rua Tal, 656</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;

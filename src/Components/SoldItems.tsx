import { NavLink } from "react-router-dom";
import { ISales } from "../Context/DataContext";

const SoldItems = ({ venda }: { venda: ISales }) => {
  return (
    <div className="sales box">
      <NavLink to={`/sales/${venda.id}`} style={{ fontFamily: "monospace" }}>
        {venda.id}
      </NavLink>
      <div>{venda.nome}</div>
      <div>
        {venda.preco.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
    </div>
  );
};

export default SoldItems;

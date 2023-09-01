import { useData } from "../Context/DataContext";
import SalesGraph from "../Components/SalesGraph";
import { motion } from "framer-motion";

const Summary = () => {
  const { data } = useData();

  if (data === null) return null;
  return (
    <motion.section
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: "100%" }}
    >
      <div className="summary flex mb">
        <div className="box">
          <h2>Vendas</h2>
          <span>
            {data
              .filter((item) => item.status !== "falha")
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
          </span>
        </div>
        <div className="box">
          <h2>Recebido</h2>
          <span>
            {data
              .filter((item) => item.status === "pago")
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
          </span>
        </div>
        <div className="box">
          <h2>Processando</h2>
          <span>
            {data
              .filter((item) => item.status === "processando")
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
          </span>
        </div>
      </div>
      <div className="box mb">
        <SalesGraph data={data} />
      </div>
    </motion.section>
  );
};

export default Summary;

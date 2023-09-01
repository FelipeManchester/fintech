import React from "react";
import { useData } from "../Context/DataContext";
import SoldItems from "../Components/SoldItems";
import { motion } from "framer-motion";
const Sales = () => {
  const { data } = useData();

  if (data === null) return null;
  return (
    <motion.ul
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {data.map((venda) => (
        <li key={venda.id}>
          <SoldItems venda={venda} />
        </li>
      ))}
    </motion.ul>
  );
};

export default Sales;

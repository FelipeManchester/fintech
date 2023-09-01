import { createContext, useContext, useState } from "react";
import useFetch from "../Hooks/useFetch";

type IDataContext = {
  data: ISales[] | null;
  loading: boolean;
  error: string | null;
  start: string;
  end: string;
  setStart: React.Dispatch<React.SetStateAction<string>>;
  setEnd: React.Dispatch<React.SetStateAction<string>>;
};

export type ISales = {
  id: string;
  nome: string;
  preco: number;
  status: "pago" | "processando" | "falha";
  pagamento: "boleto" | "cartao" | "pix";
  data: string;
  parcelas: number | null;
};

const DataContext = createContext<IDataContext | null>(null);

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error("useData precisa estar em DataContextProvider");
  return context;
};

function getDate(n: number) {
  const date = new Date();
  date.setDate(date.getDate() - n);
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();
  const formatedDate = `${yyyy}-${mm}-${dd}`;

  return formatedDate;

  // expected output date format: yyyy-mm-dd
}

export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
  const [start, setStart] = useState(getDate(15));
  const [end, setEnd] = useState(getDate(0));

  const { data, loading, error } = useFetch<ISales[]>(
    `https://data.origamid.dev/vendas/?inicio=${start}&final=${end}`,
  );

  return (
    <DataContext.Provider
      value={{ data, loading, error, start, setStart, end, setEnd }}
    >
      {children}
    </DataContext.Provider>
  );
};

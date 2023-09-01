import React from "react";
import { useData } from "../Context/DataContext";

const buttonStyle: React.CSSProperties = {
  padding: "var(--gap-base) var(--gap-sm)",
  backgroundColor: "var(--color-3)",
  border: "none",
  borderRadius: "var(--gap-base)",
  color: "var(--color-2)",
  fontWeight: "600",
  textTransform: "capitalize",
};

function monthName(n: number) {
  const date = new Date();
  date.setMonth(date.getMonth() + n);
  return new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(date);
}

function formatDate(date: Date) {
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();
  const formatedDate = `${yyyy}-${mm}-${dd}`;

  return formatedDate;

  // expected output date format: yyyy-mm-dd
}

const MonthButton = ({ n }: { n: number }) => {
  const { setStart, setEnd } = useData();

  function setMonth(n: number) {
    const date = new Date();
    date.setMonth(date.getMonth() + n);

    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    setStart(formatDate(firstDay));
    setEnd(formatDate(lastDay));
  }

  return (
    <button style={buttonStyle} onClick={() => setMonth(n)}>
      {monthName(n)}
    </button>
  );
};

export default MonthButton;

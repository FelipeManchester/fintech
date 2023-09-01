import { Route, Routes, useLocation } from "react-router-dom";
import Summary from "../Pages/Summary";
import Sales from "../Pages/Sales";
import Sale from "../Pages/Sale";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Summary />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/sales/:id" element={<Sale />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;

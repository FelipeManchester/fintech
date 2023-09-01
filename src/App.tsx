import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header";
import Sidenav from "./Components/Sidenav";
import { DataContextProvider } from "./Context/DataContext";
import "./Style.css";
import AnimatedRoutes from "./Components/AnimatedRoutes";

function App() {
  return (
    <BrowserRouter>
      <DataContextProvider>
        <div className="container">
          <Sidenav />
          <main>
            <Header />
            <AnimatedRoutes />
          </main>
        </div>
      </DataContextProvider>
    </BrowserRouter>
  );
}

export default App;

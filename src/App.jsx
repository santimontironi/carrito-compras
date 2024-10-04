import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CarritoCompras from "./pages/CarritoCompras";
import Productos from "./pages/Productos";
import ProductosProvider from "./context/ProductosProvider";
import CarritoProvider from "./context/CarritoProvider";

export default function App() {
  return (
    <>
      <ProductosProvider>
        <CarritoProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Productos />}></Route>
              <Route path="/mycart" element={<CarritoCompras />} />
            </Routes>
          </Router>
        </CarritoProvider>
      </ProductosProvider>
    </>
  )
}

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Componentes/Layout";
import Credenciales from "./Componentes/Credenciales"
import Carrito from "./Componentes/Carrito";



const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />} />
                <Route path="/Credenciales" element={<Credenciales />} />
                <Route path="/Carrito" element={<Carrito />} />


            </Routes>
        </Router>
    );
};

export default App;

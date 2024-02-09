import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Modal from "react-modal";
import { CarritoContext } from './Componentes/Principal.jsx';
Modal.setAppElement("#root");

ReactDOM.createRoot(document.getElementById("root")).render(
    <CarritoContext.Provider>
        <App />
    </CarritoContext.Provider>
);


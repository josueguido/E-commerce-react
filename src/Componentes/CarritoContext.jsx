// CarritoContext.js
import  { createContext, useState } from 'react';
import PropTypes from 'prop-types'; // Importar PropTypes

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  console.log("Estado del carrito en CarritoProvider:", carrito);

  return (
    <CarritoContext.Provider value={{ carrito, setCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
};

// Validación de PropTypes para CarritoProvider
CarritoProvider.propTypes = {
  children: PropTypes.node.isRequired, // Validar children como un nodo requerido
};

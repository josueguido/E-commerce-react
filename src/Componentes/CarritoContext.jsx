import  { createContext, useState } from 'react';
import PropTypes from 'prop-types'; 


// Creamos un contexto para gestionar el estado del carrito
export const CarritoContext = createContext();

// Proveedor de contexto para el carrito
export const CarritoProvider = ({ children }) => {
      // Estado local para almacenar el carrito de compras
  const [carrito, setCarrito] = useState([]);
  console.log("Estado del carrito en CarritoProvider:", carrito);

  return (
      // Proporcionamos el estado del carrito a través del contexto
    <CarritoContext.Provider value={{ carrito, setCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
};

// Validación de PropTypes para CarritoProvider
CarritoProvider.propTypes = {
  children: PropTypes.node.isRequired, // Validar children como un nodo requerido
};

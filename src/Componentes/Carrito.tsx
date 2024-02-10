import React from "react";

// Definimos la interfaz de propiedades esperadas para el componente Carrito
interface CarritoProps {
    carrito: {
        id: string;
        name: string;
        count: number;
        total: number;
    }[];
}

// Componente funcional Carrito que muestra los elementos del carrito
const Carrito: React.FC<CarritoProps> = ({ carrito }) => {
    // Verificar si carrito es undefined o null antes de usar map
    if (!carrito || carrito.length === 0) {
        return <div>No hay elementos en el carrito</div>;
    }

    console.log("Carrito recibido en el componente Carrito:", carrito);
    
    return (
        // Renderizamos la lista de elementos del carrito
        <div className="flex items-center bg-gray-100 p-5 text-black">
            <h2 className="flex justify-center text-xl font-bold mb-4">Carrito de Compras:</h2>
            <ul className="flex items-start justify-start">
                {carrito.map((item) => (
                    <li key={item.id} className="mb-2">
                        {item.name} - Cantidad: {item.count} - Precio total: $
                        {item.total}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Carrito;


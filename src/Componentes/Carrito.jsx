import PropTypes from 'prop-types';

const Carrito = ({ carrito }) => {
    console.log('Valor de carrito en Carrito componente:', carrito);
  return (
    <div className='bg-gray-100 p-5 text-black'>
      <h2 className='text-xl font-bold mb-4'>Carrito de Compras</h2>
      <ul>
        {carrito.map((item) => (
          <li key={item.id} className='mb-2'>
            {item.name} - Cantidad: {item.count} - Precio total: ${item.total}
          </li>
        ))}
      </ul>
    </div>
  );
};

Carrito.propTypes = {
  carrito: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
      total: PropTypes.number.isRequired,
    })
  ).isRequired,
};
Carrito.propTypes = {
    carrito: PropTypes.array,
  };

export default Carrito;

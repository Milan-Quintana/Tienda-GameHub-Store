import { useState } from 'react';
import Header from './Header';
import Carrusel from './Carrusel';
import Catalogo from './Catalogo';
import DetalleProducto from './DetalleProducto';
import CarritoCompras from '/.CarritoCompras';
import Checkout from './Checkout';
import MisOrdenes from './MisOrdenes';
import Footer from './Footer';
import { productosData } from './productos';
import './index.css';

function App() {

  const [carrito, setCarrito] = useState([
    { ...productosData[0], cantidad: 1},
    { ...productosData[1], cantidad: 2}
  ]);

  const agregarAlCarrito = (producto) => {
    setCarrito((prev) => {
      const existe = prev.find((item) => item.id === producto.id);
      if (existe) {
        return prev.map((item) => 
          item.id === producto.id ?  { ...item, cantidad: item.cantidad + 1} : item
        );
      }
      return [...prev, {...producto, cantidad: 1}];
    });
  };

  const cambiarCantidad = (id, delta) => {
    setCarrito((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const nuevaCantidad = item.cantidad + delta;
            return nuevaCantidad > 0 ? { ...item, cantidad: nuevaCantidad} : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const eliminarDelCarrito = (id) => {
    setCarrito((prev) => prev.filter((item) => item.id != id));
  };

  const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <>
      {/* AQUÍ ES DONDE LLAMAMOS A TU HEADER PARA QUE APAREZCA EN PANTALLA */}
      <Header totalItems={totalItems} />
      {/* AQUÍ IRÁ EL RESTO DE TU TIENDA */}
      <main>
        <Carrusel />
        <Catalogo productos={productosData} alAgregar={agregarAlCarrito} />
        <DetalleProducto />
        <CarritoCompras 
          items={carrito}
          alCambiarCantidad={cambiarCantidad}
          alEliminar={eliminarDelCarrito}
        />
        <Checkout />
        <MisOrdenes />
      </main>
      <Footer />
    </>
  );
}

export default App;
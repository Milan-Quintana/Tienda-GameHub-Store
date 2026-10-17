import { useState } from 'react';
import Header from './Header';
import Carrusel from './Carrusel';
import Catalogo from './Catalogo';
import DetalleProducto from './DetalleProducto';
import CarritoCompras from './CarritoCompras';
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

  const [ordenes, setOrdenes] = useState([
    { id: '#GH-1092', fecha: '28/09/2026', estado: 'Completado', total: 34990 },
    { id: '#GH-1088', fecha: '15/09/2026', estado: 'Completado', total: 27990 }
  ])

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

  //Fusión pra procesar la compra y registrar la orden
  const crearOrden = () => {
    if (carrito.length === 0) return;

    const totalCalculado = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
    const hoy = new Date();
  
    const dia = String(hoy.getDate()).padStart(2, '0');
    const mes = String(hoy.getMonth() + 1).padStart(2, '0');
    const anio = hoy.getFullYear();
    const fechaFormateada = `${dia}/${mes}/${anio}`;

    const nuevaOrden = {
      id: `#GH-${Math.floor(1000 + Math.random() * 9000)}`,
      fecha: fechaFormateada,
      estado: 'Completado',
      total: totalCalculado
    };

    setOrdenes((prev) => [nuevaOrden, ...prev]);
    setCarrito([]); // Vaciamos el Carrito tras confirmar la Compra
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
        <Checkout carrito={carrito} alConfirmarPago={crearOrden} />
        <MisOrdenes ordenes={ordenes} />
      </main>
      <Footer />
    </>
  );
}

export default App;
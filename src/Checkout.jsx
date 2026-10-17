export default function Checkout({ carrito = [], alConfirmarPago }) {
  // Calculamos el Total Dinámico según los Productos en el Carrito
  const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  // Manejo del envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    if (carrito.length === 0){
      alert("Tu Carrito está vacío. Agrega productos antes de Confirmar el Pago.");
      return;
    }

    // Ejecuta la función crearOrden de App.jsx
    alConfirmarPago();
    alert("¡Pago Confirmado con éxito! Tu Orden ha sido agregado a 'Mis Ordenes'.");
  };

  return (
    <section id="checkout" className="section">
      <div className="container">
        <div className="section-heading">
          <h2>Finalizar Compra</h2>
          <p>Ingresa tus datos para completar la orden.</p>
        </div>
        <div className="row g-4">
          <div className="col-lg-7">
            <form onSubmit={handleSubmit} className="p-4 rounded bg-dark border border-secondary">
              <h4 className="mb-3 text-white">Datos del Cliente</h4>
              <div className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="nombreCheckout" className="form-label text-white">Nombre</label>
                  <input type="text" className="form-control" id="nombreCheckout" placeholder="Tu nombre" required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="emailCheckout" className="form-label text-white">Correo Electrónico</label>
                  <input type="email" className="form-control" id="emailCheckout" placeholder="correo@ejemplo.com" required />
                </div>
                <div className="col-12">
                  <label htmlFor="direccionCheckout" className="form-label text-white">Dirección de Envío</label>
                  <input type="text" className="form-control" id="direccionCheckout" placeholder="Av. Principal 123" required />
                </div>
              </div>
              <button type="submit" className="btn btn-accent w-100 mt-4">Confirmar Pago</button>
            </form>
          </div>
          <div className="col-lg-5">
            <div className="p-4 rounded bg-dark border border-secondary text-white">
              <h4 className="mb-3">Resumen de Orden</h4>
              {carrito.lenght === 0 ? (
                <p className="text-muted">No hay productos en la Orden.</p>
              ) : (
                <ul className="list-group list-group-flush mb-3 text-dark">
                  {carrito.map((item) => (
                    <li key={item.id} className="List-group-item d-flex justify-content-between align-items-center">
                      <span>{item.nombre} (x{item.cantidad})</span>
                      <span>${(item.precio * item.cantidad).toLocaleString('es-CL')}</span>
                    </li>
                  ))}
                </ul>
              )}
              <div className="d-flex justify-content-between text-white fw-bold fs-5">
                <span>Total:</span>
                <span className="text-accent">${total.toLocaleString('es-CL')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
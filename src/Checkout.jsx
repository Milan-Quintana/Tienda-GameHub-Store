export default function Checkout() {
  return (
    <section id="checkout" className="section">
      <div className="container">
        <div className="section-heading">
          <h2>Finalizar Compra</h2>
          <p>Ingresa tus datos para completar la orden.</p>
        </div>
        <div className="row g-4">
          <div className="col-lg-7">
            <form className="p-4 rounded bg-dark border border-secondary">
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
              <ul className="list-group list-group-flush mb-3 text-dark">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Neon Drift Squad
                  <span>$34.990</span>
                </li>
              </ul>
              <div className="d-flex justify-content-between text-white fw-bold fs-5">
                <span>Total:</span>
                <span className="text-accent">$34.990</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
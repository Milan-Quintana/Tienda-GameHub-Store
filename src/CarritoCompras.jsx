export default function CarritoCompras({ items, alCambiarCantidad, alEliminar }) {
  const total = items.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);

  return (
    <section id="carrito" className="section">
      <div className="container">
        <div className="section-heading">
          <h2>Carrito de compras</h2>
          <p>Revisa tus productos antes de continuar con el pago.</p>
        </div>

        <div className="row g-4">
          <div className="col-lg-8">
            {items.length === 0 ? (
              <p className="text-muted fs-5">Tu carrito está vacío actualmente.</p>
            ) : (
              items.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="cart-thumb"  style={{ width: '80px', height: '100px', flexShrink: 0, overflow: 'hidden', borderRadius: '8px'}}>
                    <img 
                      src={item.imagen} 
                      alt={item.nombre} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover'}}
                    />
                  </div>
                  <div className="cart-info">
                    <h3>{item.nombre}</h3>
                    <p className="product-platform">{item.plataforma}</p>
                    <span className="price-unit">
                      Precio unitario: \${item.precio.toLocaleString('es-CL')}
                    </span>
                  </div>
                  <div className="qty-selector">
                    <button type="button" onClick={() => alCambiarCantidad(item.id, -1)}>-</button>
                    <input type="number" value={item.cantidad} readOnly />
                    <button type="button" onClick={() => alCambiarCantidad(item.id, 1)}>+</button>
                  </div>
                  <span className="price">
                    \${(item.precio * item.cantidad).toLocaleString('es-CL')}
                  </span>
                  <button
                    className="btn btn-remove"
                    type="button"
                    onClick={() => alEliminar(item.id)}
                    aria-label={`Quitar ${item.nombre}`}
                  >
                    <i className="bi bi-trash3"></i>
                  </button>
                </div>
              ))
            )}
          </div>
          <div className="col-lg-4">
            <div className="summary-card">
              <h3>Resumen</h3>
              <div className="summary-row">
                <span>Subtotal</span>
                <span>\${total.toLocaleString('es-CL')}</span>
              </div>
              <div className="summary-row">
                <span>Envío</span>
                <span>Gratis</span>
              </div>
              <div className="summary-row total">
                <span>Total</span>
                <span>\${total.toLocaleString('es-CL')}</span>
              </div>
              <a href="#checkout" className="btn btn-accent w-100">Ir a pagar</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
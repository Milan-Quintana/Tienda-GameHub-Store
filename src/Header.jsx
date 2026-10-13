export default function Header({ totalItems }) {
  return (
    <header className="site-header">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <a className="navbar-brand" href="#inicio">
            <i className="bi bi-controller"></i> GameHub<span className="brand-accent">Store</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navMenu"
            aria-controls="navMenu"
            aria-expanded="false"
            aria-label="Abrir menú"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navMenu">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
              <li className="nav-item"><a className="nav-link" href="#inicio">Inicio</a></li>
              <li className="nav-item"><a className="nav-link" href="#catalogo">Catálogo</a></li>
              <li className="nav-item"><a className="nav-link" href="#detalleproducto">Detalle</a></li>
              <li className="nav-item"><a className="nav-link" href="#checkout">Checkout</a></li>
              <li className="nav-item"><a className="nav-link" href="#misordenes">Mis Órdenes</a></li>
              <li className="nav-item">
                <a className="btn btn-cart ms-lg-3" href="#carrito">
                  <i className="bi bi-cart3"></i> Carrito
                  <span className="badge cart-badge">{totalItems}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
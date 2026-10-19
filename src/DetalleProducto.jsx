import neonDriftImg from '../assets/neon-drift-squad.jpg';

export default function DetalleProducto() {
  return (
    <section id="detalleproducto" className="section bg-alt">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-lg-6">
            <div className="product-detail-img shadow-lg rounded p-3 bg-dark text-center">
              <img 
                src={neonDriftImg}
                alt="Neon Drift Squad Detalle" 
                className="img-fluid rounded" 
                style={{ maxHeight: '450px', objectFit: 'contain' }}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="product-detail-info">
              <span className="badge tag-new mb-2">Destacado</span>
              <h2>Neon Drift Squad</h2>
              <p style={{ color: '#b0b0b0', }}>Plataforma: PC · PS5</p>
              <h3 className="text-accent mb-3">$34.990</h3>
              <p className="mb-4">
                Compite en carreras futuristas a toda velocidad por las calles de Neo-Tokio. Personaliza tus vehículos, únete a escuadrones online y domina la liga cyberpunk.
              </p>
              <div className="d-flex gap-3">
                <button className="btn btn-accent btn-lg" type="button">
                  <i className="bi bi-cart-plus me-2"></i> Añadir al carrito
                </button>
                <a href="#checkout" className="btn btn-outline-light btn-lg">Comprar ahora</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
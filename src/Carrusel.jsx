export default function Carrusel() {
  return (
    <>
      {/* Sección Carrusel / Banner principal */}
      <section id="inicio">
        <div id="carruselGameHub" className="carousel slide hero-carousel" data-bs-ride="carousel">

          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carruselGameHub" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carruselGameHub" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carruselGameHub" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="hero-slide slide-1">
                <div className="container hero-content">
                  <p className="eyebrow">Semana Gamer</p>
                  <h1>Hasta 50% off en lanzamientos 2026</h1>
                  <p className="lead-text">PC, PlayStation y Xbox en una sola tienda.</p>
                  <a href="#catalogo" className="btn btn-accent btn-lg">Ver catálogo</a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="hero-slide slide-2">
                <div className="container hero-content">
                  <p className="eyebrow">Recién llegado</p>
                  <h1>Los nuevos títulos ya están en GameHub</h1>
                  <p className="lead-text">Reserva ahora y recibe contenido exclusivo de preventa.</p>
                  <a href="#catalogo" className="btn btn-accent btn-lg">Explorar novedades</a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="hero-slide slide-3">
                <div className="container hero-content">
                  <p className="eyebrow">Membresía GameHub+</p>
                  <h1>Envío gratis y descuentos todo el año</h1>
                  <p className="lead-text">Únete por $2.990/mes y cancela cuando quieras.</p>
                  <a href="#checkout" className="btn btn-accent btn-lg">Quiero unirme</a>
                </div>
              </div>
            </div>
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#carruselGameHub" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Anterior</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carruselGameHub" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Siguiente</span>
          </button>
        </div>
      </section>

      {/* Sección Productos Destacados */}
      <section id="productosDestacados" className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Productos Destacados</h2>
            <p>
              Conoce algunos de nuestros videojuegos destacados.
            </p>
          </div>
          <div id="listaProductos" className="row g-4">
            {/* Aquí luego inyectaremos las tarjetas de productos dinámicamente */}
          </div>
        </div>
      </section>
    </>
  );
}
import { useState } from 'react';

export default function Catalogo({ productos, alAgregar }) {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todos');

  const categorias = ['Todos', 'Acción', 'RPG', 'Deportes', 'Indie'];

  const productosFiltrados = categoriaSeleccionada === 'Todos'
    ? productos
    : productos.filter((p) => p.categoria === categoriaSeleccionada);

  return (
    <section id="catalogo" className="section">
      <div className="container">
        <div className="section-heading">
          <h2>Catálogo por categoría</h2>
          <p>Filtra por plataforma o género y encuentra tu próximo juego.</p>
        </div>

        {/* Filtros de Categoría */}
        <div className="d-flex flex-wrap gap-2 category-filters">
          {categorias.map((cat) => (
            <button 
              key={cat}
              className={`btn btn-filter ${categoriaSeleccionada === cat ? 'active' : ''}`}
              type="button"
              onClick={() => setCategoriaSeleccionada(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Rejilla de Productos Renderizada Dinámicamente */}
        <div className="row g-4 product-grid">
          {productosFiltrados.map((prod) => (
            <div key={prod.id} className="col-6 col-md-4 col-lg-3">
              <article className="product-card">
                <div className="product-thumb">
                  <img src={prod.imagen} alt={prod.nombre} />
                  {prod.badge && <span className="badge tag-new">{prod.badge}</span>}
                </div>
                <div className="product-body">
                  <p className="product-platform">{prod.plataforma}</p>
                  <h3 className="product-title">{prod.nombre}</h3>
                  <div className="product-footer">
                    <span className="price">\${prod.precio.toLocaleString('es-CL')}</span>
                    <button
                      className="btn btn-add"
                      type="button"
                      onClick={() => alAgregar(prod)}
                      aria-label={`Añadir ${prod.nombre} al carrito`}
                    >
                      <i className="bi bi-plus-lg"></i>
                    </button>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
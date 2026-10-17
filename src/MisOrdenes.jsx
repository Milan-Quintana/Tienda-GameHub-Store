export default function MisOrdenes({ ordenes = [] }) {
  return (
    <section id="misordenes" className="section bg-alt">
      <div className="container">
        <div className="section-heading">
          <h2>Mis Órdenes</h2>
          <p>Historial de compras recientes.</p>
        </div>
        <div className="table-responsive bg-dark p-3 rounded border border-secondary">
          <table className="table table-dark table-hover mb-0">
            <thead>
              <tr>
                <th scope="col"># Orden</th>
                <th scope="col">Fecha</th>
                <th scope="col">Estado</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
              {ordenes.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center text-muted py-3">
                    No tiene órdenes registradas todavía.
                  </td>
                </tr>
              ) : (
                ordenes.map((ord) => (
                  <tr key={ord.id}>
                    <th scope="row">{ord.id}</th>
                    <td>{ord.fecha}</td>
                    <td><span className="badge bg-success">{ord.estado}</span></td>
                    <td>${ord.total.toLocaleString('es-CL')}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
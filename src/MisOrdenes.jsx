export default function MisOrdenes() {
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
              <tr>
                <th scope="row">#GH-1092</th>
                <td>28/09/2026</td>
                <td><span className="badge bg-success">Completado</span></td>
                <td>$34.990</td>
              </tr>
              <tr>
                <th scope="row">#GH-1088</th>
                <td>15/09/2026</td>
                <td><span className="badge bg-success">Completado</span></td>
                <td>$27.990</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
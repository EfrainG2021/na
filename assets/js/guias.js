document.getElementById('form-guia').addEventListener('submit', e => {
  e.preventDefault();
  const f = e.target;
  if (!validarForm(f)) return;
  STORAGE.guias.push({
    id: f.gPedidoId.value.trim(),
    vehiculo: f.gVehiculo.value,
    conductor: f.gConductor.value,
    fecha: new Date().toLocaleString(),
  });
  save(); f.reset(); renderGuias();
});
function renderGuias() {
  const div = document.getElementById('lista-guias');
  div.innerHTML = `<h3>Guías (${STORAGE.guias.length})</h3>${STORAGE.guias.map(g =>
    `<p><strong>${g.id}:</strong> ${g.vehiculo} – ${g.conductor} (${g.fecha})</p>`
  ).join('')}`;
}
renderGuias();

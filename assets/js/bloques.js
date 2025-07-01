document.getElementById('form-bloque').addEventListener('submit', e => {
  e.preventDefault();
  const f = e.target;
  if (!validarForm(f)) return;
  STORAGE.bloques.push({
    id: f.bpPedidoId.value.trim(),
    bandejas: +f.bpCantidad.value,
    peso: +f.bpPeso.value,
    obs: f.bpObs.value.trim(),
    fecha: new Date().toLocaleString(),
  });
  save(); f.reset(); renderBloques();
});
function renderBloques() {
  const div = document.getElementById('lista-bloques');
  div.innerHTML = `<h3>Bloques (${STORAGE.bloques.length})</h3>${STORAGE.bloques.map(b =>
    `<p><strong>${b.id}:</strong> ${b.bandejas} bandejas, ${b.peso} kg – ${b.obs} (${b.fecha})</p>`
  ).join('')}`;
}
renderBloques();

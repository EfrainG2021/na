document.getElementById('form-pedido').addEventListener('submit', e => {
  e.preventDefault();
  const f = e.target;
  if (!validarForm(f)) return;
  STORAGE.pedidos.push({
    id: f.pedidoId.value.trim(),
    producto: f.producto.value.trim(),
    cantidad: +f.cantidad.value,
    fecha: new Date().toLocaleString(),
  });
  save(); f.reset(); render();
});
function render() {
  const div = document.getElementById('lista-pedidos');
  div.innerHTML = `<h3>Pedidos (${STORAGE.pedidos.length})</h3>${STORAGE.pedidos.map(p =>
    `<p><strong>${p.id}:</strong> ${p.producto} – ${p.cantidad} bandejas (${p.fecha})</p>`
  ).join('')}`;
}
render();

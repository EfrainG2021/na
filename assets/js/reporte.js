document.getElementById('exportar').addEventListener('click', () => {
  const rows = [['Tipo','PedidoID','Detalle','Fecha']];
  STORAGE.pedidos.forEach(p => rows.push(['Pedido', p.id, `${p.producto} x${p.cantidad}`, p.fecha]));
  STORAGE.bloques.forEach(b => rows.push(['Bloque', b.id, `${b.bandejas} bandejas, ${b.peso}kg`, b.fecha]));
  STORAGE.guias.forEach(g => rows.push(['Guía', g.id, `${g.vehiculo}, ${g.conductor}`, g.fecha]));
  const csv = rows.map(r => r.map(v=>`"${v}"`).join(',')).join('\n');
  const blob = new Blob([csv],{type:'text/csv'});
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'reporte.csv';
  link.click();
});

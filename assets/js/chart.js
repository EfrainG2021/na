<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
  const guias = STORAGE.guias;
  const agrupado = {};

  guias.forEach(g => {
    const fecha = new Date(g.fecha).toLocaleDateString();
    agrupado[fecha] = (agrupado[fecha] || 0) + 1;
  });

  const fechas = Object.keys(agrupado);
  const cantidades = Object.values(agrupado);

  new Chart(document.getElementById('graficoGuias'), {
    type: 'line',
    data: {
      labels: fechas,
      datasets: [{
        label: 'Guías por día',
        data: cantidades,
        borderColor: '#2d572c',
        backgroundColor: '#9cc69b',
        fill: true,
        tension: 0.3,
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          precision: 0
        }
      }
    }
  });
</script>

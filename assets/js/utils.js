function validarForm(form) {
  let ok = true;
  form.querySelectorAll('[required]').forEach(el => {
    if (!el.value.trim()) {
      el.style.borderColor = 'red';
      ok = false;
    } else {
      el.style.borderColor = '#ccc';
    }
  });
  if (!ok) alert('Todos los campos son obligatorios');
  return ok;
}

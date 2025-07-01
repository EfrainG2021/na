const STORAGE = {
  pedidos: [],
  bloques: [],
  guias: [],
};

function load() {
  Object.keys(STORAGE).forEach(k => {
    const data = localStorage.getItem(k);
    STORAGE[k] = data ? JSON.parse(data) : [];
  });
}
function save() {
  Object.keys(STORAGE).forEach(k => {
    localStorage.setItem(k, JSON.stringify(STORAGE[k]));
  });
}
load();

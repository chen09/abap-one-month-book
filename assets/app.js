(() => {
  const input = document.getElementById('searchInput');
  const box = document.getElementById('searchResults');
  if (!input || !box || !window.SEARCH_INDEX) return;

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (!q) {
      box.hidden = true;
      box.innerHTML = '';
      return;
    }
    const terms = q.split(/\s+/).filter(Boolean);
    const hits = window.SEARCH_INDEX.filter(item => {
      const hay = (item.title + ' ' + item.excerpt + ' ' + item.chapter).toLowerCase();
      return terms.every(t => hay.includes(t));
    }).slice(0, 12);
    box.innerHTML = hits.length
      ? hits.map(item => `<a href="${item.url}"><strong>${item.title}</strong><small>${item.chapter} · ${item.excerpt}</small></a>`).join('')
      : '<a><strong>No result</strong><small>Try RAP, OData, authorization, transport.</small></a>';
    box.hidden = false;
  });
})();
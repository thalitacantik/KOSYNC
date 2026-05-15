// Header dropdowns
const notifBtn     = document.getElementById('notifBtn');
const notifPanel   = document.getElementById('notifPanel');
const profileBtn   = document.getElementById('profileBtn');
const profilePanel = document.getElementById('profilePanel');

function closeAllDropdowns() {
  notifPanel.classList.remove('open');
  profilePanel.classList.remove('open');
}

notifBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  const wasOpen = notifPanel.classList.contains('open');
  closeAllDropdowns();
  if (!wasOpen) notifPanel.classList.add('open');
});

profileBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  const wasOpen = profilePanel.classList.contains('open');
  closeAllDropdowns();
  if (!wasOpen) profilePanel.classList.add('open');
});

document.addEventListener('click', () => closeAllDropdowns());
notifPanel.addEventListener('click', e => e.stopPropagation());
profilePanel.addEventListener('click', e => e.stopPropagation());

// Mark all read
document.getElementById('markAllBtn').addEventListener('click', () => {
  document.querySelectorAll('.np-item.unread').forEach(item => {
    item.classList.remove('unread');
    item.querySelector('.np-unread-dot')?.remove();
  });
  document.getElementById('notifDot').style.display = 'none';
});

document.querySelectorAll('.np-item').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.remove('unread');
    item.querySelector('.np-unread-dot')?.remove();
    if (!document.querySelector('.np-item.unread')) {
      document.getElementById('notifDot').style.display = 'none';
    }
  });
});

// Profile logout
document.getElementById('profileLogout').addEventListener('click', () => {
  if (confirm('Yakin ingin keluar?')) window.location.href = '../../main.html';
});

// Trend Chart
(function () {
  const data = [
    { label: 'Nov', value: 8,  color: '#c8d9cf' },
    { label: 'Des', value: 14, color: '#b8cec4' },
    { label: 'Jan', value: 9,  color: '#c8d9cf' },
    { label: 'Feb', value: 18, color: '#A6BCAE' },
    { label: 'Mar', value: 15, color: '#A6BCAE' },
    { label: 'Apr', value: 22, color: '#7a9e87' },
  ];
  const max = Math.max(...data.map(d => d.value));
  const container = document.getElementById('trendChart');
  data.forEach(d => {
    const pct = (d.value / max) * 100;
    const wrap = document.createElement('div');
    wrap.className = 'bar-wrap';
    wrap.innerHTML = `
      <div class="bar" style="height:${pct}%;background:${d.color}" title="${d.value} laporan"></div>
      <div class="bar-label">${d.label}</div>
    `;
    container.appendChild(wrap);
  });
})();
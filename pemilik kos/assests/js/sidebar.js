// Hamburger / Sidebar toggle
const hamburgerBtn   = document.getElementById('hamburgerBtn');
const sidebarOverlay = document.getElementById('sidebarOverlay');

function openSidebar() {
  document.body.classList.add('sidebar-open');
  sidebarOverlay.classList.add('active');
}
function closeSidebar() {
  document.body.classList.remove('sidebar-open');
  sidebarOverlay.classList.remove('active');
}

hamburgerBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  document.body.classList.contains('sidebar-open') ? closeSidebar() : openSidebar();
});

sidebarOverlay.addEventListener('click', closeSidebar);

document.querySelectorAll('.nav-item[href]').forEach(item => {
  item.addEventListener('click', () => {
    if (window.innerWidth <= 900) closeSidebar();
  });
});

// Accordion Manajemen Kos
let manKosOpen = false;
document.getElementById('manKosToggle').addEventListener('click', () => {
  manKosOpen = !manKosOpen;
  document.getElementById('manKosSub').classList.toggle('collapsed', !manKosOpen);
  document.getElementById('manKosChevron').classList.toggle('closed', !manKosOpen);
});

// Logout
document.getElementById('logoutBtn').addEventListener('click', () => {
  if (confirm('Yakin ingin keluar?')) window.location.href = '../../main.html';
});
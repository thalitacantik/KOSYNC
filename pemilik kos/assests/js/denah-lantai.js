// ── Room data ──
const roomData = {
  '101': { name: 'Kamar 101', floor: 'Lantai 1', status: 'terisi',      tenant: 'Budi S.',   since: 'Jan 2024', initials: 'BS', price: 'Rp 1.2 jt', size: '3 × 4 m²', type: 'Kamar standar', facilities: ['AC', 'WiFi', 'Kamar mandi dalam'] },
  '102': { name: 'Kamar 102', floor: 'Lantai 1', status: 'notif',       tenant: 'Sari W.',   since: 'Mar 2023', initials: 'SW', price: 'Rp 1.4 jt', size: '3 × 4 m²', type: 'Kamar deluxe',  facilities: ['AC', 'WiFi', 'Kamar mandi dalam', 'TV'], laporan: 'Kran bocor di kamar mandi' },
  '103': { name: 'Kamar 103', floor: 'Lantai 1', status: 'terisi',      tenant: 'Ahmad R.',  since: 'Jun 2024', initials: 'AR', price: 'Rp 1.2 jt', size: '3 × 4 m²', type: 'Kamar standar', facilities: ['AC', 'WiFi'] },
  '104': { name: 'Kamar 104', floor: 'Lantai 1', status: 'kosong',      tenant: null,        since: null,       initials: null, price: 'Rp 1.2 jt', size: '3 × 4 m²', type: 'Kamar standar', facilities: ['AC', 'WiFi', 'Kamar mandi dalam'] },
  '105': { name: 'Kamar 105', floor: 'Lantai 1', status: 'terisi',      tenant: 'Dewi K.',   since: 'Feb 2024', initials: 'DK', price: 'Rp 1.2 jt', size: '3 × 4 m²', type: 'Kamar standar', facilities: ['AC', 'WiFi'] },
  '106': { name: 'Kamar 106', floor: 'Lantai 1', status: 'maintenance', tenant: null,        since: null,       initials: null, price: 'Rp 1.2 jt', size: '3 × 4 m²', type: 'Kamar standar', facilities: ['AC', 'WiFi', 'Kamar mandi dalam'], laporan: 'Renovasi AC & plafon' },
  '201': { name: 'Kamar 201', floor: 'Lantai 2', status: 'terisi',      tenant: 'Rina A.',   since: 'Apr 2023', initials: 'RA', price: 'Rp 1.3 jt', size: '3 × 4 m²', type: 'Kamar standar', facilities: ['AC', 'WiFi'] },
  '202': { name: 'Kamar 202', floor: 'Lantai 2', status: 'terisi',      tenant: 'Fajar M.',  since: 'Aug 2023', initials: 'FM', price: 'Rp 1.3 jt', size: '3 × 4 m²', type: 'Kamar standar', facilities: ['AC', 'WiFi', 'Kamar mandi dalam'] },
  '203': { name: 'Kamar 203', floor: 'Lantai 2', status: 'notif',       tenant: 'Budi S.',   since: 'May 2022', initials: 'BS', price: 'Rp 1.5 jt', size: '4 × 4 m²', type: 'Kamar premium', facilities: ['AC', 'WiFi', 'Kamar mandi dalam', 'TV', 'Kulkas'], laporan: 'AC tidak dingin, suara berisik' },
  '204': { name: 'Kamar 204', floor: 'Lantai 2', status: 'terisi',      tenant: 'Budi S.',   since: 'Jan 2024', initials: 'BS', price: 'Rp 1.3 jt', size: '3 × 4 m²', type: 'Kamar standar', facilities: ['AC', 'WiFi'] },
  '205': { name: 'Kamar 205', floor: 'Lantai 2', status: 'terisi',      tenant: 'Budi S.',   since: 'Mar 2024', initials: 'BS', price: 'Rp 1.3 jt', size: '3 × 4 m²', type: 'Kamar standar', facilities: ['AC', 'WiFi', 'Kamar mandi dalam'] },
  '206': { name: 'Kamar 206', floor: 'Lantai 2', status: 'kosong',      tenant: null,        since: null,       initials: null, price: 'Rp 1.3 jt', size: '3 × 4 m²', type: 'Kamar standar', facilities: ['AC', 'WiFi'] },
  '301': { name: 'Kamar 301', floor: 'Lantai 3', status: 'terisi',      tenant: 'Budi S.',   since: 'Jul 2023', initials: 'BS', price: 'Rp 1.2 jt', size: '3 × 4 m²', type: 'Kamar standar', facilities: ['AC', 'WiFi'] },
  '302': { name: 'Kamar 302', floor: 'Lantai 3', status: 'terisi',      tenant: 'Budi S.',   since: 'Nov 2023', initials: 'BS', price: 'Rp 1.2 jt', size: '3 × 4 m²', type: 'Kamar standar', facilities: ['AC', 'WiFi', 'Kamar mandi dalam'] },
  '303': { name: 'Kamar 303', floor: 'Lantai 3', status: 'notif',       tenant: 'Budi S.',   since: 'Jan 2023', initials: 'BS', price: 'Rp 1.4 jt', size: '3 × 4 m²', type: 'Kamar deluxe',  facilities: ['AC', 'WiFi', 'Kamar mandi dalam', 'TV'], laporan: 'Pintu tidak bisa dikunci dari dalam' },
  '304': { name: 'Kamar 304', floor: 'Lantai 3', status: 'terisi',      tenant: 'Budi S.',   since: 'Feb 2023', initials: 'BS', price: 'Rp 1.2 jt', size: '3 × 4 m²', type: 'Kamar standar', facilities: ['AC', 'WiFi'] },
  '305': { name: 'Kamar 305', floor: 'Lantai 3', status: 'terisi',      tenant: 'Budi S.',   since: 'Apr 2024', initials: 'BS', price: 'Rp 1.2 jt', size: '3 × 4 m²', type: 'Kamar standar', facilities: ['AC', 'WiFi', 'Kamar mandi dalam'] },
  '306': { name: 'Kamar 306', floor: 'Lantai 3', status: 'terisi',      tenant: 'Budi S.',   since: 'Jun 2024', initials: 'BS', price: 'Rp 1.2 jt', size: '3 × 4 m²', type: 'Kamar standar', facilities: ['AC', 'WiFi'] },
  '307': { name: 'Kamar 307', floor: 'Lantai 3', status: 'terisi',      tenant: 'Budi S.',   since: 'Sep 2024', initials: 'BS', price: 'Rp 1.2 jt', size: '3 × 4 m²', type: 'Kamar standar', facilities: ['AC', 'WiFi', 'Kamar mandi dalam'] },
  '308': { name: 'Kamar 308', floor: 'Lantai 3', status: 'kosong',      tenant: null,        since: null,       initials: null, price: 'Rp 1.2 jt', size: '3 × 4 m²', type: 'Kamar standar', facilities: ['AC', 'WiFi'] },
};

const statusLabel = { terisi: 'Terisi', kosong: 'Kosong', maintenance: 'Maintenance', notif: 'Ada Laporan' };
const statusClass  = { terisi: 'sb-terisi', kosong: 'sb-kosong', maintenance: 'sb-maint', notif: 'sb-notif' };

// ── Show room detail ──
function showDetail(roomId) {
  const d = roomData[roomId];
  if (!d) return;

  document.getElementById('detailEmpty').style.display   = 'none';
  document.getElementById('detailContent').style.display = 'block';

  document.getElementById('dRoomName').textContent = d.name;
  document.getElementById('dFloor').textContent    = d.floor;
  document.getElementById('dPrice').textContent    = d.price;
  document.getElementById('dSize').textContent     = d.size;
  document.getElementById('dType').textContent     = d.type;

  const badge = document.getElementById('dStatusBadge');
  badge.textContent = statusLabel[d.status];
  badge.className   = 'status-badge ' + statusClass[d.status];

  // Tenant section
  const tenantSec = document.getElementById('dTenantSection');
  if (d.tenant) {
    const avatarColor = d.status === 'notif' ? '#1565c0' : '#2e6644';
    tenantSec.innerHTML = `
      <div class="tenant-row">
        <div class="tenant-avatar" style="background:${avatarColor}">${d.initials}</div>
        <div>
          <div class="tenant-name">${d.tenant}</div>
          <div class="tenant-since">Sejak ${d.since}</div>
        </div>
      </div>
    `;
    if (d.laporan) {
      const alertColor  = d.status === 'notif' ? '#e8f0fa' : '#fbe8ec';
      const alertText   = d.status === 'notif' ? '#1b5e99' : '#8c2040';
      tenantSec.innerHTML += `
        <div style="margin:10px 20px 0;padding:9px 12px;background:${alertColor};border-radius:8px;font-size:12px;color:${alertText};display:flex;align-items:center;gap:8px;">
          <svg style="width:14px;height:14px;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;flex-shrink:0" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          <span>${d.laporan}</span>
        </div>
      `;
    }
  } else if (d.status === 'maintenance') {
    tenantSec.innerHTML = `
      <div class="tenant-row" style="background:#fce8ec;">
        <div class="tenant-avatar" style="background:#8c2040;">
          <svg style="width:18px;height:18px;stroke:#fff;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round" viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
        </div>
        <div>
          <div class="tenant-name" style="color:#8c2040;">Dalam Perbaikan</div>
          <div class="tenant-since">${d.laporan || 'Sedang direnovasi'}</div>
        </div>
      </div>
    `;
  } else {
    tenantSec.innerHTML = `
      <div class="tenant-row" style="background:#f5f0ea;">
        <div class="tenant-avatar" style="background:#cfc7b4;">
          <svg style="width:18px;height:18px;stroke:#fff;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        </div>
        <div>
          <div class="tenant-name" style="color:#857c6a;">Tidak ada penghuni</div>
          <div class="tenant-since">Kamar siap disewa</div>
        </div>
      </div>
    `;
  }

  // Facilities
  document.getElementById('dFacilities').innerHTML =
    d.facilities.map(f => `<span class="fac-tag">${f}</span>`).join('');

  // Action buttons
  const actionsEl = document.getElementById('dActions');
  if (d.status === 'kosong') {
    actionsEl.innerHTML = `
      <button class="btn-outline">Edit Kamar</button>
      <button class="btn-solid">Tambah Penghuni</button>
    `;
  } else if (d.status === 'maintenance') {
    actionsEl.innerHTML = `
      <button class="btn-outline">Edit Kamar</button>
      <button class="btn-solid" style="background:#8c2040;">Lihat Laporan</button>
    `;
  } else if (d.status === 'notif') {
    actionsEl.innerHTML = `
      <button class="btn-outline">Edit Kamar</button>
      <button class="btn-solid" style="background:#1565c0;">Lihat Laporan</button>
    `;
  } else {
    actionsEl.innerHTML = `
      <button class="btn-outline">Edit Kamar</button>
      <button class="btn-solid">Hubungi Penghuni</button>
    `;
  }
}

// ── Room click handlers ──
document.querySelectorAll('.room-card').forEach(card => {
  card.addEventListener('click', function () {
    document.querySelectorAll('.room-card').forEach(c => c.classList.remove('selected'));
    this.classList.add('selected');
    showDetail(this.dataset.room);
  });
});

// Auto-select room 101 on load
document.querySelector('[data-room="101"]').classList.add('selected');
showDetail('101');

// ── Header dropdowns ──
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

// ── Mark all read ──
document.getElementById('markAllBtn').addEventListener('click', () => {
  document.querySelectorAll('.np-item.unread').forEach(item => {
    item.classList.remove('unread');
    item.querySelector('.np-unread-dot')?.remove();
  });
  document.getElementById('notifDot').style.display = 'none';
});

// ── Profile logout ──
document.getElementById('profileLogout').addEventListener('click', () => {
  if (confirm('Yakin ingin keluar?')) window.location.href = '../../../main.html';
});
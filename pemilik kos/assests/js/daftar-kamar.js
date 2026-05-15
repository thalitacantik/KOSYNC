// ── Data ──
const kamarData = [
  { id: 1,  penghuni: 'Budi S.',   inisial: 'BS', warnaBg: '#e8f5e9', warnaTxt: '#2e7d32', kamar: '101', lantai: 'Lantai 1', harga: 'Rp 1.2jt', status: 'terisi' },
  { id: 2,  penghuni: 'Sari W.',   inisial: 'SW', warnaBg: '#e3f2fd', warnaTxt: '#1565c0', kamar: '102', lantai: 'Lantai 1', harga: 'Rp 1.2jt', status: 'laporan' },
  { id: 3,  penghuni: 'Ahmad R.',  inisial: 'AR', warnaBg: '#fff3e0', warnaTxt: '#e65100', kamar: '103', lantai: 'Lantai 1', harga: 'Rp 1.0jt', status: 'terisi' },
  { id: 4,  penghuni: null,        inisial: '',   warnaBg: '',        warnaTxt: '',        kamar: '104', lantai: 'Lantai 1', harga: 'Rp 1.2jt', status: 'kosong' },
  { id: 5,  penghuni: 'Rini A.',   inisial: 'RA', warnaBg: '#fce4ec', warnaTxt: '#880e4f', kamar: '201', lantai: 'Lantai 2', harga: 'Rp 1.2jt', status: 'terisi' },
  { id: 6,  penghuni: 'Eko P.',    inisial: 'EP', warnaBg: '#e8f5e9', warnaTxt: '#2e7d32', kamar: '202', lantai: 'Lantai 2', harga: 'Rp 1.0jt', status: 'terisi' },
  { id: 7,  penghuni: null,        inisial: '',   warnaBg: '',        warnaTxt: '',        kamar: '203', lantai: 'Lantai 2', harga: 'Rp 1.2jt', status: 'maintenance' },
  { id: 8,  penghuni: 'Dewi K.',   inisial: 'DK', warnaBg: '#f3e5f5', warnaTxt: '#7b1fa2', kamar: '204', lantai: 'Lantai 2', harga: 'Rp 1.2jt', status: 'terisi' },
  { id: 9,  penghuni: 'Hendra M.', inisial: 'HM', warnaBg: '#fff8e1', warnaTxt: '#b08000', kamar: '205', lantai: 'Lantai 2', harga: 'Rp 1.0jt', status: 'terisi' },
  { id: 10, penghuni: 'Lina S.',   inisial: 'LS', warnaBg: '#e3f2fd', warnaTxt: '#1565c0', kamar: '301', lantai: 'Lantai 3', harga: 'Rp 1.5jt', status: 'terisi' },
  { id: 11, penghuni: null,        inisial: '',   warnaBg: '',        warnaTxt: '',        kamar: '302', lantai: 'Lantai 3', harga: 'Rp 1.5jt', status: 'kosong' },
  { id: 12, penghuni: 'Tono B.',   inisial: 'TB', warnaBg: '#e8f5e9', warnaTxt: '#2e7d32', kamar: '303', lantai: 'Lantai 3', harga: 'Rp 1.5jt', status: 'terisi' },
];

const statusConfig = {
  terisi:      { label: 'Terisi',      cls: 'badge-terisi' },
  kosong:      { label: 'Kosong',      cls: 'badge-kosong' },
  laporan:     { label: 'Ada Laporan', cls: 'badge-laporan' },
  maintenance: { label: 'Maintenance', cls: 'badge-maintenance' },
};

const ROWS_PER_PAGE = 7;
let currentPage  = 1;
let filteredData = [...kamarData];

// ── Render table ──
function renderTable() {
  const tbody      = document.getElementById('kamarBody');
  const emptyState = document.getElementById('emptyState');
  const start      = (currentPage - 1) * ROWS_PER_PAGE;
  const slice      = filteredData.slice(start, start + ROWS_PER_PAGE);

  if (filteredData.length === 0) {
    tbody.innerHTML = '';
    emptyState.style.display = 'block';
  } else {
    emptyState.style.display = 'none';
    tbody.innerHTML = slice.map(r => {
      const sc = statusConfig[r.status];
      const penghuni = r.penghuni
        ? `<div class="penghuni-cell">
             <div class="penghuni-avatar" style="background:${r.warnaBg};color:${r.warnaTxt}">${r.inisial}</div>
             <span class="penghuni-name">${r.penghuni}</span>
           </div>`
        : `<span class="penghuni-empty">— Kosong</span>`;

      return `<tr>
        <td>${penghuni}</td>
        <td><span class="kamar-num">${r.kamar}</span></td>
        <td><span class="lantai-badge">${r.lantai}</span></td>
        <td><span class="harga">${r.harga}<span>/bln</span></span></td>
        <td><span class="status-badge ${sc.cls}">${sc.label}</span></td>
        <td>
          <div class="action-cell">
            <button class="btn-detail" onclick="alert('Detail kamar ${r.kamar}')">Detail</button>
            <button class="btn-icon" title="Hapus" onclick="if(confirm('Hapus kamar ${r.kamar}?')) alert('Dihapus')">
              <svg viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>
            </button>
          </div>
        </td>
      </tr>`;
    }).join('');
  }

  // Pagination info
  const total = filteredData.length;
  const from  = total === 0 ? 0 : start + 1;
  const to    = Math.min(start + ROWS_PER_PAGE, total);
  document.getElementById('pageInfo').textContent = `Menampilkan ${from}–${to} dari ${total} kamar`;

  // Page buttons
  const totalPages = Math.ceil(total / ROWS_PER_PAGE);
  document.querySelectorAll('.pg-btn[data-page]').forEach(btn => {
    const p = parseInt(btn.dataset.page);
    btn.classList.toggle('active', p === currentPage);
    btn.style.display = p <= totalPages ? '' : 'none';
  });
  document.getElementById('prevBtn').disabled = currentPage === 1;
  document.getElementById('nextBtn').disabled = currentPage >= totalPages;
}

// ── Filters ──
function applyFilters() {
  const search = document.getElementById('searchInput').value.toLowerCase();
  const status = document.getElementById('filterStatus').value;
  const lantai = document.getElementById('filterLantai').value;

  filteredData = kamarData.filter(r => {
    const matchSearch = !search ||
      (r.penghuni && r.penghuni.toLowerCase().includes(search)) ||
      r.kamar.includes(search);
    const matchStatus = !status || r.status === status;
    const matchLantai = !lantai || r.lantai === lantai;
    return matchSearch && matchStatus && matchLantai;
  });

  currentPage = 1;
  renderTable();
}

document.getElementById('searchInput').addEventListener('input', applyFilters);
document.getElementById('filterStatus').addEventListener('change', applyFilters);
document.getElementById('filterLantai').addEventListener('change', applyFilters);

// ── Pagination ──
document.getElementById('prevBtn').addEventListener('click', () => {
  if (currentPage > 1) { currentPage--; renderTable(); }
});
document.getElementById('nextBtn').addEventListener('click', () => {
  const totalPages = Math.ceil(filteredData.length / ROWS_PER_PAGE);
  if (currentPage < totalPages) { currentPage++; renderTable(); }
});
document.querySelectorAll('.pg-btn[data-page]').forEach(btn => {
  btn.addEventListener('click', () => {
    currentPage = parseInt(btn.dataset.page);
    renderTable();
  });
});

// ── Tambah kamar ──
document.getElementById('btnTambah').addEventListener('click', () => {
  alert('Form tambah kamar');
});

// ── Sidebar collapse toggle ──
let sbCollapsed = false;
document.getElementById('sbToggle').addEventListener('click', () => {
  sbCollapsed = !sbCollapsed;
  document.body.classList.toggle('sb-collapsed', sbCollapsed);
});

// ── Accordion Manajemen Kos ──
let manOpen = true;
document.getElementById('manKosToggle').addEventListener('click', () => {
  manOpen = !manOpen;
  document.getElementById('manKosSub').classList.toggle('collapsed', !manOpen);
  document.getElementById('manKosChevron').classList.toggle('closed', !manOpen);
});

// ── Logout ──
document.getElementById('logoutBtn').addEventListener('click', () => {
  if (confirm('Yakin ingin keluar?')) window.location.href = '../../main.html';
});

// ── Init ──
renderTable();
// ========== UTILITY UNTUK SEMUA HALAMAN ==========

// Set active menu berdasarkan halaman saat ini
function setActiveMenu() {
    const currentPage = window.location.pathname.split('/').pop();
    const drawerItems = document.querySelectorAll('.drawer-item[data-page]');
    
    drawerItems.forEach(item => {
        const page = item.getAttribute('data-page');
        if (currentPage === page) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Setup navigasi drawer
function setupDrawerNavigation() {
    const drawerItems = document.querySelectorAll('.drawer-item[data-page]');
    
    drawerItems.forEach(item => {
        item.addEventListener('click', function(e) {
            const page = this.getAttribute('data-page');
            if (page) {
                window.location.href = page;
            }
        });
    });
}

// Setup logout
function setupLogout() {
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            if (confirm('Yakin ingin keluar?')) {
                window.location.href = '../main.html';
            }
        });
    }
}

// Inisialisasi saat DOM loaded
document.addEventListener('DOMContentLoaded', function() {
    setActiveMenu();
    setupDrawerNavigation();
    setupLogout();
});
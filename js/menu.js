// js/menu.js
console.log('📱 Cargando menú móvil...');

function toggleMenu() {
    console.log('📍 toggleMenu() ejecutado');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    const boton = document.getElementById('menuToggle');
    
    if (sidebar && overlay && boton) {
        const isActive = sidebar.classList.contains('active');
        
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
        boton.classList.toggle('active');
        document.body.classList.toggle('menu-open');
        
        console.log('📱 Menú:', isActive ? 'CERRADO' : 'ABIERTO');
    } else {
        console.error('❌ Elementos del menú no encontrados');
    }
}

function closeMenu() {
    console.log('📍 closeMenu() ejecutado');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    const boton = document.getElementById('menuToggle');
    
    if (sidebar && overlay && boton) {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        boton.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
}

// Cerrar menú con tecla ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeMenu();
    }
});

console.log('✅ Menú móvil cargado correctamente');
document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const body = document.body;

    // Verificar que todos los elementos existen
    if (!menuToggle || !sidebar || !sidebarOverlay) {
        console.error('No se encontraron todos los elementos del menú');
        return;
    }

    // Función para abrir el menú
    function openMenu() {
        sidebar.classList.add('active');
        sidebarOverlay.classList.add('active');
        body.classList.add('menu-open');
    }

    // Función para cerrar el menú
    function closeMenu() {
        sidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
        body.classList.remove('menu-open');
    }

    // Función para toggle del menú
    function toggleMenu() {
        if (sidebar.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    }

    // Event Listeners

    // Click en el botón del menú
    menuToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('Botón menú clickeado');
        toggleMenu();
    });

    // Click en el overlay para cerrar
    sidebarOverlay.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Overlay clickeado - cerrando menú');
        closeMenu();
    });

    // Click en enlaces del menú (cerrar menú al hacer click)
    sidebar.addEventListener('click', function(e) {
        if (e.target.tagName === 'A') {
            console.log('Enlace clickeado - cerrando menú');
            // Pequeño delay para mejorar experiencia UX
            setTimeout(closeMenu, 300);
        }
    });

    // Cerrar menú con tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && sidebar.classList.contains('active')) {
            console.log('Tecla ESC presionada - cerrando menú');
            closeMenu();
        }
    });

    // Cerrar menú al hacer resize de la ventana (opcional)
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && sidebar.classList.contains('active')) {
            closeMenu();
        }
    });

    // Debug: verificar que todo cargó correctamente
    console.log('Menú móvil inicializado correctamente');
    console.log('Elementos encontrados:', {
        menuToggle: !!menuToggle,
        sidebar: !!sidebar,
        overlay: !!sidebarOverlay
    });
});

// Fallback para asegurar que el JavaScript cargue
window.addEventListener('load', function() {
    console.log('Página completamente cargada');
});
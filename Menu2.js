document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const body = document.body;

    // Verificar que los elementos existen
    if (!menuToggle || !sidebar || !sidebarOverlay) {
        console.error('Error: No se encontraron los elementos del menú');
        return;
    }

    // Función para abrir el menú
    function openMenu() {
        sidebar.classList.add('active');
        sidebarOverlay.classList.add('active');
        body.classList.add('menu-open');
        menuToggle.classList.add('active');
        
        // Agregar evento para cerrar con ESC
        document.addEventListener('keydown', handleEscapeKey);
    }

    // Función para cerrar el menú
    function closeMenu() {
        sidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
        body.classList.remove('menu-open');
        menuToggle.classList.remove('active');
        
        // Remover evento ESC
        document.removeEventListener('keydown', handleEscapeKey);
    }

    // Función para manejar tecla ESC
    function handleEscapeKey(e) {
        if (e.key === 'Escape') {
            closeMenu();
        }
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

    // Click en el botón flotante
    menuToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('Botón flotante clickeado');
        toggleMenu();
    });

    // Click en el overlay para cerrar
    sidebarOverlay.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Overlay clickeado - cerrando menú');
        closeMenu();
    });

    // Click en enlaces del menú (cerrar menú después de un delay)
    sidebar.addEventListener('click', function(e) {
        if (e.target.tagName === 'A') {
            console.log('Enlace del menú clickeado');
            
            // Si es un enlace externo, abrir inmediatamente
            if (e.target.target === '_blank') {
                return; // No cerrar el menú para enlaces externos
            }
            
            // Para enlaces internos, cerrar después de un delay
            setTimeout(closeMenu, 400);
        }
    });

    // Cerrar menú al hacer resize si volvemos a desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth > 1024) {
            closeMenu();
        }
    });

    // Efecto de carga inicial (opcional)
    setTimeout(() => {
        menuToggle.style.animation = 'none';
    }, 1000);

    console.log('✅ Botón flotante inicializado correctamente');
});

// Efecto de pulso inicial al cargar la página
window.addEventListener('load', function() {
    const menuFloat = document.querySelector('.menu-float');
    if (menuFloat) {
        menuFloat.style.animation = 'pulse 2s ease-in-out';
    }
});

// Agregar animación de pulso al CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { box-shadow: 0 4px 20px rgba(102, 126, 234, 0.4); }
        50% { box-shadow: 0 4px 30px rgba(102, 126, 234, 0.8); }
        100% { box-shadow: 0 4px 20px rgba(102, 126, 234, 0.4); }
    }
`;
document.head.appendChild(style);
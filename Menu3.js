// VERSIÓN CORREGIDA - SIN ERRORES
document.addEventListener('DOMContentLoaded', function() {
    console.log('🔧 Inicializando menú móvil...');
    
    // Obtener elementos
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    
    // Verificar elementos
    if (!menuToggle) {
        console.error('❌ No se encuentra el botón menuToggle');
        return;
    }
    if (!sidebar) {
        console.error('❌ No se encuentra el sidebar');
        return;
    }
    if (!sidebarOverlay) {
        console.error('❌ No se encuentra el sidebarOverlay');
        return;
    }
    
    console.log('✅ Todos los elementos encontrados');
    
    // Función para toggle del menú
    function toggleMenu() {
        console.log('🎯 Ejecutando toggleMenu');
        
        // Alternar clases
        sidebar.classList.toggle('active');
        sidebarOverlay.classList.toggle('active');
        menuToggle.classList.toggle('active');
        document.body.classList.toggle('menu-open');
        
        console.log('📱 Menú estado:', sidebar.classList.contains('active') ? 'ABIERTO' : 'CERRADO');
    }
    
    // AGREGAR EVENT LISTENER AL BOTÓN
    menuToggle.addEventListener('click', function(event) {
        console.log('📍 Click detectado en el botón');
        event.preventDefault();
        event.stopPropagation();
        toggleMenu();
    });
    
    // Cerrar menú al hacer clic en el overlay
    sidebarOverlay.addEventListener('click', function() {
        console.log('📍 Click en overlay - cerrando menú');
        sidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
        menuToggle.classList.remove('active');
        document.body.classList.remove('menu-open');
    });
    
    // Cerrar menú al hacer clic en un enlace (opcional)
    sidebar.addEventListener('click', function(event) {
        if (event.target.tagName === 'A') {
            console.log('📍 Click en enlace - cerrando menú');
            setTimeout(function() {
                sidebar.classList.remove('active');
                sidebarOverlay.classList.remove('active');
                menuToggle.classList.remove('active');
                document.body.classList.remove('menu-open');
            }, 300);
        }
    });
    
    console.log('🚀 Menú móvil inicializado correctamente');
}); // <- ESTA ES LA LLAVE QUE FALTABA


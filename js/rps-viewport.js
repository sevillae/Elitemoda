// rps-viewport.js - Utilidades de viewport
class RPSViewport {
    constructor() {
        this.currentViewport = this.getViewport();
        this.init();
    }
    
    getViewport() {
        const width = window.innerWidth;
        if (width < 768) return 'mobile';
        if (width < 1024) return 'tablet';
        return 'desktop';
    }
    
    init() {
        // Añadir clase al body según el viewport
        this.updateViewportClass();
        
        // Escuchar cambios de tamaño
        window.addEventListener('resize', () => {
            this.debounce(() => {
                this.updateViewportClass();
            }, 250)();
        });
    }
    
    updateViewportClass() {
        const newViewport = this.getViewport();
        
        if (newViewport !== this.currentViewport) {
            document.body.classList.remove(`rps-viewport-${this.currentViewport}`);
            document.body.classList.add(`rps-viewport-${newViewport}`);
            this.currentViewport = newViewport;
            
            // Disparar evento personalizado
            window.dispatchEvent(new CustomEvent('rpsViewportChange', {
                detail: { viewport: newViewport }
            }));
        }
    }
    
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
}

// Inicializar
new RPSViewport();
// rps-animations.js - Animaciones al scroll
class RPSAnimations {
    constructor() {
        this.observer = null;
        this.init();
    }
    
    init() {
        // Intersection Observer para animaciones
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('rps-animate-in');
                    this.observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        // Observar elementos con data-animate
        document.querySelectorAll('[data-rps-animate]').forEach(el => {
            this.observer.observe(el);
        });
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    new RPSAnimations();
});
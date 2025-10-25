// rps-components.js - Componentes interactivos
document.addEventListener('DOMContentLoaded', function() {
    // Acordeones
    const accordions = document.querySelectorAll('.rps-accordion-header');
    accordions.forEach(header => {
        header.addEventListener('click', function() {
            const accordion = this.parentElement;
            const content = this.nextElementSibling;
            
            accordion.classList.toggle('active');
            content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + 'px';
        });
    });
    
    // Tabs
    const tabButtons = document.querySelectorAll('.rps-tab-button');
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabContainer = this.closest('.rps-tabs');
            const tabId = this.getAttribute('data-tab');
            
            // Remover activo de todos
            tabContainer.querySelectorAll('.rps-tab-button').forEach(btn => {
                btn.classList.remove('active');
            });
            tabContainer.querySelectorAll('.rps-tab-content').forEach(content => {
                content.classList.remove('active');
            });
            
            // Activar actual
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Modales
    const modalTriggers = document.querySelectorAll('.rps-modal-trigger');
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', function() {
            const modalId = this.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            
            if (modal) {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // Cerrar modales
    const closeButtons = document.querySelectorAll('.rps-modal-close');
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.rps-modal');
            modal.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
});
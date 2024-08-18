





document.addEventListener('DOMContentLoaded', (event) => {
    // Obtener todos los botones y modales
    const modalButtons = document.querySelectorAll('[data-modal]');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close');

    // Abrir modal
    modalButtons.forEach(button => {
        button.onclick = function() {
            const modalId = this.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) modal.style.display = 'block';
        }
    });

    // Cerrar modal
    closeButtons.forEach(span => {
        span.onclick = function() {
            const modalId = this.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) modal.style.display = 'none';
        }
    });

    // Cerrar modal al hacer clic fuera del contenido
    window.onclick = function(event) {
        modals.forEach(modal => {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        });
    }
});

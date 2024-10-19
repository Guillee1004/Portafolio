// Ejecutar el código después de que todo el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    // Cambiar tema de color
    const toggleThemeButton = document.createElement('button');
    toggleThemeButton.innerText = "Cambiar Tema";
    toggleThemeButton.classList.add('theme-toggle-button');
    document.body.appendChild(toggleThemeButton);

    toggleThemeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
    });

    const headerIcons = document.querySelector('.header-icons');
    const menuToggleButton = document.querySelector('.fas.fas-times');

    if (menuToggleButton) {
        menuToggleButton.addEventListener('click', () => {
            const displayStyle = window.getComputedStyle(headerIcons).display;
            if (displayStyle === 'none') {
                headerIcons.style.display = 'flex';
            } else {
                headerIcons.style.display = 'none';
            }
        });
    }

    const heroButtons = document.querySelectorAll('.hero-buttons button');
    heroButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.1)';
            button.style.transition = 'transform 0.3s ease';
        });
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
        });
    });

    // Mostrar/ocultar el formulario flotante al hacer clic en el botón
    const botonFormulario = document.getElementById('botonFormulario');
    const formulario = document.getElementById('formulario');
    const formMensaje = document.getElementById('formulario-mensaje');

    if (botonFormulario && formulario) {
        botonFormulario.addEventListener('click', function() {
            if (formulario.style.display === 'none' || formulario.style.display === '') {
                formulario.style.display = 'block';
            } else {
                formulario.style.display = 'none';
            }
        });
    }

    // Prevenir que el formulario se envíe y redirija la página
    if (formMensaje) {
        formMensaje.addEventListener('submit', function(event) {
            event.preventDefault(); // Evitar que se envíe el formulario
            window.location.href = 'index.html'; // Redirigir al index después de enviar
        });
    }
});

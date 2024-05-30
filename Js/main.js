document.addEventListener('DOMContentLoaded', function () {
    const navbarCollapse = document.getElementById('navigation');
    const mobileMenuIcon = document.querySelector('.info-icon');

    // Función para alternar la visibilidad del menú
    function toggleMenu() {
        navbarCollapse.classList.toggle('show');
    }

    // Evento para controlar el clic en el icono del menú
    mobileMenuIcon.addEventListener('click', toggleMenu);

    // Añade un evento clic a cada enlace en el menú para cerrar el menú después de la selección
    document.querySelectorAll('#navigation .nav-link').forEach(function (link) {
        link.addEventListener('click', function () {
            // Solo contrae el menú si está en modo "show" (visible)
            if (navbarCollapse.classList.contains('show')) {
                toggleMenu();
            }
        });
    });
});
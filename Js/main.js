document.addEventListener('DOMContentLoaded', function () {
    const navbarCollapse = document.getElementById('navigation');
    const mobileMenuIcon = document.querySelector('.info-icon');

    mobileMenuIcon.addEventListener('click', function () {
        if (navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
        } else {
            navbarCollapse.classList.add('show');
        }
    });
});




document.getElementById('menu-toggle').addEventListener('click', function() {
        const navMenu = document.getElementById('nav-menu');
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
});

const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const closeMenu = document.getElementById('close-menu');

menuToggle.addEventListener('click', () => {
    navMenu.style.display = 'flex'; // Mostrar el menú
});

closeMenu.addEventListener('click', () => {
    navMenu.style.display = 'none'; // Ocultar el menú
});

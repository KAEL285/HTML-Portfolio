function toggleMenu() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.classList.toggle('active');
}

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('.active').classList.remove('

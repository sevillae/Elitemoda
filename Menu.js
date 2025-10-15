const sidebar = document.querySelector('.sidebar');
const container = document.getElementById('container');

sidebar.addEventListener('mouseleave', function() {
    container.classList.add('hide-sidebar');
});

sidebar.addEventListener('mouseenter', function() {
    container.classList.remove('hide-sidebar');
});   


document.getElementById('hamburger-btn').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('open');
});   



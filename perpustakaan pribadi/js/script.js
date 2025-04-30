// Toggle class active
const navbarNav = document.querySelector ('.navbar-nav');
// ketika menu di klik
document.querySelector('#menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// Klik di luar sidebar untuk menghilangkan nav
const menu = document.querySelector('#menu');

document.addEventListener('click', function(e) {
    if(!menu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const searchForm = document.getElementById("searchForm");
    const searchInput = document.getElementById("searchInput");

    searchForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const keyword = searchInput.value.toLowerCase();

        // Lakukan pencarian berdasarkan kata kunci
        performSearch(keyword);
    });

    function performSearch(keyword) {
        const elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a'); // Pilih elemen yang ingin Anda cari

        elements.forEach(element => {
            const text = element.textContent.toLowerCase();
            if (text.includes(keyword)) {
                element.style.display = ''; // Tampilkan elemen jika cocok
            } else {
                element.style.display = 'none'; // Sembunyikan elemen jika tidak cocok
            }
        });
    }
});

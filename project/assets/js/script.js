// Hamburger menü butonuna tıklama işlemi
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');


hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');  // Menü aktif hale gelir ya da kapanır
    hamburger.classList.toggle('active'); // Hamburger butonu animasyonlu hale gelir
});




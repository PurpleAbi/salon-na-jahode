function redirectToContactUs() {
    window.location.href = 'extra-sections/kontaktujete-nas.html';
}
document.getElementById('contactButton').onclick = redirectToContactUs;

const burger = document.querySelector('.hamburger');
const navLists = document.querySelectorAll('.nav-list');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navLists.forEach(navList => {
        navList.classList.toggle('visible');
    });
});

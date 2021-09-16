const toggleBarAnimation = document.querySelector('#toggle-animation')
const toggleMenu = document.querySelector('.navbar-menu')

toggleBarAnimation.addEventListener('click', function() {
    toggleBarAnimation.classList.toggle('is-active');
    toggleMenu.classList.toggle('active');
});

/*
Re-use later for back arrow
const toggleBarAnimation = document.querySelector('#toggle-animation')
const toggleMenu = document.querySelector('.navbar_menu')

toggleBarAnimation.addEventListener('click', function() {
    toggleBarAnimation.classList.toggle('is-active');
    toggleMenu.classList.toggle('active');
});
*/
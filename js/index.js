const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')



// will open the button 
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});



// will remove the button once we click on one of the links 
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

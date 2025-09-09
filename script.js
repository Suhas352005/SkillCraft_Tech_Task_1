document.addEventListener('DOMContentLoaded', () => {

    const header = document.getElementById('main-header');

    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll);


    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    const handleNavToggle = () => {
        navLinks.classList.toggle('nav-active');

        hamburger.classList.toggle('toggle');
    };
    
    hamburger.addEventListener('click', handleNavToggle);
    
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('nav-active')) {
                handleNavToggle();
            }
        });
    });

});
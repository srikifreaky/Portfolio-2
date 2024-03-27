const menu = document.getElementById('menu-div');
const navcontent_one = document.getElementById('navbar-content-one');
const navcontent_two = document.getElementById('navbar-content-two');
const back = document.getElementById('back');
const navslider = document.getElementById('navslider');
const main = document.getElementById('main-container');

const navbar = document.getElementById('navbar-main');
const home = document.getElementById('nav-home');
const skills = document.getElementById('nav-skills');
const projects = document.getElementById('nav-project');
const contact = document.getElementById('nav-contact');

navcontent_one.style.opacity = '0';
navcontent_two.style.opacity = '0';

let prevScrollPos = window.scrollY
window.addEventListener('scroll', function() 
{
    let currentScrollPos = window.scrollY
    if (prevScrollPos > currentScrollPos) {
        navbar.style.transition = 'top 0.5s ease';
        navbar.style.top = "0";
    } else {
      navbar.style.top = "-50px"; 
    }
    prevScrollPos = currentScrollPos;
});


menu.addEventListener('click', function(){
    main.style.display = 'none';
    setTimeout(() => {
        navcontent_one.style.transition = 'opacity 0.4s ease';
        navcontent_one.style.opacity = '1';
        navcontent_two.style.transition = 'opacity 0.4s ease';
        navcontent_two.style.opacity = '1';
    },500);

    navslider.style.transition = 'transform 0.4s ease';
    navslider.style.transform = 'translateY(0px)';
})

back.addEventListener('click', function(){
    main.style.display = 'block';
    setTimeout(() => {
        navcontent_one.style.transition = 'opacity 0.4s ease';
        navcontent_one.style.opacity = '0';
        navcontent_two.style.transition = 'opacity 0.4s ease';
        navcontent_two.style.opacity = '0';
    },400);

    setTimeout(() => {
        navslider.style.transition = 'transform 0.4s ease';
        navslider.style.transform = 'translateY(-100vh)';
    },900)
})

home.addEventListener('click', function(){
    main.style.display = 'block';
    setTimeout(() => {
        navcontent_one.style.transition = 'opacity 0.4s ease';
        navcontent_one.style.opacity = '0';
        navcontent_two.style.transition = 'opacity 0.4s ease';
        navcontent_two.style.opacity = '0';
    },400);

    setTimeout(() => {
        navslider.style.transition = 'transform 0.4s ease';
        navslider.style.transform = 'translateY(-100vh)';
    },900)
})

skills.addEventListener('click', function(){
    main.style.display = 'block';
    setTimeout(() => {
        navcontent_one.style.transition = 'opacity 0.4s ease';
        navcontent_one.style.opacity = '0';
        navcontent_two.style.transition = 'opacity 0.4s ease';
        navcontent_two.style.opacity = '0';
    },400);

    setTimeout(() => {
        navslider.style.transition = 'transform 0.4s ease';
        navslider.style.transform = 'translateY(-100vh)';
    },900)
})

projects.addEventListener('click', function(){
    main.style.display = 'block';
    setTimeout(() => {
        navcontent_one.style.transition = 'opacity 0.4s ease';
        navcontent_one.style.opacity = '0';
        navcontent_two.style.transition = 'opacity 0.4s ease';
        navcontent_two.style.opacity = '0';
    },400);

    setTimeout(() => {
        navslider.style.transition = 'transform 0.4s ease';
        navslider.style.transform = 'translateY(-100vh)';
    },900)
})

contact.addEventListener('click', function(){
    main.style.display = 'block';
    setTimeout(() => {
        navcontent_one.style.transition = 'opacity 0.4s ease';
        navcontent_one.style.opacity = '0';
        navcontent_two.style.transition = 'opacity 0.4s ease';
        navcontent_two.style.opacity = '0';
    },400);

    setTimeout(() => {
        navslider.style.transition = 'transform 0.4s ease';
        navslider.style.transform = 'translateY(-100vh)';
    },900)
})
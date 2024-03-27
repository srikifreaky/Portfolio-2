const slidercontainer = document.getElementById('slider');
const slidercontent = document.getElementById('slidercontent');
const slider = document.getElementById('slider-btn');
const containers = document.getElementById('main-container');
containers.style.display = 'none';

slider.addEventListener('click', function(){

    setTimeout(() => {
        slidercontent.style.transition = 'opacity 0.4s ease';
        slidercontent.style.opacity = '0';
    },400)

    setTimeout(() => {
        slidercontainer.style.transition = 'transform 0.59s ease';
        slidercontainer.style.transform = 'translateY(-100vh)';
    },900)

    setTimeout(() => {
        containers.style.display = 'block'
    },950);
})
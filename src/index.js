/* Animations */

const feature = document.getElementById('feature');
const card = document.getElementById('card');
const sneaker = document.querySelector('.sneaker img');
const title = document.querySelector('.title');
const description = document.querySelector('.description');

// Evento de animación en movimiento
feature.addEventListener('mousemove', (event) => {
    // console.log(event.pageX, event.pageY); || Nos permite ver las coordenadas de nuestro mause en el DOM;

    let xAxis = (window.innerWidth / 2 - event.pageX) / 18;
    let yAxis = (window.innerHeight / 2 - event.pageY) / 18;
    card.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`
});

// Animacion de entrada
feature.addEventListener('mouseenter', event => {
    /* card.style.transition = ''; */
    // Popout
    sneaker.style.transform = "translateZ(150px) rotateZ(-45deg)";
    title.style.transform = "translateZ(120px)";
    description.style.transform = "translateZ(100px)";
})

// Animacion de salida
feature.addEventListener('mouseleave', event => {
    card.style.transition = 'all .6s ease-out'
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    // Popback
    sneaker.style.transform = "translateX(0px) rotateZ(0deg)";
    title.style.transform = "translateX(0px)";
    description.style.transform = "translateZ(0px)";
})
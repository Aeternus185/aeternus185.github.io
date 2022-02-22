const hamburguer = document.querySelector('.hamburguer');

hamburguer.addEventListener('click', function (){
    document.querySelector('.nav-bar').classList.toggle('active');
});
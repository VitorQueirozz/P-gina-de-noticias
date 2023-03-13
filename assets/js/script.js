let botao = document.querySelector('.menu-mobile')

botao.addEventListener('click', function(){
    let nav = document.querySelector('.navegacao')
    nav.classList.toggle('ativo')
})
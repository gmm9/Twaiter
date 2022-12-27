// MODAL ENTRAR
const bgPrincipal = document.querySelector('.bg__principal');
const btnEntrar = document.querySelector('.btn-transparent');
const btnClose = document.querySelector('.modal__close-2');
const modalEntrar = document.querySelector('.modal__background-2');
console.log(btnClose)

btnEntrar.addEventListener("click", (e) => {
    modalEntrar.style.display = 'grid';
    bgPrincipal.style.position = 'fixed';
    bgPrincipal.style.width = '-webkit-fill-available';
})

btnClose.addEventListener("click", (e) => {
    modalEntrar.style.display = 'none';
    bgPrincipal.style.position = '';
    bgPrincipal.style.width = '';
})
//  FINALIZADO MODAL ENTRAR

// MODAL INSCREVER
const btnInscrever = document.querySelector('.btn-default');
const closeBtn = document.querySelector('.modal__close');
const modalInscrever = document.querySelector('.modal__background');


btnInscrever.addEventListener("click", (e) => {
    modalInscrever.style.display = 'grid';
    bgPrincipal.style.position = 'fixed';
    bgPrincipal.style.width = '-webkit-fill-available';
})

closeBtn.addEventListener("click", (e) => {
    modalInscrever.style.display = 'none';
    bgPrincipal.style.position = '';
    bgPrincipal.style.width = '';
})
// MODAL COMPLETO


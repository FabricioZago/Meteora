const modal = document.querySelector('.modal');
const openModal = document.querySelectorAll('.abrirModal');
const closeModal = document.querySelector('.closeBtn');
const body = document.querySelector('body');
const overlay = document.querySelector('.modal-overlay');

openModal.forEach((elemento) => {
    elemento.addEventListener("click", () => {abreModal()});
})

closeModal.addEventListener("click", () => {fechaModal()});
overlay.addEventListener("click", () => {fechaModal()});

document.addEventListener("keydown", function(event) {
    if (event.keyCode == 27) {
        fechaModal();
    }
})

function abreModal() {
    modal.showModal();
    body.style.overflow = 'hidden';
}

function fechaModal() {
    modal.close();
    body.style.overflow = '';
}
const imgModal = document.querySelector('.caixa-modal');
const tituloModal = document.querySelector('#dialog-title');
let botao = document.querySelectorAll('[data-modal]');
let imgs = document.querySelectorAll('[data-image]');
let titulo = document.querySelectorAll('[data-titulo]');
let preco = document.querySelectorAll('[data-preco]');
let descricao = document.querySelectorAll('[data-descricao]');
const botaoEnviar = document.querySelector('.submit-button');

botao.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        for (let i = 0; i < imgs.length; i++) {
            if (evento.target.dataset.modal === imgs[i].dataset.image){
                tituloModal.textContent = 'Confira detalhes sobre o produto';
                imgModal.innerHTML = `
                    <img class="modal-image" src="${imgs[i].src}" alt="${imgs[i].alt}">
                    <div class="informacoes-modal">
                        <h3 class="titulo-modal">${titulo[i].textContent}</h3>
                        <p class="descricao-modal">${descricao[i].textContent}</p>
                        <span class="preco-modal">${preco[i].textContent}</span>
                        <span class="propriedade-modal">Vendido e entregue por Riachuelo</span>
                    </div>
                        <form class="formulario-modal">
                            <div class="container-form">
                                <h4 class="titulo-form-modal">Cores:</h4>
                                <div class="radio-form">
                                    <div class="radio-modal">
                                        <input type="radio" name="color" value="Azul claro" id="cor-azul">
                                        <label for="cor-azul">Azul claro</label>
                                    </div>
                                    <div class="radio-modal">
                                        <input type="radio" name="color" value="Branco" id="cor-branco">
                                        <label for="cor-branco">Offwhite</label>
                                    </div>
                                    <div class="radio-modal">
                                        <input type="radio" name="color" value="Preto" id="cor-preto">
                                        <label for="cor-preto">Preto</label>
                                    </div>
                                </div>
                            </div>
                            <div class="container-form">
                                <h4 class="titulo-form-modal">Tamanho:</h4>
                                <div class="radio-form">
                                    <div class="radio-modal">
                                        <input type="radio" name="tamanho" id="p" value="P">
                                        <label for="p">P</label>
                                    </div>
                                    <div class="radio-modal">
                                        <input type="radio" name="tamanho" id="pp" value="PP">
                                        <label for="pp">PP</label>
                                    </div>
                                    <div class="radio-modal">
                                        <input type="radio" name="tamanho" id="m" value="M">
                                        <label for="m">M</label>
                                    </div>
                                    <div class="radio-modal">
                                        <input type="radio" name="tamanho" id="g" value="G">
                                        <label for="g">G</label>
                                    </div>
                                    <div class="radio-modal">
                                        <input type="radio" name="tamanho" id="gg" value="GG">
                                        <label for="gg">G</label>
                                    </div>
                                </div>
                            </div>
                        </form>
                    <button class="adcionar-sacola">Adicionar à sacola</button>
                `
            }
        }
    })
})

botaoEnviar.addEventListener("click", () => {
    tituloModal.textContent = 'E-mail cadastrado com sucesso!';
    imgModal.innerHTML = `
        <h2 class="titulo2">Em breve você receberá exclusivas novidades da Meteora.</h2>
    `
})
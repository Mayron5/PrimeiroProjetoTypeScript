import { NegociacaoControler } from './controllers/negociacao-controler.js';

const controller = new NegociacaoControler();
const form = document.querySelector(".form");

form.addEventListener("submit", (event: any) => {
    event.preventDefault();
    controller.adicionar();
});
export class Negociacao {
    constructor(data, quantidade, valor) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }
    get data() { return this._data; }
    get quantidade() { return this._quantidade; }
    get valor() { return this._valor; }
    set data(data) { this._data = data; }
    set quantidade(quantidade) { this._quantidade = quantidade; }
    set valor(valor) { this._valor = valor; }
}

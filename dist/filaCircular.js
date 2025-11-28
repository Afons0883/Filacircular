"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Fila {
    constructor(capacidade) {
        this.capacidade = capacidade;
        this.elementos = [];
    }
    enfileirar(elemento) {
        if (this.estaCheia()) {
            console.log("Fila cheia! Não é possível adicionar.");
            return false;
        }
        this.elementos.push(elemento);
        return true;
    }
    desenfileirar() {
        if (this.estaVazia()) {
            console.log("Fila vazia! Não há elementos para remover.");
            return undefined;
        }
        return this.elementos.shift();
    }
    frente() {
        return this.elementos[0];
    }
    estaVazia() {
        return this.elementos.length === 0;
    }
    estaCheia() {
        return this.elementos.length >= this.capacidade;
    }
    tamanho() {
        return this.elementos.length;
    }
    mostrar() {
        return [...this.elementos];
    }
    capacidadeMaxima() {
        return this.capacidade;
    }
    espacoDisponivel() {
        return this.capacidade - this.elementos.length;
    }
}
const fila = new Fila(5);
fila.enfileirar(10);
fila.enfileirar(20);
fila.enfileirar(30);
alert(fila.mostrar());
alert(fila.frente());
alert(fila.desenfileirar());
alert(fila.mostrar());
alert(fila.estaVazia());
alert(fila.estaCheia());
alert(fila.tamanho());
alert(fila.capacidadeMaxima());
alert(fila.espacoDisponivel());
//# sourceMappingURL=filaCircular.js.map
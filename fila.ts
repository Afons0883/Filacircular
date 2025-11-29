   class FilaCircular<T> {
  private elementos: (T | undefined)[];
  private frente: number;
  private tras: number;
  private qtd: number;
  private limite: number;

  constructor(limite: number) {
    this.limite = limite;
    this.elementos = new Array(limite);
    this.frente = 0;
    this.tras = 0;
    this.qtd = 0;
  }

  // Adiciona um item na fila
  adicionar(item: T): boolean {
    if (this.estaCheia()) {
      console.log("Não foi possível adicionar: fila cheia.");
      return false;
    }
    this.elementos[this.tras] = item;
    this.tras = (this.tras + 1) % this.limite;
    this.qtd++;
    return true;
  }

  // Remove o primeiro item da fila
  remover(): T | undefined {
    if (this.estaVazia()) {
      console.log("Não há elementos para remover: fila vazia.");
      return undefined;
    }
    const item = this.elementos[this.frente];
    this.elementos[this.frente] = undefined;
    this.frente = (this.frente + 1) % this.limite;
    this.qtd--;
    return item;
  }

  
  primeiro(): T | undefined {
    return this.estaVazia() ? undefined : this.elementos[this.frente];
  }

  
  estaVazia(): boolean {
    return this.qtd === 0;
  }

  estaCheia(): boolean {
    return this.qtd === this.limite;
  }


  tamanho(): number {
    return this.qtd;
  }

  capacidade(): number {
    return this.limite;
  }

  espacoLivre(): number {
    return this.limite - this.qtd;
  }

  
  mostrar(): void {
    if (this.estaVazia()) {
      console.log("Fila está vazia.");
      return;
    }
    const itens: T[] = [];
    for (let i = 0; i < this.qtd; i++) {
      const pos = (this.frente + i) % this.limite;
      itens.push(this.elementos[pos] as T);
    }
    console.log("Conteúdo da fila:", itens.join(" | "));
  }
}


const fila = new FilaCircular<number>(5);


fila.adicionar(10);
fila.adicionar(20);
fila.adicionar(30);


fila.mostrar();

console.log("Primeiro da fila:", fila.primeiro());
console.log("Tamanho atual:", fila.tamanho());
console.log("Espaços livres:", fila.espacoLivre());


console.log("Elemento removido:", fila.remover());


fila.mostrar();


fila.adicionar(40);
fila.adicionar(50);
fila.adicionar(60);

fila.mostrar();

console.log("Fila está cheia?", fila.estaCheia());
class Fila<T> {
  private elementos: T[];
  private capacidade: number;

  constructor(capacidade: number) {
    this.capacidade = capacidade;
    this.elementos = [];
  }


  enfileirar(elemento: T): boolean {
    if (this.estaCheia()) {
      console.log("Fila cheia! Não é possível adicionar.");
      return false;
    }
    this.elementos.push(elemento);
    return true;
  }


  desenfileirar(): T | undefined {
    if (this.estaVazia()) {
      console.log("Fila vazia! Não há elementos para remover.");
      return undefined;
    }
    return this.elementos.shift();
  }

 
  frente(): T | undefined {
    return this.elementos[0];
  }

  
  estaVazia(): boolean {
    return this.elementos.length === 0;
  }

  
  estaCheia(): boolean {
    return this.elementos.length >= this.capacidade;
  }


  tamanho(): number {
    return this.elementos.length;
  }


  mostrar(): T[] {
    return [...this.elementos];
  }

  capacidadeMaxima(): number {
    return this.capacidade;
  }

 
  espacoDisponivel(): number {
    return this.capacidade - this.elementos.length;
  }
}


const fila = new Fila<number>(5);

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

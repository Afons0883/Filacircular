# Filacircular

## Funcionalidades

 Inserir elemento na fila (enfileirar)

 Remover elemento da fila (desenfileirar)

 Ver o primeiro da fila (primeiro)

 Ver se está vazia (estaVazia)

 Ver se está cheia (estaCheia)

 Ver quantidade de elementos (tamanho)

 Exibir elementos (exibirFila)

 Ver capacidade máxima (capacidadeMaxima)

 Ver espaços livres (espacoDisponivel)

 

 ## Exemplo de uso

 const fila = new Fila<number>(5);


fila.enfileirar(10);
fila.enfileirar(20);
fila.enfileirar(30);

console.log("Fila atual:", fila.mostrar()); 


console.log("Primeiro da fila:", fila.frente()); 

console.log("Elemento removido:", fila.desenfileirar()); 

console.log("Fila atual:", fila.mostrar()); 

console.log("Está vazia?", fila.estaVazia()); 


console.log("Está cheia?", fila.estaCheia()); 


console.log("Tamanho atual:", fila.tamanho()); 


console.log("Capacidade máxima:", fila.capacidadeMaxima()); 


console.log("Espaços disponíveis:", fila.espacoDisponivel()); 



## Feito por:

Afonso Vanderlei da Silva


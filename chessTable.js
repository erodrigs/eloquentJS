/* Tabuleiro de Xadrez
    escreva um programa que cria uma string que representa uma grade 8x8, usando novas linhas
    para separar os caracteres. A cada posição  da grade existe um espaço ou um caractere "#".
    Esses caracteres formam um tabuleiro de xadrez.

    Passando essa string para o console.log, o resultado deverá ser parecido com:

    # # # # 
     # # # #
    # # # # 
     # # # #
    # # # # 
     # # # #
    # # # # 
     # # # #

    Quando você tiver o programa que gere este padrão, defina a variável size = 8
    e altere o programa para que ele funcione para qualquer size, a saída da grade de largura e altura.

    Dica:

    A sequência pode ser construída iniciando vazia ("") e repetidamente adicionando caracteres.
    O caractere para uma nova linha é \n

    Utilize console.log para visualizar a saída do seu programa

    Para trabalhar com duas dimensões, você irá precisar de um loop dentro de outro loop. Coloque entre
    chaves os "corpos" dos loops para se tornar mais fácil de visualizar quando inicia e quando termina.
    Tente recuar adequadamente esses "corpos". A ordem dos loops deve seguir a ordem que usamos para construir
    a string (linha por linha, esquerda para a direita, cima para baixo). Então o çoop mais externo manipula
    as linhas e o loop interno manipula os caracteres por linha.
*/

// Baby steps
// 1 - criar uma string que vai receber o resultado das iterações (o resultado final é uma grade 8x8);
// 2 - Novas linhas separam os caracteres;
// 3 - Cada posição da grade é representada por um espaço ou um "#";

// Minha solução produz as 8 linhas, mas eu não consegui realizar algo que fizesse com que alternasse entre espaço ou "#"
/*
let table = "";
let hash = "#";
let space = " ";

for(let i = 0; i < 8; i += 1) {
    for(j = 0; j < 4; j += 1) {
        table += hash;
        table += space;
    }
    table += "\n";
}

console.log(table);
*/

// Solução do autor do livro:

let size = 8; // foi definida uma variável para o tamanho do tabuleiro

let board = ""; // uma string vazia

// Abaixo, temos um for dentro de outro. Vamos entender a lógica envolvida

/*
Após entender o padrão de funcionamento, vemos que na verdade sua execução é bem simples:
O loop externo valida se a variável de controle y é menor do que a variável size, o que 
é verdadeiro, então o JavaScript executa o for mais interno.
Da mesma forma, ocorre a validação se x é menor que size, o que também é verdadeiro
então, o programa cai no if, onde, na primeira vez, x = 0 e y = 0, então 0 + 0 dividido por dois vai dar zero,
isso faz com que a string board receba um espaço. Aí, a variável y no for externo é incrementada, passando a valer 1
Dessa vez, o teste com o operador resto (%) vai dar um número diferente de 0, e isso faz com que o caractere "#"
seja concatenado à string, e assim por diante, até que y seja incrementada até o valor 7, depois disso, ela passa a valer 8,
então a condição de y ser menor que 8 é quebrada, saindo do for e caindo na linha "board += "\n" que faz com seja pulada uma linha na variável board"
Aí o processo segue, lembrando que na execução, a variável x também é incrementada, e a soma das duas variáveis, quando testadas no if, 
vai gerando a alternância dos caracteres
*/  

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);
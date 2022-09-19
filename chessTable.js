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

let table = "";
let hash = "#";
let space = " ";

for(let i = 0; i < 2; i += 1) {
    for(j = 0; j < 2; j += 1) {
        table += hash;
        table += space;
    }
}

console.log(table);
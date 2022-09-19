/* Escreva um programa que imprima usando console.log() todos os números de 1 a 100 com duas exceções. 
  Para números divisíveis por 3, imprima Fizz ao invés do número, e para números divisíveis por 5 (enão 3),
  imprima Buzz.

  Quando o programa estiver funcionando, modifique-o para imprimir FizzBuzz para números que são divisíveis ambos por 3
  e por 5 (e continue imprimindo Fizz e Buzz para números divisíveis apenas por um deles).
*/

// Implementando a solução utilizando baby steps

/* 1 - precisamos imprimir os números de 1 a 100;
  2 - É necessário fazer as validações de divisibilidade por 3 e por 5 (não incluindo 3);
*/

// Primeiro, vamos escrever um programa que imprima, de fato, os números de 1 a 100:
// Agora, vamos incluir uma validação para testar a divisibilidade por 3:
// Fazendo a validação da divisibilidade por 5:
// Agora, avaliamos quando o número é divisível tanto por 3 quanto por 5.

let numbers = [];
for (let i = 1; i <= 100; i += 1) { 

  if (i % 3 == 0 && i % 5 == 0) {
    numbers.push("FizzBuzz");
  } else if (i % 3 == 0) {
      numbers.push("Fizz");
  } else if (i % 5 == 0) {
      numbers.push("Buzz");
  } else {
      numbers.push(i);
  }
}

console.log(numbers);
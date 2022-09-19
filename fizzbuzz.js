/* Escreva um programa que imprima usando console.log() todos os números de 1 a 100 com duas exceções. 
  Para números divisíveis por 3, imprima Fizz ao invés do número, e para números divisíveis por 5 (enão 3),
  imprima Buzz.
*/

// Implementando a solução utilizando baby steps

/* 1 - precisamos imprimir os números de 1 a 100;
  2 - É necessário fazer as validações de divisibilidade por 3 e por 5 (não incluindo 3);
*/

// Primeiro, vamos escrever um programa que imprima, de fato, os números de 1 a 100:
// Agora, vamos incluir uma validação para testar a divisibilidade por 3:

let numbers = [];
for (let i = 1; i <= 100; i += 1) { 
  numbers.push(i);
  /* if (numbers % 3 == 0) {
    numbers = "Fizz";
  }
  console.log(numbers);
  */ 
}

console.log(numbers);
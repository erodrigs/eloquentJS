/* Escreva um programa que faça sete chamadas a console.log() para retornar o seguinte triângulo:

#
##
###
####
#####
######
#######

*/

// Desenvolvendo a solução:

let triangle = "";

for (let i = 0; i < 7; i += 1) {
    triangle += "#"
    console.log(triangle);
}
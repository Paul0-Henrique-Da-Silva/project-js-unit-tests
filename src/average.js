/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const average = (array) => {
  let soma = 0;
  let resultado;
// for(let numeros of array) {
 // console.log(numeros)
 if (array.length === 0) return undefined; 
 for (let i of array) {
  if (typeof i !== 'number') {
  return undefined; 
}
  soma += i;
}

 resultado = soma / array.length;
 return Math.round(resultado); 
 };

// if (!array.length) return undefined;

 // for (let i = 0; i < array.length; i += 1){ 
 //   if (typeof array[i] === typeof soma) {
 //     soma = soma + array[i]}
 //   }
   
// onsole.log(average([1, 3 , 5]))
// console.log(average([-11, -8, -89]))
// console.log(average([' ']))
// console.log(average([undefined]))

module.exports = average;

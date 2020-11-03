// seu eu criar um método no prototype do Array com uma FUNÇÃO NORMAL:
Array.prototype.ultimo = function () {
  // o this aqui aponta para o array 'numeros';;
  // pq a partir de 'numeros' que é um array, foi chamado o método 'ultimo()'
  console.log(this[this.length - 1]);
};

// MAS com ARROW function, ele não referencia o this:
// nao aponta mais para onde foi chamado, mas sim onde a arrow function está sendo executada.

Array.prototype.primeiro = () => {
  console.log(this[0]);
};

const numeros = [1, 2, 3, 4, 5, 226];

numeros.ultimo(); // imprime 226
numeros.primeiro(); // imprime undefined

function potencia(base) {
  return function (exp) {
    return Math.pow(base, exp);
  };
}

console.log('potencia: ', potencia(2)(4));

// mesma coisa com arrow function:
const p2 = base => exp => Math.pow(base, exp);

console.log('potencia2: ', p2(2)(4));

function somar(...numeros) {
  let total = 0;
  for (let n of numeros) {
    total += n;
  }
  return total;
}

console.log(somar(2, 4, 4, 6, 2)); // 6

// const somarAb = somar(5, 5); // armazena 10
// console.log(somarAb(15)); // soma com + 15 = 25

// function calcular(x) {
//   return function (y) {
//     return function (fn) {
//       return fn(x, y);
//     };
//   };
// }

// function substrair(a, b) {
//   return a - b;
// }

// function multiplicar(a, b) {
//   return a * b;
// }

// function somar(a, b) {
//   return a + b;
// }

// function dividir(a, b) {
//   return a / b;
// }

// const resultado1 = calcular(10)(5)(substrair); // 5
// console.log(resultado1);

// const resultado2 = calcular(10)(5)(multiplicar); // 50
// console.log(resultado2);

// const resultado3 = calcular(10)(5)(somar); // 15
// console.log(resultado3);

// const resultado4 = calcular(10)(5)(dividir); // 2
// console.log(resultado4);

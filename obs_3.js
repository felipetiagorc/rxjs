// desafio: criar stream de numeros entre min e max com Observable

const { Observable, noop } = require('rxjs');

function entre(min, max) {
  return new Observable(assinante => {
    // Gera um Array com tamanho (max - min)
    // .fill() = preenche com "undefided"
    // .map() ignorando o 1º param pq é 'undefined', mas pegando o indice:
    // .map((_, i) => {subscriber.next(min + i)}
    if (min > max) [min, max] = [max, min];
    Array(max - min)
      .fill()
      .map((_, i) => {
        assinante.next(min + i);
      });

    assinante.complete();
  });
}

// fim do laço for

entre(9, 1).subscribe(
  num => console.log(`num = ${num}`),
  noop,
  () => console.log('fim')
);

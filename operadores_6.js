const { from, Observable } = require('rxjs');

/*
Aqui eu espero receber uma função 'operatorFn' que vai me dar os métodos que eu preciso
pra fazer a assinatura/subscribe: next, error, complete 
*/

function createPipeableOperator(operatorFn) {
  return function (source) {
    return new Observable(subscriber => {
      const sub = operatorFn(subscriber);
      source.subscribe({
        next: sub.next,
        error: sub.error || (e => subscriber.error(e)),
        complete: sub.complete || (() => subscriber.complete()),
      });
    });
  };
}

function primeiro() {
  /* Aqui a gente cria uma função que recebe o 'subscriber' - pq a gente precisa dele
     pra fazer as operações. Depois retorna um objeto => ({ next(valor) })

     É como se tivessemos pegando esse objeto de baixo e jogando na função createPipeable la em cima
     no lugar de 'operatorFn(subscriber)';
     
  */
  return createPipeableOperator(subscriber => ({
    next(valor) {
      subscriber.next(valor);
      subscriber.complete();
    },
  }));
}

function nenhum() {
  return createPipeableOperator(subscriber => ({
    next(valor) {
      subscriber.complete();
    },
  }));
}

function ultimo() {
  let ultimo;
  return createPipeableOperator(subscriber => ({
    next(valor) {
      ultimo = valor;
    },
    complete() {
      if (ultimo !== undefined) {
        subscriber.next(ultimo);
      }
      subscriber.complete();
    },
  }));
}

from([1, 2, 3, 4, 5, 'oi'])
  .pipe(
    // primeiro()
    // nenhum()
    ultimo()
  )
  .subscribe(console.log);

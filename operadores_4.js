const { from, Observable } = require('rxjs');

function primeiro() {
  return function (observableAnterior) {
    return new Observable(subscriber => {
      observableAnterior.subscribe({
        next(valor) {
          subscriber.next(valor);
          subscriber.complete();
        },
      });
    });
  };
}

function nenhum() {
  return function (source) {
    return new Observable(subscriber => {
      source.subscribe({
        next(valor) {
          subscriber.complete();
        },
      });
    });
  };
}

function ultimo() {
  /*
  O Source (Observable que é a fonte de dados) chama o método complete()... 
  e assim que for chamado, eu posso saber qual foi o último elemento gerado.
  */
  return function (source) {
    return new Observable(subscriber => {
      let ultimo;
      source.subscribe({
        next(valor) {
          ultimo = valor;
        },
        complete() {
          if (ultimo !== undefined) {
            subscriber.next(ultimo);
          }
          subscriber.complete();
        },
      });
    });
  };
}

from([1, 2, 3, 4, 5, 'oi'])
  .pipe(
    // primeiro(),
    // nenhum(),
    ultimo()
  )
  .subscribe(console.log);

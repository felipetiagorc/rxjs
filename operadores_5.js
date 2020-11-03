const { of, Observable } = require('rxjs');

function terminadoCom(parteFinal) {
  return function (fonte) {
    return new Observable(subscriber => {
      fonte.subscribe({
        next(valor) {
          if (Array.isArray(valor)) {
            subscriber.next(valor.filter(el => el.endsWith(parteFinal)));
          } else {
            // faz a filtragem:
            if (valor.endsWith(parteFinal)) {
              subscriber.next(valor);
            }
          }
        },
        error(e) {
          subscriber.error(e);
        },
        complete() {
          subscriber.complete();
        },
      });
    });
  };
}

of(['Ana Silva', 'Mario Silva', 'Pedro Rocha'])
  .pipe(terminadoCom('Silva'))
  .subscribe(console.log);

const { of } = require('rxjs');
const { last, first, map } = require('rxjs/operators');

of(1, 2, 3, 'ana', 'ze', false, 'ultimo')
  .pipe(
    last(), // pega o ultimo elemento do array
    map(v => v[0]), // pega o indice 0 do valor do array
    map(v => `A letra encontra foi: ${v}`)
  )
  .subscribe(x => console.log(x));

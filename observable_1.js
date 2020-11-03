const { Observable } = require('rxjs');

const promise = new Promise(resolve => {
  resolve('Promessa é legal');
});

promise.then(console.log);

const observer = new Observable(subscriber => {
  subscriber.next('observer é bem legal mesmo');
  subscriber.next('ne');
  subscriber.next('eu');
  subscriber.next('tb');
  subscriber.next('achei');
  setTimeout(() => {
    subscriber.next('Fimm');
    subscriber.complete();
  }, 1000);
});

observer.subscribe(console.log);
observer.subscribe(texto => console.log(texto.toUpperCase()));

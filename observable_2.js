const { Observable } = require('rxjs');

const obs = new Observable(subscriber => {
  subscriber.next('RxJs');
  subscriber.next('é');
  subscriber.next('Legal !!');

  if (Math.random() > 0.5) {
    subscriber.complete();
  } else {
    subscriber.error('Problema!');
  }
});

obs.subscribe(console.log);

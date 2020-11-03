const { Observable, Subject } = require('rxjs');

function getObservable() {
  return new Observable(subcriber => {
    setTimeout(() => {
      console.log('#1 Observable...');
      subcriber.next(Math.random());
      subcriber.complete();
    }, 1000);
  });
}

const observ = getObservable();
observ.subscribe(console.log);
observ.subscribe(console.log);

function getSubject() {
  // diferente do Observable onde passamos uma fn e dentro dela a gente chama o next, complete..
  // aqui eu instancia um subject, e logo quando eu quiser eu chamo o next pra gerar os dados:
  const sub = new Subject();
  setTimeout(() => {
    console.log('#2 Subject...');
    sub.next(Math.random());
    sub.complete();
  }, 1000);
  return sub;
}

const subjec = getSubject();
subjec.subscribe(console.log);
subjec.subscribe(console.log);

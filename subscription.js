const { timer, Subscription } = require('rxjs');

const obs = timer(3000, 500);

const sub1 = obs.subscribe(num => {
  console.log(`#1 gerou o numero ${num}`);
});

const sub2 = obs.subscribe(num => {
  console.log(`#2 gerou o numero ${num}`);
});

const sub3 = new Subscription();
sub3.add(sub1);
sub3.add(sub2);

// depois de 5 seg unsubscribe

setTimeout(() => {
  sub3.unsubscribe();
}, 5000);

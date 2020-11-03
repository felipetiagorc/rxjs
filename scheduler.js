const { from, asyncScheduler } = require('rxjs');
const { observeOn } = require('rxjs/operators');

console.log('Antes..');

from([1, 2, 3]).pipe(observeOn(asyncScheduler)).subscribe(console.log);

console.log('Depois..');

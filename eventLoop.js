function esperarPor(tempo) {
  const futuro = Date.now() + tempo;

  while (Date.now() < futuro) {}
}

setTimeout(() => {
  console.log('Execução 1');
}, 2000);

esperarPor(5000);
console.log('Fim');

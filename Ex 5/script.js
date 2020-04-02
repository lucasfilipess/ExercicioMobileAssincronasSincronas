let i = 0;
setTimeout(() => alert(i), 100); // ?
// Assuma que essa função demore mais que 100ms para executar
for (let j = 0; j < 100000000; j++) {
  i++;
}


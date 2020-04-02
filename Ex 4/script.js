
window.onload = function init() {
  let a = prompt('Número Inicial');
  let b = prompt('Número Final');
  let inicio = Number(a);
  let fim = Number(b);
  let cont = setTimeout(function escrevaNumeros(i, f) {
    console.log(i);
    i++;
    if (i === f) {
      setTimeout((i) => {
        console.log(i);
        clearTimeout(cont);
      }, 1000, i);
    }
    cont = setTimeout(escrevaNumeros, 1000, i, f);
  }, 1000, inicio, fim);
};
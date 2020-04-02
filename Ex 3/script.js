function carregar() {
  document.getElementById('paragrafo').innerHTML = '<img src="https://hackernoon.com/drafts/pp6p36ml.png" alt="" sizes="10" width="200" height="100">';
  setTimeout(() => {
    document.getElementById('paragrafo').innerHTML = 'Carregado com Sucesso';
  }, 500);
}
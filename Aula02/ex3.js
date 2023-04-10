function verificarPalindromo() {
    let texto = document.getElementById('texto').value.trim();
    if (texto === '') {
      alert('Nenhum texto foi digitado.');
      return;
    }
    let textoFormatado = texto.replace(/\s/g, '').toLowerCase();
    let textoInvertido = textoFormatado.split('').reverse().join('');
    if (textoFormatado === textoInvertido) {
      alert(`${texto} é um palíndromo!`);
    } else {
      alert(`${texto} não é um palíndromo.`);
    }
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    let btnVerificar = document.getElementById('btn-verificar');
    let inputTexto = document.getElementById('texto');
  
    btnVerificar.addEventListener('click', verificarPalindromo);
    inputTexto.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        verificarPalindromo();
      }
    });
  });
  
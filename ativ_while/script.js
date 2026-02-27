function gerarTabuada() {
  if (document.getElementById("resultado").innerHTML == "") {
    let resultadoFinal = "";
    let numero = 1;
    while (numero <= 10) {
      resultadoFinal += `<div class="card">`;
      resultadoFinal += `<h3>Tabuada do ${numero}</h3>`;

      let multiplicador = 1;

      while (multiplicador <= 10) {
        let resultadinho = numero * multiplicador;

        resultadoFinal += `${numero} x ${multiplicador} = ${resultadinho} <br>`;

        multiplicador++;
      }

      resultadoFinal += `</div>`;

      numero++;
    }

    document.getElementById("resultado").innerHTML = resultadoFinal;
  } else {
    alert("Esta função ja foi executada!");
  }
}
function limpar() {
  document.getElementById("resultado").innerHTML = "";
}

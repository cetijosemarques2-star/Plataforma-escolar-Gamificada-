function gerarQuiz(){

  const tema = document.getElementById("tema").value;
  const resultado = document.getElementById("resultado");

  if(tema === ""){
    resultado.innerHTML =
      "Digite um tema primeiro.";
    return;
  }

  resultado.innerHTML =
    `
    <h3>Quiz criado sobre ${tema}</h3>

    <br>

    <p>
      1. Qual é o conceito principal de ${tema}?
    </p>

    <br>

    <p>
      2. Cite uma característica importante.
    </p>

    <br>

    <p>
      3. Explique como ${tema} impacta a sociedade.
    </p>
    `;
}

function resumir(){

  const tema = document.getElementById("tema").value;
  const resultado = document.getElementById("resultado");

  if(tema === ""){
    resultado.innerHTML =
      "Digite um tema primeiro.";
    return;
  }

  resultado.innerHTML =
    `
    <h3>Resumo sobre ${tema}</h3>

    <br>

    <p>
      ${tema} é um assunto importante
      utilizado para aprendizado,
      desenvolvimento crítico e evolução
      educacional.
    </p>
    `;
}

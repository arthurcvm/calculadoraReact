function CalculadoraService() {
  const SOMA = "+";
  const SUBTRACAO = "-";
  const MULTIPLICACAO = "*";
  const DIVISAO = "/";

  function calcular(num1, num2, op) {
    let resultado;

    switch (op) {
      case SOMA:
        resultado = num1 + num2;
        break;
      case SUBTRACAO:
        resultado = num1 - num2;
        break;
      case MULTIPLICACAO:
        resultado = num1 * num2;
        break;
      case DIVISAO:
        resultado = num1 / num2;
        break;

      default:
        resultado = 0;
        break;
    }
    return resultado;
  }

  function concatenarNumero(numAtual, numConcat) {
    //Caso contenha apenas '0' ou NULL, reinicia o valor
    if (numAtual === "0" || numAtual === null) {
      numAtual = "";
    }

    //Caso o primeiro dígito for '.', concatena '0' antes do ponto
    if (numConcat === "." && numAtual === "") {
      return "0.";
    }

    //Caso '.' digitado e já contenha um ponto, apenas retornar
    if (numConcat === "." && numAtual.indexOf(".") > -1) {
      return numAtual;
    }

    return numAtual + numConcat;
  }

  return [calcular, concatenarNumero, SOMA, SUBTRACAO, MULTIPLICACAO, DIVISAO];
}

export default CalculadoraService;

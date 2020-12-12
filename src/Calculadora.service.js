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

  return [calcular, SOMA, SUBTRACAO, MULTIPLICACAO, DIVISAO];
}

export default CalculadoraService;

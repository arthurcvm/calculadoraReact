import { useState } from "react";
import "./Calculadora.css";
import { Jumbotron, Container, Row, Col, Button, Form } from "react-bootstrap";
import CalculadoraService from "./Calculadora.service";

function Calculadora() {
  const [
    calcular,
    concatenarNumero,
    SOMA,
    SUBTRACAO,
    MULTIPLICACAO,
    DIVISAO,
  ] = CalculadoraService();

  const [txtNumeros, setTxtNumeros] = useState("0");
  const [num1, setNum1] = useState("0");
  const [num2, setNum2] = useState(null);
  const [op, setOp] = useState(null);

  function adicionarNumero(numero) {
    let resultado;
    if (op === null) {
      resultado = concatenarNumero(num1, numero);
      setNum1(resultado);
    } else {
      resultado = concatenarNumero(num2, numero);
      setNum2(resultado);
    }
    setTxtNumeros(resultado);
  }

  function definirOperacao(operacao) {
    //Apenas define a operação caso ela não exista
    if (op === null) {
      setOp(operacao);
      return;
    }

    //Caso a operação estiver definida e num2 selecionado, realiza o calculo da operação
    if (num2 !== null) {
      const resultado = calcular(parseFloat(num1), parseFloat(num2), op);
      setOp(operacao);
      setNum1(resultado.toString());
      setNum2(null);
      setTxtNumeros(resultado.toString());
    }
  }

  function acaoCalcular() {
    if (num2 === null) {
      return;
    }
    const resultado = calcular(parseFloat(num1), parseFloat(num2), op);
    setTxtNumeros(resultado);
  }

  function limpar() {
    setTxtNumeros("0");
    setNum1("0");
    setNum2(null);
    setOp(null);
  }

  return (
    <Jumbotron
      style={{
        background: "transparent !important",
        backgroundColor: "#007BFF",
        padding: "5px",
        margin: "5px",
        width: "400px",
      }}
    >
      <Container>
        <Row>
          <Col xs="3">
            <Button variant="danger" onClick={limpar}>C</Button>
          </Col>
          <Col xs="9">
            <Form.Control
              type="text"
              name="txtNumeros"
              className="text-right"
              readOnly="readonly"
              value={txtNumeros}
              data-testid="txtNumeros"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="light" onClick={() => adicionarNumero("7")}>
              7
            </Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => adicionarNumero("8")}>
              8
            </Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => adicionarNumero("9")}>
              9
            </Button>
          </Col>
          <Col>
            <Button variant="warning" onClick={() => definirOperacao(DIVISAO)}>
              /
            </Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant="light" onClick={() => adicionarNumero("4")}>
              4
            </Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => adicionarNumero("5")}>
              5
            </Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => adicionarNumero("6")}>
              6
            </Button>
          </Col>
          <Col>
            <Button variant="warning" onClick={() => definirOperacao(MULTIPLICACAO)}>
              *
            </Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant="light" onClick={() => adicionarNumero("1")}>
              1
            </Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => adicionarNumero("2")}>
              2
            </Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => adicionarNumero("3")}>
              3
            </Button>
          </Col>
          <Col>
            <Button variant="warning" onClick={() => definirOperacao(SUBTRACAO)}>
              -
            </Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant="light" onClick={() => adicionarNumero("0")}>
              0
            </Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => adicionarNumero(".")}>
              .
            </Button>
          </Col>
          <Col>
            <Button variant="success" onClick={acaoCalcular}>
              =
            </Button>
          </Col>
          <Col>
            <Button variant="warning" onClick={() => definirOperacao(SOMA)}>
              +
            </Button>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Calculadora;

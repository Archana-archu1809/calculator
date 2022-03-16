import { Button, Row, Col } from "antd";
import { useState } from "react";

function Calculator() {
  const [result, setResult] = useState("");
  const handleClick = (value) => {
    setResult(result + value);
  };
  const Calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("error");
    }
  };

  return (
    <div
      type="flex"
      justify="center"
      align="middle"
      style={{
        minHeight: "100vh",
        margin: "100px",

        display: "flex",
        align: "center",
        justifyContent: "center",
      }}
    >
      <Row
        type="flex"
        justify="center"
        align="middle"
        style={{
          minHeight: "100vh",
          height: "540px",
          margin: "100px",
          padding: "100px",
        }}
      >
        <Col>{result}</Col>
        <Col>
          <Button onClick={() => setResult("")}>Clear</Button>
          <Button onClick={() => setResult(result.slice(0, -1))}>c</Button>
          <Button name="/" onClick={() => handleClick("/")}>
            /
          </Button>
        </Col>

        <Col>
          <Button onClick={() => handleClick("7")}>7</Button>
          <Button value="8" onClick={() => handleClick("8")}>
            8
          </Button>
          <Button value="9" onClick={() => handleClick("9")}>
            9
          </Button>
          <Button value="*" onClick={() => handleClick("*")}>
            *
          </Button>
        </Col>

        <Col>
          <Button value="4" onClick={() => handleClick("4")}>
            4
          </Button>
          <Button value="5" onClick={() => handleClick("5")}>
            5
          </Button>
          <Button value="6" onClick={() => handleClick("6")}>
            6
          </Button>
          <Button value="7" onClick={() => handleClick("7")}>
            -
          </Button>
        </Col>

        <Col>
          <Button value="1" onClick={() => handleClick("1")}>
            1
          </Button>
          <Button value="2" onClick={() => handleClick("2")}>
            2
          </Button>
          <Button value="3" onClick={() => handleClick("3")}>
            3
          </Button>
          <Button value="+" onClick={() => handleClick("+")}>
            +
          </Button>
        </Col>

        <Col>
          <Button>0</Button>
          <Button>.</Button>
          <Button onClick={Calculate}>=</Button>
        </Col>
      </Row>
    </div>
  );
}
export default Calculator;

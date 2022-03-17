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
    <>
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          top: "60px",

          position: "relative",
        }}
      >
        <Col>
          <h1>Calculator</h1>
        </Col>
      </Row>
      <div className="calculator">
        <input value={result} />

        <div className="keypad">
          <Button id="clear" onClick={() => setResult("")}>
            Clear
          </Button>
          <Button onClick={() => setResult(result.slice(0, -1))}>C</Button>
          <Button name="/" onClick={() => handleClick("/")}>
            /
          </Button>

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

          <Button value="4" onClick={() => handleClick("4")}>
            4
          </Button>
          <Button value="5" onClick={() => handleClick("5")}>
            5
          </Button>
          <Button value="6" onClick={() => handleClick("6")}>
            6
          </Button>
          <Button value="-" onClick={() => handleClick("-")}>
            -
          </Button>

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

          <Button value="0" onClick={() => handleClick("0")}>
            0
          </Button>
          <Button value="." onClick={() => handleClick(".")}>
            .
          </Button>
          <Button id="result" className="hightlight" onClick={Calculate}>
            =
          </Button>
        </div>
      </div>
    </>
  );
}
export default Calculator;

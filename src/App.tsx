import { useState } from "react";
import GlobalStyle1 from "./Styles/theme1";
import GlobalStyle2 from "./Styles/theme2";
import GlobalStyle3 from "./Styles/theme3";
import {
  Container,
  CalcContainer,
  Header,
  Input,
  ButtonContainer,
  Button,
  WrapperSwitch,
  Switch,
  Switcher,
  SwitcherContainer,
  Histories,
  History
} from "./App.style";

const App = () => {
  
  type History = {
      operation: string
      result: number
  }

  const [history, setHistory] = useState<Array<History>>([])
  const [value, setValue] = useState("");
  const [theme, setTheme] = useState(1);
  const [themeValue, setThemeValue] = useState("8%");
  const calc = () => {
    if (value.length >= 5 && value.slice(-1) !== " ") {
      const operation = value
      setValue(eval(value).toString());
      addHistory(operation, parseFloat(value))
    }
  };

  const addSimbol = (simbol: string) => {
    if (value.slice(-1) !== " " && value.slice(-1) !== ".") {
      setValue(value + simbol);
    }
  };

  const addZero = () => {
    if (value.slice(-1) === " " || value.length === 0) {
      setValue(value + "0.");
    } else {
      setValue(value + "0");
    }
  };

  const deleteValue = () => {
    if (value.slice(-1) === " ") {
      setValue(value.substring(0, value.length - 3));
    } else if (value.slice(-2) === "0.") {
      setValue(value.substring(0, value.length - 2));
    } else {
      setValue(value.substring(0, value.length - 1));
    }
  };

  const handleTheme = () => {
    if (theme === 1) {
      setTheme(2);
      setThemeValue("38%");
    } else if (theme === 2) {
      setTheme(3);
      setThemeValue("70%");
    } else {
      setTheme(1);
      setThemeValue("8%");
    }
  };

  const addHistory = (operation: string, result: number) => {
    history.push({operation, result})
    setHistory(history)
  }

  return (
    <>
      {theme === 1 && <GlobalStyle1 />}
      {theme === 2 && <GlobalStyle2 />}
      {theme === 3 && <GlobalStyle3 />}
      <Container>
        <CalcContainer>
          <Header>
            Calc
            <WrapperSwitch>
              theme
              <Switch>
                <div>
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                </div>
                <SwitcherContainer onClick={handleTheme}>
                  <Switcher theme={themeValue} />
                </SwitcherContainer>
              </Switch>
            </WrapperSwitch>
          </Header>
          <Input>{value}</Input>
          <ButtonContainer>
            <Button onClick={() => setValue(value + "7")}>7</Button>
            <Button onClick={() => setValue(value + "8")}>8</Button>
            <Button onClick={() => setValue(value + "9")}>9</Button>
            <Button
              onClick={() => value.length >= 1 && deleteValue()}
              color="var(--white)"
              bg="var(--key-background-dark-blue)"
              bdbox="var(--key-shadow-dark-blue)"
            >
              DEL
            </Button>
            <Button onClick={() => setValue(value + "4")}>4</Button>
            <Button onClick={() => setValue(value + "5")}>5</Button>
            <Button onClick={() => setValue(value + "6")}>6</Button>
            <Button onClick={() => value.length >= 1 && addSimbol(" + ")}>
              +
            </Button>
            <Button onClick={() => setValue(value + "1")}>1</Button>
            <Button onClick={() => setValue(value + "2")}>2</Button>
            <Button onClick={() => setValue(value + "3")}>3</Button>
            <Button onClick={() => value.length >= 1 && addSimbol(" - ")}>
              -
            </Button>
            <Button onClick={() => value.length >= 1 && addSimbol(".")}>.</Button>
            <Button onClick={() => addZero()}>0</Button>
            <Button onClick={() => value.length >= 1 && addSimbol(" / ")}>
              /
            </Button>
            <Button onClick={() => value.length >= 1 && addSimbol(" * ")}>
              x
            </Button>
            <Button
              gc="1/3"
              color="var(--white)"
              bg="var(--key-background-dark-blue)"
              bdbox="var(--key-shadow-dark-blue)"
              onClick={() => setValue("")}
            >
              RESET
            </Button>
            <Button
              gc="3/5"
              color={theme === 3 ? "black" : "var(--white)"}
              bg="var(--key-background-red)"
              bdbox="var(--key-shadow-dark-red)"
              onClick={calc}
            >
              =
            </Button>
          </ButtonContainer>
        </CalcContainer>
        <Histories>
          {history.map((el,index) => <History key={index}><p>{el.operation}</p><p>{el.result}</p></History>)}
        </Histories>
      </Container>
    </>
  );
};

export default App;

import styled from "styled-components";
import Timer from "./components/Timer";
import Result from "./components/Result";
import { GlobalStyle } from "./css/resetCSS";

const Title = styled.h1`
  font-size: 5rem;
font-weight: 700;
margin-top: 50px;
text-align: center;
`

const Container = styled.div`
  position: relative;
  max-height: 100vh;
`
function App() {

  return (
    <>

      <GlobalStyle />
      <Title>Pomodoro</Title>
      <Container >
        <Timer />
        <Result />
      </Container>
    </>
  )
}

export default App;

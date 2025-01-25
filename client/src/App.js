import styled from "styled-components";
import { MainLayout } from "./styles/Layouts";
import bg from './img/bg.png'
import Orb from "./components/Orb";

function App() {
  return (
    <AppStyled classname="App">
      <Orb />
      <MainLayout>

      </MainLayout>  
    </AppStyled>
  );
}

const AppStyled = styled.div`
    height: 100vh;
    background-image: url(${bg});
    position: relative;
  `

export default App;

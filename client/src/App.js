import styled from "styled-components";
import { MainLayout } from "./styles/Layouts";
import bg from './img/bg.png'
import Orb from "./components/Orb";
import Navigation from "./components/Navigation";
import { useState } from "react";


function App() {
  const [active, setActive] = useState(1);
  return (
    <AppStyled classname="App">
      <Orb />
      <MainLayout>
        <Navigation active={active} setActive={setActive}/>
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

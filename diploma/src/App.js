import "./App.css";
import styled from "styled-components";
import { Header } from "./components/header/Header";
import title from "./img/photo/title.jpg";
import { Cost } from "./components/cost/Cost";
import { Main } from "./components/main/Main";
import { BrowserRouter, NavLink, Redirect, Route } from "react-router-dom";
import { Posters } from "./components/posters/Posters";
import { Admin } from "./components/admin/Admin";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Container>
          <Header />
          <BackGround background={title}>
            <Route path="/main" component={Main} />
            <Route path="/cost" component={Cost} />
            <Route path="/posters" component={Posters} />
            <Route path="/admin" component={Admin} />
          </BackGround>
          <div>Ближайшие выступления</div>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;

const Container = styled.div`
  width: 1100px;
  margin: auto;
`;
const BackGround = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 650px;
  background-image: url(${({ background }) => background});
  background-size: contain;
  background-repeat: no-repeat;
`;

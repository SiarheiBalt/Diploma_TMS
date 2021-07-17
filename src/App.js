import "./App.css";
import styled from "styled-components";
import { Header } from "./components/Header/Header";
import { Cost } from "./components/Cost/Cost";
import { Main } from "./components/Main/Main";
import { BrowserRouter, NavLink, Redirect, Route } from "react-router-dom";
import { Posters } from "./components/Posters/Posters";
import { Admin } from "./components/Admin/Admin";
import { SongList } from "./components/SongList/SongList";
import { Reviews } from "./components/Reviews/Reviews";
import { RevieweForm } from "./components/Reviews/RevieweForm";
import { Media } from "./components/Media/Media";
import { Articles } from "./components/Articles/Articles";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Container>
          <Route exact path="/Diploma_TMS">
            <Redirect to="/main" />
          </Route>
          <Route exact path="/">
            <Redirect to="/main" />
          </Route>
          <Route path="/main" component={Main} />
          <Route path="/cost" component={Cost} />
          <Route path="/posters" component={Posters} />
          <Route path="/admin" component={Admin} />
          <Route path="/songs" component={SongList} />
          <Route path="/reviews" component={Reviews} />
          <Route path="/put-reviews" component={RevieweForm} />
          <Route path="/media" component={Media} />
          <Route path="/articles" component={Articles} />
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;

const Container = styled.div`
  max-width: 1100px;
  margin: auto;
  background-color: whitesmoke;
`;

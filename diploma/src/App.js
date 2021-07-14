import "./App.css";
import styled from "styled-components";
import { Header } from "./components/header/Header";
import { Cost } from "./components/cost/Cost";
import { Main } from "./components/main/Main";
import { BrowserRouter, NavLink, Redirect, Route } from "react-router-dom";
import { Posters } from "./components/posters/Posters";
import { Admin } from "./components/admin/Admin";
import { SongList } from "./components/songList/SongList";
import { Reviews } from "./components/reviews/Reviews";
import { RevieweForm } from "./components/reviews/RevieweForm";
import { Media } from "./components/media/Media";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Container>
          <Header />

          <Route path="/main" component={Main} />
          <Route path="/cost" component={Cost} />
          <Route path="/posters" component={Posters} />
          <Route path="/admin" component={Admin} />
          <Route path="/songs" component={SongList} />
          <Route path="/reviews" component={Reviews} />
          <Route path="/put-reviews" component={RevieweForm} />
          <Route path="/media" component={Media} />
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;

const Container = styled.div`
  max-width: 1100px;
  margin: auto;
`;

import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <Head>
      <Container>
        <Flex>
          <div className="link">
            <NavLink to="/main" activeClassName="activ">
              Главная
            </NavLink>
          </div>
          <div className="link">
            <NavLink className="link" to="/cost" activeClassName="activ">
              Стоимость
            </NavLink>
          </div>
          <div className="link">
            <NavLink className="link" to="/posters" activeClassName="activ">
              Афиша
            </NavLink>
          </div>
          <div className="link">
            <NavLink className="link" to="/songs" activeClassName="activ">
              Репертуар
            </NavLink>
          </div>
          <div className="link">
            <NavLink className="link" to="/reviews" activeClassName="activ">
              Отзывы
            </NavLink>
          </div>
          <div className="link">
            <NavLink className="link" to="/media" activeClassName="activ">
              Media
            </NavLink>
          </div>
          <div className="link">
            <NavLink className="link" to="/articles" activeClassName="activ">
              Статьи
            </NavLink>
          </div>
        </Flex>
      </Container>
    </Head>
  );
};

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 50px;
  .link a {
    text-decoration: none;
    font-weight: 600;
    color: whitesmoke;
  }
  .link a:hover {
    background-color: #bbdefb;
    color: black;
  }
  .link a.activ {
    color: black;
    background-color: whitesmoke;
  }
`;

const Container = styled.div`
  max-width: 1100px;
  margin: auto;
  opacity: 90%;
`;

const Head = styled.div`
  position: sticky;
  top: 0px;
  z-index: 1;
  background-color: black;
  opacity: 84%;
  @media (max-width: 550px) {
    font-size: 0.75em;
  }
`;

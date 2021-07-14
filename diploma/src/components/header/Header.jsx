import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <Flex>
      <NavLink to="/main">Главная</NavLink>
      <NavLink to="/cost">Стоимость</NavLink>
      <NavLink to="/posters">Афиша</NavLink>
      <NavLink to="/songs">Репертуар</NavLink>
      <NavLink to="/reviews">Отзывы</NavLink>
      <NavLink to="/media">Media</NavLink>

      <div>Статьи</div>
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 50px;
`;

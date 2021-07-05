import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <Flex>
      <NavLink to="/main">Главная</NavLink>
      <NavLink to="/cost">Стоимость</NavLink>
      <div>Афиша</div>
      <div>Репертуар</div>
      <div>Отзывы</div>
      <div>Media</div>
      <div>Контакты</div>
      <div>Статьи</div>
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 40px;
`;

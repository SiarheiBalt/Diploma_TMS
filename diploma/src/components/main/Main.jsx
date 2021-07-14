import styled from "styled-components";
import { Mask } from "../../common/style";
import title from "./../../img/background/title.jpg";

export const Main = () => {
  return (
    <BackGround background={title}>
      <MainDiv>Main</MainDiv>
    </BackGround>
  );
};

const MainDiv = styled.div`
  color: white;
  font-size: 4em;
`;

const BackGround = styled.div`
  background-image: url(${({ background }) => background});
  background-size: cover;
  padding: 20px 0;
`;

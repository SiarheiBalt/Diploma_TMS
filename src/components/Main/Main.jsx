import styled from "styled-components";
import { Mask } from "../../common/style";
import title from "./../../img/background/title.jpg";
import { Description } from "./Description";
import { Footer } from "./Footer";
import { Logo } from "./Logo";
import { NearShow } from "./NearShow";
import { Phone } from "./Phone";
import { Social } from "./Social";

export const Main = () => {
  return (
    <Mask>
      <BackGround background={title}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Logo />
          <Social />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Phone />
        </div>
        <Description />
      </BackGround>
      <NearShow />
      <Footer />
    </Mask>
  );
};

const BackGround = styled.div`
  background-image: url(${({ background }) => background});
  background-size: cover;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  align-content: space-around;
  justify-content: space-around;
  height: 600px;
`;

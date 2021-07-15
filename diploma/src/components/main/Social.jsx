import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faVk } from "@fortawesome/free-brands-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";

export const Social = () => {
  const vk = (
    <FontAwesomeIcon
      style={{ width: "40px", height: "30px", color: "rgb(67, 136, 237)" }}
      icon={faVk}
    />
  );
  const insta = <FontAwesomeIcon className="insta" icon={faInstagramSquare} />;

  return (
    <Wrapper>
      <div>Мы в соцсетях</div>
      <div>
        <a href={"https://vk.com/navigatorcoverband"} target={"_blank"}>
          {vk}
        </a>
        <a href={"https://www.instagram.com/navigator_band/"} target={"_blank"}>
          {insta}
        </a>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: whitesmoke;
  border-radius: 3px;
  height: 34px;
  width: 200px;
  font-weight: 650;
  .insta {
    width: 28px;
    height: 25px;
    background: radial-gradient(
        circle farthest-corner at 35% 90%,
        #fec564,
        transparent 50%
      ),
      radial-gradient(
        circle farthest-corner at 0 140%,
        #fec564,
        transparent 50%
      ),
      radial-gradient(
        ellipse farthest-corner at 0 -25%,
        #5258cf,
        transparent 50%
      ),
      radial-gradient(
        ellipse farthest-corner at 20% -50%,
        #5258cf,
        transparent 50%
      ),
      radial-gradient(
        ellipse farthest-corner at 100% 0,
        #893dc2,
        transparent 50%
      ),
      radial-gradient(
        ellipse farthest-corner at 60% -20%,
        #893dc2,
        transparent 50%
      ),
      radial-gradient(
        ellipse farthest-corner at 100% 100%,
        #d9317a,
        transparent
      ),
      linear-gradient(
        #6559ca,
        #bc318f 30%,
        #e33f5f 50%,
        #f77638 70%,
        #fec66d 100%
      );

    border-radius: 0.2em;
    font-size: $size;
  }
`;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { faViber } from "@fortawesome/free-brands-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

export const Phone = () => {
  const pngPhone = (
    <FontAwesomeIcon
      style={{ width: "40px", height: "30px" }}
      icon={faMobileAlt}
    />
  );
  const viber = (
    <FontAwesomeIcon
      style={{
        width: "25px",
        color: "rgb(121, 59, 170)",
        margin: "0 3px",
      }}
      icon={faViber}
    />
  );
  const telegram = (
    <FontAwesomeIcon
      style={{
        width: "25px",
        height: "20px",
        color: "rgb(34, 155, 211)",
        margin: "0 3px",
      }}
      icon={faTelegram}
    />
  );

  return (
    <Wrapper>
      <div>{pngPhone}</div>
      <div>+37544-779-48-15</div>
      <div>
        {viber}
        {telegram}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: whitesmoke;
  width: 270px;
  height: 40px;
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 1.1em;
  color: #1d1d1d;
  box-shadow: 0 0 25px rgb(0 0 0 / 60%);
  border-radius: 20px;
  border: solid 1px mediumspringgreen;
`;

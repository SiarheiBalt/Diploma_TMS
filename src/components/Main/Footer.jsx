import styled from "styled-components";

export const Footer = () => {
  return (
    <Wrapper>
      <div style={{ color: "#c9c9c9", margin: "auto" }}>
        navigatorcover@gmail.com
      </div>
      <div style={{ color: "#c9c9c9", fontSize: "0.75Em", margin: "auto" }}>
        Copyright © 2021
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: black;
  height: 80px;
  display: flex;
    justify-content: space-between;
    align-content: center;
}
`;

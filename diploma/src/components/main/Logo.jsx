import styled from "styled-components";

export const Logo = () => {
  return (
    <Wrapper>
      <div
        style={{ color: "whitesmoke", fontSize: "2.2Em", fontWeight: "800" }}
      >
        NAVIGATOR
      </div>
      <div style={{ color: "whitesmoke" }}>__________coverBand_________</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: black;
  max-width: 220px;
  border-radius: 3px;
  padding: 5px;
`;

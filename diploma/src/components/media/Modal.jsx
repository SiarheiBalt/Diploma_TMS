import styled from "styled-components";

export const Modal = ({ img, closeModal }) => {
  return (
    <Background onClick={closeModal}>
      <div>
        <img style={{ width: "950px", cursor: "pointer" }} src={img} alt="" />
      </div>
    </Background>
  );
};

const Background = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #000000cc;
  display: flex;
  align-items: center;
  justify-content: center;
`;

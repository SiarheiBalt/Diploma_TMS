import styled from "styled-components";

export const Modal = ({ img, closeModal }) => {
  return (
    <Background onClick={closeModal}>
      <div>
        <img className={"img"} src={process.env.PUBLIC_URL + img} alt="" />
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
  & .img {
    cursor: pointer;
    width: 950px;
    @media (max-width: 1000px) {
      width: 800px;
    }
    @media (max-width: 800px) {
      width: 600px;
    }
    @media (max-width: 600px) {
      width: 400px;
    }
  }
`;

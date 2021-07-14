import { useSelector } from "react-redux";
import styled from "styled-components";
import { Mask } from "../../common/style";

export const Media = () => {
  const state = useSelector((state) => state.mediaReducer);
  console.log(state);
  return (
    <Wrapper>
      <Images>
        {state.wideImg.map((el, i) => (
          <img src={el.link} style={el.styleWideImg} key={i} />
        ))}
      </Images>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
`;

const Images = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

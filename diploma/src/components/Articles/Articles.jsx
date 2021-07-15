import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Mask } from "../../common/style";
import { Footer } from "../Main/Footer";

export const Articles = () => {
  const state = useSelector((state) => state.mediaReducer.articles);

  return (
    <div>
      <Wrapper>
        <Mask>
          <div style={{ marginBottom: "20px" }}>
            {state.map((el, i) => (
              <div key={i}>
                <h4 style={{ textAlign: "center" }}>{el.title}</h4>
                <div>{el.text}</div>
                <img src={el.picture} style={el.pictureStyle} alt="" />
              </div>
            ))}
          </div>
        </Mask>
      </Wrapper>
      <Footer />
    </div>
  );
};

const Wrapper = styled.div``;

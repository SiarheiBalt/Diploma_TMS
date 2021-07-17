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
                <h4 style={{ textAlign: "center", margin: "0" }}>{el.title}</h4>
                <div
                  style={{ margin: "0 10px 0 10px" }}
                  dangerouslySetInnerHTML={el.text()}
                />
                <img
                  src={process.env.PUBLIC_URL + el.picture}
                  style={el.pictureStyle}
                  alt=""
                />
              </div>
            ))}
          </div>
        </Mask>
      </Wrapper>
      <Footer />
    </div>
  );
};

const Wrapper = styled.div`
  padding-top: 30px;
  p {
    text-indent: 20px;
  }
`;

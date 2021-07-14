import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { ACTIONS } from "../../redux/reducers/constans";

export const NearShow = () => {
  const dispatch = useDispatch();

  const state = useSelector((state) => state.posterReducer.posters);
  useEffect(() => {
    state === null && dispatch({ type: ACTIONS.GET_POSTERS_DB });
  }, []);

  console.log(state === null);
  return (
    <Wrapper>
      <div style={{ fontWeight: "700" }}>Ближайшее выступление:</div>
      <div style={{ fontSize: "0.9Em" }}>
        {state !== null &&
          state.map((poster, i) => i === 0 && <div key={i}>{poster.el}</div>)}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: whitesmoke;
  max-width: 500px;
  border-radius: 3px;
  padding: 2px 5px;
`;

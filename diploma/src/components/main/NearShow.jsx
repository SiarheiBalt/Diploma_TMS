import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { ACTIONS } from "../../redux/reducers/constans";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGuitar } from "@fortawesome/free-solid-svg-icons";

export const NearShow = () => {
  const guitar = (
    <FontAwesomeIcon style={{ marginRight: "5px" }} icon={faGuitar} />
  );

  const dispatch = useDispatch();

  const state = useSelector((state) => state.posterReducer.posters);
  useEffect(() => {
    state === null && dispatch({ type: ACTIONS.GET_POSTERS_DB });
  }, []);

  return (
    <Wrapper>
      <h4 style={{ fontWeight: "700" }}> {guitar}Ближайшее выступление:</h4>

      <Flex>
        {state !== null &&
          state.map(
            (poster, i) =>
              i === 0 && (
                <div
                  style={{
                    backgroundColor: "lightblue",
                    backgroundColor: "lightblue",
                    boxShadow: "0 0 15px rgb(0 0 0 / 20%)",
                    fontWeight: "550",
                  }}
                  key={i}
                >
                  {poster.el}
                </div>
              )
          )}
      </Flex>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: whitesmoke;
  padding: 2px 5px;
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

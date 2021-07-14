import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Mask } from "../../common/style";
import { ACTIONS } from "../../redux/reducers/constans";
import { AddFormPoster } from "./AddPosterForm";
import { Poster } from "./Poster";
import title from "./../../img/background/title.jpg";

export const Posters = () => {
  const state = useSelector((state) => state.posterReducer);
  const acces = useSelector((state) => state.authReducer.admin.accesForEdit);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: ACTIONS.GET_POSTERS_DB });
  }, []);

  const removePoster = (id) => {
    dispatch({ type: ACTIONS.REMOVE_POSTER, id });
  };

  return (
    <BackGround background={title}>
      <Mask>
        <Wrapper>
          <img
            src="/pictures/images/posters1.jpg"
            style={{ borderRadius: "3px" }}
            alt=""
          />
          <div>
            <h3>Афишка</h3>
          </div>
          <div>
            {state.posters === null ? (
              <div>PRELOADER</div>
            ) : (
              <ul>
                {state.posters.map((poster, i) => (
                  <Poster
                    removePoster={removePoster}
                    key={i}
                    poster={poster.el}
                    acces={acces}
                    id={poster.id}
                  />
                ))}
              </ul>
            )}

            {acces && <AddFormPoster />}
          </div>
        </Wrapper>
      </Mask>
    </BackGround>
  );
};

const BackGround = styled.div`
  background-image: url(${({ background }) => background});
  background-size: cover;
  padding: 20px 0;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

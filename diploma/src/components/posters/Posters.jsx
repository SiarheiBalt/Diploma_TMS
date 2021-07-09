import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Mask } from "../../common/style";
import { ACTIONS } from "../../redux/reducers/constans";
import { AddFormPoster } from "./AddPosterForm";
import { Poster } from "./Poster";

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
    <div>
      <Mask>
        <h3>Афишка</h3>
        <div>
          {state.posters === null ? (
            <div>PRELOADER</div>
          ) : (
            <ul>
              {state.posters.map((poster, i) => (
                <Poster
                  removePoster={removePoster}
                  key={i}
                  poster={poster.poster}
                  acces={acces}
                  id={poster.id}
                />
              ))}
            </ul>
          )}

          {acces && <AddFormPoster />}
        </div>
      </Mask>
    </div>
  );
};

import { Mask } from "../../common/style";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ACTIONS } from "../../redux/reducers/constans";
import { useState } from "react";
import { AddSongForm } from "./AddSongForm";
import { Footer } from "../Main/Footer";
import { Preloader } from "../Preloader/Preloader";

export const SongList = () => {
  const list = useSelector((state) => state.songsReducer);
  const acces = useSelector((state) => state.authReducer.admin.accesForEdit);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: ACTIONS.GET_DATA_DB_SONGS });
  }, []);

  const removeSong = (type, songId) => () => {
    let song = {
      type,
      songId,
    };
    dispatch({ song, type: ACTIONS.REMOVE_SONG });
  };

  return (
    <div>
      <Mask>
        {acces && <AddSongForm dispatch={dispatch} />}
        {list.eng === null ? (
          <Preloader />
        ) : (
          <Wrapper>
            <div>
              <h4>Eng</h4>
              {list.eng.map((song, i) => (
                <div key={i}>
                  {song.el}{" "}
                  {acces && (
                    <button onClick={removeSong("eng", song.id)}>dell</button>
                  )}
                </div>
              ))}
            </div>
            <div>
              <h4>Ru</h4>
              {list.ru.map((song, i) => (
                <div key={i}>
                  {song.el}{" "}
                  {acces && (
                    <button onClick={removeSong("ru", song.id)}>dell</button>
                  )}
                </div>
              ))}
            </div>
            <div>
              <h4>By/Uk</h4>
              {list.byUk.map((song, i) => (
                <div key={i}>
                  {song.el}{" "}
                  {acces && (
                    <button onClick={removeSong("byUk", song.id)}>dell</button>
                  )}
                </div>
              ))}
            </div>
          </Wrapper>
        )}
      </Mask>
      <Footer />
    </div>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 5px 3px 25px 3px;
  @media (max-width: 550px) {
    font-size: 0.55em;
  }
`;

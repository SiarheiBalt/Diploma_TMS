import { actionChannel } from "redux-saga/effects";
import { getObjFromArray, sortDataSong } from "../../common/functions";
import { ACTIONS } from "./constans";

const defaultState = {
  eng: null,
  ru: null,
  byUk: null,
};

export const songsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.GET_DATA_DB_SONGS:
      return { ...state };
    case ACTIONS.GET_DATA_DB_SONGS_SUCCES:
      let eng = getObjFromArray(action.songs.eng);
      eng = sortDataSong(eng);
      let ru = getObjFromArray(action.songs.ru);
      ru = sortDataSong(ru);
      let byUk = getObjFromArray(action.songs.byUk);
      byUk = sortDataSong(byUk);

      let obj = {
        eng,
        ru,
        byUk,
      };

      return {
        ...state,
        ...obj,
      };

    case ACTIONS.PUSH_SONG:
      return { ...state };
    case ACTIONS.REMOVE_SONG:
      return { ...state };
    default:
      return state;
  }
};

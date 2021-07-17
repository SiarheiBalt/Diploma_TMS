import { getObjFromArray } from "../../common/functions";
import { ACTIONS } from "./constans";

const defaultState = {
  posters: null,
};

export const posterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.GET_POSTERS_DB_SUCCES:
      let posters = getObjFromArray(action.posters);
      return { ...state, posters };
    case ACTIONS.GET_POSTERS_DB:
      return { ...state };
    case ACTIONS.PUSH_POSTER:
      return { ...state };
    case ACTIONS.REMOVE_POSTER:
      return { ...state };

    default:
      return state;
  }
};

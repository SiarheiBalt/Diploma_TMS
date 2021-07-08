import { ACTIONS } from "./constans";

const defaultState = {
  posters: null,
  accesForEdit: true,
};

export const posterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.GET_POSTERS_DB_SUCCES:
      let posters = Object.entries(action.posters);
      let posterData = posters.map(([id, poster]) => {
        return { id, poster };
      });
      return { ...state, posters: posterData };
    case ACTIONS.GET_POSTERS_DB:
      return { ...state };
    case ACTIONS.PUSH_POSTER:
      return { ...state };
    case ACTIONS.REMOVE_POSTER:
      return { ...state };
    case ACTIONS.REMOVE_POSTER_SUCCES:
      return { ...state };

    default:
      return state;
  }
};

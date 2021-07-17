import { getObjFromArray } from "../../common/functions";
import { ACTIONS } from "./constans";

const defaultState = {
  reviewes: null,
  acces: false,
};

export const reviewsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.GET_REVIEWS:
      return { ...state };
    default:
      return { ...state };
    case ACTIONS.GET_REVIEWS_SUCCES:
      let reviewes = getObjFromArray(action.reviewes);

      return { ...state, reviewes };
    case ACTIONS.SEND_EMAIL:
      return { ...state };
    case ACTIONS.SEND_REVIEWE:
      return { ...state };
    case ACTIONS.REVIEWE_ACCES:
      return { ...state, acces: true };
    case ACTIONS.REVIEWE_NOTALLOWED_ACCES:
      return { ...state, acces: false };
    case ACTIONS.SIGN_USER:
      return { ...state };
    case ACTIONS.PUSH_REVIEWE:
      return { ...state };
  }
};

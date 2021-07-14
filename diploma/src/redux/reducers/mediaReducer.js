import { ACTIONS } from "./constans";

const styleWideImg = {
  width: "530px",
  height: "320px",
  objectFit: "cover",
  borderRadius: "3px",
  margin: " 10px auto",
};

const defaultState = {
  wideImg: [
    { link: "/pictures/1W.jpg", styleWideImg },
    { link: "/pictures/2W.jpg", styleWideImg },
    { link: "/pictures/3W.jpg", styleWideImg },
    { link: "/pictures/4W.jpg", styleWideImg },
    { link: "/pictures/5W.jpg", styleWideImg },
    { link: "/pictures/6W.jpg", styleWideImg },
  ],
};

export const mediaReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.GET_MEDIA:
      return { ...state };

    default:
      return state;
  }
};

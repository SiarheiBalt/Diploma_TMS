import { ACTIONS } from "./constans";

const defaultState = {
  admin: {
    accesForEdit: false,
    login: "admin",
    password: "12345",
  },
};

export const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.CHECK_LOGIN_PASSWORD_ADMIN:
      return {
        ...state,
        login: "admin",
        password: "12345",
        accesForEdit:
          action.login === state.admin.login &&
          action.password === state.admin.password
            ? true
            : false,
      };

    default:
      return { ...state };
  }
};

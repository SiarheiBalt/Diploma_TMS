import { InitializeFirebase } from "../fireBaseFunctions";
import { ACTIONS } from "./constans";

InitializeFirebase();

const defaultState = {
  admin: {
    accesForEdit: false,
    responseAuthUid: "44sgJBnIiNgUQRwtvhPU8XfWZcu1",
    error: null,
  },
};

export const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.CHECK_LOGIN_PASSWORD_ADMIN_CUCCES:
      if (action.responseAuthUid === state.admin.responseAuthUid) {
        let admin = {
          accesForEdit: true,
          responseAuthUid: state.admin.responseAuthUid,
          error: null,
        };
        return { ...state, admin };
      } else {
        let admin = {
          accesForEdit: false,
          responseAuthUid: state.admin.responseAuthUid,
          error: action.responseAuthUid.code,
        };
        return { ...state, admin };
      }
    case ACTIONS.SIGN_OUT_ADMIN_SUCCES:
      let admin = {
        accesForEdit: false,
        responseAuthUid: state.admin.responseAuthUid,
        error: state.admin.error,
      };

      return { ...state, admin };

    default:
      return { ...state };
  }
};

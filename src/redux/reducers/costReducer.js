import { ACTIONS } from "./constans";

const defaultState = {
  userDataForPaymentCost: {
    dayOfWeek: "",
    distance: "",
    hasEquip: null,
  },
  dbDataForPaymentCost: {
    cost: 0,
    road: 0,
    withEquip: null,
  },
  dataForPayment: {
    wasPayment: false,
    finallyCost: 0,
  },
};

export const costReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.GET_DATA_USERS_COST:
      let userDataForPaymentCost = {
        dayOfWeek: action.costData.dayOfWeek,
        distance: +action.costData.distance,
        hasEquip: action.costData.hasEquip,
      };
      return { ...state, userDataForPaymentCost };
    case ACTIONS.GET_DATA_DB_COST:
      return { ...state, dbDataForPaymentCost: action.paymentCostDb };
    case ACTIONS.PAYMENT_BAND_COST:
      return { ...state };
    case ACTIONS.SET_BAND_COST:
      let db = state.dbDataForPaymentCost;
      let user = state.userDataForPaymentCost;
      let finallyCost =
        db.cost +
        user.distance * db.road +
        (!user.hasEquip ? db.withEquip : 0) +
        (user.dayOfWeek === 5 || user.dayOfWeek === 6 ? 100 : 0);
      let dataForPayment = { wasPayment: true, finallyCost };
      return { ...state, dataForPayment };
    case ACTIONS.CHANGE_WAS_PAYMENT: {
      let dataForPayment = { wasPayment: false, finallyCost: 0 };
      return { ...state, dataForPayment };
    }
    default:
      return state;
  }
};

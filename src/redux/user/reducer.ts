import { UserState, initialState } from "./declarations";
import { UserAction } from "./actionsCreators";
import { ActionTypes } from "./actionsTypes";

export const userReducer = (
  state: UserState = initialState,
  action: UserAction,
): UserState => {
  switch (action.type) {
    case ActionTypes.LOGOUT:
      return {
        ...state,
        isLogined: false,
        email: null,
        token: null,
        name: null,
      };

    case ActionTypes.LOGIN:
      return {
        ...state,
        isLogined: true,
        ...action.payload,
      };

    case ActionTypes.SET_NEW_USER_INFO:
      return {
        ...state,
        ...action.payload,
      };

    case ActionTypes.UPDATE_IS_LOADING_STATUS:
      return {
        ...state,
        isLoading: action.payload,
      };

    default:
      return state;
  }
};

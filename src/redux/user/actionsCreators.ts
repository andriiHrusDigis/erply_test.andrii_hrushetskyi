import { Dispatch } from "react";
import { getRandomInt } from "../../utils/getRandomInt";
import { getUserSimulator } from "../../utils/getUserSimulator";
import { updateUserSimulator } from "../../utils/updateUserSimulator";
import { ActionTypes } from "./actionsTypes";

// login
interface LoginAction {
  type: ActionTypes.LOGIN;
  payload: {
    email: string;
    token: string;
    name: string;
  };
}

export const login = (email: string, token: string): LoginAction => {
  const name = `user${getRandomInt(10000)}`;

  localStorage.setItem("_s_email", email);
  localStorage.setItem("_s_token", token);
  localStorage.setItem("_s_name", name);

  return {
    type: ActionTypes.LOGIN,
    payload: {
      email,
      token,
      name,
    },
  };
};

// log out
interface LogoutAction {
  type: ActionTypes.LOGOUT;
}

export const logout = (): LogoutAction => {
  localStorage.removeItem("_s_email");
  localStorage.removeItem("_s_token");

  return {
    type: ActionTypes.LOGOUT,
  };
};

// update user info
interface SetNewUserInfoAction {
  type: ActionTypes.SET_NEW_USER_INFO;
  payload: {
    name: string;
    email: string;
    token: string;
  };
}

export const setNewUserInfo = (
  name: string,
  email: string,
  token: string,
): SetNewUserInfoAction => {
  return {
    type: ActionTypes.SET_NEW_USER_INFO,
    payload: {
      name,
      email,
      token,
    },
  };
};

// update is loading status
interface UpdateLoadingStatusAction {
  type: ActionTypes.UPDATE_IS_LOADING_STATUS;
  payload: boolean;
}

const updateIsLoadingStatus = (status: boolean): UpdateLoadingStatusAction => {
  return {
    type: ActionTypes.UPDATE_IS_LOADING_STATUS,
    payload: status,
  };
};

// update user info
export const updateUserInfo =
  (name: string, email: string, token: string) =>
  async (
    dispatch: Dispatch<SetNewUserInfoAction | UpdateLoadingStatusAction>,
  ) => {
    dispatch(updateIsLoadingStatus(true));

    try {
      await updateUserSimulator(name, email, token);

      const updatedUserInfo = await getUserSimulator(name, token);

      dispatch(
        setNewUserInfo(
          updatedUserInfo.name,
          updatedUserInfo.email,
          updatedUserInfo.token,
        ),
      );

      dispatch(updateIsLoadingStatus(false));

      alert("Information successfully updated");
    } catch {
      alert("unknown error happened");
    }
  };

// action creator type
export type UserAction =
  | LoginAction
  | LogoutAction
  | SetNewUserInfoAction
  | UpdateLoadingStatusAction;

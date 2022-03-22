export interface UserState {
  isLogined: boolean | null;
  isLoading: boolean;
  email: string | null;
  token: string | null;
  name: string | null;
}

const name: string | null = localStorage.getItem("_s_name");
const email: string | null = localStorage.getItem("_s_email");
const token: string | null = localStorage.getItem("_s_token");

export const initialState: UserState = {
  isLogined: !!(email && token),
  isLoading: false,
  email,
  token,
  name,
};

export const updateUserSimulator = (
  name: string,
  email: string,
  token: string,
) =>
  new Promise((resolve) =>
    setTimeout(() => {
      localStorage.setItem("_s_name", name);
      localStorage.setItem("_s_email", email);
      localStorage.setItem("_s_token", token);
      resolve("success");
    }, 500),
  );

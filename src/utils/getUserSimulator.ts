export const getUserSimulator = (
  email: string,
  token: string,
): Promise<{ name: string; email: string; token: string }> =>
  new Promise((resolve) =>
    setTimeout(() => {
      const name: string = localStorage.getItem("_s_name") as string;
      const email: string = localStorage.getItem("_s_email") as string;
      const token: string = localStorage.getItem("_s_token") as string;

      resolve({
        name,
        email,
        token,
      });
    }, 500),
  );

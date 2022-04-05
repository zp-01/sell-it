import clien from "./client";

const register = (pushToken) =>
  clien.post("/expoPushTokens", { token: pushToken });

export default {
  register,
};

import { deleteItemAsync, getItemAsync, setItemAsync } from "expo-secure-store";
import jwtDecode from "jwt-decode";

const key = "authToken";

const getUser = async () => {
  const token = await getToken();
  return token ? jwtDecode(token) : null;
};

const getToken = async () => {
  try {
    return await getItemAsync(key);
  } catch (error) {
    console.log("Error getting the auth token", error);
  }
};

const removeToken = async () => {
  try {
    deleteItemAsync(key);
  } catch (error) {
    console.log("Error removing the auth token", error);
  }
};

const storeToken = async (authToken) => {
  try {
    await setItemAsync(key, authToken);
  } catch (error) {
    console.log("Error storing the token", error);
  }
};

export default {
  getToken,
  getUser,
  storeToken,
  removeToken,
};

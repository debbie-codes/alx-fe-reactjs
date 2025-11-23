import axios from "axios";

const API_URL = "https://api.github.com/users/";

const token = import.meta.env.VITE_GITHUB_API_KEY;

export const searchUser = async (username) => {
  const response = await axios.get(API_URL + username, {
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  });

  return response.data;
};

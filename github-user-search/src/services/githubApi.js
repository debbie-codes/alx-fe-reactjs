import axios from "axios";

const API_KEY = import.meta.env.VITE_GITHUB_API_KEY;
const BASE_URL = "https://api.github.com/users/";


export const searchUser = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}${username}`, {
      headers: {
        Authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY || ""}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching GitHub user:", error);
    return null;
  }
};

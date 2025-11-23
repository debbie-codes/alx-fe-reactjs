import axios from "axios";

const BASE_URL = "https://api.github.com";


export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
};


export const advancedUserSearch = async ({ username, location, minRepos, page = 1 }) => {
  try {
    let query = "";

    if (username) query += `${username} `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>${minRepos}`;

    const response = await axios.get(
      `${BASE_URL}/search/users?q=${encodeURIComponent(query)}&page=${page}&per_page=10`
    );

    return {
      users: response.data.items,
      total: response.data.total_count
    };
  } catch (error) {
    console.error("Advanced search error:", error);
    return { users: null, total: 0 };
  }
};

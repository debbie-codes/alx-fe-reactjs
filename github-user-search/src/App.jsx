import { useState } from "react";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import { searchUser } from "./services/githubApi";

function App() {
  const [user, setUser] = useState(null);

  const handleSearch = async (username) => {
    const data = await searchUser(username);
    setUser(data);
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>GitHub User Search</h1>
      <Search />
    </div>
  );
}



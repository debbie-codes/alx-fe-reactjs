import { useState } from "react";
import { advancedUserSearch } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setResults([]);

    const { users, total } = await advancedUserSearch({
      username,
      location,
      minRepos,
      page: 1
    });

    // ✅ Corrected error message and condition
    if (!users || users.length === 0) {
      setError("Looks like we cant find the user");
    } else {
      setResults(users);
      setTotalCount(total);
      setPage(1);
    }

    setLoading(false);
  };

  const loadMore = async () => {
    const nextPage = page + 1;

    const { users } = await advancedUserSearch({
      username,
      location,
      minRepos,
      page: nextPage
    });

    if (users && users.length > 0) {
      setResults((prev) => [...prev, ...users]);
      setPage(nextPage);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Advanced GitHub User Search</h1>

      {/* Search Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md space-y-4"
      >
        <div>
          <label className="block font-semibold mb-1">Username</label>
          <input
            type="text"
            className="w-full border rounded p-2"
            placeholder="Enter username (optional)"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Location</label>
          <input
            type="text"
            className="w-full border rounded p-2"
            placeholder="e.g., Kenya, USA, London"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Minimum Public Repositories</label>
          <input
            type="number"
            className="w-full border rounded p-2"
            placeholder="e.g., 10"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
          />
        </div>

        <button
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          type="submit"
        >
          Search
        </button>
      </form>

      {/* Loading */}
      {loading && <p className="text-center mt-4">Loading...</p>}

      {/* Error */}
      {error && <p className="text-center text-red-500 mt-4">{error}</p>}

      {/* Results */}
      <div className="mt-8 space-y-4">
        {results.map((user) => (
          <div
            key={user.id}
            className="flex items-center bg-white p-4 rounded-xl shadow"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full mr-4"
            />

            <div className="flex-1">
              <h2 className="text-lg font-bold">{user.login}</h2>
              <p className="text-sm text-gray-600">
                Score: {user.score.toFixed(2)}
              </p>
              <a
                href={user.html_url}
                target="_blank"
                className="text-blue-600 underline"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {results.length < totalCount && (
        <div className="text-center mt-6">
          <button
            onClick={loadMore}
            className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-black transition"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Search;

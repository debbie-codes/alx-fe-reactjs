import React from "react";
import { FaGithub } from "react-icons/fa"; // GitHub icon

const WelcomeMessage = ({ username }) => {
  return (
    <div style={styles.container}>
      <FaGithub style={styles.icon} />
      <h1 style={styles.heading}>Welcome to GitHub User Search!</h1>
      <p style={styles.subheading}>
        {username
          ? `Hello, ${username}! Start searching for GitHub users below.`
          : "Search for GitHub users and explore their profiles."}
      </p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    margin: "2rem auto",
    padding: "2rem",
    maxWidth: "600px",
    backgroundColor: "#f0f0f0",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  icon: {
    fontSize: "3rem",
    color: "#24292f",
    marginBottom: "1rem",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "0.5rem",
    color: "#24292f",
  },
  subheading: {
    fontSize: "1.2rem",
    color: "#555",
  },
};

export default WelcomeMessage;

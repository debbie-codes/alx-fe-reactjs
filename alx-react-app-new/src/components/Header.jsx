import React from "react";

const Header = () => {
  return (
    <header
      style={{
        backgroundColor: 'navy',
        color: 'white',
        textAlign: 'center',
        padding: '20px',
        borderBottom: '5px solid #0b3d91'
      }}
    >
      <h1 style={{ fontSize: '28px', margin: '0' }}>My Favorite Cities</h1>
    </header>
  );
};

export default Header;


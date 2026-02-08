import React from "react";

function Navbar({ search, setSearch, onLogout }) {
  return (
    <div className="navbar">

      {/* Left */}
      <div className="nav-left">
        <span className="logo">📇</span>
        <h2>ContactManager</h2>
      </div>

      {/* Right */}
      <div className="nav-right">

        {/* Search */}
        <input
          className="nav-search"
          placeholder="Search contacts..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        {/* Logout */}
        
        <button
  className="theme-btn"
  onClick={onLogout}
>
  Logout
</button>


      </div>

    </div>
  );
}

export default Navbar;

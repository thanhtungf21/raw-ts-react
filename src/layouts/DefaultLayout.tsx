import React from "react";
import { Outlet } from "react-router";

const DefaultLayout: React.FC = () => {
  return (
    <div className="default-layout">
      <header className="header">
        <nav className="navbar">
          <div className="logo">My App</div>
          <ul className="menu">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main-content">
        <Outlet />
      </main>
      <footer className="footer">
        <p>&copy; 2025 My App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default DefaultLayout;

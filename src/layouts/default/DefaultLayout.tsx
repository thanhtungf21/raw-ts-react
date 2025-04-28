import React from "react";
import { Link, Outlet } from "react-router";
import Footer from "@/components/footer/Footer";

const DefaultLayout: React.FC = () => {
  return (
    <div className="default-layout">
      <header className="header">
        <nav className="navbar">
          <div className="logo">My App</div>
          <ul className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;

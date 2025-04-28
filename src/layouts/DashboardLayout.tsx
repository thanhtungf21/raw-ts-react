import React, { useState } from "react";
import { Outlet, Link } from "react-router";

const DashboardLayout: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="dashboard-layout">
      <aside className={`sidebar ${sidebarCollapsed ? "collapsed" : ""}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">My App</div>
          <button className="sidebar-toggle" onClick={toggleSidebar}>
            {sidebarCollapsed ? "→" : "←"}
          </button>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li>
              <Link to="/dashboard">
                <span className="icon">📊</span>
                {!sidebarCollapsed && <span className="text">Dashboard</span>}
              </Link>
            </li>
            <li>
              <Link to="/dashboard/profile">
                <span className="icon">👤</span>
                {!sidebarCollapsed && <span className="text">Profile</span>}
              </Link>
            </li>
            <li>
              <Link to="/dashboard/settings">
                <span className="icon">⚙️</span>
                {!sidebarCollapsed && <span className="text">Settings</span>}
              </Link>
            </li>
            <li>
              <Link to="/">
                <span className="icon">🚪</span>
                {!sidebarCollapsed && <span className="text">Logout</span>}
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <div className="dashboard-content">
        <header className="dashboard-header">
          <div className="dashboard-title">Dashboard</div>
          <div className="dashboard-user">
            <span className="user-name">John Doe</span>
            <div className="user-avatar">JD</div>
          </div>
        </header>
        <main className="dashboard-main">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

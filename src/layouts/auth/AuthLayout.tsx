import React from "react";
import { Outlet } from "react-router";

const AuthLayout: React.FC = () => {
  return (
    <div className="auth-layout">
      <div className="auth-container">
        <div className="auth-box">
          <div className="auth-logo">My App</div>
          <Outlet />
        </div>
        <div className="auth-background">
          {/* Background image or illustration */}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;

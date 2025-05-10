import React from "react";
import { Outlet } from "react-router";
import styles from "../index.module.scss";
import clsx from "clsx";
const AuthLayout: React.FC = () => {
  return (
    <div className={clsx(styles.auth_layout)}>
      <div className="auth-container">
        <div className="auth-box">
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

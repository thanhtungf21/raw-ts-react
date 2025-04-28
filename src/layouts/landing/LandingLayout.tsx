import React from "react";
import { Outlet } from "react-router";
import styles from "../index.module.scss";
import clsx from "clsx";

const LandingLayout: React.FC = () => {
  return (
    <main className={clsx(styles.landing_page)}>
      <Outlet />
    </main>
  );
};

export default LandingLayout;

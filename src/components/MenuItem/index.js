import { NavLink, useLocation } from "react-router-dom";
import styles from "./MenuItem.module.css";

const MenuItem = ({ to, children }) => {
  const localization = useLocation();
  return (
    <NavLink
      className={({ isActive }) => {
        return `${styles.link} ${isActive ? styles.linkDestacado : ""}`;
      }}
      to={to}
    >
      {children}
    </NavLink>
  );
};

export default MenuItem;

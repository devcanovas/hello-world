import { Link, useLocation } from "react-router-dom";
import styles from "./MenuItem.module.css";

const MenuItem = ({ to, children }) => {
  const localization = useLocation();
  return (
    <Link
      className={`
        ${styles.link}
        ${localization.pathname === to ? styles.linkDestacado : ""}
    `}
      to={to}
    >
      {children}
    </Link>
  );
};

export default MenuItem;

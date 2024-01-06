import styles from "./Menu.module.css";
import MenuItem from "../MenuItem";

const Menu = () => {

  return (
    <header>
      <nav className={styles.navegacao}>
        <MenuItem to="/">
            Inicio
        </MenuItem>
        <MenuItem to="/sobremim">
            Sobremim
        </MenuItem>
      </nav>
    </header>
  );
};

export default Menu;

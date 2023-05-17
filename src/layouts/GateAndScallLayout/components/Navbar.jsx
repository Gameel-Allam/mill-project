import { useNavigate } from "react-router-dom";
import styles from "./navbar.module.scss";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";

const Navbar = () => {
  const navigate = useNavigate();
  const handleExit = () => {
    navigate("/");
  };
  return (
    <nav className={styles.my_nav}>
      <div className={styles.user}>
        <PersonIcon fontSize="large" />
      </div>
      <p onClick={handleExit}>
        تسجيل الخروج
        <span>
          <LogoutIcon />
        </span>
      </p>
    </nav>
  );
};

export default Navbar;

import { NavLink, useNavigate } from "react-router-dom";
import styles from "./sidbar.module.scss";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import Battery20Icon from "@mui/icons-material/Battery20";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import CarRepairIcon from "@mui/icons-material/CarRepair";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import GavelIcon from "@mui/icons-material/Gavel";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";

const Sidbar = () => {
  const navigate = useNavigate();
  const handleExit = () => {
    navigate("/");
  };
  return (
    <nav className={styles.mySidebar}>
      <section>
        <p>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending || isActive ? styles.active : ""
            }
            to=""
            end
          >
            المراحعة الرئيسية
          </NavLink>
        </p>
      </section>
      <section>
        <p>اضافة برنامج</p>
        <ul>
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending || isActive ? styles.active : ""
              }
              to="program/sessions"
            >
              <div className={styles.sidebarIcon}>
                <GavelIcon fontSize="large" />
              </div>
              مطاحن و جلسات
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending || isActive ? styles.active : ""
              }
              to="program/centers"
            >
              <div className={styles.sidebarIcon}>
                <AccountTreeIcon fontSize="large" />
              </div>
              مراكز تجميع
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending || isActive ? styles.active : ""
              }
              to="program/hanager"
            >
              <div className={styles.sidebarIcon}>
                <WarehouseIcon fontSize="large" />
              </div>
              هناجر
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending || isActive ? styles.active : ""
              }
              to="program/wheat"
            >
              <div className={styles.sidebarIcon}>
                <CarRepairIcon fontSize="large" />
              </div>
              القمح الوارد المستورد
            </NavLink>
          </li>
        </ul>
      </section>
      <section>
        <p>معلومات</p>
        <ul>
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending || isActive ? styles.active : ""
              }
              to="info/reports"
            >
              <div className={styles.sidebarIcon}>
                <QueryStatsIcon fontSize="large" />
              </div>
              التقارير
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending || isActive ? styles.active : ""
              }
              to="info/mills"
            >
              <div className={styles.sidebarIcon}>
                <LocalFloristIcon fontSize="large" />
              </div>
              مطاحن
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending || isActive ? styles.active : ""
              }
              to="info/cells"
            >
              <div className={styles.sidebarIcon}>
                <Battery20Icon fontSize="large" />
              </div>
              خلايا
            </NavLink>
          </li>
        </ul>
      </section>
      <section className={styles.userInfo}>
        <div className={styles.user}>
          <PersonIcon fontSize="large" />
        </div>
        <span>
          احمد طه
          <br />
          ahmed5545
        </span>
        <span onClick={handleExit}>
          تسجيل الخروج
          <span>
            <LogoutIcon />
          </span>
        </span>
      </section>
    </nav>
  );
};

export default Sidbar;

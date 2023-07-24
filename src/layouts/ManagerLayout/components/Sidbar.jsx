import { NavLink, useNavigate } from "react-router-dom";
import styles from "./sidbar.module.scss";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import TransferWithinAStationIcon from "@mui/icons-material/TransferWithinAStation";
import Battery20Icon from "@mui/icons-material/Battery20";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import GavelIcon from "@mui/icons-material/Gavel";
import CarRepairIcon from "@mui/icons-material/CarRepair";

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
        <p>حركة الصومعة</p>
        <ul>
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
              الخلايا
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending || isActive ? styles.active : ""
              }
              to="info/visits"
            >
              <div className={styles.sidebarIcon}>
                <TransferWithinAStationIcon fontSize="large" />
              </div>
              الزيارات
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
        </ul>
      </section>
      <section>
        <p>البرامج</p>
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
              القمح المحلى
            </NavLink>
          </li>
        </ul>
      </section>
      <section>
        <p>المستخدمين</p>
        <ul>
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending || isActive ? styles.active : ""
              }
              to="users"
            >
              <div className={styles.sidebarIcon}>
                <PersonIcon fontSize="large" />
              </div>
              تقاصيل المستخدمين
            </NavLink>
          </li>
        </ul>
      </section>
      <section className={styles.userInfo}>
        <div className={styles.user}>
          <PersonIcon fontSize="inherit" />
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

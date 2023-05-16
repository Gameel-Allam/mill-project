import { NavLink, useNavigate } from "react-router-dom";
import styles from "./sidbar.module.scss";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import Groups3Icon from "@mui/icons-material/Groups3";
import TransferWithinAStationIcon from "@mui/icons-material/TransferWithinAStation";
import Battery20Icon from "@mui/icons-material/Battery20";
import DirectionsBoatFilledIcon from "@mui/icons-material/DirectionsBoatFilled";
import WarehouseIcon from "@mui/icons-material/Warehouse";
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
              to="info/sessions"
            >
              <div className={styles.sidebarIcon}>
                <Groups3Icon fontSize="large" />
              </div>
              جلسات
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
                <WarehouseIcon fontSize="large" />
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
              to="program/wheat"
            >
              <div className={styles.sidebarIcon}>
                <DirectionsBoatFilledIcon fontSize="large" />
              </div>
              برنامج القمح المتسورد
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending || isActive ? styles.active : ""
              }
              to="program/mills"
            >
              <div className={styles.sidebarIcon}>
                <CarRepairIcon fontSize="large" />
              </div>
              برنامج صرف المطاحن
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
        <p>
          احمد طه
          <br />
          ahmed5545
        </p>
        <p onClick={handleExit}>
          تسجيل الخروج
          <span>
            <LogoutIcon />
          </span>
        </p>
      </section>
    </nav>
  );
};

export default Sidbar;

import { NavLink } from "react-router-dom";
import styles from "./sidbar.module.scss";

const Sidbar = () => {
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
              برنامج صرف المطاحن{" "}
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
              تقاصيل المستخدمين
            </NavLink>
          </li>
        </ul>
      </section>
    </nav>
  );
};

export default Sidbar;

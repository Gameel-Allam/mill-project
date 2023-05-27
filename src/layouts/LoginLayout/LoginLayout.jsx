import styles from "./login-layout.module.scss";
import { Outlet } from "react-router-dom";

const LoginLayout = () => {
  return (
    <main className={styles.main}>
      <img src="/src/assets/compony-logo.png" alt="Componey logo" />
      <section className={styles.rightSection}>
        <img src="/src/assets/egyptLogo.png" alt="government logo"></img>
        <p>
          الشركة القابضة للصوامع
          <br />
          صوامع منو
          <span>ف</span>
        </p>
      </section>
      <Outlet />
    </main>
  );
};

export default LoginLayout;

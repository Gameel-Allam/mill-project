import styles from "./login-layout.module.scss";

const LoginLayout = () => {
  return (
    <main className={styles.main}>
      <section className={styles.leftSection}>Login</section>
      <section className={styles.rightSection}>
        <p>الشركة القابضة للصوامع صوامع منوف</p>
      </section>
    </main>
  );
};

export default LoginLayout;

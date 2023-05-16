import styles from "./login-layout.module.scss";
import { Outlet } from "react-router-dom";

const LoginLayout = () => {
  return (
    <main className={styles.main}>
      <section className={styles.rightSection}>
        <img
          src="https://s3-alpha-sig.figma.com/img/4e68/8d50/2fc7faf47c4bbd71c62c3a9b79f34710?Expires=1684713600&Signature=iXQGmwWdm7q~9w-EsjEZnCF5xKunP6QXp2Jsm9qVD0lVg5IFL8G0yEYpqyc~MUayfIq468ESPtVF9LBz9yZsmldQqlnyPYayXd220d7P3ijCxjsFeOcrPclgoejNLzKf6cqAzU42eSRDCLfqTYyGzWzPV5kMIBbWdd-YZ5Y0pu-tG95k1e-zbhYlrl1wCmJnIQH10MxRtcrGD4VUwo8DZK~BMDfESGd8h4MRgqNg-JpZznd2v5L3TwiY1Gzx~e65nEZH1SW~EkPja~f0LeRCJ04UpTmXQwWHuViBqFQhdrI5NtsEhIfh2QocKIgh-bQ7GjFpOVY1R3XO7W9B9pKRHg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="government logo"
        ></img>
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

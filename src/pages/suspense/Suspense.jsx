import { HashLoader } from "react-spinners";
import styles from "./suspense.module.scss";

const Suspense = () => {
  return (
    <main className={`container ${styles.spanner}`}>
      <HashLoader
        color="#36d7b7"
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </main>
  );
};

export default Suspense;

import { Link } from "react-router-dom";
import styles from "./subscribeSection.module.scss";

const SubscribeSection = () => {
  return (
    <section className={styles.subscribeSection}>
      <div className={styles.contetWrapper}>
        <h1>How can we help you?</h1>
        <p>
          Whether it be to add to your collection, that first special wristwatch
          or the restoration of a much loved heirloom we are here to help.
        </p>
        <Link>GET IN TOUCH</Link>
      </div>
      <div className={styles.subscibeFormWrapper}>
        <form action="">
            <input type="text" placeholder="Enter your email"/>
            <button>SUBSCRIBE NEWSLETTER</button>
        </form>
      </div>
    </section>
  );
};

export default SubscribeSection;

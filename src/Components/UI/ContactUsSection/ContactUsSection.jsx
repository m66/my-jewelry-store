import { Link } from "react-router-dom";
import styles from "./contactUsSection.module.scss";

const ContactUsSection = () => {
  return (
    <section className={styles.contactUsSection}>
      <div className={styles.imgWrapper}>
        <img
          src="https://custom-made.axiomthemes.com/wp-content/uploads/2016/10/image-17-200x200.jpg"
          alt=""
        />
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.secondaryText}>
          Bringing forward a collection with an aesthetic appeal for a broad
          market while ensuring exceptional results is a challenge for any
          organization. Riva Precision provides a systematic approach to
          creating timeless designs that are consistently reproduced through the
          company’s in-house capabilities.
        </div>
        <div className={styles.primaryText}>
            <p>OVER TWO DECADES OF PRECISION JEWELRY MANUFACTURING UNDER ONE ROOF…</p>
            <img src="https://custom-made.axiomthemes.com/wp-content/uploads/2016/10/signature.png" alt="" />
        </div>
        <div className={styles.secondaryText}>
          This is only the beginning of what makes Riva the right choice—the
          trusted choice—as a business partner. The world’s leading jewelry
          retailers have worked with Riva Precision for over two decades because
          they demand the exceptional results that only a global leader in
          jewelry manufacturing can provide.
        </div>
      </div>
      <div className={styles.btnWrapper}>
        <Link>CONTACT US</Link>
      </div>
    </section>
  );
};

export default ContactUsSection;

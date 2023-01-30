import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";

import styles from "./footer.module.scss";

const Footer = () => {
  const locationIcon = <FontAwesomeIcon icon={faLocationDot} />;
  const envelopeIcon = <FontAwesomeIcon icon={faEnvelope} />;

  return (
    <footer className={styles.footer}>
      <div className={styles.widgetArea}>
        <div className={styles.widgetAreaContent}>
          <div className={styles.locationDataWrapper}>
            <div className={styles.locationLogoWrapper}>
              <div className={styles.locIcon}>{locationIcon}</div>
              <div>ADDRESS</div>
            </div>
            <div className={styles.locationBody}>
              <p>5 South Wabash Suite 614 Chicago,</p>
              <p>IL 60603</p>
            </div>
          </div>
          <div className={styles.logoWrapper}>
            <img
              src="https://custom-made.axiomthemes.com/wp-content/uploads/2016/10/logo_footer.png"
              alt=""
            />
            <p>We have a long history of making exceptional jewelry for</p>
            <p>our clients to help them grow their businesses.</p>
          </div>
          <div className={styles.locationDataWrapper}>
            <div className={styles.locationLogoWrapper}>
              <div className={styles.locIcon}>{envelopeIcon}</div>
              <div>PHONE & EMAIL</div>
            </div>
            <div className={styles.locationBody}>
              <p>kar.manasyan98@gmail.com</p>
              <p>(+374)-77-662-608</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyrightWrap}>
        <span>AxiomThemes © 2022.</span> All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

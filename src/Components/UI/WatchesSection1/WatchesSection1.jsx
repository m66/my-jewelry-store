import { Link } from "react-router-dom";

import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 

import styles from "./watchesSection1.module.scss";

const WatchesSection1 = () => {
  const rightArrow = <FontAwesomeIcon icon={faArrowRightLong} />;

  return (
    <section className={`product-section ${styles.watchesSection}`}>
      <div className="product-section-item">
        <div className={styles.watchesSectionWrapper}>
          <div className={styles.productWrapper1}>
            <img
              src="https://custom-made.axiomthemes.com/wp-content/uploads/2016/10/product-3.jpg"
              alt=""
            />
            <div className={styles.contentWrapper}>
              <div className={styles.line}></div>
              <h2>OMEGA</h2>
              <p>CENTENARY CHRONOMETER</p>
            </div>
          </div>
          <div className={styles.productWrapper2}>
            <div className={styles.contentWrapper}>
              <div className={styles.line}></div>
              <h2>ROLEX</h2>
              <p>CHRONOMETER WRISTWATCH</p>
            </div>
            <img
              src="https://custom-made.axiomthemes.com/wp-content/uploads/2016/10/product-4.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="product-section-item">
        <div className="right-part-content-wrapper">
          <div className="right-part-content-caption">
            <h1>3</h1>
            <h2>Watch Collections For the best men's watches</h2>
          </div>
          <div className={styles.textContent}>
            <p>
              Bringing forward a collection with an aesthetic appeal for a broad
              market while ensuring exceptional results is a challenge for any
              organization. Riva Precision provides a systematic approach to
              creating timeless designs that are consistently reproduced through
              the company’s in-house capabilities.
            </p>
          </div>
          <div className={styles.linkWrapper}>
            <Link>VIEW CATALOGUE {rightArrow}</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WatchesSection1;
